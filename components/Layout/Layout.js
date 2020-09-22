import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

function Layout(props) {
  return (
    <React.Fragment>
      <div className="font-sans bg-white">
        <Toolbar />
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Layout;
