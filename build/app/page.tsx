import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/main';

export default function Main() {
  return (
    <>
<NavigationMenuDemo data={navItems} />
    </>
  );
};
