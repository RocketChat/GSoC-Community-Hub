
# Google Summer of Code Community Hub

An easy to use, ready-for-customization, community engagement and management system specially designed for Google Summer of Code communities.

## Technical Synopsis

A fully componentized (not page-based as in Next.JS) scalable web app, with a set of tested full-stack configurable GSoC-friendly components, ready to be customized for your GSoC community.

Full stack components are components that may encapsulate server-side behaviors in addition to client-side/UI behaviors.

This framework can be configured (layout of pages based on components;  and parameterization of the components) via a specially designed DSL.   

This DSL will facilitate the creation of a near-future "drag-and-drop what-you-see-is-what-you-get" GUI layout tool;  as well as AI prompt based generation of entire community websites.

Currently, the framework is built based on Svelte 5.

## Developing

The framework is superby lightweight yet runs on across all OS and environments.

First, install bun.   It should take 2 minutes.

```bash
curl -fsSL https://bun.sh/install | bash
```

To install dependencies:

```bash
bun install
```

Customize  the environment variables:

```bash
cp sample.env.local  .env.local
nano  .env.local
```

To start a  development server, with a browser on the app's home page:

```bash
bun run dev --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.


