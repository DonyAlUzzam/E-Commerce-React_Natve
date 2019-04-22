import axios from 'axios';
import { BASE_URL, PIC_URL } from 'react-native-dotenv';

export const getAll = () => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: axios.get(`${BASE_URL}products`)
    }   
}

export const getDetail = (id) => {
    return {
        type:  'GET_PRODUCT_DETAIL',
        payload: axios.get(`${BASE_URL}products/` + id)
    }
}

export const addToCart = (idProduct, id, price, authToken) => {
    return {
        type: 'ADD_TO_CART',
        payload: axios.post(`${BASE_URL}carts/`, {
            'user_id': id,
            'product_id': idProduct,
            'qty': 1,
            'total': price
        },{
            headers:{
                Authorization: authToken
            }
        }
        
        )
    }
}

export const getAllCart = (id, authToken) => {
    return{
        type: 'GET_ALL_CART',
        payload: axios.get(`${BASE_URL}carts/`+ id, {
            headers: {
                Authorization: authToken
            }
        })
    }
}

export const incQty = (id, qty) => {
    
    return {
        type: 'INC_QTY',
        payload: axios.patch(`${BASE_URL}carts/${id}`, {
            qty: qty
        })
    }
}

export const decQty = (id, qty) => {
    if(qty >0){
        const quantity = qty

        return {
            type: 'DEC_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty:quantity
            })
        }
    } else {
        const quantity =1 

        return {
            type: 'DEC_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty: quantity
            })
        }
    }
}

export const inputQty = (id, text) => {
    if(!isNaN(Number(text))){
        const qty = Number(text);
        return {
            type: 'INC_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty: qty
            })
        }
    } else {
        const qty= 0
        return {
            type: 'INC_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`,{
                qty:qty
            })
        }
    }
}

export const deleteItem = (id) =>{
    return {
        type: 'DELETE_ITEM',
        payload: axios.delete(`${BASE_URL}carts/${id}`)
    }
}

// Account
export const registerUser = ( username, email, password ) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`${BASE_URL}users/register`, {
            'username': username,
            'email': email,
            'password': password
        })
    }
}

export const loginUser = (email, password) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${BASE_URL}users/login`, {
            'email': email,
            'password': password
        })
    }
}


export const getUser = (token) => {
    return  {
        type: 'GET_USER',
        payload: axios.get(`${BASE_URL}users/data`, {
            headers: {
                Authorization: token
            }
        })
    }
}

export const clearUser= () => {
    return {
        type: 'CLEAR_USER'
    }
}