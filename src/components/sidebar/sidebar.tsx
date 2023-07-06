import NavMenu from "./nav-menu";

export interface SidebarPropsItem {
  name: string;
  path: string;
  items?: SidebarPropsItem[];
}

export interface SidebarProps {
  items: SidebarPropsItem[];
}

function Sidebar(props: SidebarProps) {
  const { items } = props;

  return <NavMenu items={items} />;
}

export default Sidebar;
