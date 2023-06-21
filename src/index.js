import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

import authorImage from './example.jpeg';

registerBlockType('wpd/block-testimonial', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	edit: Edit,
	save,
	icon,
	example: {
		attributes: {
			text: sprintf(
				'<p>%s</p>',
				__(
					'If you can’t explain it simply, you don’t understand it well enough.',
					'wpd-blocks'
				)
			),
			authorName: __('Albert Einstein', 'wpd-blocks'),
			authorInfo: sprintf(
				'<p>%s</p>',
				__('Theoretical physicist', 'wpd-blocks')
			),
			authorImageSrc: authorImage,
			authorImageWidth: 150,
			authorImageHeight: 150,
			authorImageAlt: __('Albert Einstein', 'wpd-blocks'),
		},
	},
});
