import {
	BLOCK_CLASS_NAME,
	AUTHOR_IMAGE_DEFAULT,
	HAS_AUTHOR_INFO_DEFAULT,
	LAYOUT_TEXT_TOP,
	LAYOUT_TEXT_BOTTOM,
	LAYOUT_TEXT_RIGHT,
	LAYOUT_DEFAULT,
} from './constants';

export default {
	text: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__text`,
	},
	authorName: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}-author__name`,
	},
	attachmentId: {
		type: 'integer',
		default: 0,
	},
	authorImageSrc: {
		type: 'string',
		default: AUTHOR_IMAGE_DEFAULT.src,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}-author__image img`,
		attribute: 'src',
	},
	authorImageWidth: {
		type: 'string',
		default: AUTHOR_IMAGE_DEFAULT.width,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}-author__image img`,
		attribute: 'width',
	},
	authorImageHeight: {
		type: 'string',
		default: AUTHOR_IMAGE_DEFAULT.height,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}-author__image img`,
		attribute: 'height',
	},
	authorImageAlt: {
		type: 'string',
		default: AUTHOR_IMAGE_DEFAULT.alt,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}-author__image img`,
		attribute: 'alt',
	},
	hasAuthorInfo: {
		type: 'boolean',
		default: HAS_AUTHOR_INFO_DEFAULT,
	},
	authorInfo: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}-author__info`,
	},
	layout: {
		type: 'string',
		default: LAYOUT_DEFAULT,
		enum: [LAYOUT_TEXT_TOP, LAYOUT_TEXT_BOTTOM, LAYOUT_TEXT_RIGHT],
	},
};
