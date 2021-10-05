import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Ul = styled.ul`
  list-style: none;
  padding-right: 0;
`

export default function ProductList({items, updateProductQuantity, removeProduct}) {
    const productList = (
      <Ul>
        {items.map(product => 
          <ProductCard 
            key={product.id} 
            product={product} 
            removeHandler={removeProduct} 
            updateProductQuantity={updateProductQuantity}>
          </ProductCard>
        )}
      </Ul>)
    return (<div>{productList}</div>);
}
