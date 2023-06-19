import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'wpd-block-testimonial';

export const AUTHOR_IMAGE_ALLOWED_TYPES = applyFilters(
	'wpd.block-testimonial.author_image.allowed_types',
	['image']
);
export const AUTHOR_IMAGE_SIZE = applyFilters(
	'wpd.block-testimonial.author_image.size',
	'thumbnail'
);
export const AUTHOR_IMAGE_DEFAULT = applyFilters(
	'wpd.block-testimonial.author_image.default',
	{
		src: '',
		width: 'auto',
		height: 'auto',
		alt: '',
	}
);

export const HAS_AUTHOR_INFO_DEFAULT = applyFilters(
	'wpd.block-testimonial.has_author_info.default',
	true
);

export const LAYOUT_TEXT_TOP = 'text_top';
export const LAYOUT_TEXT_BOTTOM = 'text_bottom';
export const LAYOUT_TEXT_RIGHT = 'text_right';
export const LAYOUT_DEFAULT = applyFilters(
	'wpd.block-testimonial.layout.default',
	LAYOUT_TEXT_TOP
);
