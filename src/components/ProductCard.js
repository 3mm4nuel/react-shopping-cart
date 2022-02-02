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
    left: 700px;
`

const StyledQuantityModifier = styled(QuantityModifier)`
    position: absolute;
    top: 50px;
    left: 700px;

`

export default function ProductCard({ product, removeHandler, updateProductQuantity}) {

    return (
      <Li> 
        {product.value} ${product.price}
        <Button onClick={() => removeHandler(product.id)}>remove</Button>
        <StyledQuantityModifier productId={product.id} quantity={product.initialQuantity} updateProductQuantity={updateProductQuantity}></StyledQuantityModifier>
      </Li>
    );
}


function QuantityModifier({className, quantity, updateProductQuantity, productId}) {
    return (
    <div className={className}>
        <button onClick={() => {updateProductQuantity(quantity - 1, productId)}}>-</button>
        <span>{quantity}</span>
        <button onClick={() => {updateProductQuantity(quantity + 1, productId)}}>+</button>
    </div>
    );
}
