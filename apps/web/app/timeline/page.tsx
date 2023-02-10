import { Timeline } from "ui";

import d from "../../dist/timelineAPI.mjs";

export default async function Home() {
  const data = await d({ num: 5 });
  return <Timeline type="vertical" data={data.products} num={data.length} />;
}
