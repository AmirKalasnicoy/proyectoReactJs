import React from 'react';
import { Link } from 'react-router';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <div className="error-divider"></div>
        <h2 className="error-title">Página no encontrada</h2>
        <p className="error-message">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="home-button">
          Volver al inicio
        </Link>
      </div>
      
      <div className="not-found-image">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="https://s3-cdn.cmlabs.co/page/2023/01/24/a-guideline-on-how-to-fix-error-404-not-found-effectively-519451.png">
          <path d="M13 13H11V7H13V13ZM13 17H11V15H13V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#131244"/>
        </svg>
      </div>
    </div>
  );
}

export default NotFound;