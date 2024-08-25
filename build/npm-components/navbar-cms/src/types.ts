export type LinkItemT = {
  type: 'link';
  link: string;
  label: string;
};

export type DropdownItemT = {
  type: 'dropdown';
  dropdown: (LinkItemT | DropdownItemT)[];
  label: string;
  link?: string;
  id?: string;
};

export type NavItemT = LinkItemT | DropdownItemT;

export type NavigationDataT = NavItemT[];

export type ContainerStyleT = React.CSSProperties;

export type NavigationPropsT = {
  data: NavigationDataT;
  container?: ContainerStyleT;
};

export type NavigationMenuItemPropsT = {
    item: NavItemT;
  };