import { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAppContext } from "../../context/context";
import { Link } from "react-router-dom";
import './Checkout.css';
function CheckoutForm() {
  const { carrito,vaciarCarrito  } = useAppContext();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: { nombre, email },
      items: carrito,
      total,
      fecha: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrderId(docRef.id);
      vaciarCarrito();
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-confirmation">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu código de orden es: <strong>{orderId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Confirmar orden</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
