import * as React from 'react';
import { Suspense } from 'react'
import { getLinks } from './api/index.js'
import ProjectsComponent from './projects-theme/project-component.js';
import { ReactElement } from 'react';

interface Project {
  title: string;
  projectDescription: string;
  githubLink: string;
  channelLink: string;
  contributor: string;
  skills: string;
  mentor: string;
  year: string;
}

interface GsocProjectsProps {
  data: Project[];
}

const GsocProjectsContent = async ({ data }: GsocProjectsProps) => {
  // console.log(user);
  let events = data;
 // add check to get the data from the cms and verify if its same, if not then update it
 
//   if (cms) {
//     const paginatedEvents = await getEvents()
//     events = paginatedEvents.docs
//   }
//   console.log(events);

  return <ProjectsComponent data={data}/>;
};

export const GsocProjects = ({ data }: GsocProjectsProps): ReactElement => (
  <Suspense>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <GsocProjectsContent
      data={data}
    />
  </Suspense>
);
