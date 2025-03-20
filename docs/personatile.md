# Personatile Component

## Description
The `Personatile` component displays a row of personas, each with an image and a title. It uses `@sveltestrap/sveltestrap` for layout and styling.

## Usage
Use this component to showcase personas or user roles in a visually appealing way. Ideal for landing pages, team sections, or role-based features.

## Props

| Prop Name  | Type          | Default | Description                     |
|------------|---------------|---------|---------------------------------|
| `caption`  | `string`      | `""`    | Optional caption for the component. |
| `personas` | `Array<string>`| `[]`    | An array of persona titles.     |
| `images`   | `Array<string>`| `[]`    | An array of image URLs corresponding to each persona. |

## Example

```svelte
<script lang="ts">
  import Personatile from './Personatile.svelte';

  const personas = ["Admin", "Developer", "Group Chat", "GSoC"];
  const images = [
    "admin.png",
    "developer.png",
    "group-chat.png",
    "gsoc.png"
  ];
</script>

<Personatile caption="Our Team" personas={personas} images={images} />