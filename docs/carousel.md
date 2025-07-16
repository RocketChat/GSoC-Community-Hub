#  Carousel Component

## Description
The `Carousel` component is a **responsive, animated content slider** designed to showcase a list of news stories, announcements, or featured items in a horizontally scrollable layout.

It supports:
- **Custom navigation** via Previous/Next arrows
- **Dynamic pagination dots**

This component is ideal for **community news**, **updates section**, **featured content**, or **horizontal cards** on landing pages.

---

## Usage
Use this component to display a list of content items (like articles or updates), each with an image, headline, and short description. Users can scroll through items in sets using arrow controls or pagination dots.

---

## Props

| Prop Name | Type             | Default | Description                                                                 |
|-----------|------------------|---------|-----------------------------------------------------------------------------|
| `stories` | `Array<Object>`  | `[]`    | Array of story objects to be displayed. Each object should have:           |
|           |                  |         | - `imageUrl`: URL of the image                                              |
|           |                  |         | - `name`: Headline of the story (string)                                    |
|           |                  |         | - `description`: Short text about the story (string)                        |
|           |                  |         | - `id`: A unique identifier (optional but recommended for accessibility)    |

---

## Example
An example of this component in code can be found in [Examples](../examples/carousel.md)

---

## Component Preview

![Crousel image.](./docsImages/crouselComponent.png "This is a Crousel component image.")
