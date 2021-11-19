import { useEffect, useState } from "react"


const useAddToCart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => [
        fetch('https://time-zone-78.herokuapp.com/addToCart')
            .then(res => res.json())
            .then(data => setCart(data))
    ], [])
    return [cart, setCart]



}
export default useAddToCart;