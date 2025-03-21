# Menubar Component

## Overview
The Menubar component creates a responsive navigation bar with dropdown menus, allowing for multi-level navigation organization in a clean, modern interface.

## Usage
The Menubar component is ideal for:
- Site-wide navigation
- Application header menus
- Dashboard navigation
- Product category navigation

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `brand` | `string` | Text/HTML for the brand area (typically logo or site name) | Yes |
| `menutree` | `MenuTree[]` | Array of menu objects defining the navigation structure | Yes |

## Types

```typescript
interface MenuItem {
  label: string;  // Menu item text or "---" for dividers
}

interface MenuTree {
  top: string;    // Top-level menu name
  dropdown: MenuItem[];  // Array of dropdown items
}
```

## Example

```svelte
<script>
  import { Menubar } from '$lib/components';
  
  const brand = "My App";
  const menutree = [
    {
      top: "Products",
      dropdown: [
        { label: "Category 1" },
        { label: "Category 2" },
        { label: "---" },  // Divider
        { label: "Featured" }
      ]
    },
    {
      top: "Resources",
      dropdown: [
        { label: "Documentation" },
        { label: "Tutorials" },
        { label: "API Reference" }
      ]
    }
  ];
</script>

<Menubar brand={brand} menutree={menutree} />
```

## Features
- Responsive design that adapts to different screen sizes
- Dropdown menus with support for dividers
- Clean, modern styling with subtle shadows
- Built on Bootstrap's robust navigation components via sveltestrap

## Dependencies
- `@sveltestrap/sveltestrap`: Provides all the navigation components

## Styling
The component includes custom styling for:
- Navbar padding and shadow
- Brand text styling
- Dropdown menu appearance with rounded corners and shadows
- Menu item spacing and sizing

## Notes
- The menu automatically collapses into a hamburger menu on mobile devices
- Dropdown menus can include dividers by using "---" as the label
- The component uses Bootstrap's light theme by default
- The navbar is set to expand at the "md" breakpoint (768px)