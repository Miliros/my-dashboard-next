import React from "react";
import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoLogoReact, IoFootball, IoHeartOutline} from "react-icons/io5";
import { SidebarMenuItem } from "./SideBarMenuItem";

import mili from "../app/dashboard/milagros.jpg"
const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={22} />,
    title: "Dashboard",
    subtitle: "Presentation",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={22} />,
    title: "Counter",
    subtitle: "Counter Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={22} />,
    title: "Pokemons",
    subtitle: "Static Generation",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={22} />,
    title: "Favorites",
    subtitle: "Global State",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-62  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className=" flex items-center text-sm md:text-xl text-white pr-4 ">
          <IoLogoReact size={22} className="mr-1 " />
          Dash<span className="text-green-600">board</span>.{" "}
        </h1>

        <p className="text-slate-500 text-xs pl-5 ml-2">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500 text-xs pl-10 mb-0">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center mt-0 ">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src={mili}
              alt="user avatar"
              width={80}
              height={60}
            />
          </span>
          <span className="text-sm font-bold">
            Milagros Rosales.
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-3">
        {menuItems.map((e) => (
          <SidebarMenuItem
            path={e.path}
            icon={e.icon}
            title={e.title}
            subtitle={e.subtitle}
            key={ e.path }
          />
        ))}

        {/* <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>                      
                </div>
                <div className="flex flex-col">
                    <span className="text-lg text-slate-300 font-bold leading-5">Counter</span>
                    <span className="text-sm text-slate-500 hidden md:block">Estado Local</span>
                </div>
            </a> */}
      </div>
    </div>
  );
};
