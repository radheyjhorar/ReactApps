import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SideDrawer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const PAGES = [
    "Products",
    "Services",
    "ContactUS",
    "About Us",
    "LogIn",
    "LogOut",
  ];
  return (
    <div>
      <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List>
            {PAGES.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <IconButton
          style={{ marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon sx={{ color: "white", fontSize: "2.5rem" }} />
        </IconButton>
      </React.Fragment>
    </div>
  );
};

export default SideDrawer;
