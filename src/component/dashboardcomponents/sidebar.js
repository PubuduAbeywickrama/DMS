import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import { Avatar, Button, Grid, IconButton } from '@mui/material';


const drawerWidth = 240;

export default function SideBar() {

const gridStyle = {display:'grid', margin: '20px auto', padding: '10px'}
const welcomeStyle ={margin:'20px auto'}
const btnStyle = {margin: '20px auto', width:'120px'}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <h3 style={welcomeStyle}>Welcome...!</h3>
        <Divider></Divider>
        <Grid style={gridStyle}>
          <Button style={btnStyle} variant="text">Home</Button>
          <Button style={btnStyle} variant="text">Consultant</Button>
          <Button style={btnStyle} variant="text">Summury</Button>
          <Button style={btnStyle} variant="text">Medications</Button>
          <Divider></Divider>
          <Button style={btnStyle} variant="text">Settings</Button>
          <Button style={btnStyle} variant="text">Help</Button>
        </Grid>
      </Drawer>
      
    </Box>
  );
}
