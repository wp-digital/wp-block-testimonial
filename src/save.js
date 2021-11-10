import { useBlockProps, RichText } from '@wordpress/block-editor';

import { BLOCK_CLASS_NAME, LAYOUT_DEFAULT, Layout } from './constants';

export default function save({ attributes }) {
	const {
		text,
		authorName,
		authorInfo,
		mediaUrl,
		layout = LAYOUT_DEFAULT,
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
				{mediaUrl && (
					<img
						className={`${BLOCK_CLASS_NAME}__author-image`}
						src={mediaUrl}
						alt={authorName}
					/>
				)}
				<div className={`${BLOCK_CLASS_NAME}__author-main`}>
					<RichText.Content
						tagName="cite"
						value={authorName}
						className={`${BLOCK_CLASS_NAME}__author-name`}
					/>
					<RichText.Content
						tagName="div"
						multiline="p"
						value={authorInfo}
						className={`${BLOCK_CLASS_NAME}__author-info`}
					/>
				</div>
			</div>
			{layout && layout === Layout.AUTHOR_TOP && testimonialText()}
		</blockquote>
	);
}
