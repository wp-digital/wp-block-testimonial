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
	ResponsiveWrapper,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import { BLOCK_CLASS_NAME, LAYOUT_DEFAULT, Layout } from './constants';

import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes, media } = props;
	const {
		text,
		authorName,
		authorInfo,
		mediaId,
		mediaUrl,
		layout = LAYOUT_DEFAULT,
	} = attributes;

	const onSelectMedia = (mediaItem) => {
		setAttributes({
			mediaId: mediaItem.id,
			mediaUrl: mediaItem.url,
		});
	};

	const removeMedia = () => {
		setAttributes({
			mediaId: 0,
			mediaUrl: '',
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
					title={__('Author image', 'innocode-block-testimonial')}
					initialOpen={true}
				>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectMedia}
								value={mediaId}
								allowedTypes={['image']}
								render={({ open }) => (
									<Button
										className={
											mediaId === 0
												? 'editor-post-featured-image__toggle'
												: 'editor-post-featured-image__preview'
										}
										onClick={open}
									>
										{mediaId === 0 &&
											__(
												'Choose an image',
												'innocode-block-testimonial'
											)}
										{media !== undefined && (
											<ResponsiveWrapper
												naturalWidth={
													media.media_details.width
												}
												naturalHeight={
													media.media_details.height
												}
											>
												<img
													src={media.source_url}
													alt=""
												/>
											</ResponsiveWrapper>
										)}
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{mediaId !== 0 && (
							<MediaUploadCheck>
								<Button
									onClick={removeMedia}
									isLink
									isDestructive
								>
									{__(
										'Remove image',
										'innocode-block-testimonial'
									)}
								</Button>
							</MediaUploadCheck>
						)}
					</div>
				</PanelBody>
				<PanelBody
					title={__('Author layout', 'innocode-block-testimonial')}
					initialOpen={true}
				>
					<PanelRow>
						<RadioControl
							selected={layout}
							options={[
								{
									label: __(
										'Bottom',
										'innocode-block-testimonial'
									),
									value: Layout.AUTHOR_BOTTOM,
								},
								{
									label: __(
										'Top',
										'innocode-block-testimonial'
									),
									value: Layout.AUTHOR_TOP,
								},
							]}
							onChange={(value) => {
								setAttributes({ layout: value });
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
				{layout && layout === Layout.AUTHOR_BOTTOM && testimonialText()}
				<div className={`${BLOCK_CLASS_NAME}__author`}>
					{mediaUrl && (
						<img
							className={`${BLOCK_CLASS_NAME}__author-image`}
							src={mediaUrl}
							alt={authorName}
						/>
					)}
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
					</div>
				</div>
				{layout && layout === Layout.AUTHOR_TOP && testimonialText()}
			</blockquote>
		</Fragment>
	);
}
