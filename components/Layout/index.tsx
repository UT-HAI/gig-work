import React, { ReactNode, useState } from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import AppDrawer from "../Drawer";
import { users } from "../AuthProvider/users";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

type LayoutProps = {
  children?: ReactNode;
  userId?: number;
  title: string;
}
export default function Layout({ children, userId, title }: LayoutProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSwitch = () => {
    router.push('/login')
    setAnchorEl(null);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Gig Work Mini-Game Collection</title>
        <meta name="description" content="Gig Work Mini-Game Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AppBar position="sticky" sx={{ width: "100%" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
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
              onClose={handleClose}
            >
              <MenuItem disabled>{userId && users[userId - 1]}</MenuItem>
              <MenuItem onClick={handleSwitch}>Switch user</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <AppDrawer open={open} onClose={handleDrawerClose}/>
        {children}
      </main>
      <footer className={styles.footer}>UT Austin HAI LAB</footer>
    </div>
  );
}
