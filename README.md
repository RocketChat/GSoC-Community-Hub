# Google Summer of Code Community Hub

An easy to use, ready-for-customization, community engagement and management system specially designed for Google Summer of Code communities.

## Technical Synopsis

A fully componentized (not page-based as in nextjs) scalable web app, with a set of tested full-stack configurable GSoC-friendly components, ready to be customized for your GSoC community.

Full stack components are components that may encapsulate server-side behaviors in addition to client-side/UI behaviors.

This system can be configured (layout of pages based on components; and parameterization of the components) via a specially designed DSL.

This DSL will facilitate the creation of a near-future "drag-and-drop what-you-see-is-what-you-get" GUI layout tool; as well as AI prompt based generation of entire community websites.

Currently, the system is built based on [Svelte 5](https://github.com/sveltejs/svelte). Layout is powered by [bootstrap](https://github.com/twbs/bootstrap). Runtime is [bun](https://github.com/oven-sh/bun).

## Developing

The system is superbly lightweight yet runs across all OS and environments.

First, install bun. It should take 2 minutes.

```bash
curl -fsSL https://bun.sh/install | bash
```

To install dependencies:

```bash
bun install
```

Customize the environment variables:

```bash
cp sample.env.local  .env.local
nano  .env.local
```

To start a development server, with a browser on the app's home page:

```bash
bun run dev --open
```

## Setting up Keycloak

The system uses **Keycloak** for authentication. You can spin up a Keycloak instance using **Docker** or run it locally.

### Using Docker

Ensure Docker is installed and running on your system. Then, run the following command to start Keycloak:

```bash
docker run -d \
  -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest start-dev
```

Access Keycloak Admin Console at: [http://localhost:8080](http://localhost:8080)

Login credentials:

- Username: `admin`
- Password: `admin`

For further details, refer to the [official Keycloak Docker guide](https://www.keycloak.org/getting-started/getting-started-docker).

### Running Keycloak Locally

For a comprehensive guide on installing and running Keycloak locally, visit the [Keycloak Getting Started page](https://www.keycloak.org/getting-started).

## Building

To create a production version of your system:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

## Components Ecosystem

The following independent components are available.&ensp; They are located under the `./src/lib/components` directory.&ensp; Many more components are being created/ported. &ensp; Configuration and parameterization are documented on their own doc page.
<br/>
<br/>

| Component Name                           | Description                                                                                                                                                                                        | Doc link |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `menubar` - Menu Bar<br/><br/><br/>      | A navigation menu aross the top of the page that can be configured. It is tightly integrated with authentication (we support only OIDC) and _superprofile_ (scaled global server state management) | link     |
| `herounit` - Hero Unit                   | A large formatted text box across the page                                                                                                                                                         | link     |
| `searchbar` - Search Bar                 | Dynamic search bar allowing user selection of search provider                                                                                                                                      | link     |
| `statscounters` - Statistic Counter      | Presents a numeric metrics by counting up from zero                                                                                                                                                | link     |
| `simonlinktiles` - Simon-like link tiles | Large rectangular tiles laid out in a grid                                                                                                                                                         | link     |
| `carousel` - Carousel                    | A rotating carousel of images and headlines that can be clicked                                                                                                                                    | link     |
| `personatiles` - Persona Tiles           | Iconic tiles with labels representing the personas using this server                                                                                                                               | link     |
