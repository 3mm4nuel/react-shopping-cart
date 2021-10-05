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

export default function ProductCard({ product, removeHandler, total, updateTotalHandler}) {
    const [quantity, setQuantity] = React.useState(product.initialQuantity)

    function incrementQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    function decrementQuantity() {
        setQuantity(prevQuantity => prevQuantity - 1)
    }


    return (
      <Li> 
        {product.value}
        <Button onClick={() => removeHandler(product.id)}>remove</Button>
        <StyledQuantityModifier quantity={quantity} incrementHandler={incrementQuantity} decrementHandler={decrementQuantity} updateTotalHandler={updateTotalHandler}></StyledQuantityModifier>
      </Li>
    );
}


function QuantityModifier({className, quantity, incrementHandler, decrementHandler, updateTotalHandler}) {
    return (
    <div className={className}>
        <button onClick={() => {decrementHandler(); updateTotalHandler(quantity)}}>-</button>
        <span>{quantity}</span>
        <button onClick={() => {incrementHandler(); updateTotalHandler(quantity)}}>+</button>
    </div>
    );
}
