import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../services/actions/Action';
import Home from '../components/home/Home';

const mapStateToProps = state => ({
  // cartData: state.cartItems
})

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);