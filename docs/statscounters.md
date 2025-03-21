# Statscounters Component

## Overview
The Statscounters component displays a row of animated numerical statistics with labels. It's perfect for highlighting key metrics, achievements, or other important numbers with visual impact through smooth counting animations.

## Usage
The Statscounters component is ideal for:
- Dashboard statistics
- Achievement showcases
- Key performance indicators (KPIs)
- Impact metrics
- User engagement statistics

## Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| `counters` | `Counter[]` | Array of counter objects | Yes |

## Types

```typescript
interface Counter {
  max: number;  // The final number to count up to
  label: string;  // Descriptive text displayed below the number
}
```

## Example

```svelte
<script>
  import { Statscounters } from '$lib/components';
  
  const counters = [
    { max: 5000, label: "Active Users" },
    { max: 120, label: "Countries Reached" },
    { max: 99, label: "Satisfaction Rate %" }
  ];
</script>

<Statscounters counters={counters} />
```

## Features
- Animated counting effect for each statistic
- Different animation durations and easing functions for visual variety
- Responsive layout with vertical separators between columns
- Clean, modern design with highlighted numbers

## Dependencies
- `@sveltestrap/sveltestrap`: Provides the Container, Row, and Col components
- `svelte/motion`: Provides the tweened function for animations
- `svelte/easing`: Provides easing functions for animations

## Styling
The component includes custom styling for:
- Background color and border radius
- Number size, color, and font weight
- Vertical separators between statistics
- Responsive layout adjustments
- Proper spacing and alignment

## Animation Details
- Each counter uses a different animation duration and easing function:
  - First counter: 3000ms duration with cubicOut easing
  - Second counter: 5000ms duration with quadOut easing
  - Third counter: 3900ms duration with linear easing
- Numbers are rounded to integers during animation

## Notes
- The component is designed to display exactly three counters
- The animation begins automatically when the component is mounted
- On mobile screens, the vertical separators are hidden and each stat appears stacked
- The container has a light gray background with rounded corners for visual distinction