import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './productComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

const ProductListing=()=>
{
    const dispatch=useDispatch(); 
    const fetchProducts=async ()=>{
        const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log("couldn't fetch")
        });
        dispatch(setProducts(response.data))
    }
    const products=useSelector((state)=>state)
    console.log(products)
    useEffect(()=>{
        fetchProducts()
    },[])
    return(<><div className='ui grid container' style={{ margin:'6rem' }}>
        <ProductComponent/>
    </div></>);
}
export default ProductListing;