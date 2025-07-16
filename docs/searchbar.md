# Searchbar Component

## Description
The `Searchbar` component provides a search input field with a dropdown menu for filtering or selecting search options.

---

## Usage

Use this component to create a search bar with additional filtering or sorting options. Ideal for search interfaces, dashboards, or data tables.

---

## Props

| Prop Name       | Type     | Default | Description                                             |
| --------------- | -------- | ------- | ------------------------------------------------------- |
| `searchactions` | `Object` | `{}`    | Configuration for the search bar, including:            |
|                 |          |         | - `menu`: Dropdown menu options (see below).            |
|                 |          |         | - `placeholder`: Placeholder text for the search input. |

### Menu Structure

The `menu` object should have:

- `top`: The label for the dropdown toggle.
- `dropdown`: An array of dropdown items, where each item has:
  - `label`: The text to display. Use `"---"` for a divider line.

- The `searchactions` object should follow this structure:

```ts
{
  menu: {
    top: string, // The visible label on the dropdown button (e.g., "All", "Category")
    dropdown: Array<{
      label: string // Dropdown item text; use "---" for a divider
    }>
  },
  placeholder: string // Placeholder text for the search input (e.g., "Search docs...")
}
```

---

## Example

```svelte
<script>
  const searchactions = { placeholder: "Find commmunity information",
        menu: { top: "Ask AI", dropdown: [
            {label: "Community posts and messages"},{label: "---"}, {label: "Documenataion"}, 
        ]}
    };
</script>

use Searchbox from $lib/components/searchbox/Searchbox.svelte

get searchactions

<main>
  <Searchbox {searchactions} />
</main>

```

This example is available for build and test at [Examples](../examples/searchbar.md)

---

![Searchbar image.](./docsImages/SearchbarImage.png "This is a Searchbar component image.")