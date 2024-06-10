import Head from 'next/head';
import { Stack } from 'react-bootstrap';
import { useRouter } from 'next/router';
import {
  getAllEvents,
  getEventDeatils,
  getEventSpeakers,
} from '../../../components/conferences/EventPoster/server';
import { fetchAPI } from '../../../lib/api';
import { EventPoster } from '../../../components/conferences/EventPoster/components';

function EventDisplayPage({ event, spkdata, prsession }) {
  const router = useRouter();
  const { eid, error } = router.query;
  const eventname = event?.data?.attributes?.name;
  return (
    <div>
      <Head>
        <title>{eventname || 'Event Poster'}</title>
        <meta
          name="description"
          content="Rocket.Chat GSoC 2023 Alumni Summit, March 30th"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:image"
          content="https://github.com/RocketChat/RC4Conferences/blob/main/app/assets/gsoc_alumni_2023.png?raw=true"
        />
      </Head>
      <div className="mx-auto">
        <Stack direction="vertical">
          {event && (
            <EventPoster
              event={event}
              error={error}
              speaker={spkdata}
              prsession={prsession}
              customLink="https://bbb.rocket.chat/b/sin-ur2-c72-cbv"
            />
          )}
        </Stack>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let paths = null;
  try {
    const res = await getAllEvents();
    paths = res.data.data.map((event) => ({
      params: { eid: event.attributes.identifier },
    }));
    return {
      paths,
      fallback: true,
    };
  } catch (e) {
    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps(context) {
  const eventIdentifier = context.params.eid;
  // temp 9ddffcbb
  const event = await getEventDeatils(eventIdentifier);

  const spkdata = await getEventSpeakers(eventIdentifier);

  const topNavItems = await fetchAPI('/top-nav-item');

  const sessionRes = await fetchAPI(
    `/event-sessions?populate=session_items&filters[event_id][$eq]=${event?.data?.id}`
  );
  let prsession = sessionRes?.data?.[0];

  if (!prsession) prsession = null;

  return {
    props: { topNavItems, event, spkdata, prsession },
  };
}

export default EventDisplayPage;
