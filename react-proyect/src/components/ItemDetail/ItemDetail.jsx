import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';

function ItemDetail() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const [contador, setContador] = useState(1);
    const [error, setError] = useState(null);

    function agregarAlCarrito(prod) {
        if (!prod) return;

        const nuevoProducto = {
            ...prod,
            cantidad: contador,
        };
        console.log("Vas a agregar", nuevoProducto);
        setContador(1);
        alert(`${prod.nombre} agregado al carrito!`);
    };

    useEffect(() => {
        // Resetear estados cuando cambia el ID
        setLoading(true);
        setError(null);
        
        fetchData()
            .then(response => {
                const productoAMostrar = response.find(el => el.id === parseInt(id));
                if (productoAMostrar) {
                    setProducto(productoAMostrar);
                } else {
                    setError(`No se encontró ningún producto con ID: ${id}`);
                }
            })
            .catch(err => {
                console.error("Error al cargar el producto:", err);
                setError("Ocurrió un error al cargar el producto. Por favor, intenta nuevamente.");
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            });
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
                            src={producto.img || 'https://via.placeholder.com/400'} 
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
                                    onClick={() => agregarAlCarrito(producto)}
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