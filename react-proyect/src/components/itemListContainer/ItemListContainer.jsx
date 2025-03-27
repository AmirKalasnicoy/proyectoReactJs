import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router';

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  const { categoria } = useParams();

  useEffect(() => {
    // Reset loading state cuando cambia la categoría
    setLoading(true);

    fetchData()
      .then(response => {
        setProductos(response);
        setError(null);
      })
      .catch(err => {
        console.error('Error cargando productos:', err);
        setError('No pudimos cargar los productos. Por favor, intenta nuevamente.');
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 300);
      });
  }, [categoria]);

  // Función para filtrar productos por categoria
  const getProductosFiltrados = () => {
    if (!productos.length) return [];

    return categoria
      ? productos.filter(producto => producto.categoria === categoria)
      : productos;
  };

  // Obtener productos filtrados
  const productosFiltrados = getProductosFiltrados();

  // Renderizado condicional para estado de carga
  if (loading) {
    return <Loader />;
  }

// Manejo del estado de error
if (error) {
  return (
    <div className="error-container">
      <h2>Oops!</h2>
      <p>{error}</p>
      <button 
        className="retry-button"
        onClick={() => window.location.reload()}
      >
        Reintentar
      </button>
    </div>
  );
}

  // Manejo de resultados vacíos
  if (productosFiltrados.length === 0) {
    return (
      <div className="empty-results">
        <h2>No hay productos disponibles</h2>
        {categoria && (
          <p>No encontramos productos en la categoría <strong>{categoria}</strong></p>
        )}
      </div>
    );
  }

  return (
    <div className="item-list-container">
      {categoria && (
        <div className="category-header">
          <h1>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
          <p>{productosFiltrados.length} productos encontrados</p>
        </div>
      )}
      
      <div className="products-grid">
        {productosFiltrados.map(producto => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

