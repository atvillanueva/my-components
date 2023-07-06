import { Fragment, useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { SidebarPropsItem } from "../sidebar";
import NavMenu from "./nav-menu";
import NavItem from "./nav-item";

export interface NavGroupProps {
  depth: number;
  item: SidebarPropsItem;
}

function NavGroup(props: NavGroupProps) {
  const { depth, item } = props;
  const { items = [] } = item;

  const [toggled, toggle] = useState(false);

  const rightIcon = (
    <IconButton size="small" onClick={() => toggle((prevState) => !prevState)}>
      {toggled ? <ExpandLess /> : <ExpandMore />}
    </IconButton>
  );

  return (
    <Fragment>
      <NavItem depth={depth} item={item} rightIcon={rightIcon} />
      <Collapse in={toggled} timeout="auto" unmountOnExit>
        <NavMenu disablePadding depth={depth + 1} items={items} />
      </Collapse>
    </Fragment>
  );
}

export default NavGroup;
