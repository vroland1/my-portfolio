import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    <div className={classes.NavigationItem}>
        <NavLink to={props.link}
        activeClassName={classes.active}
        exact={props.exact}>
        {props.children}
        </NavLink>
    </div>
);

export default navigationItem;

