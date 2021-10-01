import React from "react";
import styled from "styled-components";

const Li = styled.li` 
    color: red;
    max-width: 700px;
    //text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 2rem;
    margin-left: 22rem;
    padding: 50px;
    background-color: white;
    position: relative;
`;

const Button = styled.button` 
    color: blue;
    border: none;
    left: 10px;
    cursor: pointer;
    position: absolute;
    top: 80px;
    left: 670px;
`

export default function ProductCard({ product, removeHandler}) {
    return (
      <Li> 
        {product.value}
         <Button onClick={() => removeHandler(product.id)}>remove</Button>
      </Li>
    );
}