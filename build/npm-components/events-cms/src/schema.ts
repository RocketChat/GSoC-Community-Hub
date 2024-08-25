import { CollectionConfig } from 'payload/types';

export const EventsSchema : CollectionConfig = ({
        slug: 'events',
        fields:[
          {
            name:'event',
            type:'text'
          },
          {
            name:'speaker',
            type:'text'
          },
          {
            name:'speakerDescription',
            type:'text'
          },{
            name:'start',
            type:'text'
          },{
            name:'end',
            type:'text'
          },{
            name:'title',
            type:'text'
          },{
            name:'duration',
            type:'text'
          },{
            name:'youtube',
            type:'text'
          },
          {
            name:'year',
            type:'number'
          }
        ]
});

// export default EventsSchema;
