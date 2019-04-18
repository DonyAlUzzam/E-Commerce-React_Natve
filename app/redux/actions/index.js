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

export const addToCart = (id, price) => {
    return {
        type: 'ADD_TO_CART',
        payload: axios.post(`${BASE_URL}carts/`, {
            'user_id': 1,
            'product_id': id,
            'qty': 1,
            'total': price
        })
    }
}

export const getAllCart = () => {
    return{
        type: 'GET_ALL_CART',
        payload: axios.get(`${BASE_URL}carts/`)
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