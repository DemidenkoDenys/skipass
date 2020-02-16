import React from 'react';
import SkipassCart from './skipass-cart/skipass-cart';
import './App.css';

const skipasses = [
  { id: '1&(817dg7612', type: 'ski', },
  { id: '187217xdG72g', type: 'snb', },
  { id: '1128HD9@*hd(', type: 'ski', },
  { id: '1828D921J2(@', type: 'snb', },
  { id: 'Q9128D1(*@DW', type: 'snb', },
  { id: '@**9DN82j19d', type: 'ski', },
];

function App() {
  return (
    <ul className="skipass-list">
      {
        skipasses.map(({ id, type }) =>
          <SkipassCart
            id={id}
            key={id}
            type={type}
            lastname="Surname"
            firstname="Name"
            fathername="Fathername" />)
      }
    </ul>
  );
}

export default App;
