# Testimonial Block

### Description

Shares feedback, review etc. of other people.

### Demo

[Testimonial Block](https://demo.wpd.digital/testimonial-block/)

### Install

- Preferable way is to use [Composer](https://getcomposer.org/):

    ````
    composer require wpd-digital/wp-block-testimonial
    ````

- Alternate way is to clone this repo to `wp-content/plugins/`:

    ````
    cd wp-content/plugins/
    git clone git@github.com:wpd-digital/wp-block-testimonial.git
    ````

Activate **Testimonial Block** with [WP-CLI](https://make.wordpress.org/cli/handbook/)
`wp plugin activate wp-block-testimonial` or from **Plugins** page.

### Documentation

Add default image, if needed, with hook `wpd.block-testimonial.author_image.default`.
**Example**:

````
wp.hooks.addFilter(
	'wpd.block-testimonial.author_image.default',
	'my-theme',
	() => ( {
		src: 'https://picsum.photos/150',
		width: '150',
		height: '150',
		alt: 'Random image',
	} )
);
````

There are more hooks in [constants](./src/constants.js) which give a possibility to
customize behaviour a bit.
