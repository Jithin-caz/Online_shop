export const setProducts=(products)=>{
    return {
        type:'setProducts',
        payload:products
    };
};

export const selectedProduct=(product)=>{
    return {
        type:'selectedProduct',
        payload:product
    };
};

export const removeSelectedProduct=()=>
{
    return{
        type:'removeSelectedProduct',
    }
}