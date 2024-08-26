import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { Events } from 'events-cms';
import { navItems } from 'src/demoDay';
import { speakers } from 'src/demoDay';
import { events } from 'src/demoDay';

export default function DemoDay() {
  return (
    <>
<NavigationMenuDemo data={navItems} />
<Events data={events} speakers={speakers}/>
    </>
  );
};
