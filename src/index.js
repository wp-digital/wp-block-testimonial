import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import icon from './icon';

import {
	LAYOUT_DEFAULT,
	HAS_AUTHOR_INFO_DEFAULT,
	AUTHOR_IMAGE_SIZE_DEFAULT,
} from './constants';

import './style.scss';

registerBlockType('innocode/wp-block-testimonial', {
	attributes: {
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
	},
	edit: Edit,
	save,
	icon,
});
