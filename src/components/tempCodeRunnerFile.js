import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InterestsIcon from '@mui/icons-material/Interests';
import HouseIcon from '@mui/icons-material/House';
import LanguageIcon from '@mui/icons-material/Language';
import { Typography } from '@mui/material';

export default function FolderList() {
  return (
    <>
    <Typography variant='h2'sx={{textAlign:"center"}}>
      Sakshi Joshi
    </Typography>
    <Typography variant ='h6' sx={{textAlign:"center",dispay:"grid"}}>
      Hello, I am Sakshi. I am Software Engineer Trainee at Precious Infosystem Pvt. Ltd. <br/>I live in India . I have my interest in coding and Travelling
    </Typography>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'White' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CakeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Birthday" secondary="July 22, 1999" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Degree" secondary="MCA" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <InterestsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="Programming, Travelling" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIphoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Mobile No." secondary="9575169919" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HouseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Country" secondary="India" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LanguageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Language" secondary="English" />
        </ListItem>
      </List>
    </div>
    </>
  );
}