async function t({num:e}){return await(await fetch(`https://dummyjson.com/products?limit=${e}`)).json()}

export { t as fetchTimelineData };
