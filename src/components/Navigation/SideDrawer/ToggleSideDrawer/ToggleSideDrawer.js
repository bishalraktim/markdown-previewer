import React from 'react';
import classes from './ToggleSideDrawer.module.css';

const toggleButton = (props) => (
  <div onClick={props.clicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggleButton;
