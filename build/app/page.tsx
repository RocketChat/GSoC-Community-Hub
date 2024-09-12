"use client"
import React from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/test';
import { getCookie } from 'cookies-next';

export default function Main() {

  let username = getCookie('username') || '';
  // username = "anjy7"

  console.log("++++++++++++",username)

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavigationMenuDemo data={navItems} />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
      <h1 className='text-center text-4xl font-bold text-[#030c1a] md:text-5xl'>
           <>Welcome to our<span className='text-[#f5455c]'> community !</span></> {username ? ` ${username}` : ''} 
          </h1>
        <p className='w-10/12 text-center text-[clamp(16px,4.5vw,20px)] font-normal text-[#87898d] md:w-8/12'>
            Let's dream, share, and collaborate in shaping the future of the Rocket.Chat ecosystem
            together
          </p>
      </main>
    </div>
    </>
  );
}
