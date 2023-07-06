import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { SidebarPropsItem } from "../sidebar";

export interface NavItemProps extends ListItemButtonProps {
  depth: number;
  item: SidebarPropsItem;
  rightIcon?: React.ReactElement;
}

function NavItem(props: NavItemProps) {
  const {
    depth,
    item: { name },
    rightIcon,
  } = props;

  return (
    <ListItemButton>
      <ListItemText primary={name} sx={{ pl: depth * 2 }} />
      {rightIcon}
    </ListItemButton>
  );
}

export default NavItem;
