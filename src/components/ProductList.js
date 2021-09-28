import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList(props) {
    const products = ['Apple', 'Mango', 'Orange', 'Banana', 'Kiwi'];
    const personList = products.map(product => (<ProductCard product={product} />));
    return (<div>{personList}</div>);
}