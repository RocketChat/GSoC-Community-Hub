import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms'
import { Events } from '../../npm-components/events-cms/dist'
import { navItems } from 'src/main';
import { speakers } from 'src/demoDay';
import { events } from 'src/demoDay';

export default function DemoDay() {
  return (
    <>
<NavigationMenuDemo data={navItems} />
<Events data={events} speakers={speakers} />
    </>
  );
};
