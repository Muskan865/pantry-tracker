import React from 'react';

const PantryItem = ({ item, onDelete }) => {
  return (
    <li className="flex justify-between mb-2"> {/* added mb-2 class */}
      <div className="w-1/2">{item.name}</div>
      <div className="w-1/4 text-center">{item.quantity}</div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default PantryItem;

