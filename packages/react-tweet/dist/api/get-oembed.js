export async function getOEmbed(url) {
    const res = await fetch(`https://publish.twitter.com/oembed?url=${url}`);
    if (res.ok) return res.json();
    if (res.status === 404) return;
    throw new Error(`Fetch for embedded tweet failed with code: ${res.status}`);
}
