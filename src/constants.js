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
