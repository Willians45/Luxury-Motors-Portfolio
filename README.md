# Luxury Motors Portfolio

<div align="center">
  
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Un sitio web de lujo automotriz con visualización 3D, animaciones fluidas y diseño responsive premium.**

[Ver Demo](#) · [Reportar Bug](#) · [Solicitar Feature](#)

</div>

---

## ✨ Características

- 🚗 **Visualización 3D Interactiva** - Visualizador de vehículos con React Three Fiber
- 🎨 **Personalización en Tiempo Real** - Cambio de colores de exteriores e interiores
- 🌓 **Dark Mode** - Toggle entre modo claro y oscuro con persistencia
- 📱 **Responsive Design** - Optimizado para dispositivos móviles (iPhone 12+)
- ⚡ **Animaciones Fluidas** - Powered by Framer Motion
- 🎯 **SEO Optimizado** - Meta tags y estructura semántica
- 🔍 **Búsqueda de Vehículos** - Filtrado en tiempo real
- 📋 **Formularios de Cotización** - Sistema de contacto integrado

## 🛠️ Tecnologías

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **Icons:** Lucide React

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/luxury-motors.git

# Navegar al directorio
cd luxury-motors

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter de código
```

## 🌐 Deployment

Este proyecto está listo para ser desplegado en Vercel. Ver [DEPLOY.md](./DEPLOY.md) para instrucciones detalladas.

### Deploy Rápido

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TU_USUARIO/luxury-motors)

## 📂 Estructura del Proyecto

```
luxury-motors/
├── public/
│   └── assets/         # Imágenes y recursos estáticos
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── CarViewer.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/          # Data y configuración
│   │   └── cars.js
│   ├── pages/         # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Vehicles.jsx
│   │   ├── VehicleDetail.jsx
│   │   └── Contact.jsx
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Entry point
├── DEPLOY.md          # Guía de deployment
└── package.json
```

## 🎨 Personalización

### Colores

Los colores se configuran en `tailwind.config.js`:

```js
colors: {
  'brand-black': '#0a0a0a',
  'brand-gold': '#d4af37',
  'brand-light': '#f5f5f5',
  'brand-gray': '#1a1a1a',
}
```

### Vehículos

Edita `src/data/cars.js` para agregar o modificar vehículos.

## 📱 Responsive Design

- **Mobile:** 390px+ (iPhone 12, 13, 14)
- **Tablet:** 768px+
- **Desktop:** 1024px+
- **Large Desktop:** 1280px+

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es un portfolio personal y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Tu Nombre**

- Portfolio: [tu-portfolio.com](#)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

<div align="center">
  <p>Hecho con ❤️ y ☕</p>
  <p>⭐ Si te gustó este proyecto, dale una estrella en GitHub</p>
</div>
