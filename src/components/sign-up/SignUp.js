import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ my: 5 }} />
      </Container>
    </ThemeProvider>
  );
}








//My Code
// import React from "react";
// import './SignUp.css';
// import { TextField, Button, Grid } from "@mui/material";
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import GoogleIcon from '@mui/icons-material/Google';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


// function SignUp() {
//     return (
//         <Grid container spacing={2} className="signup-page">
//             <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className="sign-in-banner">
//                 <div className="sign-in-container">
//                     <div>
//                         <h6>Welcome Back!</h6>
//                         <p>To keep connected with us please<br/>login with your personal info</p>
//                         <Button className="sign-in-button" variant="contained">Sign In</Button>
//                     </div>
//                 </div>
//             </Grid>

//             <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
//                 <div className="signup-container">
//                     <form>
//                         <h1>Create Account</h1>
//                         <div className="social-icons-to-signup">
//                             <FacebookRoundedIcon className="facebook-icon" />
//                             <GoogleIcon className="google-icon"/>
//                             <LinkedInIcon className="linkedin-icon" />
//                         </div>
//                         <p>or use your email for registration:</p>
//                         <div className="signup-input-fields">
//                             <div>
//                                 <PersonAddAltOutlinedIcon className="name-input-icon"/>
//                                 <TextField id="standard-basic"  className="name-input" label="Name" variant="standard" />
//                             </div>
//                             <br/>
//                             <br/>
//                             <div>
//                                 <EmailOutlinedIcon className="email-input-icon"/>
//                                 <TextField className="email-input" id="standard-basic" type="email" label="Email" variant="standard" />
//                             </div>
//                             <br />
//                             <br />
//                             <div>
//                                 <LockOutlinedIcon className="password-input-icon"/>
//                                 <TextField className="password-input" id="standard-basic" type="password" label="Password" variant="standard" />
//                             </div>
//                             <br/>
//                             <br/>
//                         </div>
//                         <br />
//                         <Button variant="contained" className="signup-button">Sign Up</Button>
//                     </form>
//                 </div>
//             </Grid>
//         </Grid>
//     )
// }

// export default SignUp;