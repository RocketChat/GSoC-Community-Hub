# Simonlinktiles Component

## Overview
The Simonlinktiles component displays a responsive grid of card tiles, each containing a title and description. This component is useful for creating feature showcases, service offerings, or navigation hubs in a visually appealing layout.

## Usage
The Simonlinktiles component is ideal for:
- Feature listings
- Service offerings
- Category navigation
- Information card grids

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `tilelinks` | `TileRow[]` | 2D array of tile objects | Yes |

## Types

```typescript
interface Tile {
  title: string;  // Tile heading
  desc: string;   // Tile description
}

type TileRow = Tile[];  // Array of tile objects representing a row
```

## Example

```svelte
<script>
  import { Simonlinktiles } from '$lib/components';
  
  const tilelinks = [
    [
      { title: "Getting Started", desc: "Learn the basics and set up your environment" },
      { title: "Core Concepts", desc: "Understand the fundamental principles" },
      { title: "Advanced Usage", desc: "Take your skills to the next level" }
    ],
    [
      { title: "API Reference", desc: "Detailed documentation of all APIs" },
      { title: "Examples", desc: "Real-world code samples and templates" },
      { title: "Community", desc: "Join our growing community of developers" }
    ]
  ];
</script>

<Simonlinktiles tilelinks={tilelinks} />
```

## Features
- Responsive grid layout that adapts to different screen sizes
- Stylish cards with shadow effects and hover animations
- Clean typography with proper spacing
- Flexible row and column organization

## Dependencies
- `@sveltestrap/sveltestrap`: Provides the Container, Row, Col, and Card components

## Styling
The component includes custom styling for:
- Card shadows and border radius
- Hover animations with transform effects
- Gradient backgrounds for visual appeal
- Responsive layout adjustments
- Typography sizing and colors

## Notes
- The component accepts a 2D array, allowing for organization of tiles in multiple rows
- Each tile is displayed in a card with a subtle gradient background
- Cards feature a hover animation that lifts them slightly and enhances the shadow
- The layout is responsive, adjusting from 4 columns on large screens down to 1 column on mobile
- Maximum width constraints ensure content remains readable on very large screens