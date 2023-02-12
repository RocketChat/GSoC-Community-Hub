async function r({endpoint:t,transferType:e}){let i=await(await fetch(t)).json();return e(i)}

export { r as fetchTimelineData };
