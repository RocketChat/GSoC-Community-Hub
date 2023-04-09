import axios from 'axios';

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337'
  }/api${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export const rocketchatApi = axios.create({
  baseURL: process.env.RC_HOST,
  headers: {
    'X-Auth-Token': process.env.RC_PERSONAL_ACCESS_TOKEN,
    'X-User-Id': process.env.RC_USER_ID,
  },
});
