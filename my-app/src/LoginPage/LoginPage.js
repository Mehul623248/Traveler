import Travel from "../Images/travel.png"
import './LoginPage.css';
import {Button, TextField, InputAdornment, IconButton, Typography} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function LoginPage({ onPageChange }) {
    const navigate = useNavigate();
    const [ username, setUsernameValue ] = useState('');
    const [ password, setPasswordValue ] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const url = "http://localhost:5000";

    const handleLoginClick = () => {
        if(username === ''){
            setErrorMessage('Username container cannot be empty!')
        }
        else if(password === ''){
            setErrorMessage('Password container cannot be empty!')
        }
        else{
            axios.post(url + `/login`, {username, password})
            .then((response) => {
                if(response.data?.login_status === true){
                    navigate('/travelplan_page');
                    console.log("Login Successful");
                    localStorage.setItem('Username', username);
                    localStorage.setItem('LoggedIn', true);
                  
                }
                else{
                    setErrorMessage('Username or Password is incorrect!')
                    console.log("Login Failed")
                }
            })
        }
    }


    return(
        <div className="page-content-login">
            <header>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="LoginPage.css"/>
                <title>Login - Travel Optimizer</title>
            </header>


            <div className="login-container" style = {{padding: '20px'}}>
                <div className = "circular-image">
                  <img src={Travel} alt= "Travel"/>
                </div> 
                <h1>Travel Optimizer</h1>
                <h2>Login</h2>
                  <TextField
                      label='Username/Email'
                      onChange={(e) => setUsernameValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                <br></br>
                  <TextField
                      label='Password'
                      onChange={(e) => setPasswordValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                  <div className="action-button-container">
                    <Button
                        onClick={handleLoginClick}
                        variant = 'outlined'
                        label = 'Login'
                        style = {{
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '10px',
                            width: '100px',
                            height: '30px',
                            color: 'black'
                        }}
                    >Login</Button>
                      <Typography color='error'>{errorMessage}</Typography>
                      <div className='action-button-container-signup'>
                          <p>Don't have an account?</p>
                    <Link to="/signup_page">
                        <Button variant = 'outlined'
                                label = 'SignUp'
                                style = {{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '10px',
                                    width: '100px',
                                    height: '30px',
                                    color: 'black'
                        }}>Sign-Up</Button>
                    </Link>
                      </div>
                  </div>
          </div>
        </div>
    );
}

export default LoginPage;