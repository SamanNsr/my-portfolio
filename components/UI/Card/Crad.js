import React from 'react';
function Crad(props) {
  return (
    <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 bg-white mx-6 lg:mx-0">
      <div className="p-4 md:p-12 text-center lg:text-left">
        {props.children}
      </div>
    </div>
  );
}

export default Crad;
