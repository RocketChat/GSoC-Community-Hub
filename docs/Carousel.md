# Carousel Component

The Carousel component is a responsive image slider that allows you to display a rotating collection of images with navigation controls.

## Overview

The Carousel component uses the [svelte-tiny-slider] library to create a smooth, responsive image carousel with previous/next navigation buttons. It's ideal for showcasing featured content, testimonials, or product images.

## Component Structure

The Carousel component consists of two parts:
- `Carousel.svelte`: The main component that handles the image slider functionality
- `Arrow.svelte`: A helper component that creates the directional navigation arrows

## Props

| Prop | Type | Description |
|------|------|-------------|
| `stories` | `string[]` | An array of image URLs to display in the carousel |

## Usage Example

```svelte
<script>
  import Carousel from '$lib/components/Carousel.svelte';
  
  // Array of image URLs
  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
    '/images/slide5.jpg'
  ];
</script>

<Carousel stories={images} />
```

## Features

- Responsive design that adapts to different screen sizes
- Previous/next navigation buttons with hover effects
- Automatic sizing of images based on container width
- Smooth transitions between slides
- Support for variable number of images

## Styling

The carousel includes custom styling:
- Rounded corners and shadow effects on images
- Circular navigation buttons with hover states
- Proper spacing and margins for optimal display

## Dependencies

The component requires:
- `svelte-tiny-slider`: For the slider functionality
- `@sveltestrap/sveltestrap`: For layout components (Container, Row, Col)
- The internal `Arrow.svelte` component for navigation controls