import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';

import Edit from './edit';
import save from './save';
import icon from './icon';

import { LAYOUT_DEFAULT } from './constants';

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
		mediaId: {
			type: 'number',
			default: 0,
		},
		mediaUrl: {
			type: 'string',
			default: '',
		},
		layout: {
			type: 'string',
			default: LAYOUT_DEFAULT,
		},
	},
	edit: withSelect((select, props) => {
		return {
			media: props.attributes.mediaId
				? select('core').getMedia(props.attributes.mediaId)
				: undefined,
		};
	})(Edit),
	save,
	icon,
});
