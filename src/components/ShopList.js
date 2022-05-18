import React from "react";
import ShopItem from "./ShopItem";

const ShopList = ({items, onItemClick}) => {

    const shopItem = items.map((item, index) => {
        return <ShopItem onItemClick={onItemClick} item={item} key={index}/>}) 
    
    return(
        <>
        <h3>I'm the shop list</h3>
        <ul>
            {shopItem}
        </ul>
        </>
    )
}

export default ShopList

