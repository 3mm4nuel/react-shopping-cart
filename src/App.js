import './App.css';
import { CheckoutPage } from './components/CheckoutPage';
import { StyledHeader } from './components/Header';
import { StyledProductList } from './components/ProductList';

function App() {
  return (
    <CheckoutPage>
      <StyledHeader></StyledHeader>
        <StyledProductList></StyledProductList>
    </CheckoutPage>
  );
}

export default App;
