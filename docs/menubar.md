# Menubar Component

## Description
The `Menubar` component is a responsive navigation bar with a brand logo and dropdown menus. It uses `@sveltestrap/sveltestrap` for layout and styling.

## Usage
Use this component to create a navigation bar with dropdown menus. Ideal for websites or apps requiring a clean and functional menu system.

## Props

| Prop Name  | Type          | Default | Description                     |
|------------|---------------|---------|---------------------------------|
| `brand`    | `string`      | `""`    | The brand name or logo text.    |
| `menutree` | `Array<Menu>` | `[]`    | An array of menu items with dropdown options. |

### Menu Structure
Each item in `menutree` should have:
- `top`: The main menu label.
- `dropdown`: An array of dropdown items, where each item has:
  - `label`: The text to display. Use `"---"` for a divider line.

## Example


```agml

use Menubar from $lib/components/menubar/Menubar.svelte

get brand
get menutree

<main>

<Menubar {brand} {menutree}/>

</main>

```