# Searchbar Component

## Overview
The Searchbar component creates a styled search input with a dropdown menu for search filters or categories. It provides a clean, modern interface for search functionality within an application.

## Usage
The Searchbar component is ideal for:
- Site or application search interfaces
- Filtered search implementations
- Category-specific search tools
- Document or content search features

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `searchactions` | `SearchActions` | Object containing search configuration | Yes |

## Types

```typescript
interface MenuItem {
  label: string;  // Menu item text or "---" for dividers
}

interface SearchMenu {
  top: string;    // Dropdown button text
  dropdown: MenuItem[];  // Array of dropdown items
}

interface SearchActions {
  menu: SearchMenu;  // Menu configuration
  placeholder: string;  // Placeholder text for search input
}
```

## Example

```svelte
<script>
  import { Searchbar } from '$lib/components';
  
  const searchactions = {
    menu: {
      top: "All",
      dropdown: [
        { label: "Documents" },
        { label: "Images" },
        { label: "Videos" },
        { label: "---" },  // Divider
        { label: "Advanced Search" }
      ]
    },
    placeholder: "Search for anything..."
  };
</script>

<Searchbar searchactions={searchactions} />
```

## Features
- Clean, centered search interface with dropdown category selector
- Support for dropdown dividers
- Shadowed input with rounded corners
- Built on Bootstrap's input components via sveltestrap

## Dependencies
- `@sveltestrap/sveltestrap`: Provides all the form and dropdown components

## Styling
The component includes custom styling for:
- Input height and padding
- Rounded corners and shadows
- Proper spacing and margins
- Dropdown styling consistency

## Notes
- The component is designed to be centered on the page with responsive width
- Dropdown menu items can include dividers by using "---" as the label
- This component provides the UI structure for search but does not include actual search functionality
- To implement functional search, you would need to add event handlers and logic