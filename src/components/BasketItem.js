import React from "react";

const BasketItem = ({items}) => {

    return(
        <>
        <li>{items.name}</li>
        <li>{items.price}</li>
        </>
    )
}

export default BasketItem