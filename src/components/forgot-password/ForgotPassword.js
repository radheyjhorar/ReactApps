import React from "react";
import './ForgotPassword.css'
import {TextField, Button} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

function ForgotPassword() {
    return (
        <div>
            <div className="forgot-password-page">
                <div className="forgot-password-container">
                    <GppMaybeIcon color="info"/>
                    <h1>Forgot Password</h1>
                    <p>Enter your email and we'll send you a link <br/> to reset your password</p>
                    <br/>
                    <div>
                        <EmailOutlinedIcon className="email-input-icon"/>
                        <TextField className="email-input" id="standard-basic" type="email" label="Email" variant="standard" />
                    </div>
                    <br/>
                    <br/>
                    <Button variant="contained" className="submit-button">Submit</Button>
                    <br/>
                    <br/>
                    <p className="back-to-login"><span><KeyboardArrowLeftIcon/></span>Back to Login</p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;