import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { GsocProjects } from 'gsoc-projects;';
import { navItems } from 'src/projects';
import { projects } from 'src/projects';

export default function Projects() {
  return (
    <>
<NavigationMenuDemo data={navItems} />
<GsocProjects data={projects} user={user}/>
    </>
  );
};
