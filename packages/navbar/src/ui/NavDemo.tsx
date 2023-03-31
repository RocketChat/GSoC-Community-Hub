"use client";

import React, { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./Navbar";

import Link from "next/link";
import { NavBarData, NavItems, SubTile } from "../server";
import { cn } from "@lib/utils";

type Props = {
  navData: NavBarData;
  navItems: NavItems;
  logo: ReactNode;
  logoSec: ReactNode
};

export const NavDemo = ({ navData, navItems, logo, logoSec }: Props) => {
  return (
    navItems.length > 0 &&
    (<header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          {logo}
          <span className="ml-3 text-xl">
            {navData.brandLogo.data.attributes.logoText}
          </span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((navItem) => {
                if (navItem.show) {
                  if (navItem.item.attributes.type === "variant1") {
                    return (
                      <NavigationMenuItem key={navItem.item.id + "variant1"}>
                        <NavigationMenuTrigger>
                          {navItem.item.attributes.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  <div className="mt-4 mb-2 text-lg font-medium text-white">
                                    {
                                      navItem.item.attributes.tile.data
                                        .attributes.description
                                    }
                                  </div>
                                  <p className="text-sm leading-tight text-white/90">
                                    {
                                      navItem.item.attributes.tile.data
                                        .attributes.description
                                    }
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            {navItem.item.attributes.subTiles.data.map(
                              (subTile: SubTile) => {
                                return (
                                  <ListItem
                                    key={subTile.id}
                                    href={subTile.attributes.href}
                                    title={subTile.attributes.title}
                                  >
                                    {subTile.attributes.description}
                                  </ListItem>
                                );
                              }
                            )}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  } else if (navItem.item.attributes.type === "variant2") {
                    return (
                      <NavigationMenuItem key={navItem.item.id + "variant2"}>
                        <NavigationMenuTrigger>
                          {navItem.item.attributes.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {navItem.item.attributes.components.data.map(
                              (component) => {
                                return (
                                  <ListItem
                                    key={component.id + "subcomp"}
                                    title={component.attributes.title}
                                    href={component.attributes.href}
                                  >
                                    {component.attributes.description}
                                  </ListItem>
                                );
                              }
                            )}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  } else if (navItem.item.attributes.type === "variant3") {
                    return (
                      <NavigationMenuItem key={navItem.item.id + "variant3"}>
                        <Link
                          href={navItem.item.attributes.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {navItem.item.attributes.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    );
                  }
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        {logoSec}
      </div>
    </header>)
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
