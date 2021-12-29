import { has } from 'lodash';

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	Button,
	ToggleControl,
	ResponsiveWrapper,
	Spinner,
} from '@wordpress/components';

import {
	BLOCK_CLASS_NAME,
	AUTHOR_IMAGE_ALLOWED_TYPES,
	AUTHOR_IMAGE_DEFAULT,
	AUTHOR_IMAGE_SIZE,
	HAS_AUTHOR_INFO_DEFAULT,
	LAYOUT_AUTHOR_TOP,
	LAYOUT_AUTHOR_BOTTOM,
	LAYOUT_DEFAULT,
} from './constants';

import './editor.scss';

const TestimonialText = ({ value, onChange }) => (
	<RichText
		tagName="blockquote"
		multiline="p"
		value={value}
		placeholder={__('Text', 'innocode-block-testimonial')}
		onChange={onChange}
		className={`${BLOCK_CLASS_NAME}__text`}
	/>
);

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		text,
		authorName,
		attachmentId,
		authorImageSrc = AUTHOR_IMAGE_DEFAULT.src,
		authorImageWidth = AUTHOR_IMAGE_DEFAULT.width,
		authorImageHeight = AUTHOR_IMAGE_DEFAULT.height,
		authorImageAlt = AUTHOR_IMAGE_DEFAULT.alt,
		hasAuthorInfo = HAS_AUTHOR_INFO_DEFAULT,
		authorInfo,
		layout = LAYOUT_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onTextChange = (value) => onChange('text', value);
	const onAuthorNameChange = (value) => onChange('authorName', value);
	const onAuthorImageSelect = (media) => {
		const newAttributes = {
			attachmentId: media.id,
			authorImageAlt: media.alt || media.filename,
		};

		if (has(media, ['sizes', AUTHOR_IMAGE_SIZE])) {
			newAttributes.authorImageSrc = media.sizes[AUTHOR_IMAGE_SIZE].url;
			newAttributes.authorImageWidth =
				media.sizes[AUTHOR_IMAGE_SIZE].width;
			newAttributes.authorImageHeight =
				media.sizes[AUTHOR_IMAGE_SIZE].height;
		} else {
			newAttributes.authorImageSrc = media.url;
			newAttributes.authorImageWidth = media.width;
			newAttributes.authorImageHeight = media.height;
		}

		setAttributes(newAttributes);
	};
	const onAuthorImageRemove = () => {
		setAttributes({
			attachmentId: 0,
			authorImageSrc: AUTHOR_IMAGE_DEFAULT.src,
			authorImageWidth: AUTHOR_IMAGE_DEFAULT.width,
			authorImageHeight: AUTHOR_IMAGE_DEFAULT.height,
			authorImageAlt: AUTHOR_IMAGE_DEFAULT.alt,
		});
	};
	const onHasAuthorInfoChange = () =>
		onChange('hasAuthorInfo', !hasAuthorInfo);
	const onAuthorInfoChange = (value) => onChange('authorInfo', value);
	const onLayoutChange = (value) => onChange('layout', value);

	return (
		<figure
			{...useBlockProps({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<InspectorControls>
				<PanelBody
					title={__('Author Image', 'innocode-block-testimonial')}
					initialOpen
				>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={AUTHOR_IMAGE_ALLOWED_TYPES}
								value={attachmentId}
								onSelect={onAuthorImageSelect}
								modalClass="editor-post-featured-image__media-modal"
								render={({ open }) => (
									<div className="editor-post-featured-image__container">
										<Button
											onClick={open}
											className={
												attachmentId
													? 'editor-post-featured-image__preview'
													: 'editor-post-featured-image__toggle'
											}
										>
											{!!attachmentId &&
												!!authorImageSrc && (
													<ResponsiveWrapper
														naturalWidth={parseFloat(
															authorImageWidth
														)}
														naturalHeight={parseFloat(
															authorImageHeight
														)}
														isInline
													>
														<img
															src={authorImageSrc}
															width={
																authorImageWidth
															}
															height={
																authorImageHeight
															}
															alt={authorImageAlt}
														/>
													</ResponsiveWrapper>
												)}
											{!!attachmentId &&
												!authorImageSrc && <Spinner />}
											{!attachmentId &&
												__(
													'Choose an image',
													'innocode-block-testimonial'
												)}
										</Button>
									</div>
								)}
							/>
						</MediaUploadCheck>
						{!!attachmentId && !!authorImageSrc && (
							<MediaUploadCheck>
								<MediaUpload
									allowedTypes={AUTHOR_IMAGE_ALLOWED_TYPES}
									onSelect={onAuthorImageSelect}
									modalClass="editor-post-featured-image__media-modal"
									render={({ open }) => (
										<Button onClick={open} isSecondary>
											{__(
												'Replace Author Image',
												'innocode-block-testimonial'
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						)}
						{!!attachmentId && (
							<MediaUploadCheck>
								<Button
									onClick={onAuthorImageRemove}
									isLink
									isDestructive
								>
									{__(
										'Remove Author Image',
										'innocode-block-testimonial'
									)}
								</Button>
							</MediaUploadCheck>
						)}
					</div>
				</PanelBody>
				<PanelBody
					title={__('Author settings', 'innocode-block-testimonial')}
					initialOpen={false}
				>
					<PanelRow>
						<ToggleControl
							label={__(
								'Show additional info',
								'innocode-block-testimonial'
							)}
							checked={hasAuthorInfo}
							onChange={onHasAuthorInfoChange}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={__('Layout', 'innocode-block-testimonial')}
							selected={layout}
							options={[
								{
									label: __(
										'Before text',
										'innocode-block-testimonial'
									),
									value: LAYOUT_AUTHOR_TOP,
								},
								{
									label: __(
										'After text',
										'innocode-block-testimonial'
									),
									value: LAYOUT_AUTHOR_BOTTOM,
								},
							]}
							onChange={onLayoutChange}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			{layout === LAYOUT_AUTHOR_BOTTOM && (
				<TestimonialText value={text} onChange={onTextChange} />
			)}
			<figcaption className={`${BLOCK_CLASS_NAME}-author`}>
				{!!attachmentId && (
					<div className={`${BLOCK_CLASS_NAME}-author__image`}>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={AUTHOR_IMAGE_ALLOWED_TYPES}
								value={attachmentId}
								onSelect={onAuthorImageSelect}
								modalClass="editor-post-featured-image__media-modal"
								render={({ open }) => (
									<Button
										onClick={open}
										className="editor-post-featured-image__preview"
									>
										{!!authorImageSrc && (
											<img
												src={authorImageSrc}
												width={authorImageWidth}
												height={authorImageHeight}
												alt={authorImageAlt}
											/>
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						<MediaUploadCheck>
							<Button
								onClick={onAuthorImageRemove}
								icon="dismiss"
								title={__(
									'Remove Author Image',
									'innocode-block-testimonial'
								)}
								aria-label={__(
									'Remove Author Image',
									'innocode-block-testimonial'
								)}
								className={`${BLOCK_CLASS_NAME}-author__remove-image`}
							/>
						</MediaUploadCheck>
					</div>
				)}
				{!attachmentId && !!authorImageSrc && (
					<div className={`${BLOCK_CLASS_NAME}-author__image`}>
						<img
							src={authorImageSrc}
							width={authorImageWidth}
							height={authorImageHeight}
							alt={authorImageAlt}
						/>
					</div>
				)}
				<div className={`${BLOCK_CLASS_NAME}-author__main`}>
					<RichText
						tagName="span"
						allowedFormats={['core/link']}
						value={authorName}
						placeholder={__(
							'Author name',
							'innocode-block-testimonial'
						)}
						onChange={onAuthorNameChange}
						className={`${BLOCK_CLASS_NAME}-author__name`}
					/>
					{hasAuthorInfo && (
						<RichText
							tagName="div"
							multiline="p"
							allowedFormats={['core/link']}
							value={authorInfo}
							placeholder={__(
								'Author additional info',
								'innocode-block-testimonial'
							)}
							onChange={onAuthorInfoChange}
							className={`${BLOCK_CLASS_NAME}-author__info`}
						/>
					)}
				</div>
			</figcaption>
			{layout === LAYOUT_AUTHOR_TOP && (
				<TestimonialText value={text} onChange={onTextChange} />
			)}
		</figure>
	);
}
