# Personatiles Component

## Overview
The Personatiles component displays a row of persona tiles, each with an image and title. This component is useful for showcasing different user types, team members, or service categories in a visually appealing grid layout.

## Usage
The Personatiles component is ideal for:
- User type/persona showcases
- Team member displays
- Service or feature category highlights
- Role-based navigation options

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `caption` | `string` | Caption text for the entire persona section (currently unused in the code) | Yes |
| `personas` | `string[]` | Array of titles for each persona | Yes |
| `images` | `string[]` | Array of image URLs corresponding to each persona | Yes |

## Example

```svelte
<script>
  import { Personatiles } from '$lib/components';
  
  const caption = "Choose your role";
  const personas = ["Administrator", "Developer", "Team Lead", "Student"];
  const images = [
    "/images/admin.svg",
    "/images/developer.svg",
    "/images/team.svg",
    "/images/student.svg"
  ];
</script>

<Personatiles 
  caption={caption}
  personas={personas}
  images={images}
/>
```

## Features
- Responsive grid layout that adapts to different screen sizes
- Hover animation with subtle lift effect
- Circular image display with shadow effects
- Consistent spacing and alignment

## Dependencies
- `@sveltestrap/sveltestrap`: Provides the Container, Row, and Col components for layout

## Styling
The component includes custom styling for:
- Circular image containers with shadows
- Hover animations with transform effects
- Responsive font sizing and spacing
- Proper grid layout with responsive breakpoints

## Notes
- The component expects an equal number of items in both the `personas` and `images` arrays
- Images are displayed in circular frames with box-shadow effects
- Each persona tile features a hover animation that lifts it slightly
- The layout is responsive, showing 4 items per row on larger screens and 2 per row on smaller screens
- Although the `caption` prop is required in the component definition, it is currently not displayed in the rendered output