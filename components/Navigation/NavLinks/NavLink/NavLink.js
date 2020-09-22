import React from 'react';

function NavLink(props) {
  return (
    <a
      className="flex items-center mx-2 text-gray-800 hover:text-indigo-600"
      href={`${props.url}`}>
      <div className="h-5 w-5 sm:h-6 sm:w-6 fill-current">{props.children}</div>
    </a>
  );
}

export default NavLink;
