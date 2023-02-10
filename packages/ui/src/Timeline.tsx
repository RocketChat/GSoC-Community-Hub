import * as React from "react";

export const Timeline = ({
  type,
  data,
  num,
}: {
  type: "vertical" | "horizontal";
  data: any;
  num: number;
}) => {
  if (type == "vertical" && data) {
    return (
      <ol className="ui-relative ui-border-l ui-border-gray-200 dark:ui-border-gray-700">
        {data.slice(0, data.length - 1).map((d: any) => {
          return (
            <li className="ui-mb-10 ui-ml-6">
              <span className="ui-absolute ui--left-3 ui-flex ui-h-6 ui-w-6 ui-items-center ui-justify-center ui-rounded-full ui-bg-blue-100 ui-ring-8 ui-ring-white dark:ui-bg-blue-900 dark:ui-ring-gray-900">
                <svg
                  aria-hidden="true"
                  className="ui-h-3 ui-w-3 ui-text-blue-800 dark:ui-text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="ui-mb-1 ui-flex ui-items-center ui-text-lg ui-font-semibold ui-text-gray-900 dark:ui-text-white">
                {d.title}
              </h3>
              <time className="ui-mb-2 ui-block ui-text-sm ui-font-normal ui-leading-none ui-text-gray-400 dark:ui-text-gray-500">
                Released on January 13th, 2022
              </time>
              <p className="ui-mb-4 ui-text-base ui-font-normal ui-text-gray-500 dark:ui-text-gray-400">
                {d.description}
              </p>
              <a
                href="#"
                className="ui-inline-flex ui-items-center ui-rounded-lg ui-border ui-border-gray-200 ui-bg-white ui-px-4 ui-py-2 ui-text-sm ui-font-medium ui-text-gray-900 hover:ui-bg-gray-100 hover:ui-text-blue-700 focus:ui-z-10 focus:ui-text-blue-700 focus:ui-outline-none focus:ui-ring-4 focus:ui-ring-gray-200 dark:ui-border-gray-600 dark:ui-bg-gray-800 dark:ui-text-gray-400 dark:hover:ui-bg-gray-700 dark:hover:ui-text-white dark:focus:ui-ring-gray-700"
              >
                <svg
                  className="ui-mr-2 ui-h-4 ui-w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                Download ZIP
              </a>
            </li>
          );
        })}
        <li className="ui-ml-6">
          <span className="ui-absolute ui--left-3 ui-flex ui-h-6 ui-w-6 ui-items-center ui-justify-center ui-rounded-full ui-bg-blue-100 ui-ring-8 ui-ring-white dark:ui-bg-blue-900 dark:ui-ring-gray-900">
            <svg
              aria-hidden="true"
              className="ui-h-3 ui-w-3 ui-text-blue-800 dark:ui-text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="ui-mb-1 ui-text-lg ui-font-semibold ui-text-gray-900 dark:ui-text-white">
            {data[data.length - 1].title}
          </h3>
          <time className="ui-mb-2 ui-block ui-text-sm ui-font-normal ui-leading-none ui-text-gray-400 dark:ui-text-gray-500">
            {data[data.length - 1].rating}
          </time>
          <p className="ui-text-base ui-font-normal ui-text-gray-500 dark:ui-text-gray-400">
            {data[data.length - 1].description}
          </p>
        </li>
      </ol>
    );
  } else if (type == "horizontal") {
    return (
      <ol className="ui-border-l ui-border-gray-300 md:ui-flex md:ui-justify-center md:ui-gap-6 md:ui-border-l-0 md:ui-border-t">
        {data.map((d: any) => {
          return (
            <li>
              <div className="flex-start ui-flex ui-items-center ui-pt-2 md:ui-block md:ui-pt-0">
                <div className="ui--ml-1 ui-mr-3 ui-h-2 ui-w-2 ui-rounded-full ui-text-gray-400 dark:ui-text-gray-500 md:ui-ml-0 md:ui-mr-0 md:ui--mt-1"></div>
                <p className="ui-mt-2 ui-text-sm ui-text-gray-500">
                  {d.rating}
                </p>
              </div>
              <div className="ui-mt-0.5 ui-ml-4 ui-pb-5 md:ui-ml-0">
                <h4 className="ui-mb-1.5 ui-text-xl ui-font-semibold ui-text-gray-900 dark:ui-text-white">
                  {d.title}
                </h4>
                <p className="ui-mb-3 ui-text-gray-500 dark:ui-text-gray-400">{d.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }
};
