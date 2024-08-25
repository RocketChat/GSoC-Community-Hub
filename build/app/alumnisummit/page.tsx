import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { Events } from 'events-cms;';
import { navItems } from 'src/alumnisummit';
import { session } from 'src/alumnisummit';

export default function Alumnisummit() {
  return (
    <>
<NavigationMenuDemo data={navItems} />
<Events data={session}/>
    </>
  );
};
