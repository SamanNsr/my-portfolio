import React from 'react';
import ItemBar from './ItemBar/ItemBar';

function ItemsBar(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
      <ItemBar info={'Developer at Nobarune'} date={'2020'} />
      <ItemBar
        info={'Digital Marketing Specialist at WikiLoop'}
        date={'2020'}
      />
    </div>
  );
}

export default ItemsBar;
