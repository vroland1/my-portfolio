import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <div>
        <NavigationItem link='/' exact>About</NavigationItem>
        <NavigationItem link='/experience'>Experience</NavigationItem>
        <NavigationItem link='/projects'>Projects</NavigationItem>
        <NavigationItem link='/links'>Contact</NavigationItem>
    </div>
);

export default navigationItems;