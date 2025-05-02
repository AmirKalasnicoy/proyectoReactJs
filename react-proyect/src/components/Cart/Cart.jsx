import { useAppContext } from '../../context/context';
import { Link } from 'react-router-dom';
import './Cart.css'; // opcional, si vas a darle estilos

function Cart() {
  const { carrito } = useAppContext();

  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div className="cart-container">
        <h2>Tu carrito está vacío 🛒</h2>
        <Link to="/">
          <button className="btn">Volver al catálogo</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      <ul className="cart-list">
        {carrito.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <strong>{item.nombre}</strong>
              <p>{item.cantidad} x ${item.precio}</p>
              <p>Subtotal: ${item.precio * item.cantidad}</p>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>

      <Link to="/checkout">
        <button className="btn btn-primary">Finalizar compra</button>
      </Link>
    </div>
  );
}

export default Cart;
