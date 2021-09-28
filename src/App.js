import './App.css';
import { CheckoutPage } from './components/CheckoutPage';
import { StyledHeader } from './components/Header';
import ProductList from './components/ProductList';

function App() {
  return (
    <CheckoutPage>
      <StyledHeader></StyledHeader>
        <ProductList></ProductList>
    </CheckoutPage>
  );
}

export default App;
