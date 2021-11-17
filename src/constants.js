import { applyFilters } from '@wordpress/hooks';
export const BLOCK_CLASS_NAME = 'innocode-block-testimonial';

export const Layout = {
	AUTHOR_BOTTOM: 'author_bottom',
	AUTHOR_TOP: 'author_top',
};

export const LAYOUT_DEFAULT = applyFilters(
	'innocode.block-testimonial.layout.default',
	Layout.AUTHOR_TOP
);

export const HAS_AUTHOR_INFO_DEFAULT = applyFilters(
	'innocode.block-testimonial.has_author_info.default',
	true
);

export const AUTHOR_IMAGE_SIZE_DEFAULT = applyFilters(
	'innocode.block-testimonial.author_image_size.default',
	'thumbnail'
);
