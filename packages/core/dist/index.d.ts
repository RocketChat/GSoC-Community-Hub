declare function fetchTimelineData({ endpoint, transferType, }: {
    endpoint: string;
    transferType: (data: any) => TimelineObjectType[];
}): Promise<TimelineObjectType[]>;
type TimelineObjectType = {
    id: any;
    title: string;
    meta: string;
    subtitle: string;
    description: string;
};

export { TimelineObjectType, fetchTimelineData };
