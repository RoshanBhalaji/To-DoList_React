
import ItemsList from './ItemsList';

const Content = ({items,change,deleteItem}) => {
  

  return (
    <main>
    <h2>List Items</h2>
    {items.length ? (
      <ItemsList
        items={items} // Pass 'items' as a prop to the ItemsList component
        change={change} // Pass 'change' function as a prop to the ItemsList component
        deleteItem={deleteItem} // Pass 'deleteItem' function as a prop to the ItemsList component
      />
    ) : (
      <p>List Is Empty</p>
    )}
  </main>
);
};

export default Content;
