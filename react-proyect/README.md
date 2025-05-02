# 🛒 GamerCorp - E-commerce SPA en React

Este es un proyecto final para el curso de React JS de Coderhouse. Se trata de una tienda online ficticia de productos gamer, desarrollada como **Single Page Application** utilizando **React**, **Firebase**, **React Router DOM** y **Context API**.

## 🚀 Tecnologías y herramientas utilizadas

- ⚛️ React 19
- 🔥 Firebase (Firestore como base de datos)
- 🌐 React Router DOM para navegación
- 🎯 Context API para manejo global del carrito
- 💅 Bootstrap 5.3 para estilos y diseño responsive
- ☁️ Netlify para deploy

## 🧩 Funcionalidades

- ✅ Catálogo dinámico de productos desde Firebase
- ✅ Vista por categorías
- ✅ Detalle de producto con selector de cantidad
- ✅ Carrito de compras con resumen y total
- ✅ Checkout con formulario para finalizar la compra
- ✅ Persistencia en Firebase (orden guardada)
- ✅ Deploy funcional en Netlify

## 📸 Capturas
![Carrito](./src/assets/carrito-img.png)
![Carrito](./src/assets/home.png)
## 🔧 Estructura del proyecto

```bash
├── src/
│   ├── components/
│   │   ├── Item, ItemDetail, Cart, Checkout, Navbar...
│   ├── context/
│   │   └── context.jsx (manejo del carrito)
│   ├── firebaseConfig.js
│   ├── App.jsx / main.jsx
│
├── public/
│   ├── _redirects (soporte para rutas en Netlify)
│   └── index.html
├── .env (variables para Firebase - no está en Git)
├── netlify.toml (configuración para despliegue)
