const Initialtoken={
    isLoggedIn:false,
}

export const loggedinReducer=(state=Initialtoken,action)=>
{
    switch(action.type)
    {
        case 'loggedIn':return {
            ...state,
            isLoggedIn:true,
        }

        case 'loggedOut':return {
            ...state,
            isLoggedIn:false,
        }
        default: return state
    }
}