import React from 'react';
import { CheckoutPage } from './components/CheckoutPage';
import { StyledHeader } from './components/Header';
import ProductList from './components/ProductList';
import { data } from "./components/data"
import CartTotal from './components/CartTotal'

function App() {
  const [items, setItems] = React.useState(data);

  function removeProduct(id) {
      setItems(items.filter(product => product.id !== id));
  }

  /**
   * 
   * @param {boolean} quantity New quantity that we want to set
   * @param {integer} productId id of the product
   */
  function updateProductQuantity(quantity, productId) {
    setItems(items => items.map(item => item.id === productId ? {...item, initialQuantity: quantity} : item))
  }
  
  const total = items.reduce((sum, item) => sum + (item.initialQuantity * item.price), 0)

  return (
    <CheckoutPage>
      <StyledHeader></StyledHeader>
      <ProductList items={items} updateProductQuantity={updateProductQuantity} removeProduct={removeProduct}></ProductList>
      <CartTotal total={total}></CartTotal>
    </CheckoutPage>
  );
}

export default App;
