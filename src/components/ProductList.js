import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import {data} from "./data"

const Ul = styled.ul`
  list-style: none;
  padding-right: 0;
`

export const StyledProductList = styled(ProductList)`
    align-items: center;
    border: 10px solid green;
`

export default function ProductList({className, props}) {
    const [items, setItems] = React.useState(data);

    function removeProduct(id) {
        console.log(id);
        setItems(items.filter(product => product.id !== id));
    };

    const productList = <Ul>
                            {items.map(product => <ProductCard key={product.id} product={product} removeHandler={removeProduct}></ProductCard>)}
                        </Ul>;
    return (<div className={className}>{productList}</div>);
}
