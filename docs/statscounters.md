# Statscounters Component

## Description
The `Statscounters` component displays animated counters with labels. It uses `svelte/motion` for smooth animations and `@sveltestrap/sveltestrap` for layout and styling.

## Usage
Use this component to showcase statistics, metrics, or achievements with a visually appealing count-up animation. Ideal for dashboards, landing pages, or reports.

## Props

| Prop Name  | Type          | Default | Description                     |
|------------|---------------|---------|---------------------------------|
| `counters` | `Array<Object>`| `[]`    | An array of counter objects, where each object has: |
|            |               |         | - `max`: The target number for the counter. |
|            |               |         | - `label`: The label for the counter. |

## Example

```svelte
<script lang="ts">
  import Statscounters from './Statscounters.svelte';

  const counters = [
    { max: 1000, label: "Users" },
    { max: 500, label: "Projects" },
    { max: 250, label: "Downloads" }
  ];
</script>

<Statscounters counters={counters} />