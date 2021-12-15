import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'innocode-block-testimonial';

export const LAYOUT_AUTHOR_TOP = 'author_top';
export const LAYOUT_AUTHOR_BOTTOM = 'author_bottom';

export const LAYOUT_DEFAULT = applyFilters(
	'innocode.block-testimonial.layout.default',
	LAYOUT_AUTHOR_TOP
);

export const HAS_AUTHOR_INFO_DEFAULT = applyFilters(
	'innocode.block-testimonial.has_author_info.default',
	true
);

export const AUTHOR_IMAGE_SIZE_DEFAULT = applyFilters(
	'innocode.block-testimonial.author_image_size.default',
	'thumbnail'
);
