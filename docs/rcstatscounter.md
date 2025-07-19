# RCStatscounter Component

## Description

The `RCStatscounter` component displays three animated statistical counters with labels using Svelte’s `tweened` store and Sveltestrap's responsive layout system. It is ideal for displaying key Rocket.Chat metrics such as total users, total messages, and online users. Each counter features a smooth animation and unique easing behavior.

---

## Usage

Use this component to render **exactly three** animated counters. Each counter counts from `0` to a given `max` value and displays a label underneath.

---

## Props

| Prop Name    | Type            | Default | Description |
|--------------|-----------------|---------|-------------|
| `rcCounters` | `Array<Object>` | `[]`    | An array of **exactly three** objects. Each object must contain:<br>• `max` (`number`): The final value to animate up to.<br>• `label` (`string`): A label that describes the statistic. |

> **Note**: The component supports exactly **three** counters. Passing more or fewer may result in errors or visual inconsistency.

---

## Configuration Requirements

To fetch real statistics from a Rocket.Chat server, you must define the following environment variables:

```ts
const RC_URL = import.meta.env.RC_URL;
const RC_USER_TOKEN = import.meta.env.RC_USER_TOKEN;
const RC_USER_ID = import.meta.env.RC_USER_ID;
```
These should be available at build time through your environment configuration:

- **`RC_URL`**: Base URL of your Rocket.Chat server (e.g., `https://chat.example.com`).
- **`RC_USER_TOKEN`**: API token of an authorized Rocket.Chat user.
- **`RC_USER_ID`**: The ID of the user associated with the API token.

> **Ensure that the API token and user ID have admin privileges to access the API endpoint.**

---

## Example

```svelte
<script>
	import RCStatscounter from '$lib/components/statscounters/RCStatscounter.svelte';

    const data = {
            statistics: [
                {
                    totalUsers: 100000,
                    totalMessages: 8008500,
                    onlineUsers: 10000
                }
            ]
        };

    const rcstats = data.statistics[0];

	const rcCounters = [
        { max: stats.totalUsers, label: 'Rocket Chat Users' },
        { max: stats.totalMessages, label: 'Rocket Chat Messages' },
        { max: stats.onlineUsers, label: 'Rocket Chat Online' }
    ];

</script>

<main>
	<RCStatscounter {rcCounters} />
</main>

```
This example is available for build and test at [Examples](../examples/rcstatscounter.md)

The above code outputs:

![RcStatscounters image.](./docsImages/rcstatscounterImage.png "This is a Rcstatscounters image.")