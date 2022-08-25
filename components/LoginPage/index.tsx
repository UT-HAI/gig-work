import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useAuth, useDispatchAuth } from "../AuthProvider";
import Layout from "../Layout";

export default function Login() {
  const router = useRouter();
  const userId = useAuth();
  const dispatch = useDispatchAuth();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({ type: "SET_USER_ID", payload: event.target.value });
    router.push('/')
  };

  return (
    <Layout title="Login" userId={userId}>
      <Typography variant="h5">Please Select User</Typography>
      <FormControl fullWidth>
        <InputLabel id="user-select-label">User</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          value={userId || ''}
          label="User"
          onChange={handleChange}
        >
        <MenuItem></MenuItem>
          <MenuItem value={1}>Default</MenuItem>
          <MenuItem value={2}>User1</MenuItem>
          <MenuItem value={3}>User2</MenuItem>
        </Select>
      </FormControl>
    </Layout>
  );
}
