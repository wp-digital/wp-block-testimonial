import {
	LAYOUT_DEFAULT,
	HAS_AUTHOR_INFO_DEFAULT,
	AUTHOR_IMAGE_SIZE_DEFAULT,
} from './constants';

export default {
	text: {
		type: 'string',
		default: '',
	},
	authorName: {
		type: 'string',
		default: '',
	},
	authorInfo: {
		type: 'string',
		default: '',
	},
	layout: {
		type: 'string',
		default: LAYOUT_DEFAULT,
	},
	hasAuthorInfo: {
		type: 'boolean',
		default: HAS_AUTHOR_INFO_DEFAULT,
	},
	authorImage: {
		type: 'object',
	},
	authorImageSize: {
		type: 'string',
		default: AUTHOR_IMAGE_SIZE_DEFAULT,
	},
};
