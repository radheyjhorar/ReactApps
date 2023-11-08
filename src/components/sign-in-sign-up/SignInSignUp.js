import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SignIn from "../sign-in/SignIn";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";

const SignInSignUp = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 1,
      padding: "0 2px",
      backgroundColor: "#F84F31",
      color: "#fff",
    },
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    px: 2,
    py: 4,
    borderRadius: '4px',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loginCheck, setLoginCheck] = useState("NewUser");

  const Login = (
    <Box display={"flex"} textAlign={"center"}>
        <Box sx={{ marginX: 3 }}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} sx={{ color: "#fff" }}>
              <ShoppingCartIcon fontSize="large" />
            </StyledBadge>
          </IconButton>
        </Box>
        <Box sx={{ marginRight: 3 }}>
          <Avatar src="/broken-image.jpg" />
        </Box>
      </Box>
  )

  const NotLogin = (
    <Box>
        <Button
          id="signInSignUpButton"
          sx={{ marginX: 1 }}
          color="secondary"
          variant="contained"
          onClick={handleOpen}
        >
          Login/Signup
        </Button>
      </Box>
  )

  return (
    <div>
      <Box>
        { loginCheck==="Login" ? Login : NotLogin }
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', right: '1.5rem', top: '1.5rem' }}>
            <CloseIcon color="primary" />
          </IconButton>
          <SignIn />
        </Box>
      </Modal>
    </div>
  );
};

export default SignInSignUp;

// import React, { useState } from 'react';
// import './signInSignUp.css';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';

// const SignInSignUp = () => {

//   const [action, setAction] = useState('Sign Up')

//   return (
//     <div className='container'>
//       <div className='header'>
//         <div className='text'>{action}</div>
//         <div className='underline'></div>
//       </div>
//       <div className='inputs'>
//         {action === 'Sign In'
//           ? <div></div>
//           : <div className='input'>
//               <PersonIcon className='input-icon' />
//               <input type='text' placeholder='Name' />
//             </div>
//         }

//         <div className='input'>
//           <EmailIcon className='input-icon'/>
//           <input type='email' placeholder='Email Id' />
//         </div>
//         <div className='input'>
//           <LockIcon className='input-icon'/>
//           <input type='password' placeholder='Password' />
//         </div>
//       </div>
//       {action==='Sign Up'
//         ? <div></div>
//         : <div className='forgot-password'>
//             Forgot Password
//             <span> Click Here!</span>
//           </div>
//       }

//       <div className='submit-container'>
//         <div
//           className={action==='Sign In'?"submit gray":"submit"}
//           onClick={()=>setAction('Sign Up')}
//         >
//           Sign Up
//         </div>
//         <div
//           className={action==='Sign Up'?"submit gray":"submit"}
//           onClick={()=>setAction('Sign In')}
//         >
//           Sign In
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignInSignUp
