import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import "../style/Register.css";

const RegisterPage = () => {
    return(
        <>
            <h1>Register</h1>
            <div id="register-form">
            <TextField  id="Name-input" label="Username"/>
            <TextField  id="email-input" label="Email" type="email"/>
            <TextField  id="telephone-input" label="Telephone" type="tel"/>
            <TextField  id="passwordinput" label="Password" type="password"/>
            <TextField  id="confirmpassword-input" label="Confirm Password" type="password"/>
              <button>Register</button>
            <Link to="/loginPage">
                <p>Already have an account? log in</p>
            </Link>
            </div>
        </>
    )
}

export default RegisterPage;