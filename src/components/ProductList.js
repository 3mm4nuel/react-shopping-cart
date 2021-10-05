import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import {data} from "./data"

const Ul = styled.ul`
  list-style: none;
  padding-right: 0;
`

export default function ProductList({total, updateTotalHandler}) {
    const [items, setItems] = React.useState(data);

    function removeProduct(id) {
        setItems(items.filter(product => product.id !== id));
    };

    const productList = <Ul>
                            {items.map(product => <ProductCard key={product.id} product={product} removeHandler={removeProduct} total={total} updateTotalHandler={updateTotalHandler}></ProductCard>)}
                        </Ul>;
    return (<div>{productList}</div>);
}
