import {
  DiscourseProvider,
  DiscourseTopicListTabs as DiscourseTopicListTabsClient,
} from '../client';
import { DiscourseClient } from '../lib';

export default async function DiscourseTopicListTabs({ host, max, maxWidth }) {
  let discourseTabsData = [];
  if (host) {
    const discourseClient = new DiscourseClient(
      process.env.NEXT_PUBLIC_DISCOURSE_HOST,
      {
        /**
         * Switch to false if using apiKey and apiUserName.
         * Currently using only unauthenticated apis. So apiKey and apiUserName is not required
         * */
        isClient: true,
      }
    );
    const topTopics = await discourseClient.getTopTopics();
    const latestTopics = await discourseClient.getLatestTopics();
    const solvedTopics = await discourseClient.getSolvedTopics();
    const unsolvedTopics = await discourseClient.getUnsolvedTopics();
    discourseTabsData = [
      {
        variant: 'top',
        data: topTopics,
      },
      {
        variant: 'latest',
        data: latestTopics,
      },
      {
        variant: 'solved',
        data: solvedTopics,
      },
      {
        variant: 'unsolved',
        data: unsolvedTopics,
      },
    ];
  }

  if (!host) {
    return null;
  }

  return (
    <DiscourseProvider host={host}>
      <DiscourseTopicListTabsClient
        max={max}
        maxWidth={maxWidth}
        tabs={discourseTabsData}
      />
    </DiscourseProvider>
  );
}
