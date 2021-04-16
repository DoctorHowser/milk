import React from 'react';
import DrawerList from './DrawerList'
import './Nav.css';
import { useState } from 'react';
import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core'
import {Menu as MenuIcon} from '@material-ui/icons'
function Nav() {

  const [drawer, toggleDrawer] = useState(false)
  return (
    <>
      <AppBar position="sticky" >
        <Toolbar >
          <IconButton onClick={() => toggleDrawer(true)} edge="start" color="secondary" aria-label="menu">
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" align="center">
            MILK
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} onClose={() => toggleDrawer(!drawer)}>
        <DrawerList toggleDrawer={() => toggleDrawer(!drawer)} />
      </Drawer>
    </>

  );
}

export default Nav;
