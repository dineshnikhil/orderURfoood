import React, { useState } from 'react';
import './App.css';

import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';

function App() {
  const [isCartActive, setIsCartActive] = useState(false);

  function cartActiveHandler() {
    setIsCartActive(true);
  };
  function cartDeactivateHandler() {
    setIsCartActive(false);
  };

  return (
    <React.Fragment>
      {isCartActive && <Cart onCartDeactivate={cartDeactivateHandler} />}
      <Header onCartActive={cartActiveHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
