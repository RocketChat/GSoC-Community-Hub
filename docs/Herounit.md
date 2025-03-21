# Herounit Component

## Overview
The Herounit component creates a prominent header section with a title and subtitle, typically used at the top of a page to introduce the main content or establish the page's purpose.

## Usage
The Herounit component is ideal for:
- Page headers
- Section introductions
- Landing pages
- Feature announcements

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `title` | `string` | Main heading text (supports HTML) | Yes |
| `subtitle` | `string` | Secondary descriptive text | Yes |

## Example

```svelte
<script>
  import { Herounit } from '$lib/components';
</script>

<Herounit 
  title="Welcome to Our <span class='highlight'>Platform</span>" 
  subtitle="A modern solution for all your development needs. Explore our features to discover how we can help streamline your workflow."
/>
```

## Features
- Responsive typography using clamp() for fluid font sizing
- Centered layout with container constraints
- Support for HTML in the title for customized styling
- Clean, accessible text hierarchy

## Dependencies
- `@sveltestrap/sveltestrap`: Provides the Container, Row, and Col components

## Styling
The component includes custom styling for:
- Padding and margins for proper spacing
- Responsive font sizes using clamp()
- Text alignment and color
- Line height and font weight

## Security Note
There is a TODO comment in the code regarding sanitizing the title to prevent XSS attacks. Currently, the title is rendered using `{@html title}`, which could potentially introduce security vulnerabilities if user-provided content is passed in. When implementing this component, ensure that title content is either:
1. Generated server-side with proper sanitization
2. Sanitized before being passed to the component
3. Only sourced from trusted, developer-controlled content

## Notes
- The subtitle has a maximum width of 800px and is centered in the container
- Both title and subtitle use responsive font sizing for better adaptability across devices