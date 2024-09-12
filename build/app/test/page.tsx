import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms'
import { navItems } from 'src/test';

export default function Test() {
  return (
    <>
<NavigationMenuDemo data={navItems} />
    </>
  );
};
