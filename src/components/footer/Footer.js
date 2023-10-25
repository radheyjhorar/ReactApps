import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
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

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}








// My Code

// import React from "react";
// import './Footer.css'
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import 'bootstrap/dist/css/bootstrap.css'

// function Footer() {
//   return (
//     <div>
//       <footer>
//         <section className="social-links">
//           <div className="social-link-message">
//             <span>Get connected with us on social networks:</span>
//           </div>
//           <div className="social-link-icons">
//             <FacebookIcon />
//             <TwitterIcon />
//             <GoogleIcon />
//             <InstagramIcon />
//             <LinkedInIcon />
//             <GitHubIcon />
//           </div>
//         </section>
//         <section>
//           <div className="footer-details-area">
//             <div>
//               <div className="footer-1st-component">
//                 <h6>Company name</h6>
//                 <hr/>
//                 <p>
//                   Here you can use rows and columns to organize your footer
//                   content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                   elit.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <div>
//           © 2020 Copyright:
//           <a href="#">Radhey Jhorar</a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;
