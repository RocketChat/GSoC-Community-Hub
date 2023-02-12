import { fetchTimelineData } from "@palanikannan1437/rc4-core";
import { Timeline } from "@palanikannan1437/rc4-ui";

export default async function Home() {
  const data = await fetchTimelineData({ num: 5 });
  return <Timeline type="vertical" data={data.products} num={data.length} />;
}
