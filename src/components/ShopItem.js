import React from "react"


const ShopItem = ({item, onItemClick}) => {

    const handleClick = () => {
        onItemClick(item)
    }

    return(
    <>
        <li value={item}>Name: {item.name}</li>
        <li>Price: {item.price}</li>
        <button value={item} onClick={handleClick}>Add to basket</button>
    </>
    )
}

export default ShopItem



