# Google Summer of Code Community Hub

An easy to use, ready-for-customization, community engagement and management system specially designed for Google Summer of Code communities.

## Technical Synopsis

A fully componentized (not page-based as in nextjs) scalable web app, with a set of tested full-stack configurable GSoC-friendly components, ready to be customized for your GSoC community.

Full stack components are components that may encapsulate server-side behaviors in addition to client-side/UI behaviors.

This system can be configured (layout of pages based on components;  and parameterization of the components) via a specially designed DSL. 

The way the Domain Specific Language works is simple; 
- Specify imports using `use X from module`
- Get component data using the `get` syntax
- Specify page layout by placing components inside of the `<main></main>` tag

This DSL will facilitate the creation of a near-future "drag-and-drop what-you-see-is-what-you-get" GUI layout tool;  as well as AI prompt based generation of entire community websites. For a more thorough rundown, its creator provides a detailed [summary](https://github.com/anjy7/Google-Summer-of-Code).

Currently, the system is built based on [Svelte 5](https://github.com/sveltejs/svelte).  Layout is powered by [bootstrap](https://github.com/twbs/bootstrap).  Runtime is [bun](https://github.com/oven-sh/bun).

## Developing

The system is superbly lightweight yet runs across all OS and environments.

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

To generate specified pages via the DSL (these will be found in `./src/routes`):

```bash
bun run compile
```

To start a development server, with a browser on the app's home page:

```bash
bun run dev --open
```

## Building

To create a production version of your system:

```bash
bun run build
```

You can preview the production build with `bun run preview`.


##  Components Ecosystem

The following independent components are available.&ensp; They are located under the `./src/lib/components` directory.&ensp; Many more components are being created/ported. &ensp;  Configuration and parameterization are documented on their own doc page.
<br/>
<br/>

|Component Name|Description|Doc link|
|------|------|------|
|`menubar` - Menu Bar<br/><br/><br/>|A navigation menu aross the top of the page that can be configured.  It is tightly integrated with authentication (we support only OIDC) and _superprofile_ (scaled global server state management)|link|
|`herounit` -  Hero Unit|A large formatted text box across the page|link|
|`searchbar` - Search Bar|Dynamic search bar allowing user selection of search provider|link|
|`statscounters` - Statistic Counter|Presents a numeric metrics by counting up from zero|link|
|`simonlinktiles` - Simon-like link tiles|Large rectangular tiles laid out in a grid|link|
|`carousel` - Carousel|A rotating carousel of images and headlines that can be clicked|link|
|`personatiles` - Persona Tiles|Iconic tiles with labels representing the personas using this server|link| 


