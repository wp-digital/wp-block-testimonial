import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	PlainText,
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	Button,
	FormToggle,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import {
	BLOCK_CLASS_NAME,
	LAYOUT_AUTHOR_TOP,
	LAYOUT_AUTHOR_BOTTOM,
	LAYOUT_DEFAULT,
	HAS_AUTHOR_INFO_DEFAULT,
	AUTHOR_IMAGE_SIZE_DEFAULT,
} from './constants';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const {
		text,
		authorName,
		authorInfo,
		authorImage,
		authorImageSize = AUTHOR_IMAGE_SIZE_DEFAULT,
		layout = LAYOUT_DEFAULT,
		hasAuthorInfo = HAS_AUTHOR_INFO_DEFAULT,
	} = attributes;

	const onSelectMedia = (media) => {
		setAttributes({
			authorImage: media,
		});
	};

	const removeMedia = () => {
		setAttributes({
			authorImage: null,
		});
	};

	const testimonialText = () => (
		<RichText
			tagName="div"
			multiline="p"
			value={text}
			placeholder={__('Testimonial text', 'innocode-block-testimonial')}
			onChange={(value) => {
				setAttributes({ text: value });
			}}
			keepPlaceholderOnFocus
			className={`${BLOCK_CLASS_NAME}__text`}
		/>
	);

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Author settings', 'innocode-block-testimonial')}
					initialOpen={true}
				>
					<PanelRow>
						<RadioControl
							label={__(
								'Author layout',
								'innocode-block-testimonial'
							)}
							selected={layout}
							options={[
								{
									label: __(
										'Bottom',
										'innocode-block-testimonial'
									),
									value: LAYOUT_AUTHOR_BOTTOM,
								},
								{
									label: __(
										'Top',
										'innocode-block-testimonial'
									),
									value: LAYOUT_AUTHOR_TOP,
								},
							]}
							onChange={(value) => {
								setAttributes({ layout: value });
							}}
						/>
					</PanelRow>
					<PanelRow>
						<legend className="blocks-base-control__label">
							{__(
								'Show additional info',
								'innocode-block-testimonial'
							)}
						</legend>
						<FormToggle
							checked={hasAuthorInfo}
							onChange={(event) => {
								setAttributes({
									hasAuthorInfo: event.target.checked,
								});
							}}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<blockquote
				{...useBlockProps({
					className: BLOCK_CLASS_NAME,
				})}
			>
				{layout && layout === LAYOUT_AUTHOR_BOTTOM && testimonialText()}
				<div className={`${BLOCK_CLASS_NAME}__author`}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectMedia}
							value={authorImage}
							allowedTypes={['image']}
							render={({ open }) => (
								<div className="editor-post-featured-image">
									<Button
										className={
											authorImage
												? 'editor-post-featured-image__preview'
												: 'editor-post-featured-image__toggle'
										}
										onClick={open}
									>
										{!authorImage &&
											__(
												'Choose an image',
												'innocode-block-testimonial'
											)}
										{authorImage && (
											<img
												className={`${BLOCK_CLASS_NAME}__author-image`}
												src={
													authorImage.sizes[
														authorImageSize
													].url
												}
												width={
													authorImage.sizes[
														authorImageSize
													].width
												}
												height={
													authorImage.sizes[
														authorImageSize
													].height
												}
												alt={authorImage.alt}
											/>
										)}
									</Button>
									{authorImage && (
										<Button
											className={`${BLOCK_CLASS_NAME}__author-image-delete`}
											onClick={removeMedia}
											icon="dismiss"
											aria-label={__(
												'Remove image',
												'innocode-block-testimonial'
											)}
										/>
									)}
								</div>
							)}
						/>
					</MediaUploadCheck>
					<div className={`${BLOCK_CLASS_NAME}__author-main`}>
						<PlainText
							tagName="cite"
							value={authorName}
							placeholder={__(
								'Author name',
								'innocode-block-testimonial'
							)}
							onChange={(value) => {
								setAttributes({ authorName: value });
							}}
							className={`${BLOCK_CLASS_NAME}__author-name`}
						/>
						{hasAuthorInfo && (
							<RichText
								tagName="div"
								multiline="p"
								value={authorInfo}
								placeholder={__(
									'Author additional info',
									'innocode-block-testimonial'
								)}
								onChange={(value) => {
									setAttributes({ authorInfo: value });
								}}
								keepPlaceholderOnFocus
								className={`${BLOCK_CLASS_NAME}__author-info`}
							/>
						)}
					</div>
				</div>
				{layout && layout === LAYOUT_AUTHOR_TOP && testimonialText()}
			</blockquote>
		</Fragment>
	);
}
