import React from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

type DrawerProps = {
  open: boolean;
  onClose: VoidFunction;
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AppDrawer({ open, onClose }: DrawerProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
    >
      <DrawerHeader>
        <IconButton
          size="large"
          edge="start"
          aria-label="close-drawer"
          onClick={onClose}
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem>
          <Link href="/minigame">
            <ListItemButton>MiniGame 4</ListItemButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/">
            <ListItemButton>Comparisons</ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
