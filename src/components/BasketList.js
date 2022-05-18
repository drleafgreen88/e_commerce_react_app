import React from "react";
import BasketItem from "./BasketItem";


const BasketList = ({item, index}) => {

    const basketList = item.map(() => {
        return <BasketItem item={item} key={index}/>
    })


    return(
        <h3>{basketList}</h3>
    )
}

export default BasketList