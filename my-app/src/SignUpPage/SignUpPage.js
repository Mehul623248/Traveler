import Travel from "../Images/travel.png"
import './SignUpPage.css';
import {Button, TextField, InputAdornment, IconButton, Typography} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage({ onPageChange }) {
    const navigate = useNavigate();
    const [firstName , setFirstNameValue] = useState('');
    const [lastName , setLastNameValue] = useState('');
    const [ email, setEmailValue ] = useState('');
    const [ username, setUsernameValue ] = useState('');
    const [ password, setPasswordValue ] = useState('');
    const [ confirmPassword, setConfirmPasswordValue ] = useState('');

    let [errorMessage , setErrorMessage ] = useState('');

    const handleSignUpClick = () => {
        if(password !== confirmPassword){
            setErrorMessage('Passwords do not match!')
        }else if((password === '') || (username === '') || (email === '') || (firstName === '') || (lastName === '')){
            setErrorMessage('Containers cannot be empty!')
        }else{axios.post('http://127.0.0.1:5000/signup', {username, password, email, firstName, lastName})
            .then((response) => {
                console.log(response)
                if(response.data?.signup_status === true){
                    navigate('/travelplan_page')
                    console.log("Signup Successful")
                    localStorage.setItem('LoggedIn', true)
                    localStorage.setItem('Username', username)
                }
                else{
                    errorMessage = response.data?.error
                    setErrorMessage(errorMessage)
                    console.log("Signup Failed")
                }
            });
        }

    }

    return(
      <div className='page-content-signup'>
          <header>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <link rel="stylesheet" href="SignUpPage.css"/>
              <title>Sign Up - Basketball Shot Analyzer</title>
            </header>

          <div className="login-container" style = {{padding: '20px'}}>
              <div className = "circular-image">
                                <img src={Travel} alt= "Travel"/>
              </div> 
            <h1>Travel Optimizer</h1>
            <h2>Sign Up</h2>
            <form id="signupForm">
              <TextField
                      label='First Name'
                      onChange={(e) => setFirstNameValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                <br/>
              <TextField
                      label='Last Name'
                      onChange={(e) => setLastNameValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                <br/>
              <TextField
                      label='Email'
                      onChange={(e) => setEmailValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                <br/>
              <TextField
                      label='Username'
                      onChange={(e) => setUsernameValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                <br/>
              <TextField
                      label='Password'
                      onChange={(e) => setPasswordValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                <br/>
              <TextField
                      label='Confirm Password'
                      onChange={(e) => setConfirmPasswordValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
                <br/>
              <div className='action-button-container'>
                <Button onClick={handleSignUpClick}
                        variant = 'outlined'
                        label = 'SignUp'
                        style = {{
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '10px',
                            width: '200px',
                            height: '30px',
                            color: 'black'
                }}>Register as User</Button>
                  <Typography color="error">{errorMessage}</Typography>
                  <div className='action-button-login'>
                      <p>Already have an account?</p>
                <Link to="/login_page">
                    <Button variant = 'outlined'
                            label = 'Login'
                            style = {{
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '10px',
                                width: '100px',
                                height: '30px',
                                color: 'black'
                    }}>Login</Button>
                </Link>
                  </div>
              </div>
            </form>
          </div>
      </div>
    );
}

export default SignUpPage;