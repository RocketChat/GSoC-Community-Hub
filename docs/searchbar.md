# Searchbar Component

## Description
The `Searchbar` component provides a search input field with a dropdown menu for filtering or selecting search options. It uses `@sveltestrap/sveltestrap` for layout and styling.

## Usage
Use this component to create a search bar with additional filtering or sorting options. Ideal for search interfaces, dashboards, or data tables.

## Props

| Prop Name       | Type          | Default | Description                     |
|-----------------|---------------|---------|---------------------------------|
| `searchactions` | `Object`      | `{}`    | Configuration for the search bar, including: |
|                 |               |         | - `menu`: Dropdown menu options (see below). |
|                 |               |         | - `placeholder`: Placeholder text for the search input. |

### Menu Structure
The `menu` object should have:
- `top`: The label for the dropdown toggle.
- `dropdown`: An array of dropdown items, where each item has:
  - `label`: The text to display. Use `"---"` for a divider line.

## Example

```agml

use Searchbar from $lib/components/searchbar/Searchbar.svelte

get searchactions

<main>

<Searchbar {searchactions}/>

</main>

```