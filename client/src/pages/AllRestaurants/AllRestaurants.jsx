import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import GoogleApiWrapper from '../../components/Map/Map'


export default function AllRestaurants() {
  const [allRes, setAllRes] = useState([]);

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  
  useEffect(() => {
    fetch('http://localhost:9000/restaurants').then( res => res.json()).then( data => setAllRes(data.data))

  }, []);
  return (
    <div>      
      <h1>All Restaurants</h1>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <List sx={style} component="nav" aria-label="mailbox folders">

                {allRes.map((item) => {
                  return (
                      <Link key={item._id} to={`/${item._id}`}>
                        <ListItem  component="div" disablePadding>
                          <ListItemButton>
                            <ListItemText primary={item.name} />
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                      </Link>    
                  );
                })}
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item md={7} xs={12} >
          <GoogleApiWrapper />
        </Grid>
      </Grid>
    </div>
  );
}
