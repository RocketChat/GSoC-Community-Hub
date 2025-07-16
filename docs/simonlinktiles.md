# Simonlinktiles Component

## Description
The `Simonlinktiles` component displays a grid of cards, each containing a title and description.

---

## Usage

Use this component to showcase links, features, or information in a grid layout. Ideal for dashboards, landing pages, or feature highlights.

---

## Props

| Prop Name  | Type          | Default | Description                     |
|------------|---------------|---------|---------------------------------|
| `tilelinks`| `Array<Array<Object>>` | `[]` | A 2D array where each inner array defines a row of tiles. Each tile object should contain: <br>• `title`: string – the tile’s heading <br>• `desc`: string – the tile’s description |

### 🔧 `tilelinks` Structure

```ts
tilelinks = [
  [
    { title: "Docs", desc: "Browse API documentation and usage guides." },
    { title: "Tutorials", desc: "Step-by-step tutorials to get you started." }
  ],
  [
    { title: "Community", desc: "Join forums and discussions." },
    { title: "Support", desc: "Reach out for help and feedback." }
  ]
];
```

---

## Example
An example of this component in code can be found in [Examples](../examples/simonlinktiles.md)

---

## Component Preview
![Simonlinktiles image.](./docsImages/simonlinktilesImage.png "This is a Simonlinktiles component image.")
