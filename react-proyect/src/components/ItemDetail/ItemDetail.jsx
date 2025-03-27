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

    if (!producto) {
        return (
            <div className="producto-no-encontrado">
                <h3>Producto no encontrado</h3>
                <p>No pudimos encontrar el producto con ID: {id}</p>
                <Link to="/">
                    <button className="btn btn-primary">Volver al inicio</button>
                </Link>
            </div>
        );
    }
    //Manejo de errores 
    if (error) {
        return (
            <div className="error-container">
                <h3>Oops! Algo salió mal</h3>
                <p>{error}</p>
                <Link to="/">
                    <button className="btn btn-primary">Volver al inicio</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="item-detail-container">
            <div className="card">
                <h3 className="card-header">{producto.nombre}</h3>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <img 
                                src={producto.img || 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'} 
                                alt={producto.nombre}
                                className="img-fluid producto-imagen" 
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="producto-info">
                                <h4 className="precio">${producto.precio.toLocaleString()}</h4>
                                <span className="categoria-badge">{producto.categoria.toUpperCase()}</span>
                                
                                <p className="descripcion">{producto.descripcion}</p>
                                
                                <div className="stock-info">
                                    <span className={producto.stock > 5 ? "en-stock" : "poco-stock"}>
                                        {producto.stock > 0 
                                            ? `${producto.stock} unidades disponibles` 
                                            : "Producto agotado"}
                                    </span>
                                </div>

                                {producto.stock > 0 && (
                                    <>
                                        <div className="contador-container">
                                            <ItemCount 
                                                stock={producto.stock} 
                                                contador={contador} 
                                                setContador={setContador} 
                                            />
                                        </div>
                                        
                                        <button 
                                            className="btn btn-primary btn-agregar" 
                                            onClick={() => agregarAlCarrito(producto)}
                                            disabled={producto.stock === 0}
                                        >
                                            Agregar al carrito
                                        </button>
                                    </>
                                )}
                                
                                <Link to="/" className="btn-volver">
                                    <button className="btn btn-outline-secondary">
                                        ← Volver al catálogo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;