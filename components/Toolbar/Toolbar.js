import React from 'react';
import Router from 'next/router';

import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import NavLinks from '../Navigation/NavLinks/NavLinks';
import NavLink from '../Navigation/NavLinks/NavLink/NavLink';

const toolbar = (props) => (
  <React.Fragment>
    <header className="bg-white shadow border-t-4 border-indigo-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="flex items-center text-gray-800 hover:text-indigo-600"
              href="#"
              onClick={() => Router.push('/')}>
              <svg
                className="h-6 w-6 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span className="mx-3 font-medium text-sm md:text-base">
                Saman Nesari
              </span>
            </a>
          </div>

          <NavLinks />
        </div>
      </div>
    </header>
  </React.Fragment>
);

export default toolbar;
