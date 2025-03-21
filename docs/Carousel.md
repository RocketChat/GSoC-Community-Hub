# Carousel Component

## Overview
The Carousel component provides a responsive image slider for showcasing multiple images in a horizontal scrolling gallery. It uses the `svelte-tiny-slider` library to handle the sliding functionality and includes navigation arrows for user interaction.

## Usage
The Carousel component is ideal for:
- Image galleries
- Product showcases
- Featured content rotation
- Visual storytelling sequences

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `stories` | `string[]` | Array of image URLs to display in the carousel | Yes |

## Example

```svelte
<script>
  import { Carousel } from '$lib/components/carousel';
  
  const imageUrls = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
    '/images/slide5.jpg'
  ];
</script>

<Carousel stories={imageUrls} />
```

## Features
- Responsive design that adapts to different screen sizes
- Smooth sliding transitions
- Interactive navigation arrows
- Displays multiple images at once (3 per view)
- Shadow and border-radius styling for a polished look

## Dependencies
- `svelte-tiny-slider`: Powers the sliding functionality
- `@sveltestrap/sveltestrap`: Provides the grid layout components
- `Arrow.svelte`: Custom arrow component for navigation controls

## Styling
The component includes custom styling for:
- Container padding and positioning
- Image styling with border-radius and shadow effects
- Navigation arrow buttons with hover effects
- Responsive behavior

## Notes
- The carousel displays images at 1/3 of the container width
- Navigation buttons prevent scrolling past the beginning or end of the image array
- The component manages its state internally, tracking the current index and width