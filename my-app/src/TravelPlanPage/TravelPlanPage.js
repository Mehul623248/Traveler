import './TravelPlanPage.css';

import Car from "../Images/car.jpg"
import Bus from "../Images/bus.png"
import Plane from "../Images/plane.png"

import {Autocomplete, Button, TextField, InputAdornment, IconButton, Typography} from '@mui/material'
import {Padding, PlaceOutlined, Visibility, VisibilityOff} from '@mui/icons-material'
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

import {   CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
    RegionSelect,
    PhonecodeSelect } from 'react-country-state-city';

function TravelPlanPage({ onPageChange }) {
    // for date time
    const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
    const [value2, setValue2] = useState(dayjs('2022-04-17T15:30'));

    //for country-city picker
    const [countryid, setCountryid] = useState(0);
    const [countryName, setCountryName] = useState("");
    const [stateid, setstateid] = useState(0);
    const [stateName,setStateName] = useState("");
    const [cityName,setCityName] = useState("");

    const [countryid2, setCountryid2] = useState(0);
    const [stateid2, setstateid2] = useState(0);
    const [countryName2, setCountryName2] = useState("");
    const [stateName2,setStateName2] = useState("");
    const [cityName2,setCityName2] = useState("");

    
    //for sending data
    const [errorMessage, setErrorMessage] = useState('');
    
    const url = "http://localhost:5000";
    const handlePathClick = () => {
         if(countryName === '' || countryName2 === ''){
             setErrorMessage('Country container cannot be empty!')
         }
         else if(stateName === '' || stateName2 === '')
         {
            setErrorMessage('State container cannot be empty!')
         }
        else if(cityName === '' || cityName2 === ''){
             setErrorMessage('City container cannot be empty!')
         }
        else{
          axios.post(url + `/directions`, {countryName, stateName, cityName, countryName2, stateName2, cityName2})
        //     .then((response) => {
        //         if(response.data?.login_status === true){
        //             navigate('/travelplan_page');
        //             console.log("Login Successful");
        //             localStorage.setItem('Username', username);
        //             localStorage.setItem('LoggedIn', true);
                  
        //         }
        //         else{
        //             setErrorMessage('Username or Password is incorrect!')
        //             console.log("Login Failed")
        //         }
        //     })
        }
    }
    //for transport options
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
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
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Travel Start Date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                   
                />
                {/* <p>{value.toString()}</p> */}
                </LocalizationProvider>

                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Travel End Date"
                    value={value2}
                    onChange={(newValue2) => setValue2(newValue2)}
                
                />
                </LocalizationProvider>
              
            </div>
            <br></br>
            <br></br>
            <div className = "cities">
                <div class ="city">
                    <h5>Start</h5>
                 
                    
                    <h6>Country</h6>
                    <CountrySelect
                        onChange={(e) => {
                        setCountryid(e.id);
                        setCountryName(e.name);
                        }}
                        placeHolder="Select Country"
                     
                    />
                  
                    <h6>State</h6>
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                        setstateid(e.id);
                        setStateName(e.name);
                        }}
                        placeHolder="Select State"
                    />
                    <h6>City</h6>
                    <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        onChange={(e) => {
                        setCityName(e.name);
                        }}
                        placeHolder="Select City"
                    />
                   
                    </div>


                    <div class = "city">
                    <h5>Destination</h5>
               
                    
                    <h6>Country</h6>
                    <CountrySelect
                        onChange={(e) => {
                        setCountryid2(e.id);
                        setCountryName2(e.name);

                        }}
                        placeHolder="Select Country"
                  
                    />
                  
                    <h6>State</h6>
                    <StateSelect
                        countryid={countryid2}
                        onChange={(e) => {
                        setstateid2(e.id);
                        setStateName2(e.name);

                        }}
                        placeHolder="Select State"
                    />
                    <h6>City</h6>
                    <CitySelect
                        countryid={countryid2}
                        stateid={stateid2}
                        onChange={(e) => {
                        console.log(e);
                        setCityName2(e.name);

                        }}
                        placeHolder="Select City"
                    />
                   
                    </div>
            </div>
            <br></br>
            <div className = "transport">
                            <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant = 'outlined'
                        label = 'see path'
                        style = {{
                        
                            margin: '10px',
                          
                            color: 'black'
                         }}
                    >
                        Mode of Transport
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Bus</MenuItem>
                        <MenuItem onClick={handleClose}>Car</MenuItem>
                        <MenuItem onClick={handleClose}>Plane</MenuItem>
                    </Menu>
            </div>
            {/* <div className = "circular-image">
                 <img src={Car} alt= "car"/>
            </div> 
            <div className = "circular-image">
                 <img src={Bus} alt= "bus"/>
            </div> 
            <div className = "circular-image">
                 <img src={Plane} alt= "plane"/>
            </div>  */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className = "lodge-path">
               <Button
                       // onClick={handleLoginClick}
                        variant = 'outlined'
                        label = 'plan lodging'
                        style = {{
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '10px',
                           
                            color: 'black'
                         }}
               >plan lodging</Button>
              
          {/* <a href="/route_map.html"></a>  */}
           <Link to="/map_page">
           <Button
                        onClick={handlePathClick}
                        variant = 'outlined'
                        label = 'see path'
                        style = {{
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '10px',
                          
                            color: 'black'
                         }}
               >See Path</Button>
           </Link>
            
            
       
      

            </div>

        </div>
    );
}

export default TravelPlanPage;