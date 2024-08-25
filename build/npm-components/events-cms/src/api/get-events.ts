import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';

export const getEvents = async () => {
    const payload = await getPayloadHMR({ config: configPromise });

    const data = await payload.find({
      collection: 'events',
    });

    return data;
};

// check to not populate duplicate data
// export function timeAgo(utcTime: number): string {
//     const now = new Date();
//     const diff = now.getTime() - utcTime * 1000; // convert to milliseconds
//     const seconds = Math.floor(diff / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);

//     if (days > 0) {
//         return `${days}d ago`;
//     } else if (hours > 0) {
//         return `${hours}h ago`;
//     } else if (minutes > 0) {
//         return `${minutes}m ago`;
//     } else {
//         return `${seconds}s ago`;
//     }
// }
