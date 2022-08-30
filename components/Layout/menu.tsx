import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { users } from "../Provider/Auth/users";

type MenuProps = {
  anchorEl: null | HTMLElement;
  onClose: VoidFunction;
  onLogout: VoidFunction;
  userId?: number;
};

const UserMenu = ({ anchorEl, onClose, userId, onLogout }: MenuProps) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem disabled>{userId && users[userId - 1]}</MenuItem>
      <MenuItem onClick={onLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default UserMenu;
