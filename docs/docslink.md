# Docslink Component

## Description
The `Docslink` component displays two links separated by a vertical bar (`|`). It uses `@sveltestrap/sveltestrap` for layout and styling.

## Usage
Use this component to visually separate two links in a clean and centered layout. Ideal for navigation footers or section dividers.

## Props

| Prop Name  | Type   | Default | Description                     |
|------------|--------|---------|---------------------------------|
| `leftlink` | `string` | `""`    | The text or link to display on the left. |
| `rightlink`| `string` | `""`    | The text or link to display on the right. |

## Example


```agml

  /**
   *@prop {string} leftlink  - The text or link to display on the left.
   *@prop {string} rightlink - The text or link to display on the right.
   */


use Docslink from $lib/components/docslink/Docslink.svelte

get leftlink
get rightlink

<main>

<Docslink {leftlink} {rightlink}/>

</main>