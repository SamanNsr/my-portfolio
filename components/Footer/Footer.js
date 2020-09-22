import React from 'react';
import NavLinks from '../Navigation/NavLinks/NavLinks';

function Footer(props) {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-600">Made with ❤️ by Saman</div>
          </div>
          <NavLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
