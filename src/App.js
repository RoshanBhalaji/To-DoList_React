import React, { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const storedItems = localStorage.getItem('items');
  const initialItems = storedItems ? JSON.parse(storedItems) : [];

  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const change = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItemObj = { id, checked: false, item };
    const updatedItems = [...items, newItemObj];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;

    addItem(newItem);
    setNewItem('');
  };

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header title="Roshan" /><hr></hr>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      
      <Content items={filteredItems} change={change} deleteItem={deleteItem} />
      <hr></hr>
      <Footer length={filteredItems.length} />
    </div>
  );
}

export default App;
