import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { SyntheticEvent } from "react";
import { useAuth, useDispatchAuth } from "../AuthProvider";
import { users } from "../AuthProvider/users";
import Layout from "../Layout";

export default function Login() {
  const router = useRouter();
  const userId = useAuth();
  const dispatch = useDispatchAuth();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch({ type: "SET_USER_ID", payload: event.target.value });
    router.replace('/')
  };

  return (
    <Layout title="Login" userId={userId}>
      <Typography variant="h5">Please Select User</Typography>
      
      <FormControl sx={{width: 200, height: '100%'}}>
      {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={users.filter(user => !!user).map((user, id) => ({ label: user, id: id + 1}))}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="User" />}
          value={userId}
          onChange={handleChange}
        /> */}
        <InputLabel id="user-select-label">User</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          value={userId || ""}
          label="User"
          onChange={handleChange}
        >
          {users
            .map((user, id) => (
              <MenuItem key={`user_${id}`} value={id + 1}>
                {user}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Layout>
  );
}
