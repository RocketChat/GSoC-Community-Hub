"use client";

import { ReactNode } from "react";

import { NavBarData, NavItems, SubTile } from "../server";
import { CenterVariant } from "./CenterVariant";
import { RightVariant } from "./RightVariant";
import { LeftVariant } from "./LeftVariant";
import { ReverseVariant } from "./ReverseVariant";

type Props = {
  navData: NavBarData;
  navItems: NavItems;
  logo: ReactNode;
  logoSec: ReactNode;
  layoutVariant: "center" | "right" | "left" | "reverse"
};

export const NavDemo = ({ navData, navItems, logo, logoSec, layoutVariant }: Props) => {
  if (layoutVariant === "center") {
    return (
      <CenterVariant navData={navData} navItems={navItems} logo={logo} logoSec={logoSec} />
    );
  } else if (layoutVariant === "right") {
    return (
      <RightVariant navData={navData} navItems={navItems} logo={logo} logoSec={logoSec} />
    );
  } else if (layoutVariant === "left") {
    return (
      <LeftVariant navData={navData} navItems={navItems} logo={logo} logoSec={logoSec} />
    );
  }
  else if (layoutVariant === "reverse") {
    return (
      <ReverseVariant navData={navData} navItems={navItems} logo={logo} logoSec={logoSec} />
    );
  }
};

