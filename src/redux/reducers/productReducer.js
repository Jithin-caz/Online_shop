const initialState={
    products:[]
}



export const productReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case 'setProducts':
            return {
                ...state,
                products:action.payload
            }
        default:return state
    }
} 
export const selectedProductReducer=(state={},action)=>
{
    switch(action.type)
    {
        case 'selectedProduct':
            return {
                ...state,...action.payload
            }

        case 'removeSelectedProduct':return { }
        default:return state
    }
} 