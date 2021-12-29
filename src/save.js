import { useBlockProps, RichText } from '@wordpress/block-editor';

import {
	BLOCK_CLASS_NAME,
	AUTHOR_IMAGE_DEFAULT,
	HAS_AUTHOR_INFO_DEFAULT,
	LAYOUT_AUTHOR_TOP,
	LAYOUT_AUTHOR_BOTTOM,
	LAYOUT_DEFAULT,
} from './constants';

const TestimonialText = ({ value }) => (
	<RichText.Content
		tagName="blockquote"
		multiline="p"
		value={value}
		className={`${BLOCK_CLASS_NAME}__text`}
	/>
);

export default function save({ attributes }) {
	const {
		text,
		authorName,
		authorImageSrc = AUTHOR_IMAGE_DEFAULT.src,
		authorImageWidth = AUTHOR_IMAGE_DEFAULT.width,
		authorImageHeight = AUTHOR_IMAGE_DEFAULT.height,
		authorImageAlt = AUTHOR_IMAGE_DEFAULT.alt,
		hasAuthorInfo = HAS_AUTHOR_INFO_DEFAULT,
		authorInfo,
		layout = LAYOUT_DEFAULT,
	} = attributes;

	return (
		<figure
			{...useBlockProps.save({
				className: BLOCK_CLASS_NAME,
			})}
		>
			{layout === LAYOUT_AUTHOR_BOTTOM && (
				<TestimonialText value={text} />
			)}
			<figcaption className={`${BLOCK_CLASS_NAME}-author`}>
				{!!authorImageSrc && (
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
					<RichText.Content
						tagName="span"
						value={authorName}
						className={`${BLOCK_CLASS_NAME}-author__name`}
					/>
					{hasAuthorInfo && (
						<RichText.Content
							tagName="div"
							multiline="p"
							value={authorInfo}
							className={`${BLOCK_CLASS_NAME}-author__info`}
						/>
					)}
				</div>
			</figcaption>
			{layout === LAYOUT_AUTHOR_TOP && <TestimonialText value={text} />}
		</figure>
	);
}
