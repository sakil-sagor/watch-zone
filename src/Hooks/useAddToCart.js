import { useEffect, useState } from "react"


const useAddToCart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => [
        fetch('http://localhost:5000/addToCart')
            .then(res => res.json())
            .then(data => setCart(data))
    ], [])
    return [cart, setCart]



}
export default useAddToCart;