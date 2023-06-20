import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} 
        img={menuItem.img} 
        title={menuItem.title}
        dec={menuItem.dec}
        price={menuItem.price}
        desc={menuItem.desc}
        />;
      })}
    </div>
  );
};

export default Menu;
