
import { getAll } from '../redux/actions';
import ProductList from './ProductList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log('---->', state.products)
    return { products: state.products.products }
}

const mapDispatchToProps = dispatch => ({
    getAll: () => dispatch(getAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)