import './CartWidget.css'
import cartIcon from '../../assets/cart.png';
import { useAppContext } from '../../context/context';
function CartWidget(){
    
    const {carrito} =useAppContext();
    return(
        <div className="cart-widget">
        <img src={cartIcon} alt="Carrito" className="navbar-cart" />
        <span className="cart-count">{carrito.length}</span>
      </div>
    )
}
export default CartWidget;