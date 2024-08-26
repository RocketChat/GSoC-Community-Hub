import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
interface EventsComponentProps {
    data: Project[];
}
declare const ProjectsComponent: React.FC<EventsComponentProps>;
export default ProjectsComponent;
