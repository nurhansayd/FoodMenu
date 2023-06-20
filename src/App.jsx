import items from './data';
import { useState } from 'react';
import Menu from './Menu';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category == 'all'){
      setMenuItems(items)
      return
    }else{
     const newItem = items.filter((item)=> item.category === category)
      setMenuItems(newItem)
    }
  }
  return (
    <main>
    <section className='menu'>
    <div className='title'>
      <h2>Our menu</h2>
      <div className='title-underline'></div>
    </div>
    

    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button type='button'className='btn'  key={category}  onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
      <Menu items={menuItems} />
    </section>
  </main>
  );
};
export default App;
