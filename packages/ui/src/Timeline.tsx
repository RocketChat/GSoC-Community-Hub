import * as React from "react";

export const Timeline = () => {
  return (
    <ol className="ui-relative ui-border-l ui-border-gray-200 dark:ui-border-gray-700">
      <li className="ui-mb-10 ui-ml-4">
        <div className="ui-absolute ui-w-3 ui-h-3 ui-bg-gray-200 ui-rounded-full ui-mt-1.5 ui--left-1.5 ui-border ui-border-white dark:ui-border-gray-900 dark:ui-bg-gray-700"></div>
        <time className="ui-mb-1 ui-text-sm ui-font-normal ui-leading-none ui-text-gray-400 dark:ui-text-gray-500">
          February 2022
        </time>
        <h3 className="ui-text-lg ui-font-semibold ui-text-gray-900 dark:ui-text-white">
          Application UI code in Tailwind CSS
        </h3>
        <p className="ui-mb-4 ui-text-base ui-font-normal ui-text-gray-500 dark:ui-text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
        <a
          href="#"
          className="ui-inline-flex ui-items-center ui-px-4 ui-py-2 ui-text-sm ui-font-medium ui-text-gray-900 ui-bg-white ui-border ui-border-gray-200 ui-rounded-lg hover:ui-bg-gray-100 hover:ui-text-blue-700 focus:ui-z-10 focus:ui-ring-4 focus:ui-outline-none focus:ui-ring-gray-200 focus:ui-text-blue-700 dark:ui-bg-gray-800 dark:ui-text-gray-400 dark:ui-border-gray-600 dark:hover:ui-text-white dark:hover:ui-bg-gray-700 dark:focus:ui-ring-gray-700"
        >
          Learn more{" "}
          <svg
            className="ui-w-3 ui-h-3 ui-ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
      <li className="ui-mb-10 ui-ml-4">
        <div className="ui-absolute ui-w-3 ui-h-3 ui-bg-gray-200 ui-rounded-full ui-mt-1.5 ui--left-1.5 ui-border ui-border-white dark:ui-border-gray-900 dark:ui-bg-gray-700"></div>
        <time className="ui-mb-1 ui-text-sm ui-font-normal ui-leading-none ui-text-gray-400 dark:ui-text-gray-500">
          March 2022
        </time>
        <h3 className="ui-text-lg ui-font-semibold ui-text-gray-900 dark:ui-text-white">
          Marketing UI design in Figma
        </h3>
        <p className="ui-text-base ui-font-normal ui-text-gray-500 dark:ui-text-gray-400">
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </p>
      </li>
      <li className="ui-ml-4">
        <div className="ui-absolute ui-w-3 ui-h-3 ui-bg-gray-200 ui-rounded-full ui-mt-1.5 ui--left-1.5 ui-border ui-border-white dark:ui-border-gray-900 dark:ui-bg-gray-700"></div>
        <time className="ui-mb-1 ui-text-sm ui-font-normal ui-leading-none ui-text-gray-400 dark:ui-text-gray-500">
          April 2022
        </time>
        <h3 className="ui-text-lg ui-font-semibold ui-text-gray-900 dark:ui-text-white">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p className="ui-text-base ui-font-normal ui-text-gray-500 dark:ui-text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
    </ol>
  );
};
