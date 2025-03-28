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

```agml

  /**
   *@prop {Object[][]} tilelinks  - A 2D array of tile objects, where each tile has title and desc.
   */


use Simonlinktiles from $lib/components/simonlinktiles/Simonlinktiles.svelte

get tilelinks

<main>

<Simonlinktiles {tilelinks}/>

</main>
