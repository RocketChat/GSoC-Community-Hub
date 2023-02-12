export async function fetchTimelineData({
  endpoint,
  transferType,
}: {
  endpoint: string;
  transferType: (data: any) => TimelineObjectType[];
}) {
  const res = await fetch(endpoint);
  const data = await res.json();
  const timelineResults = transferType(data);
  return timelineResults;
}

export type TimelineObjectType = {
  id: any;
  title: string;
  meta: string;
  subtitle: string;
  description: string;
};
