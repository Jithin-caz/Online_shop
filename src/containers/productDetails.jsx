import React, { useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions'
const ProductDetails=()=>
{
    const {productId}=useParams()
    const dispatch=useDispatch()
    const product=useSelector((state)=>state.product)
    const loginSuccess=useSelector((state)=>state.logIn)
    const fetchProduct=async()=>
    {
        const response=await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err =>console.log("couldnt fetch the product"))
         dispatch(selectedProduct(response.data))
       console.log(product)
    }
    useEffect(()=>{
        if(productId &&productId!='')
        fetchProduct();
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId]);
    return(<>        
   {Object.keys(product).length===0 ? (<div style={{ height:'100dvh',width:'100dvw',background:'black',color:'white',fontSize:'20rem',textAlign:'center',paddingTop:'20rem' }}>loading</div>)
   :
   (loginSuccess.isLoggedIn ===true ?( <div className='ui link cards' style={{margin:'6rem' }}> <div className='card'>
       <div className='image'><img src={product.image}/></div>
       <div className='content'>
       <div className='id'>{product.id}</div> 
           <div className='header'>{product.title}</div> 
           <div className='meta price'>{product.price}</div> 
           <div className='meta'>{product.category}</div> 
       </div>
   </div></div>):
   <div style={{ margin:'7rem',fontSize:'7rem' }}>not logged in</div>
   )}
    </>);
}
export default ProductDetails