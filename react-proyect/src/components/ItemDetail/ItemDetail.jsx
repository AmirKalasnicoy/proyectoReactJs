import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppContext } from '../../context/context';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ItemDetail() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const [contador, setContador] = useState(1);
    const [error, setError] = useState(null);
    const { agregarAlCarrito } = useAppContext();

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          setError(null);
      
          try {
            const q = query(collection(db, 'productos'), where('id', '==', parseInt(id)));
            const querySnapshot = await getDocs(q);
      
            if (querySnapshot.empty) {
              setError(`No se encontró ningún producto con ID: ${id}`);
            } else {
              const doc = querySnapshot.docs[0];
              setProducto({ id: doc.id, ...doc.data() });
            }
          } catch (err) {
            console.error("Error al cargar el producto:", err);
            setError("Ocurrió un error al cargar el producto.");
          } finally {
            setTimeout(() => setLoading(false), 300);
          }
        };
      
        fetchData();
      }, [id]);
      


    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="error-container">
                <h3>Oops! Algo salió mal</h3>
                <p>{error}</p>
                <Link to="/">
                    <button className="btn-volver">Volver al inicio</button>
                </Link>
            </div>
        );
    }

    if (!producto) {
        return (
            <div className="producto-no-encontrado">
                <h3>Producto no encontrado</h3>
                <p>No pudimos encontrar el producto con ID: {id}</p>
                <Link to="/">
                    <button className="btn-volver">Volver al inicio</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="item-detail-container">
            <div className="product-detail-card">
                <h3 className="product-header">{producto.nombre}</h3>

                <div className="product-detail-content">
                    <div className="product-image-container">
                        <img
                            src={producto.img || 'https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg'}
                            alt={producto.nombre}
                            className="product-image"
                        />
                    </div>

                    <div className="product-info-container">
                        <div className="product-price-container">
                            <h4 className="product-price">${producto.precio}</h4>
                            <span className="product-category">{producto.categoria.toUpperCase()}</span>
                        </div>

                        <div className="product-description">
                            {producto.descripcion && <p>{producto.descripcion}</p>}

                            <div className="product-stock">
                                <span className={producto.stock > 5 ? "stock-high" : "stock-low"}>
                                    {producto.stock > 0
                                        ? `${producto.stock} unidades disponibles`
                                        : "Producto agotado"}
                                </span>
                            </div>
                        </div>

                        {producto.stock > 0 && (
                            <div className="product-actions">
                                <div className="product-counter">
                                    <ItemCount
                                        stock={producto.stock}
                                        contador={contador}
                                        setContador={setContador}
                                    />
                                </div>

                                <button
                                    className="product-add-button"
                                    onClick={() => agregarAlCarrito(producto, contador)}
                                    disabled={producto.stock === 0}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        )}

                        <div className="product-back-link">
                            <Link to="/">
                                <button className="product-back-button">
                                    ← Volver al catálogo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;