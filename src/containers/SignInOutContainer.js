import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from "../component/login";
import Register from "../component/register";
import { Paper } from "@mui/material";
import NavBar from "../component/navbar";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  const paperStyle = {
    
    width: 340,
    margin: "10px auto",
  }

export default function SignInOutContainer(){

  

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <NavBar></NavBar>
            <Paper elevetion={20} style = {paperStyle}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Sign In"  />
                    <Tab label="Sign Up"  />
                    
                </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Login handleChange={handleChange}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Register handleChange={handleChange}/>
                </TabPanel>
            </Paper>
        </div>
    );
}