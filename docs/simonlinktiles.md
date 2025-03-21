# Simonlinktiles Component

## Description
The `Simonlinktiles` component displays a grid of cards, each containing a title and description. It uses `@sveltestrap/sveltestrap` for layout and styling.

## Usage
Use this component to showcase links, features, or information in a grid layout. Ideal for dashboards, landing pages, or feature highlights.

## Props

| Prop Name  | Type          | Default | Description                     |
|------------|---------------|---------|---------------------------------|
| `tilelinks`| `Array<Array<Object>>` | `[]` | A 2D array of tile objects, where each tile has: |
|            |               |         | - `title`: The title of the tile. |
|            |               |         | - `desc`: The description of the tile. |

## Example

```svelte
<script lang="ts">
  import Simonlinktiles from './Simonlinktiles.svelte';

  const tiles = [
    [
      { title: "Feature 1", desc: "Description for feature 1." },
      { title: "Feature 2", desc: "Description for feature 2." }
    ],
    [
      { title: "Feature 3", desc: "Description for feature 3." },
      { title: "Feature 4", desc: "Description for feature 4." }
    ]
  ];
</script>

<Simonlinktiles tilelinks={tiles} />