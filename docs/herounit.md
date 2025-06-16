# Herounit Component

## Description
The `Herounit` component displays a centered title and subtitle in a clean, responsive layout. It uses `@sveltestrap/sveltestrap` for layout and styling.

## Usage
Use this component to create a hero section with a prominent title and supporting subtitle. Ideal for landing pages, headers, or section introductions.

## Props

| Prop Name  | Type   | Default | Description                     |
|------------|--------|---------|---------------------------------|
| `title`    | `string` | `""`    | The main title text (supports HTML). |
| `subtitle` | `string` | `""`    | The supporting subtitle text.   |

## Example

```agml

use Herounit from $lib/components/herounit/Herounit.svelte

get title
get subtitle

<main>

<Herounit {title} {subtitle}/>

</main>

```