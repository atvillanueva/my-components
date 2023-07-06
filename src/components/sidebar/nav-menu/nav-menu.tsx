import List, { ListProps } from "@mui/material/List";

import { SidebarPropsItem } from "../sidebar";
import NavGroup from "./nav-group";
import NavItem from "./nav-item";

export interface NavMenuProps extends ListProps {
  depth?: number;
  items: SidebarPropsItem[];
}

function NavMenu(props: NavMenuProps) {
  const { depth = 0, items, ...other } = props;

  return (
    <List {...other}>
      {items.map((item, index) =>
        item.items ? (
          <NavGroup key={index} depth={depth} item={item} />
        ) : (
          <NavItem key={index} depth={depth} item={item} />
        )
      )}
    </List>
  );
}

export default NavMenu;
