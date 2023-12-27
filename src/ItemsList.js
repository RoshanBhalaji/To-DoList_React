import React from 'react';
import LineItems from './LineItems'; // Assuming LineItems component exists

const ItemsList = ({ items, change, deleteItem }) => {
  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <LineItems
              key={item.id} 
              item={item} 
              change={change} 
              deleteItem={deleteItem} 
            
            />
          ))}
        </ul>
      ) : (
        <p>List Is Empty</p>
      )}
    </>
  );
};

export default ItemsList;
