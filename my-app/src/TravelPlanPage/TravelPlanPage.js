import './TravelPlanPage.css';
import {Button, TextField, InputAdornment, IconButton, Typography} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-date-picker";

function TravelPlanPage({ onPageChange }) {
    const [dateValue, onDateChange] = useState(new Date());
    return (
        <div className="page-content-travelplan">
            <header>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="TravelPlanPage.css"/>
                <title>Travel Plan</title>
            </header>
        
            <div className = "time-date">
                <h1>
                   Travel Plan
                </h1>
                <DatePicker
                  selected = {dateValue}
                  onChange = {onDateChange}
                  dateFormat= "MM/dd/yyyy"
                  
                />
              <TextField
                      label='Start date'
                      //onChange={(e) => setUsernameValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
              <TextField
                      label='End date'
                      //onChange={(e) => setUsernameValue(e.target.value)}
                      variant='outlined'
                      style = {{backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'white', margin: '5px', padding: '5px'}}
                  />
            </div>

            <div className = "cities">

            </div>

            <div className = "transport">

            </div>

            <div className = "lodge-path">

            </div>

        </div>
    );
}

export default TravelPlanPage;