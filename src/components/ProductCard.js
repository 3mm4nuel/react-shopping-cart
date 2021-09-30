import React from "react";
import styled from "styled-components";

const Li = styled.li` 
    color: red;
    max-width: 700px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 2rem;
    margin-left: 22rem;
    padding: 50px;
    background-color: white;
`;

export default function ProductCard({ product, removeHandler}) {
    return (
      <Li> 
        {product.value}
         <button onClick={() => removeHandler(product.id)}>remove</button>
      </Li>
    );
}