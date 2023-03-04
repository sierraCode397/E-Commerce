import { useState } from "react";

const initialState = {
	cart: [],
}
const aleatorio = (min, maxi) => {
    let resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

    const addToCart = (payload) =>{
        setState({
            ...state,
            cart : [...state.cart,payload]
        })

    }

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product,index) => index !== indexValue),
        })
    }

	return {
		state,
		addToCart,
		removeFromCart,

	}
}

export default useInitialState;