import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigationItem = (props) => {
  const router = useRouter();
  const navClass =
    'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4';
  const activeNavClass =
    'block mt-4 lg:inline-block lg:mt-0 text-gray-600 mr-4';
  return (
    <li className={router.pathname === props.link ? activeNavClass : navClass}>
      <Link href={props.link}>{props.children}</Link>
    </li>
  );
};

export default navigationItem;
