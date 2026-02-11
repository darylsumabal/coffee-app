import React from 'react';

const coffees = [
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
    <div className="h-screen w-64 p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
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
  );
};

export default SideBarMenu;
