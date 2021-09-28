import React from "react";

export default function ProductList(props) {
    const products = ['Apple', 'Mango', 'Orange', 'Banana', 'Kiwi']
    return (<div>
        {products.map(product => <h1>{product}</h1>)}
    </div>);
}