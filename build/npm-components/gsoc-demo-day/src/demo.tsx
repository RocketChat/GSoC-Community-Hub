import * as React from 'react';
import { Suspense } from 'react'
import { getLinks } from './api/index.js'
import CarouselComponent from './demo-day-theme/card-component.jsx';



const GsocDemoDayContent = async ({ data, user }) => {
  console.log(user);
  let events = data;
  const videoProperties = [
    {
      id: 1,
      title: "Opening Keynotes -  GSoC 2023 Demo Day",
      src: "https://youtu.be/zxj3cYgAol0?si=3gz0zr3Kx-Glh3K1",
      credit: "",
      year: "2023"
    },
    {
      id: 2,
      title: "Scaled Botpress Connector",
      src: "https://youtu.be/K6hGdhJ6Kt0?si=U-sYmLL6vyRML_pp",
      credit: "By Shubham Bhardwaj ",
      year: "2023"
    },
    {
      id: 3,
      title: "Whiteboard Integration",
      src: "https://youtu.be/Z1mx4Of5UjE?si=Q59K5UjTXwsUKdGi",
      credit: "By Vinayak Sharma",
      year: "2023"
    },
    {
      id: 4,
      title: "UiKit Playground 2.0",
      src: "https://youtu.be/pNdVJXnEnqI?si=NvkWYh7CRW9DiaEs",
      credit: "By Vivek Srivastava",
      year: "2023"
    },
    {
      id: 5,
      title: "Welcome Keynotes - Rocket.Chat Google Summer of Code 2022 Demo Day",
      src: "https://youtu.be/UkPzcJ20aJM?si=XAJHh-KLUS18uhgO",
      credit: "",
      year: "2022"
    },
    {
      id: 6,
      title: "Standalone Desktop Messaging cross-platforms Applet",
      src: "https://youtu.be/9GV2mkiyoBk?si=QtE9PO3j8AwbBkYV",
      credit: "By Ahmed Ibrahim",
      year: "2022"
    },
    {
      id: 7,
      title: "New Emoji Picker for Mobile Client",
      src: "https://youtu.be/m2f7KsN28n4?si=5p4AkWdKZSfdT09F",
      credit: "By Danish Ahmed Mirza",
      year: "2022"
    },
    {
      id: 8,
      title: "Botpress Connector Enhancements",
      src: "https://youtu.be/nuCdLnhiW_0?si=IX3Dkpyh5rmmDAUs",
      credit: "By Sangyul Cha",
      year: "2022"
    },
  ];
//   if (cms) {
//     const paginatedEvents = await getEvents()
//     events = paginatedEvents.docs
//   }
//   console.log(events);

  return <CarouselComponent data= {videoProperties}/>;
};

export const GsocDemoDay = ({ data, user }) => (
  <Suspense>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <GsocDemoDayContent
      data={data}
      user={user}
    />
  </Suspense>
);
