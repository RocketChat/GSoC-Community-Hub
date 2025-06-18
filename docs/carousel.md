# Carousel Component

## Description

The `Carousel` component is a responsive image slider that displays a collection of images in a carousel format. It includes navigation buttons (previous and next) and pagination dots for easy navigation. The component uses the `TinySlider` library for smooth sliding functionality and integrates with `@sveltestrap/sveltestrap` for layout and styling.

## Usage

Use this component to display a gallery of images in a compact and interactive way. It is ideal for product showcases, portfolios, or any UI requiring a sliding image carousel.

## Props

| Prop Name | Type    | Default | Description                                      |
| --------- | ------- | ------- | ------------------------------------------------ |
| `stories` | `Array` | `[]`    | An array of image URLs to display in the slider. |

## Example

```agml

use Carousel from $lib/components/carousel/Carousel.svelte

get stories

<main>

<Carousel {stories}/>

</main>

```
