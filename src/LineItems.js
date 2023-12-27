import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItems = ({ item, change, deleteItem }) => {
  return (
    <li key={item.id} id={item.id} className="list" style={{ color: '#fff' }}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => change(item.id)}
      />
      <label
        onDoubleClick={() => change(item.id)}
        style={{
          textDecoration: item.checked ? 'line-through' : 'none',
          color: item.checked ? 'red' : '#fff',
          fontWeight: 'bold',
        }}
      >
        {item.item}
      </label>
      <button onClick={() => deleteItem(item.id)}>
        <FaTrashAlt role="button" tabIndex="0" />
      </button>
    </li>
  );
};

export default LineItems;
