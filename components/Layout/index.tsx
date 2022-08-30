import React, { ReactNode, useState } from "react";
import Head from "next/head";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import {
  SCHEDULE_PAGE,
  useAppLocation,
  useLocationDispatch,
} from "../Provider/Location";
import TabButton from "./tab";
import UserMenu from "./menu";
import { useDispatchAuth } from "../Provider/Auth";

type LayoutProps = {
  children?: ReactNode;
  userId?: number;
};
export default function Layout({ children, userId }: LayoutProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const authDispatch = useDispatchAuth();
  const dispatchLocation = useLocationDispatch();
  const page = useAppLocation();
  const isSchedule = page === SCHEDULE_PAGE;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    authDispatch({ type: 'LOGOUT'})
    setAnchorEl(null);
    router.push("/login");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScheduleClick = () => {
    dispatchLocation({
      type: "SET_SCHEDULE_PAGE",
    });
  };

  const handleCompareClick = () => {
    dispatchLocation({
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
            <Typography variant="h6" component="div">
              Gig Work
            </Typography>
            <Box sx={{ flexGrow: 1, ml: 4, height: 64 }}>
              <TabButton selected={isSchedule} onClick={handleScheduleClick}>
                Schedule
              </TabButton>
              <TabButton selected={!isSchedule} onClick={handleCompareClick}>
                Compare
              </TabButton>
            </Box>
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
            <UserMenu
              anchorEl={anchorEl}
              onClose={handleClose}
              onLogout={handleLogout}
              userId={userId}
            />
          </Toolbar>
        </AppBar>
        <div
          style={{
            height: "100vh",
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
