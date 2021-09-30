import React from "react";
import styled from "styled-components";
import {StyledProductCard} from "./ProductCard";
import {data} from "./data"

export default function ProductList({className, props}) {
    const [items, setItems] = React.useState(data);

    function removeProduct(id) {
        console.log(id);
        setItems(items.filter(product => product.id !== id));
    };

    const productList = <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            {items.map(product => <StyledProductCard key={product.id} product={product} removeHandler={removeProduct}></StyledProductCard>)}
                        </ul>;
    return (<div className={className}>{productList}</div>);
}

export const StyledProductList = styled(ProductList)`
    align-items: center;
    border: 10px solid green;
`