import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Suspense } from 'react';
import ProjectsComponent from './projects-theme/project-component.js';
const GsocProjectsContent = async ({ data })=>{
    // console.log(user);
    let events = data;
    // add check to get the data from the cms and verify if its same, if not then update it
    //   if (cms) {
    //     const paginatedEvents = await getEvents()
    //     events = paginatedEvents.docs
    //   }
    //   console.log(events);
    return /*#__PURE__*/ _jsx(ProjectsComponent, {
        data: data
    });
};
export const GsocProjects = ({ data })=>/*#__PURE__*/ _jsx(Suspense, {
        children: /*#__PURE__*/ _jsx(GsocProjectsContent, {
            data: data
        })
    });
