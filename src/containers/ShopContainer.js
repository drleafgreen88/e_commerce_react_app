import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import BasketList from "../components/BasketList";
import ShopList from "../components/ShopList";

const ShopContainer = () => {
    const [user, setUser] = useState("")
    const [basket, setBasket] = useState([])
    const [isToggleMode, setIsToggleMode] = useState(false);

    const [items, setItems] = useState([{
            name : "shoes",
            price : "100"
        },
        {
            name : "hat",
            price : "100"
        },
        {
            name : "jeans",
            price : "100"
        }])

    const handleUserChange = (event) => {
        setUser(event.target.value)
    }

    const toggleMode = () => {
        setIsToggleMode(!isToggleMode);
    }

    // const onItemClick = (inBasket) => {
    //     const itemsCopy = [... items]
    //     const newBasket = itemsCopy.some((item) => {
    //         return item.id === inBasket.id
    //     })

    //     if (!newBasket) {
    //         itemsCopy.push(inBasket)
    //     }

    //     setBasket(itemsCopy)
    // }

    const onItemClick = () => {

    }

    return(
        <>
        <Modal
            isOpen={!isToggleMode}
            ariaHideApp={false}
            contentLabel="User options"
        >
            <label htmlFor='name'>User Name: </label>
            <input type="text" user="user" placeholder={user} onChange={handleUserChange} />
            <br></br>
            <button onClick={toggleMode}>Login</button>
        </Modal>
            <ShopList items={items} onItemClick={onItemClick}></ShopList>
            <BasketList basket={basket}/>
        </>
    )
}

export default ShopContainer