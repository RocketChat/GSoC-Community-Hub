import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/test';

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-200">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-800">{children}</h2>
);

const CardDescription = ({ children }) => (
  <p className="mt-1 text-sm text-gray-600">{children}</p>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

const YouTubeVideo = ({ videoId, title, description }) => (
  <Card className="w-full max-w-3xl mb-8">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </CardContent>
  </Card>
);

const YouTubeVideoList = ({ videos }) => {
  return (
    <>
    <div className="flex flex-col items-center p-4 space-y-8">
      {videos.map((video, index) => (
        <YouTubeVideo
        key={index}
        videoId={video.videoId}
        title={video.title}
        description={video.description}
        />
      ))}
    </div>
      </>
  );
};

export default function VideoGallery() {
  const videoData = [
    {
      videoId: "JIr9aMTiCWo",
      title: "rocket.lab apps building 101 at #rocketgov hackathon",
      description: "We produced another rocket.lab episode at the RocketGov hackathon, if you're interested in apps development please join https://open.rocket.chat/channel/dev"
    },
    {
      videoId: "PaFPeD6QG9k",
      title: "Rocket.Chat Apps Development Webinar",
      description: "In this webinar, Douglas Gubert, Rocket.Chat Apps Advocate, will demonstrate how to leverage the Rocket.Chat Apps-Engine to extend Rocket.Chat's functionality. Featuring a special live appearance by Rodrigo Nascimento, CTO Rocket.Chat."
    },
    {
      videoId: "GDUrHyDqwbI",
      title: "Building In-App Chat With Rocket.Chat",
      description: "Building chat capabilities into your app, though, is a massive undertaking. (Don't even get me started on maintaining those capabilities.) If in-app chat is in your roadmap, this session is 100% for you."
    }
  ];

  return (
    <>
         <NavigationMenuDemo data={navItems} />
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Rocket.Chat Apps Workshop</h1>
      <YouTubeVideoList videos={videoData} />
    </div>
    </>
  );
}