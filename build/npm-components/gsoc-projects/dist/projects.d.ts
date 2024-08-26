interface Project {
    title: string;
    projectDescription: string;
    githubLink: string;
    channelLink: string;
    contributor: string;
    skills: string;
    mentor: string;
    year: string;
}
export declare const GsocProjects: ({ data }: {
    data: Project[];
}) => import("react/jsx-runtime").JSX.Element;
export {};
