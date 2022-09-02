import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";
import upperFirst from "lodash/upperFirst";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  TextField,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import { useDispatchAuth } from "../Provider/Auth";
import { passwords, users } from "../Provider/Auth/users";

const options = users.map((user, id) => ({ label: user, id: id + 1 }));

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(" ");
  const [pwError, setPwError] = useState(" ");
  const dispatch = useDispatchAuth();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameError(" ");
    setName(event.target.value);
  };

  const handlePWChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPwError(" ");
    setPassword(event.target.value);
  };

  const handleKeyPressed = async (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.code === "Enter") {
      handleConfirm();
    }
  };

  const handleConfirm = async () => {
    if (!name) {
      setNameError("No name supplied");
    }
    if (!password) {
      setPwError("Please enter a password");
    }
    if (name && password) {
      let userId = users.indexOf(upperFirst(name.toLowerCase())) + 1;
      if (userId === 0) {
        setNameError("User not found");
        return;
      }
      const hash = passwords.find((pw) => pw.id === userId)?.pw;
      if (!hash) {
        setPwError("No password found for user");
        return;
      }
      const result = await bcrypt.compare(password, hash);
      if (!result) {
        setPwError("Invalid Password");
        return;
      }
      dispatch({ type: "SET_USER_ID", payload: userId });
      router.replace("/");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#f5f5f5",
        p: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ p: 4, overflow: "visible", width: 400 }}>
        <CardHeader title="Login" />
        <CardContent>
          <Box
            component="form"
            sx={{ width: "100%", height: "100%" }}
            onKeyDown={handleKeyPressed}
          >
            <FormControl fullWidth>
              <TextField
                required
                label="Name"
                type="text"
                sx={{ m: "16px 0" }}
                onChange={handleNameChange}
                error={!!nameError.trim()}
                helperText={nameError}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handlePWChange}
                error={!!pwError.trim()}
                helperText={pwError}
              />
            </FormControl>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={handleConfirm}>Submit</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
