# Docslink Component

## Overview
The Docslink component creates a simple horizontal link bar with a center separator, typically used for documentation navigation or related links display.

## Usage
The Docslink component is ideal for:
- Documentation page navigation
- "Previous/Next" style navigation
- Related links sections
- Simple dual-option navigation

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `leftlink` | `string` | HTML content for the left link | Yes |
| `rightlink` | `string` | HTML content for the right link | Yes |

## Example

```svelte
<script>
  import { Docslink } from '$lib/components';
  
  // HTML strings can include anchor tags
  const leftLink = '<a href="/docs/getting-started">Getting Started</a>';
  const rightLink = '<a href="/docs/advanced">Advanced Usage</a>';
</script>

<Docslink leftlink={leftLink} rightlink={rightLink} />
```

## Features
- Clean, centered design with a vertical separator
- Support for HTML content in both link positions
- Responsive layout using sveltestrap components
- Hover effects for better user interaction

## Dependencies
- `@sveltestrap/sveltestrap`: Provides the Container, Row, and Col components

## Styling
The component includes custom styling for:
- Consistent padding and spacing
- Text size and color
- Link hover effects
- Separator styling

## Notes
- The component expects HTML strings for both `leftlink` and `rightlink` props
- Links are rendered using the `{html}` directive, so ensure content is properly sanitized to prevent XSS attacks
- The vertical separator is a simple `|` character styled with CSS