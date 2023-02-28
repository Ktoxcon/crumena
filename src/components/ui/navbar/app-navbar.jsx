import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function AppNavbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebarVisibility = () => {
    setSidebarVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton onClick={toggleSidebarVisibility}>
            <Menu />
          </IconButton>
          <Typography>Crumena</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isSidebarVisible}
        anchor="left"
        sx={{
          width: "drawerWidth",
        }}
        onClose={toggleSidebarVisibility}
      >
        <List>
          <ListItem>Test</ListItem>
        </List>
      </Drawer>
    </>
  );
}
