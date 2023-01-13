import { Avatar, Grid, Paper, TextField, Checkbox, FormControlLabel, Button, Typography, Link } from '@mui/material';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function Register({handleChange}){
    
    const paperStyle = {
        padding : 20,
        height: '75vh',
        width: 340,
        margin: "20px auto",
    }
    const avatarstyle ={ backgroundColor: '#1fbb60', margin: '20px'}
    const btnStyle = {margin: '10px 0'}
    const typoStyle = {margin: '5px 0', align: 'center'}
    const textStyle = {margin: '3px 0'}
    return (
        <div>

            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarstyle}><AddCircleIcon></AddCircleIcon></Avatar>
                        <h2>Sign Up</h2>
                        <p>Please fill this form to create an account</p>
                    </Grid>
                    <Grid>
                        <TextField style={textStyle} label='UserName' placeholder='Enter UserName' fullWidth required variant="standard"></TextField>
                        <TextField style={textStyle} label='Email' placeholder='Enter Email' type = 'email' fullWidth required variant="standard"></TextField>
                        <TextField style={textStyle}label='Password' placeholder='Enter Password' type = 'password' fullWidth required variant="standard"></TextField>
                        <TextField style={textStyle}label='Confirm Password' placeholder='ReEnter Password' type = 'password' fullWidth required variant="standard"></TextField>

                        <FormControlLabel  control={<Checkbox  required/>} label="I accept the term and conditions"  />


                        <Button style={btnStyle} variant="contained" fullWidth>Sign Up</Button>

                        
                        <Typography style={typoStyle}> I have an account.. 
                            <Link href='#' onClick={()=>handleChange("event",0)}>
                                Sign In
                            </Link>
                        </Typography>
                    </Grid>
                    
                </Paper>
            </Grid>
        </div>
    );
}