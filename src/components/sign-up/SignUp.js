import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import passwordVal from "../formValidation/password";
import emailVal from "../formValidation/email";
import userNameVal from "../formValidation/userName";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [allowExtraEmails, setAllowExtraEmails] = useState();

  const checkForm = (e) => {
    e.preventDefault();
    console.table(name, email, password, confirmPassword, allowExtraEmails);
    formValidation();
  };

  const formValidation = () => {
    // Validate userName here
    userNameVal(name)
      ? console.log("Your name is valid")
      : console.log("Your name is not valid");

    // Validate Email here
    emailVal(email)
      ? console.log("Your email is valid")
      : console.log("Your email is not valid");

    // Validate password here
    passwordVal(password)
      ? console.log("Your password is valid")
      : console.log("Your password is not valid");

    // Validate confirm password here
    password === confirmPassword
      ? console.log("Confirm password matched")
      : console.log("Confirm password not matched");

    // Validate allowExtraEmails checkbox here
    allowExtraEmails
      ? console.log("Thanks for checked")
      : console.log("You do not checked");
  };

  let [nameIsValid, setNameIsValid] = useState(true);
  let [emailIsValid, setEmailIsValid] = useState(true);
  let [passwordIsValid, setPasswordIsValid] = useState(true);
  let [password2IsValid, setPassword2IsValid] = useState(true);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box display={"grid"} justifyItems={"center"} mb={4}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Box>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() =>
                  userNameVal(name)
                    ? setNameIsValid(true)
                    : setNameIsValid(false)
                }
                error={!nameIsValid}
                helperText={nameIsValid ? false : "Please enter a valid username"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() =>
                  emailVal(email)
                    ? setEmailIsValid(true)
                    : setEmailIsValid(false)
                }
                error={!emailIsValid}
                helperText={emailIsValid ? false : "Please enter a valid email"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() =>
                  passwordVal(password)
                    ? setPasswordIsValid(true)
                    : setPasswordIsValid(false)
                }
                error={!passwordIsValid}
                helperText={
                  passwordIsValid ? false : "Please enter a valid password"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() =>
                  (password === confirmPassword && !confirmPassword === '')
                    ? setPassword2IsValid(true)
                    : setPassword2IsValid(false)
                }
                error={!password2IsValid}
                helperText={
                  password2IsValid ? false : "Please enter same password"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    name="allowExtraEmails"
                    id="allowExtraEmails"
                    color="primary"
                    value={allowExtraEmails}
                    onChange={(e) => setAllowExtraEmails(e.target.checked)}
                  />
                }
                label="I want to receive updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={checkForm}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SignUp;
