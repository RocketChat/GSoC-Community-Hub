import {
  fetchTimelineData,
  Timeline,
} from "@palanikannan1437/rc4community-timeline";

export default async function Home() {
  const data = await fetchTimelineData();

  return <Timeline type="vertical" data={data} />;
}
