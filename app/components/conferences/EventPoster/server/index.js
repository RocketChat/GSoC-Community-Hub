import axios from 'axios';

const eventUrl = process.env.NEXT_PUBLIC_EVENT_BACKEND_URL;

/// /// Event Fetch Call Begins
export const getEventDeatils = async (eid) => {
  const headers = {
    Accept: 'application/vnd.api+json',
  };
  const res = await fetch(`${eventUrl}/v1/events/${eid}?include=tickets`, {
    headers,
  });
  return res.json();
};

export const getAllEvents = async (eid) => {
  const headers = {
    Accept: 'application/vnd.api+json',
  };
  const res = await axios.get(`${eventUrl}/v1/events`, {
    headers,
  });
  return res;
};

// Event Speaker call
export const getEventSpeakers = async (eid, auth) => {
  const headers = {
    Accept: 'application/vnd.api+json',
    Authorization: `JWT ${auth}`,
  };
  const res = await fetch(`${eventUrl}/v1/events/${eid}/speakers?sort=id`, {
    headers,
  });
  return res.json();
};

/// /// Event Fetch Call Ends
