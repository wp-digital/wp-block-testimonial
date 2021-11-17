import { useBlockProps, RichText } from '@wordpress/block-editor';

import { BLOCK_CLASS_NAME, LAYOUT_DEFAULT, Layout, HAS_AUTHOR_INFO_DEFAULT, AUTHOR_IMAGE_SIZE_DEFAULT } from './constants';

export default function save({ attributes }) {
	const {
		text,
		authorName,
		authorInfo,
		authorImage,
		authorImageSize = AUTHOR_IMAGE_SIZE_DEFAULT,
		layout = LAYOUT_DEFAULT,
		hasAuthorInfo = HAS_AUTHOR_INFO_DEFAULT,
	} = attributes;

	const testimonialText = () => (
		<RichText.Content
			tagName="div"
			multiline="p"
			value={text}
			className={`${BLOCK_CLASS_NAME}__text`}
		/>
	);

	return (
		<blockquote
			{...useBlockProps.save({
				className: BLOCK_CLASS_NAME,
			})}
		>
			{layout && layout === Layout.AUTHOR_BOTTOM && testimonialText()}
			<div className={`${BLOCK_CLASS_NAME}__author`}>
				{authorImage && (
					<img
						className={`${BLOCK_CLASS_NAME}__author-image`}
						src={authorImage.sizes[authorImageSize].url}
						width={authorImage.sizes[authorImageSize].width}
						height={authorImage.sizes[authorImageSize].height}
						alt={authorImage.alt}
					/>
				)}
				<div className={`${BLOCK_CLASS_NAME}__author-main`}>
					<RichText.Content
						tagName="cite"
						value={authorName}
						className={`${BLOCK_CLASS_NAME}__author-name`}
					/>
					{hasAuthorInfo && (
						<RichText.Content
							tagName="div"
							multiline="p"
							value={authorInfo}
							className={`${BLOCK_CLASS_NAME}__author-info`}
						/>
					)}
				</div>
			</div>
			{layout && layout === Layout.AUTHOR_TOP && testimonialText()}
		</blockquote>
	);
}
