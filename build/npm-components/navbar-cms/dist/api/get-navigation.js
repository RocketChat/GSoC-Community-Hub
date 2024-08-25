import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';
export const getLinks = async ()=>{
    const payload = await getPayloadHMR({
        config: configPromise
    });
    const data = await payload.findGlobal({
        slug: 'navbar',
        depth: 4
    });
    return data;
};
