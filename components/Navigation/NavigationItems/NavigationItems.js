import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <ul className="flex">
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/skills">Skills</NavigationItem>
        <NavigationItem link="/work">Work</NavigationItem>
        <NavigationItem link="/donate">Donate</NavigationItem>
        <NavigationItem link="/contact">Contact Me</NavigationItem>
      </ul>
    </div>
  </nav>
);

export default navigationItems;
