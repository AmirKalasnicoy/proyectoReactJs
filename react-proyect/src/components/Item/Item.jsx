import { Link } from 'react-router';
import './Item.css';

function Item({ producto }) {
    const { id, nombre, precio, stock, img } = producto;

    const esProductoVertical = nombre.toLowerCase().includes('funda') ||
        nombre.toLowerCase().includes('celular');
        
    function agregarAlCarrito(prod) {
        const nuevoProducto = {
            ...prod,
            cantidad: 1,
        };
        console.log("Vas a agregar", nuevoProducto);
    };


    return (
        <div className={`producto-card ${esProductoVertical ? 'producto-vertical' : ''}`}>
            <div className="imagen-container">
                <img
                    src={img || "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"}
                    alt={nombre}
                    className="producto-imagen"
                />
            </div>
            
            <div className="producto-titulo">
                <h3>{nombre}</h3>
            </div>
            
            <div className="producto-info">
                <p className="precio">Precio: ${precio}</p>
                <p className="stock">Quedan {stock} disponibles</p>
            </div>
            
            <div className="producto-footer">
                <button 
                    className="btn-agregar" 
                    onClick={() => agregarAlCarrito(producto)}
                >
                    Agregar al carrito
                </button>
                <Link to={`/detalle/${id}`} className="btn-detalle">
                    <button>Ver detalle</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;