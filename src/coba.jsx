import { useEffect, useState } from 'react'
import { axios } from 'axios'



const FORM = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('https://dummyjson.com/products').then((val) => {
            setProducts(val.data.products)
            
        })
    
    
    
    }





    useEffect(() => {
        getProducts()
    }, [])
}