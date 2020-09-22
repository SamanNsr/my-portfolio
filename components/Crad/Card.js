import React from 'react';

function Card(props) {
  return (
    <div>
      <div className="p-5  mb-6 flex flex-col justify-center items-center max-w-sm ">
        <div
          className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
          style={{
            backgroundImage: `url(${props.image})`,
          }}></div>

        <div className=" font-semibold w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
          <div className="header-content inline-flex ">
            <div className="category-title flex-1 text-sm"> {props.title} </div>
          </div>

          <div className="font-semibold summary-post text-base text-justify">
            {props.desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
