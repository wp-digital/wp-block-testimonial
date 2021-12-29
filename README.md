# Testimonial Block

### Description

Shares feedback, review etc. of other people.

### Demo

[Testimonial Block](https://blocks.innocode.digital/testimonial-block/)

### Install

- Preferable way is to use [Composer](https://getcomposer.org/):

    ````
    composer require innocode-digital/wp-block-testimonial
    ````

- Alternate way is to clone this repo to `wp-content/plugins/`:

    ````
    cd wp-content/plugins/
    git clone git@github.com:innocode-digital/wp-block-testimonial.git
    ````

Activate **Testimonial Block** with [WP-CLI](https://make.wordpress.org/cli/handbook/)
`wp plugin activate wp-block-testimonial` or from **Plugins** page.

### Documentation

There are some hooks in [constants](./src/constants.js) which give a possibility to
customize behaviour a bit.
