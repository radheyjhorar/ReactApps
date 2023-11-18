import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import passwordVal from "../formValidation/password";
import emailVal from "../formValidation/email";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState();

  const checkForm = (e) => {
    e.preventDefault();
    console.table(email, password, rememberMe);
    formValidation();
  };

  const formValidation = () => {
    // Validate Email here
    (emailVal(email)) ?
      console.log(`Your email: ${email} is valid`) :
      console.log(`Your email: ${email} is not valid`) ;

    // Validate password here
    passwordVal(password)
      ? console.log(`Your password: ${password} is valid`)
      : console.log(`Your password: ${password} is not valid`);

    // Validate Remember me checkbox here
    rememberMe ? console.log("Remembered") : console.log("Not remembered");
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  id="rememberMe"
                  color="primary"
                  value={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={checkForm}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SignIn;
