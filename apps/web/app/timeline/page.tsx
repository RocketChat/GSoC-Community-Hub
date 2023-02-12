import { fetchTimelineData } from "core";
import { Timeline } from "ui";

export default async function Home() {
  const data = await fetchTimelineData({ num: 5 });
  return <Timeline type="vertical" data={data.products} num={data.length} />;
}
