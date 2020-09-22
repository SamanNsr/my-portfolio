import React from 'react';

function SimpleBody(props) {
  let className = 'bg-white mb-20  py-12';
  if (props.fullScreen === true) {
    className = 'bg-white mt-20 max-h-screen';
  }
  return <section className={className}>{props.children}</section>;
}

export default SimpleBody;
