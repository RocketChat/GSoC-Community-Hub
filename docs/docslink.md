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

```svelte
<script lang="ts">
  import Docslink from './Docslink.svelte';
</script>

<Docslink leftlink="Home" rightlink="About" />