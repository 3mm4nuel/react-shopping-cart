import React from "react";
import styled from "styled-components";

export default function Header({className, props}) {
    return (
        <header className={className}>
            <div>
                <a href='/'>
                    <h1>My Order</h1>
                </a>
            </div>
        </header>
    )  
}

export const StyledHeader = styled(Header)`
    padding-top: 0.1rem;
    text-align: center;
    margin-top: 5rem;
    width: 80vw;
    height: 16vh;
    background-color: peachpuff;
    font-family: helvetica, sans-serif;
    color: white;
    font-weight: 500;
    font-size: 25pt;
`