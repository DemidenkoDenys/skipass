import React from 'react';
import './skipass-cart.css';

const SkipassCart = ({
  id,
  type,
  state,
  firstname,
  lastname,
  fathername,
}) => <li className={`skipass-cart skipass-${type}`}>
  <p>Skipass</p>
  <p className="skipass-cart-id">{ id }</p>
  <h3 className="skipass-cart-name">
    <p>{ lastname }</p>
    <p>{ firstname }</p>
    <p>{ fathername }</p>
  </h3>
</li>;

export default SkipassCart;
