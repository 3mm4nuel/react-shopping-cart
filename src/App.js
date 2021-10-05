import React from 'react';
import { CheckoutPage } from './components/CheckoutPage';
import { StyledHeader } from './components/Header';
import ProductList from './components/ProductList';
import { data } from "./components/data"
import CartTotal from './components/CartTotal'

function App() {
  var totalAmount = data.reduce((sum, product) => sum + (product.initialQuantity * product.price),0);
  const [total, setTotal] = React.useState(totalAmount);

  function updateTotal(quantity) {
    console.log(quantity);
    setTotal(data.reduce((sum, product) => sum + (quantity * product.price),total));
  }

  return (
    <CheckoutPage>
      <StyledHeader></StyledHeader>
      <ProductList total={total} updateTotalHandler={updateTotal}></ProductList>
      <CartTotal total={total}></CartTotal>
    </CheckoutPage>
  );
}

export default App;
