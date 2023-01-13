import { Avatar, Grid, Paper, TextField, Checkbox, FormControlLabel, Button, Typography, Link } from '@mui/material';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import NavBar from './navbar';


export default function Login({handleChange}){
    
    const paperStyle = {
        padding : 20,
        height: '75vh',
        width: 340,
        margin: "20px auto",
    }
    const avatarstyle ={ backgroundColor: '#1fbb60', margin: '20px'}
    const btnStyle = {margin: '10px 0'}
    const typoStyle = {margin: '5px 0'}
    const textStyle = {margin: '3px 0'}
    return (
        <div>
            
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarstyle}><LockIcon></LockIcon></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <Grid align='left'>
                        <TextField style={textStyle} label='UserName' placeholder='Enter UserName' fullWidth required variant="standard"></TextField>
                        <TextField style={textStyle}label='Password' placeholder='Enter Password' type = 'password' fullWidth required variant="standard"></TextField>

                        <FormControlLabel  control={<Checkbox  />} label="Remember me"  />

                        <Button style={btnStyle} variant="contained" fullWidth>Sign In</Button>

                        <Typography style={typoStyle}>
                            <Link href='#'>
                                frogot password ?
                            </Link>
                        </Typography>
                        <Typography style={typoStyle}> I don't have an account.. 
                            <Link href='#' onClick={()=>handleChange("event",1)}>
                                Sign Up
                            </Link>
                        </Typography>
                    </Grid>
                    
                </Paper>
            </Grid>
        </div>
    );
}