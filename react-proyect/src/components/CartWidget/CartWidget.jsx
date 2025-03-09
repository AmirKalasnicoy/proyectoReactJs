import './CartWidget.css'
import cartIcon from '../../assets/cart.png';
function CartWidget(){
    return(
        <div className="cart-widget">
        <img src={cartIcon} alt="Carrito" className="navbar-cart" />
        <span className="cart-count">5</span>
      </div>
    )
}
export default CartWidget;