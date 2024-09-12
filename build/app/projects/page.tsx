import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms'
import { GsocProjects } from '../../npm-components/gsoc-projects/dist'
import { navItems } from 'src/main';
import { projects } from 'src/projects';

export default function Projects() {
  return (
    <>
<NavigationMenuDemo data={navItems} />
<GsocProjects data={projects}/>
    </>
  );
};
