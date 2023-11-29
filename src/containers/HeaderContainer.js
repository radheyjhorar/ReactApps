import { connect } from 'react-redux';
import Header from '../components/header/Header';

const mapStateToProps = state => ({
  cartData: state.cartItems
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);