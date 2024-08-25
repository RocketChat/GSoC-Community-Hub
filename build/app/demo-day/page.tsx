// "use client"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { GsocDemoDay } from '@anjy7/gsoc-demo-day';
import {NavigationMenuDemo} from "@anjy7/navbar-cms"
import navItems from "@lib/navigation"
import events from '@lib/events';
import user from '@lib/superprofile'
export default async function Home() {


  return (
    <>
    <NavigationMenuDemo container={{}} data={navItems}/>
    <div className=''>
    </div>
      <h1 className='text-center text-4xl font-bold text-[#030c1a] md:text-3xl p-4'>
        <span className='text-[#f5455c]'>Google Summer of Code Demo Day</span>
      </h1>
      <h1 className='text-center text-xl md:text-xl text-gray-500 p-4'>
        <span >Explore the innovative projects showcased by the talented participants of the Google Summer of Code program.</span>
      </h1>
      {/* <Events cms={false} data={events} user={user}/> */}
      <GsocDemoDay/>
    </>
  );
}
