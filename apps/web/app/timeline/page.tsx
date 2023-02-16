import { fetchTimelineData, Timeline, TimelineObjectType } from "@palanikannan1437/rc4community-timeline";

function transferType(data: any): TimelineObjectType[] {
  const timeline = data.products;
  return timeline.map((timelineData: any) => {
    return {
      id: String(timelineData.id),
      title: String(timelineData.title),
      meta: String(timelineData.rating),
      subtitle: String(timelineData.category),
      description: String(timelineData.description),
    };
  });
}

export default async function Home() {
  const data = await fetchTimelineData({
    endpoint: "https://dummyjson.com/products?limit=5",
    transferType: transferType,
  });

  return <Timeline type="vertical" data={data} />;
}
