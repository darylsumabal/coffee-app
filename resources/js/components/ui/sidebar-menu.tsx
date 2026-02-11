import React from 'react';

const coffees = [
  'Lolipop me',
  'Barurot',
  'Leche de macha',
  'Capuqi',
  'Mocha',
  'Kang',
  'Bogart',
  'Lolipop me',
  'Barurot',
  'Leche de macha',
  'Capuqi',
  'Mocha',
  'Kang',
  'Bogart',


];

const SideBarMenu = () => {
  return (
    <div className="h-screen w-64 flex flex-col">

      <div className="py-6">
        <h2 className="text-xl font-bold">Menu</h2>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-600 py-4">
        <ul className="space-y-2">
          {coffees.map((coffee, index) => (
            <li
              key={index}
              className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
            >
              {coffee}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
