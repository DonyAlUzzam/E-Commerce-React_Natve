import {combineReducers} from 'redux';

import products from './ProductsReducers';
import account from './AccountsReducers'

export default combineReducers({products,account})