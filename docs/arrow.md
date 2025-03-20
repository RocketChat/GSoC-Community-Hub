# Arrow Component

## Description
The `Arrow` component is a simple SVG arrow that can point **left** or **right**.  
It is useful for navigation buttons, sliders, or any UI elements that need directional indicators.

## Usage
You can use this component wherever you need an arrow icon.  
By default, it points **left**, but you can set it to **right** using the `direction` prop.

## Props

| Prop Name   | Type     | Default  | Description                        |
|------------|---------|----------|------------------------------------|
| `direction` | `string` | `"left"` | The direction of the arrow (`"left"` or `"right"`). |

## Example

```svelte
<script>
  import Arrow from './Arrow.svelte';
</script>

<Arrow direction="right" />
