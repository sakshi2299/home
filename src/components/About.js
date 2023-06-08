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
import EmailIcon from '@mui/icons-material/Email';
import Header from './Header';

export default function FolderList() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
        <Avatar
          src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg"
          alt="Profile Image"
          sx={{ width: 150, height: 150 }}
        />
      </div>
      <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '1rem' }}>
        Sakshi Joshi
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center', display: 'grid', marginTop: '0.5rem' }}>
        Hello, I am Sakshi. I am a Software Engineer Trainee at Precious Infosystem Pvt. Ltd. <br />I live in India. I have an interest in coding and travelling.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
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
            <ListItemText primary="Interests" secondary="Programming, Travelling" />
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
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" secondary="sakshi.joshi0722@gmail.com" />
          </ListItem>
        </List>
      </div>
    </>
  );
}

