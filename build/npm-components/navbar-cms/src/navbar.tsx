import { Suspense } from 'react';
import Navigation from './navigation-theme/navigation-component.js';
import { NavigationPropsT } from './types.js';

const NavigationContent = async ({ data, container }: NavigationPropsT) => {
  return (
    <Navigation
      data={data}
      container={container}
    />
  );
};

export const NavigationMenuDemo = ({ data, container }: NavigationPropsT) => {
  return (
    <Suspense>
      {/* @ts-ignore: Async components are valid in the app directory */}
      <NavigationContent
        container={container}
        data={data}
      />
    </Suspense>
  );
};

