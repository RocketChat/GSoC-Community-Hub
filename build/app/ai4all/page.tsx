import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/main';
// import { Button } from '@/components/ui/button';

export default function Main() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavigationMenuDemo data={navItems} />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Open Source AI Club</h1>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
          Join our community of AI enthusiasts and contribute to exciting open-source projects!
        </p>
        <a href="https://go.rocket.chat/invite?host=open.rocket.chat&path=invite%2F77uZqC" target="_blank">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-lg transition duration-300"
          >
          Join Now
        </button>
          </a>
      </main>
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">&copy; 2024 Open Source AI Club. All rights reserved.</p>
      </footer>
    </div>
  );
};