# Arrow Component

## Overview
The Arrow component is a customizable SVG arrow icon used primarily for navigation controls. It can be rotated to point in different directions, making it versatile for various UI navigation scenarios.

## Usage
The Arrow component is typically used for:
- Navigation controls in carousels or sliders
- Expandable/collapsible UI elements
- Directional indicators
- Custom button icons

## Props

| Prop | Type | Description | Default | Required |
|------|------|-------------|---------|----------|
| `direction` | `string` | Arrow direction, either "left" or "right" | "left" | No |

## Example

```svelte
<script>
  import { Arrow } from '$lib/components/carousel';
</script>

<!-- Left-pointing arrow (default) -->
<Arrow />

<!-- Right-pointing arrow -->
<Arrow direction="right" />
```

## Features
- SVG-based for crisp rendering at any size
- Automatically rotates based on the specified direction
- Uses `currentColor` for fill, inheriting the parent element's text color
- Lightweight and reusable

## Implementation Details
The component renders an SVG arrow icon that points left by default. When the `direction` prop is set to "right", the SVG is rotated 180 degrees to point in the opposite direction.

## Styling
- The arrow uses `currentColor` for its fill, allowing it to inherit color from its parent element
- The SVG is transformed using CSS when direction is "right"
- No additional styling is necessary, but the component can be styled further using standard CSS properties

## Notes
- This component is primarily used within the Carousel component but can be used independently
- The SVG viewBox is set to "0 0 30.725 30.725" for proper proportions