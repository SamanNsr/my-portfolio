import React from 'react';

function ItemBar(props) {
  return (
    <a
      className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      href="#">
      <div className="flex items-center justify-between px-4 py-2">
        <h3 className="text-lg font-medium text-gray-700">{props.info}</h3>
        <span className="block text-gray-600 font-light text-sm">
          {props.date}
        </span>
      </div>
    </a>
  );
}

export default ItemBar;
