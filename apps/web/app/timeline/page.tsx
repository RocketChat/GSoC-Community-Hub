import { Timeline } from "ui";
import fetchTimelineData from "./main";

export default async function Home() {
  const data = await fetchTimelineData({ num: 5 });
  return <Timeline type="horizontal" data={data.products} num={data.length} />;
}
