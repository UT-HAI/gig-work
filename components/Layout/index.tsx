import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { users } from "../Provider/Auth/users";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { SCHEDULE_PAGE, useAppLocation, useLocationDispatch } from "../Provider/Location";

type LayoutProps = {
  children?: ReactNode;
  userId?: number;
};
export default function Layout({ children, userId }: LayoutProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const router = useRouter();
   const dispatch = useLocationDispatch()
   const page = useAppLocation()
const isSchedule = page === SCHEDULE_PAGE
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSwitch = () => {
    router.push("/login");
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScheduleClick = () => {
    dispatch({
      type: "SET_SCHEDULE_PAGE",
    });

  };

  const handleCompareClick = () => {
    dispatch({
      type: "SET_COMPARE_PAGE",
    });
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gig Work
            </Typography>
            <Button
              sx={{ color: "#fff" }}
              disabled={isSchedule}
              variant="outlined"
              onClick={handleScheduleClick}
            >
              Schedule
            </Button>
            <Button sx={{ color: "#fff" }} onClick={handleCompareClick}               disabled={!isSchedule}
>
              Compare
            </Button>
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
        <div style={{ height: "100%" }}>
            {children}
        </div>
      </main>
      <footer className={styles.footer}>UT Austin HAI LAB</footer>
    </div>
  );
}
