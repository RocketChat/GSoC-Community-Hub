export const navItems  = [
  {
    "type": "link",
    "link": "/",
    "label": "home"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/demoDay",
        "label": "GSoC Demo Day"
      },
      {
        "type": "link",
        "link": "/alummnisummit",
        "label": "GSoC Alumni Summit"
      },
    ],
    "label": "events"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/events",
        "label": "Open Source AI Club"
      },
    ],
    "label": "meet-ups"
  },
  {
    "type": "dropdown",
    "dropdown": [
      {
        "type": "link",
        "link": "/events",
        "label": "Rocket.Chat Apps Workshop"
      },
      {
        "type": "link",
        "link": "/events",
        "label": "Prompt Engineering Workshop"
      },
    ],
    "label": "workshops"
  },
  {
    "type": "link",
    "link": "/projects",
    "label": "projects"
  },
];

export const projects = [
    // {
    //   "title": "💡Extended LLM Prompt Editor/Explorer",
    //   "projectDescription": "A prompt editor is the quintessential development tool for any AI/ML prompt engineer. With ever-increasing number of Rocket.Chat users experimenting and developing with open source LLMs, it is important to have a great prompt editor at their disposal. This project includes the creation of a fully featured prompt editor as a Rocket.Chat app. This editor should enable free conversation, by any designated/configured Rocket.Chat user, to chat with any open source LLMs (Mistral, Llama 2, Phi, and so on), and the ability to save (and manage - delete etc) all conversation history. It should also enable a Rocket.Chat users to the prompt(s) to external applications. Initial implementation should be for the RC Web App (and Electron).",
    //   "githubLink": "project1",
    //   "channelLink": "project1",
    //   "contributor": "project1",
    //   "skills": "Rocket.Chat Apps development. LLM prompt editor dev experience",
    //   "mentor": "Shubham Bhardwaj, Gabriel Engel",
    //   "year": "2024"
    // },
    // {
    //   "title": "💡Graphical Guided RC Code Tours",
    //   "projectDescription": "Most Rocket.Chat developers uses VSCode when studying our massive production code base, and when writing new code. VSCode is the best environment for conducting interactive tutorial and code walkthroughs. The CodeTour extension available in VSCode can be used to create such walkthrough and tutorials. This project involves the development of a set of guided tutorials using CodeTour that will help new developers to understand how to perform multiple actions. In 2024, we want to extend these tours to include graphical diagrams and flow charts.",
    //   "githubLink": "project2",
    //   "channelLink": "project2",
    //   "contributor": "project2",
    //   "skills": "NodeJS, MongoDB",
    //   "mentor": "Aditya Singh, Kevin Aleman",
    //   "year": "2024"
    // },
    // {
    //   "title": "💡Whiteboard Integration",
    //   "projectDescription": "White boards and visual drawing/concepts sharing has become a stable of team collaboration. Rocket.Chat currently does not offer any whiteboarding feature. Markboard is an open source incumbent whiteboard created upon the same technology stack as Rocket.Chat and built by a team led by a Rocket.Chat GSoC alumni. This project will create a Rocket.Chat App that integrates Markboard into Rocket.Chat and extends its team collaboration features through Rocket.Chat.",
    //   "githubLink": "project1",
    //   "channelLink": "project1",
    //   "contributor": "project1",
    //   "skills": "Advanced Typescript. MeteorJS. Rocket.Chat Apps development",
    //   "mentor": "Shiqi Mei, Douglas Gubert",
    //   "year": "2023"
    // },
    // {
    //   "title": "💡Guided RC Code Walkthrough and Tutorial",
    //   "projectDescription": "Most Rocket.Chat developers use VSCode when studying our massive production code base, and when writing new code. VSCode is the best environment for conducting interactive tutorials and code walkthroughs. The CodeTour extension available in VSCode can be used to create such walkthroughs and tutorials. This project involves the development of a set of guided tutorials using CodeTour that will help new developers to understand how to perform multiple actions. Paths to be documented will go from these areas: - How a message is sent - How to create an endpoint - How to add a new service - How to create a DB model - How to use DB models - How services interact between them - How to build a lib - How to navigate monorepo (where is everything, how's imported, etc) We welcome any additional ideas you may have.",
    //   "githubLink": "project2",
    //   "channelLink": "project2",
    //   "contributor": "project2",
    //   "skills": "NodeJS, MongoDB",
    //   "mentor": "Kevin Aleman",
    //   "year": "2023"
    // },
    //
    {
      "title": "💡Whiteboard Integration",
      "projectDescription": "White boards and visual drawing/concepts sharing has become a stable of team collaboration. Rocket.Chat currently does not offer any whiteboarding feature. Markboard is an open source incumbent whiteboard created upon the same technology stack as Rocket.Chat and built by a team led by a Rocket.Chat GSoC alumni. This project will create a Rocket.Chat App that integrates Markboard into Rocket.Chat and extends its team collaboration features through Rocket.Chat.",
      "githubLink": "2023-whiteboard",
      "channelLink": "2023-whiteboard",
      "contributor": "TBA",
      "skills": "Advanced Typescript. MeteorJS. Rocket.Chat Apps development.",
      "mentor": "Shiqi Mei, Douglas Gubert",
      "year": "2023"
    },
    {
      "title": "💡Guided RC Code Walkthrough and Tutorial",
      "projectDescription": "Most Rocket.Chat developers uses VSCode when studying our massive production code base, and when writing new code. VSCode is the best environment for conducting interactive tutorial and code walkthroughs. The CodeTour extension available in VSCode can be used to create such walkthrough and tutorials. This project involves the development of a set of guided tutorials using CodeTour that will help new developers to understand how to perform multiple actions.",
      "githubLink": "2023-guided-walkthrough",
      "channelLink": "2023-guided-walkthrough",
      "contributor": "TBA",
      "skills": "NodeJS, MongoDB",
      "mentor": "Kevin Aleman",
      "year": "2023"
    },
    {
      "title": "💡Flutter SDK for Rocket.Chat",
      "projectDescription": "This project aims to create an easy to integrate flutter component to embed Rocket.Chat into any existing and new flutter applications (similar to our existing EmbeddedChat project). In addition, a layer of Dart friendly API/stub needs to be created for application that needs in-depth modification of chat behavior or needing to use the chat engine as a messaging fabric.",
      "githubLink": "2023-flutter-sdk",
      "channelLink": "2023-flutter-sdk",
      "contributor": "TBA",
      "skills": "Flutter, Flutter components construction, Dart, JavaScript. A thorough understanding of how Rocket.Chat core works. Knowledge of Flutter multi-platform development (Android, iOS, Linux, Windows and MacOS).",
      "mentor": "Sing Li, Debdut Chakraborty",
      "year": "2023"
    },
    {
      "title": "💡Mobile App Share Extension Update",
      "projectDescription": "Rewrite our current mobile apps share extension in Swift for iOS and Kotlin for Android, making sure that it supports the latest ReactNative Fabric architecture.",
      "githubLink": "2023-mobile-share-extension",
      "channelLink": "2023-mobile-share-extension",
      "contributor": "TBA",
      "skills": "Advanced ReactNative. Good knowledge of native iOS and Android development. Passion for creating great mobile experiences.",
      "mentor": "Daniel Silva",
      "year": "2023"
    },
    {
      "title": "💡Scaled botpress Connector",
      "projectDescription": "This project aims to create a new botpress connector app that will work and scale with new microservices architecture to deliver multiple bots running concurrently, support for omnichannel operation, improved rendering of messages, and new APIs for chatbot operation.",
      "githubLink": "2023-botpress-connector",
      "channelLink": "2023-botpress-connector",
      "contributor": "TBA",
      "skills": "Typescript, Rocket.Chat Apps, botpress internals, Rocket.Chat Apps.",
      "mentor": "Yash Rajpal",
      "year": "2023"
    },
    {
      "title": "💡Improved Rocket.Chat Translations (i18n)",
      "projectDescription": "This project aims to both convert today's i18n to work with community friendly open source translation platform such as weblate and kick-off a translation community.",
      "githubLink": "2023-i18n-improvement",
      "channelLink": "2023-i18n-improvement",
      "contributor": "TBA",
      "skills": "Advanced Typescript. Familiarity with i18n platform and technologies, weblate preferred.",
      "mentor": "Douglas Fabris",
      "year": "2023"
    },
    {
      "title": "💡Miro App",
      "projectDescription": "Integrate Miro features into Rocket.Chat for daily use by team collaboration users. It should include features like using PlantUML to create boards, assigning boards to channels, creating sticky notes, and receiving notifications.",
      "githubLink": "2023-miro-app",
      "channelLink": "2023-miro-app",
      "contributor": "TBA",
      "skills": "JavaScript/TypeScript, ReactJS, MIro APIs",
      "mentor": "Mustafa Hasan Khan, Rafael Tapia",
      "year": "2023"
    },
    {
      "title": "💡Moderation Console Mute User Action and Emoji Votes",
      "projectDescription": "Add the action to allow muting of the user for a specific duration in the moderation console. Also, add a mini-reputation system through voting with special emojis to assist the moderator in deciding what to do with the reported user.",
      "githubLink": "2023-moderation-console",
      "channelLink": "2023-moderation-console",
      "contributor": "TBA",
      "skills": "ReactJS, TypeScript, MeteorJS. A thorough understanding of Moderation Console operations. Knowledge of how to expose additional core features to Apps.",
      "mentor": "Devanshu Sharma",
      "year": "2023"
    },
    {
      "title": "💡Embedded Chat 2023",
      "projectDescription": "This project aims to significantly expand the applicability of Embedded Chat for a wider range of web applications, including popular frameworks, hosting platforms, and web applications developed in various languages.",
      "githubLink": "2023-embedded-chat",
      "channelLink": "2023-embedded-chat",
      "contributor": "TBA",
      "skills": "React and NextJS. Absolute in-depth knowledge of Embedded Chat project. Thorough understand of modern web application development platform and technologies.",
      "mentor": "Sidharth Mohanty",
      "year": "2023"
    },
    {
      "title": "💡Extended LLM Prompt Editor/Explorer",
      "projectDescription": "A prompt editor is the quintessential development tool for any AI/ML prompt engineer. With ever-increasing number of Rocket.Chat users experimenting and developing with open source LLMs, it is important to have a great prompt editor at their disposal. This project includes the creation of a fully featured prompt editor as a Rocket.Chat app. This editor should enable free conversation, by any designated/configured Rocket.Chat user, to chat with any open source LLMs (Mistral, Llama 2, Phi, and so on), and the ability to save (and manage - delete etc) all conversation history. It should also enable a Rocket.Chat users to the prompt(s) to external applications. Initial implementation should be for the RC Web App (and Electron).",
      "githubLink": "project1",
      "channelLink": "project1",
      "contributor": "Ashutosh Singh Chauhan",
      "skills": "Rocket.Chat Apps development. LLM prompt editor dev experience",
      "mentor": "Shubham Bhardwaj, Gabriel Engel",
      "year": "2024"
    },
    {
      "title": "💡Graphical Guided RC Code Tours",
      "projectDescription": "Most Rocket.Chat developers uses VSCode when studying our massive production code base, and when writing new code. VSCode is the best environment for conducting interactive tutorial and code walkthroughs. The CodeTour extension available in VSCode can be used to create such walkthrough and tutorials. This project involves the development of a set of guided tutorials using CodeTour that will help new developers to understand how to perform multiple actions. In 2024, we want to extend these tours to include graphical diagrams and flow charts.",
      "githubLink": "project2",
      "channelLink": "project2",
      "contributor": "Sayan_Banerjee",
      "skills": "NodeJS, MongoDB",
      "mentor": "Aditya Singh, Kevin Aleman",
      "year": "2024"
    },
    {
      "title": "💡Whiteboard Integration",
      "projectDescription": "White boards and visual drawing/concepts sharing has become a stable of team collaboration. Rocket.Chat currently does not offer any whiteboarding feature. Markboard is an open source incumbent whiteboard created upon the same technology stack as Rocket.Chat and built by a team led by a Rocket.Chat GSoC alumni. This project will create a Rocket.Chat App that integrates Markboard into Rocket.Chat and extends its team collaboration features through Rocket.Chat.",
      "githubLink": "project1",
      "channelLink": "project1",
      "contributor": "project1",
      "skills": "Advanced Typescript. MeteorJS. Rocket.Chat Apps development",
      "mentor": "Shiqi Mei, Douglas Gubert",
      "year": "2023"
    },
    {
      "title": "💡Guided RC Code Walkthrough and Tutorial",
      "projectDescription": "Most Rocket.Chat developers use VSCode when studying our massive production code base, and when writing new code. VSCode is the best environment for conducting interactive tutorials and code walkthroughs. The CodeTour extension available in VSCode can be used to create such walkthroughs and tutorials. This project involves the development of a set of guided tutorials using CodeTour that will help new developers to understand how to perform multiple actions. Paths to be documented will go from these areas: - How a message is sent - How to create an endpoint - How to add a new service - How to create a DB model - How to use DB models - How services interact between them - How to build a lib - How to navigate monorepo (where is everything, how's imported, etc) We welcome any additional ideas you may have.",
      "githubLink": "project2",
      "channelLink": "project2",
      "contributor": "project2",
      "skills": "NodeJS, MongoDB",
      "mentor": "Kevin Aleman",
      "year": "2023"
    },
    {
      "title": "💡News Aggregation App",
      "projectDescription": "A Rocket.Chat app that collects news from top websites like TechCrunch, etc and sends its summary with a link to full content. The technical challenge would be to write different logic to collect news from different sources -> since some has API, some has RSS feed. These sources should be categorized and presented in a \"newspaper\" or \"news feed\" format. News sources and categories should be completely configurable.",
      "githubLink": "project3",
      "channelLink": "project3",
      "contributor": "Umang Utkarsh",
      "skills": "Rocket.Chat App development",
      "mentor": "Abhinav Kumar",
      "year": "2024"
    },
    {
      "title": "💡Embedded Chat 2024",
      "projectDescription": "Improvement to the EmbeddedChat project this year includes: Creation of a Rocket.Chat App to remotely configure the associated EmbeddedChat instance(s). Security improvements for authentication (one such is providing endpoints using the created EmbeddedChat app for RocketChat to support cookie-based authentication instead of storing the token in localStorage). Improving the UI library by making it completely headless and adding different pre-built templates). Bonus: improvements in UI kit rendering inside EmbeddedChat",
      "githubLink": "project4",
      "channelLink": "project4",
      "contributor": "Zishan_Ahmad",
      "skills": "Rocket.Chat App development",
      "mentor": "Sidharth Mohanty",
      "year": "2024"
    },
    {
      "title": "💡AI Assistant to help with understanding Rocket.Chat core codebase",
      "projectDescription": "The code base of Rocket.Chat is known to be unwieldy and large, and typically takes a skilled developer months to become familiar with. The purpose of this project is to create a Rocket.Chat app that offers an AI assisstant chatbot that can help with the understanding and learning of the Rocket.Chat code base. This bot should be slash command or GUI accessible and be able to answer structural or logical question about Rocket.Chat's code and how certain workflows are performed within the codebase. Ideally it should also extract and reference the associated source code lines during its operation. It is suggested that a Retrieval Augmented Generation pipeline be used to populate a vector database with indexed chunks of the Rocket.Chat code base; generation should leverage open source LLMs (Mistral, Llama2, CodeLlama, WizardCode, Phi and so on). Research and experimentation with chunking strategy, vector search algorithms, and other RAG variables is expected.",
      "githubLink": "project5",
      "channelLink": "project5",
      "contributor": "Prisha Gupta",
      "skills": "Rocket.Chat App development. LLM prompt design/engineering. RAG pipeline design and development.",
      "mentor": "Vinayak Sharma",
      "year": "2024"
    },
    {
      "title": "💡Quick Replies Functionality in RocketChat",
      "projectDescription": "Addition of a Quick Replies feature. This functionality would be similar to predefined answers in a helpdesk/support context, giving users the option to generate standardised responses. Some possible functionality: -Allow users to create and save a list of predefined quick replies. -These quick replies would be accessible through a simple button or keyboard shortcut. -Users could thus select a quick reply in lieu of manual text input, save time, and expedite the response process.",
      "githubLink": "project6",
      "channelLink": "project6",
      "contributor": "Vipin Chaudhary",
      "skills": "Familiarity with react and node; coding on typescript; AI will be a good addition.",
      "mentor": "Hugo Costa, Gabriel Casals",
      "year": "2024"
    },
    {
      "title": "💡AI Query Bot: a configurable Retrieval Augmented Generation pipleline executor",
      "projectDescription": "Create a Rocket.Chat app that answers queries by executing a configurable RAG pipeline. The RAG pipeline should be configurable via the App's setting - controlling aspects such a embedding/tokenizer engine, vector database search algorithms, re-ranking strategy, open source LLM used for generation (Mistral, Llama, Phi and so on); as well as any prompt used in the pipeline. The code should have at least two concrete config/examples within two non-trivial problem domains (feel free to use available public open source data collections).",
      "githubLink": "project7",
      "channelLink": "project7",
      "contributor": "Hunter Xia",
      "skills": "Rocket.Chat App development. LLM prompt design/engineering. RAG pipeline design and development.",
      "mentor": "Shiqi Mei",
      "year": "2024"
    },
    {
      "title": "💡Github App 2024: Enhanced AI PR summarizer, code reviewer and bug finder",
      "projectDescription": "Bringing our Github App into the 2024 AI age, this project will add ability to provide a AI generated summary of PRs to the code reviewers whenever a link is shared for a PR. The AI assistant should also help in reviewing C/C++, Java, Javascript, or Python code; in addition to help find possible bugs in the code involved. The app should leverage modern open source LLMs (Mistral, CodeLlama, WizardCode, Llama2, Phi, and so on) to perform its tasks.",
      "githubLink": "project8",
      "channelLink": "project8",
      "contributor": "project8",
      "skills": "Rocket.Chat App development. LLM prompt design/engineering.",
      "mentor": "Samad Khan",
      "year": "2024"
    },
    {
      "title": "💡Multiple files in one message",
      "projectDescription": "Addition of a feature enabling possibility to send multiple files (text files, images, audio, videos) in a same message; similar to what is seen on many other platforms.",
      "githubLink": "project9",
      "channelLink": "project9",
      "contributor": "Abhi Patel",
      "skills": "Familiarity with react and node; coding on typescript",
      "mentor": "DhruvJain, Rodrigo Nascimento",
      "year": "2024"
    },
    {
      "title": "💡API Documentation Generator",
      "projectDescription": "Based on the codebase and typescript definitions, generate the openapi and swagger files.",
      "githubLink": "project10",
      "channelLink": "project10",
      "contributor": "Akshun Kuthiala",
      "skills": "Knowledge of TypeScript, JavaScript, and Rocket.Chat API",
      "mentor": "Guilherme Gazzo, Rodrigo Nascimento",
      "year": "2024"
    },
    {
      "title": "💡AI in-channel GIF Image Generator",
      "projectDescription": "A slash command triggered Rocket.Chat app that will generate a small GIF image. The image generation should be controlled via a descriptive prompt issued by the user. The image can be inserted in-place within the chat or sent to the system clipboard. The app must leverage modern open source diffusion model such as Stable Diffusion in generating the image.",
      "githubLink": "project11",
      "channelLink": "project11",
      "contributor": "Aman-Negi",
      "skills": "Rocket.Chat App development. Diffusion models prompting. Artistic inclinations.",
      "mentor": "Nabhag Motivaras",
      "year": "2024"
    },
    {
      "title": "💡Google Summer of Code Community Hub 2024",
      "projectDescription": "With last year's contributor returning as mentor for this project, we continue the work of crafting a \"full stack component framework\" in which a scalable website can be created by non-technical users using drag-and-drop components that not only include UI and client-side logic, but also pre-scaled server-side behaviors (or serverless impl). The ultimate use-case we have been working on is the community hub for Rocket.Chat Google Summer of Code. It will link all the despearate servers into one easy to customize and maintain uniform scalable web app (comprise of a set of full-stack components).",
      "githubLink": "project12",
      "channelLink": "project12",
      "contributor": "Anjaneya Gupta",
      "skills": "Advanced Typescript, Advanced Next.js, Npm, SWC, Turborepo, Golang",
      "mentor": "M. Palanikannan",
      "year": "2024"
    },
    {
      "title": "💡Agile BOT",
      "projectDescription": "Agile adoption is increasing year to year on the different industries. There is an opportunity to add agile package bots to help squad with reminders, links and facilitate attendance to meeting based on simple calendar inputs and emoji reactions. Candidate will be working with Agile experts and Engineers to build some solutions for this space and help improve team/squads productivity. Successful contributor will propose and implement a Chatbot that solves a problem in agile. Candidate have a free choice of technology to implement the chatbot - RASA, Botpress, Dialogflow, and so on.",
      "githubLink": "project13",
      "channelLink": "project13",
      "contributor": "Hardik Bhatia",
      "skills": "Familiarity with TypeScript development. Demonstrated interest and/or passion in Agile and squad productivity tools.",
      "mentor": "Gabriel Casals, Felipe Scuciatto",
      "year": "2024"
    },
    {
      "title": "💡AI Chat Conversation Thread Summarizer",
      "projectDescription": "This Rocket.Chat app leverages modern open source LLMs (Mistral, Llama2, Phi, and so on) to summarize a conversation within a Rocket.Chat conversation thread. This summary should appear as either a private message to the invoking user, or become an in-line comment together with the discussion thread itself.",
      "githubLink": "project14",
      "channelLink": "project14",
      "contributor": "Jeffrey Yu",
      "skills": "Rocket.Chat App development. LLM prompt design/engineering.",
      "mentor": "Dnouv, José Petry",
      "year": "2024"
    },
    {
      "title": "💡Smart Scheduling App Assistant",
      "projectDescription": "Create a Rocket.Chat app that acts as a Smart Scheduling Assistant. The app should be able to understand the context of a conversation, suggest meeting times, send calendar invites, or set reminders based on the chat content. The app should be configurable via the App's settings, allowing customization of the AI's understanding and response generation. The code should include at least two concrete examples of scheduling scenarios.",
      "githubLink": "project15",
      "channelLink": "project15",
      "contributor": "Maria Khelli",
      "skills": "Rocket.Chat App development. LLM prompt development, including function calling (tools pattern). Experience with calendar APIs (specifically Google Calendar API).",
      "mentor": "Douglas Gubert, Dnouv, Sing Li",
      "year": "2024"
    },
    {
      "title": "💡Playground for UIKit ReactJS components",
      "projectDescription": "Develop an application/playground that allows developers to test UIKit ReactJS components and Interactions. Should allow developers to generate code used by Rocket.Chat apps and edit the content to preview the result.",
      "githubLink": "2022-uikit-playground",
      "channelLink": "2022-uikit-playground",
      "contributor": "TBA",
      "skills": "JavaScript/TypeScript, ReactJS",
      "mentor": "Martin Schoeler, Guilherme Gazzo",
      "year": "2022"
    },
    {
      "title": "💡Tasks and workflow automation App with n8n",
      "projectDescription": "This project involves the creation of a Rocket.Chat app that connects to n8n, enabling Rocket.Chat to participate richly in the n8n ecosystem. We want to extend the existing n8n node, with the help of a Rocket.Chat app, to support the rich feature set offered by Rocket.Chat.",
      "githubLink": "2022-n8n-automation",
      "channelLink": "2022-n8n-automation",
      "contributor": "TBA",
      "skills": "Familiarity with Typescript and Rocket.Chat App development",
      "mentor": "Fongang Rodrique, Chris Skelly",
      "year": "2022"
    },
    {
      "title": "💡Rocket.Chat ReactJS fullstack Component",
      "projectDescription": "Create a ready-to-go easy to embed mini-chat React component. This component should be configurable to use any public channel on a Rocket.Chat server. The challenge here is to create a futuristic full-stack component that bundles tightly coupled backend behaviours with standard front-end ReactJS components.",
      "githubLink": "2022-reactjs-component",
      "channelLink": "2022-reactjs-component",
      "contributor": "TBA",
      "skills": "ReactJS component creation experience, understanding of Rocket.Chat server internals",
      "mentor": "Rohan Lekhwani",
      "year": "2022"
    },
    {
      "title": "💡Chatbot Engine Connector: Botpress",
      "projectDescription": "This project extends a existing community-contributed Botpress connector to facilitate deployment of Botpress chatbots and Omnichannel bots. Focus here will include better rich UI/UX / interaction support for bots and ability to run multiple instances of multiple bots.",
      "githubLink": "2022-botpress-connector",
      "channelLink": "2022-botpress-connector",
      "contributor": "TBA",
      "skills": "Javascript and Typescript development. Keen interest in Bots and Chatbots.",
      "mentor": "Frank Dase",
      "year": "2022"
    },
    {
      "title": "💡Multi-bots support for Dialogflow App and Rasa App",
      "projectDescription": "Improve the existing Omnichannel Chatbot integrations (Dialogflow and Rasa), by allowing them to connect multiple chatbot accounts to a single Rocket.chat server. This will allow companies to serve chatbots in multiple languages, across multiple domains, right from a single Rocket.Chat instance.",
      "githubLink": "2022-multi-bots-support",
      "channelLink": "2022-multi-bots-support",
      "contributor": "TBA",
      "skills": "Familiarity with TypeScript development. Familiarity with Rocket.Chat App's development framework",
      "mentor": "Murtaza Patrawala",
      "year": "2022"
    },
    {
      "title": "💡Rocket.Chat Golang SDK",
      "projectDescription": "Create a Golang module to enable any Go package to talk to a Rocket.Chat server with ease, making it possible to create from custom clients to bots.",
      "githubLink": "2022-golang-sdk",
      "channelLink": "2022-golang-sdk",
      "contributor": "TBA",
      "skills": "Golang, API development",
      "mentor": "Cauê Felchar, Aaron Ogle",
      "year": "2022"
    },
    {
      "title": "💡Rocket.Chat for Virtual Conferences - Eventyay integration",
      "projectDescription": "Create a totally open source end-to-end solution for planning, management and running of online virtual events. Investigate integration with FOSSASIA's Eventyay platform for even planning and management.",
      "githubLink": "2022-virtual-conferences",
      "channelLink": "2022-virtual-conferences",
      "contributor": "TBA",
      "skills": "ReactJS and NextJS development experience. Fluent with Python development. Good understanding of video conference technology and realtime chat platforms.",
      "mentor": "Marcos Defendi, Sing Li",
      "year": "2022"
    },
    {
      "title": "💡Standalone Desktop Messaging cross-platforms Applet",
      "projectDescription": "Create a simpler desktop application similar to the old Google Talk, with a simple channels list on a little window and each chat opening in another separated window, making the usage of Rocket.chat more seamless.",
      "githubLink": "2022-desktop-applet",
      "channelLink": "2022-desktop-applet",
      "contributor": "TBA",
      "skills": "Familiarity with ElectronJS and TypeScript",
      "mentor": "Jean Brito, Gabriel Casals",
      "year": "2022"
    },
    {
      "title": "💡Omnichannel users identity verification",
      "projectDescription": "Implement a new and \"native\" identity verification mechanism for Omnichannel end-users, such as Live Chat visitors who, depending on the use case, have to provide personal data like email addresses, etc.",
      "githubLink": "2022-omnichannel-verification",
      "channelLink": "2022-omnichannel-verification",
      "contributor": "TBA",
      "skills": "Familiarity with JavaScript development. Good understanding of the architecture of Rocket.Chat's Omnichannel implementation.",
      "mentor": "Kevin Aleman, Martin Schoeler",
      "year": "2022"
    },
    {
      "title": "💡IRC Bridge: improve ease of deployment and stability",
      "projectDescription": "Update the IRC bridge to be compatible with Rocket.Chat's scaled configuration. Investigate extracting from core code base and repackaging as Rocket.Chat App or npm module. Create additional configuration/provisioning options and DevOps images to improve the administrator's experience.",
      "githubLink": "2022-irc-bridge",
      "channelLink": "2022-irc-bridge",
      "contributor": "TBA",
      "skills": "Familiarity with Typescript development. User of IRC and an understanding of how it works. An understanding of how Rocket.Chat scales.",
      "mentor": "Gabriel Engel",
      "year": "2022"
    },
    {
      "title": "💡Out of office settings with assigning deputy",
      "projectDescription": "Create out-of-office functionality in Rocket.Chat, allowing users to set auto-reply messages, select channels for notifications, and assign deputies who can automatically be added to channels during the user's absence.",
      "githubLink": "2021-out-of-office",
      "channelLink": "2021-out-of-office",
      "contributor": "TBA",
      "skills": "Familiarity with Rocket.Chat, nodeJS, Experience with ReactJS. Must have database skills, ideally MongoDB.",
      "mentor": "amol.babu, asrar",
      "year": "2021"
    },
    {
      "title": "💡Ephemeral messages",
      "projectDescription": "Create a channel type where messages will vanish after a configured amount of time. This would be a room setting where you can define how long the messages will last.",
      "githubLink": "2021-ephemeral-messages",
      "channelLink": "2021-ephemeral-messages",
      "contributor": "TBA",
      "skills": "Familiarity with JS Full Stack web app development. Experience with MongoDB and PM2 are ideal.",
      "mentor": "kevin.aleman",
      "year": "2021"
    },
    {
      "title": "💡Voice Channels",
      "projectDescription": "Add the ability to create voice channels that allow users to quickly enter and leave pre-existing voice calls from Rocket.Chat's own UI, enabling more practical usage of audio features for team collaboration.",
      "githubLink": "2021-voice-channels",
      "channelLink": "2021-voice-channels",
      "contributor": "TBA",
      "skills": "Familiarity with nodeJS full-stack web app development.",
      "mentor": "douglas.fabris, pierre.lehnen",
      "year": "2021"
    },
    {
      "title": "💡Decentralized Storage Integration",
      "projectDescription": "Add new decentralized P2P-based storage providers within Rocket.Chat. Files uploaded on Rocket.Chat should be stored on the decentralized network and be accessible within Rocket.Chat.",
      "githubLink": "2021-decentralized-storage",
      "channelLink": "2021-decentralized-storage",
      "contributor": "TBA",
      "skills": "Familiarity with nodeJS full-stack web app development. Experience with Rocket.Chat codebase and/or with any of the decentralized solution providers is ideal.",
      "mentor": "murtaza.patrawala",
      "year": "2021"
    },
    {
      "title": "💡Omnichannel: Help Center",
      "projectDescription": "Add a Help Center within the Omnichannel Domain of Rocket.Chat. This will allow the creation of content that will answer people's simple questions faster, providing a self-serve support layer.",
      "githubLink": "2021-omnichannel-help-center",
      "channelLink": "2021-omnichannel-help-center",
      "contributor": "TBA",
      "skills": "Familiarity with nodeJS full stack web app development. Experience with ReactJS is ideal.",
      "mentor": "murtaza.patrawala",
      "year": "2021"
    },
    {
      "title": "💡Apps-Engine E2E Testing",
      "projectDescription": "Improve Apps-Engine end-to-end testing by adding more testing cases. The Apps-Engine APIs should be covered as much as possible to ensure that APIs tested are working.",
      "githubLink": "2021-apps-engine-testing",
      "channelLink": "2021-apps-engine-testing",
      "contributor": "TBA",
      "skills": "Familiarity with JavaScript. Experience with TypeScript and end-to-end testing is better.",
      "mentor": "lolimay, govind.dixit",
      "year": "2021"
    },
    {
      "title": "💡Poll App Mega Extensions",
      "projectDescription": "Expand the scope and capabilities of the existing poll app, making it a tool for enhancing participant's engagement with interactive quizzes/trivia / live-polls.",
      "githubLink": "2021-poll-app-extensions",
      "channelLink": "2021-poll-app-extensions",
      "contributor": "TBA",
      "skills": "JavaScript, TypeScript, React, current poll-app codebase and Rocket.Chat + Fuselage codebase.",
      "mentor": "ramkumar.kb, diego.sampaio",
      "year": "2021"
    },
    {
      "title": "💡Language Power Tools",
      "projectDescription": "Create internal scripts to extract translation strings from the source code and provide options for managing translations across languages.",
      "githubLink": "2021-language-power-tools",
      "channelLink": "2021-language-power-tools",
      "contributor": "TBA",
      "skills": "JavaScript / TypeScript",
      "mentor": "rodrigo.nascimento",
      "year": "2021"
    },
    {
      "title": "💡Introduce Video and Audio calls to Live Chat",
      "projectDescription": "Add support for Video and Audio calls in the Live Chat Omnichannel entry point, implementing new features using WebRTC framework.",
      "githubLink": "2021-livechat-video-audio",
      "channelLink": "2021-livechat-video-audio",
      "contributor": "TBA",
      "skills": "Experience with JavaScript, ReactJS and WebRTC, and WebSocket API.",
      "mentor": "rafaelferreira, murtaza.patrawala",
      "year": "2021"
    },
    {
      "title": "💡App: Speech-to-Text",
      "projectDescription": "Create an app that saves a text version of audio in the file metadata, done server-side upon receiving the audio.",
      "githubLink": "2021-speech-to-text",
      "channelLink": "2021-speech-to-text",
      "contributor": "TBA",
      "skills": "Familiarity with JavaScript and TypeScript. Knowledge in how to build Rocket.Chat Apps is a plus.",
      "mentor": "marcelo.schmidt",
      "year": "2021"
    }
]
