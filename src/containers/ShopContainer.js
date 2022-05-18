import React, { useState } from "react";
import ShopList from "../components/ShopList";

const ShopContainer = () => {
    const [user, setUser] = useState("")
    const [item, setItems] = useState({
        item1 : {
            name : "shoes",
            price : "100"
        },
        item2 : {
            name : "hat",
            price : "100"
        },
        item3 : {
            name : "jeans",
            price : "100"
        }
    })


    // const useEffect(() => {

    // })

    return(
        <>
        <ShopList/>
        </>
    )
}

export default ShopContainer