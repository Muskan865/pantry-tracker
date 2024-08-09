import React, { useState } from 'react';
import PantryItem from '../components/PantryItem';

const PantryTracker = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1); // added itemQuantity state

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, { id: items.length + 1, name: itemName, quantity: itemQuantity }]);
    setItemName('');
    setItemQuantity(1); // reset itemQuantity to 1
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="te text-3xl font-bold mb-4">Pantry Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Add item"
          />
          <input
            type="number"
            value={itemQuantity}
            onChange={(event) => setItemQuantity(event.target.value)}
            className="w-1/4 p-2 pl-10 text-sm text-gray-700"
            placeholder="Quantity"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="list-none mb-4 mt-4 border-2 border-gray-200 rounded p-2">
        <li className="font-bold">
          <span className="w-1/2">Item</span>
          <span className="text-right">Quantity</span>
        </li>
        {items.map((item) => (
          <PantryItem key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default PantryTracker;