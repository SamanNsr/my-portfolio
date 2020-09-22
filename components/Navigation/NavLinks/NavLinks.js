import React from 'react';
import NavLink from './NavLink/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function NavLinks() {
  return (
    <div className="flex items-center -mx-2">
      <NavLink url={'https://twitter.com/NesariSaman'}>
        <FontAwesomeIcon icon={faTwitter} />
      </NavLink>
      <NavLink url={'https://github.com/samannsr'}>
        <FontAwesomeIcon className="" icon={faGithub} />
      </NavLink>
      <NavLink url={'https://www.instagram.com/saman__nsr/'}>
        <FontAwesomeIcon icon={faInstagram} />
      </NavLink>
      <NavLink url={'https://www.linkedin.com/in/saman-nesari-4a872a1b2/'}>
        <FontAwesomeIcon icon={faLinkedin} />
      </NavLink>
    </div>
  );
}

export default NavLinks;
