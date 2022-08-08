import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({bienvenida}) => {
    const [products, setProducts] = useState([])

    const { categoryId} = useParams()

    useEffect(()=>{
        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
        
        {/*if(!categoryId){
            getProducts().then(products => {
                setProducts(products)
            })
        }else{
            getProductByCategory(categoryId).then(products => {
                setProducts(products)
            })
        }*/}
    }, [categoryId])
       
    return(
        <>
            <h1>{bienvenida}</h1>
            <ItemList products={products} />
        </>
    )
}
export default ItemListContainer