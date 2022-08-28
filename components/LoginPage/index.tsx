import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  FormControl,
  TextField,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import { useAuth, useDispatchAuth } from "../Provider/Auth";
import { users } from "../Provider/Auth/users";
import Layout from "../Layout";

const options = users.map((user, id) => ({ label: user, id: id + 1 }));

export default function Login() {
  const router = useRouter();
  const userId = useAuth();
  const [selectedId, setSelectedId] = useState(userId);
  const dispatch = useDispatchAuth();

  const handleChange = (_: SyntheticEvent, newValue: any) => {
    console.log(newValue);
    setSelectedId(newValue?.id);
  };

  const handleConfirm = () => {
    dispatch({ type: "SET_USER_ID", payload: selectedId });
    router.replace("/");
  };

  return (
    <Layout userId={userId}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "#f5f5f5",
          p: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{p: 4, overflow: 'visible'}}>
          <CardHeader
            title="Enter or Select User"
            // titleTypographyProps={{ textAlign: "center" }}
          />
          <CardContent>
            <FormControl sx={{ width: "100%", height: "100%" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300, '.MuiAutocomplete-popper': { zIndex: 1000} }}
                renderInput={(params) => <TextField {...params} label="User" />}
                value={selectedId && options.find(option => option.id === selectedId)}
                onChange={handleChange}
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button onClick={handleConfirm}>Confirm</Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  );
}
