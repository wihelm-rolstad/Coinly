import {Link} from "react-router-dom"
import TextField from "@mui/material/TextField";
import "../style/login.css";


const LoginPage = () => {
    return (
        <>
        <div style={{display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            width: "60vw", 
            position: "fixed", 
            top: "20%", 
            left:"50%",
            transform: "translate(-50%, -50%)"}}>

        <h2>LOGIN</h2>
        <TextField id="username-input" label="Username"
            placeholder="Username"
            style={{ backgroundColor: "white", marginBottom: "10px" }}

        />

        <TextField id="password-input" label="Password"
            placeholder="Password"
            style={{ backgroundColor: "white", marginBottom: "10px" }}
            type="password"
        />
                          
        <Link to="/" >
            <button id="login-button">logIn</button>
        </Link>
        </div>
        </>
    )
}

export default LoginPage