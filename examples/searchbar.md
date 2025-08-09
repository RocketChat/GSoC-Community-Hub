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