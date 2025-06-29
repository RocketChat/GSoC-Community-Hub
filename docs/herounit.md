# Herounit Component

## Description
<<<<<<< HEAD

The `Herounit` component displays a centered title and subtitle in a clean, responsive layout. It uses `@sveltestrap/sveltestrap` for layout and styling.
=======
The `Herounit` component renders a **prominent title** and **subtitle** in a clean, centered layout. It provides a visually striking introduction section—perfect for **landing pages**, **homepage banners**, or **section headers**.

---
>>>>>>> 06677209dae49d2aa7725343720d9cda3c7d9a5d

## Usage

Use this component to create a hero section with a prominent title and supporting subtitle. Ideal for landing pages, headers, or section introductions.

---

## Props

| Prop Name  | Type     | Default | Description                          |
| ---------- | -------- | ------- | ------------------------------------ |
| `title`    | `string` | `""`    | The main title text (supports HTML). |
| `subtitle` | `string` | `""`    | The supporting subtitle text.        |

---

## Example

```svelte
<script>
    const herotitle =  "Welcome to our <b style='color:red'>community</b>";
    const herosub = "Let's dream, share, and collaborate in shaping the future of the Rocket.Chat ecosystem together !!";
</script>
use Herounit from $lib/components/herounit/Herounit.svelte

get title
get subtitle

<main>
  <Herounit 
    title={herotitle} 
    subtitle={herosub} 
  />
</main>

```
<<<<<<< HEAD
=======

The above code outputs as follows:

![Herounit image.](./docsImages/HerounitImage.png "This is a Herounit component image.")
>>>>>>> 06677209dae49d2aa7725343720d9cda3c7d9a5d
