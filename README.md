# Luxury Motors

<<<<<<< HEAD
<div align="center">
  
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Un sitio web de lujo automotriz con visualización 3D, animaciones fluidas y diseño responsive premium.**

[Ver Demo](https://luxury-motors-portfolio.vercel.app/) · [Reportar Bug](mailto:williansalponce@gmail.com) · [Solicitar Feature](mailto:willianslponce@gmail.com)

</div>
=======
**Plantilla de muestra para concesionarios de vehículos de lujo.**  
Sitio web corporativo con catálogo de vehículos, visualizador 3D, configurador de colores, modo oscuro y formulario de cotización.
>>>>>>> 9eeb177 (Actualización)

---

## Stack Tecnológico

| Tecnología         | Versión |
|--------------------|---------|
| React              | 19      |
| Vite               | 7       |
| Three.js / R3F     | 0.181   |
| Framer Motion      | 12      |
| Tailwind CSS       | 3.4     |
| React Router       | 7       |
| Lucide React       | 0.556   |

## Estructura del Proyecto

```
luxury-motors/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── CarViewer.jsx      Visualizador 3D del vehículo
│   │   ├── Navbar.jsx         Barra de navegación responsive con búsqueda
│   │   ├── Footer.jsx         Footer de 4 columnas con redes sociales
│   │   ├── FeaturedSlider.jsx Slider horizontal de modelos destacados
│   │   └── ThemeToggle.jsx    Alternador de modo claro/oscuro
│   ├── pages/             # Páginas principales
│   │   ├── Home.jsx           Página de inicio con hero, grid, secciones informativas
│   │   ├── Vehicles.jsx       Catálogo con filtros por categoría
│   │   ├── VehicleDetail.jsx  Página detalle con configurador 3D, especificaciones, cotización
│   │   └── Contact.jsx        Página de contacto con formulario, FAQ y empleos
│   ├── data/
│   │   └── cars.js            Datos de vehículos de muestra (Lexus NX, LX, GX)
│   ├── App.jsx                Componente principal con routing y layout
│   ├── main.jsx               Entry point
│   └── index.css              Estilos Tailwind + scrollbar personalizado
├── public/
│   ├── assets/
│   │   ├── cars/              Imágenes de vehículos (nx.webp, lx.webp, gx.webp)
│   │   └── mastery-bg.jpg     Imagen de fondo sección "Mastery in Motion"
│   └── models/
│       └── tesla_2018_model_3.glb  Modelo 3D para el visualizador
├── dist/                  # Build de producción
├── index.html             # HTML principal con fuentes de Google
├── tailwind.config.js     # Configuración de colores, fuentes, dark mode
├── vite.config.js         # Configuración de Vite
├── eslint.config.js       # Configuración de ESLint
├── postcss.config.js      # Configuración de PostCSS
├── DEPLOY.md              # Guía de deploy en Vercel
└── package.json           # Dependencias y scripts
```

## Funcionalidades

- **Catálogo de vehículos** con filtrado por categorías
- **Visualizador 3D interactivo** (exterior e interior) con cambio de color en tiempo real
- **Modo oscuro/claro** con persistencia en localStorage
- **Búsqueda dinámica** de modelos en la barra de navegación
- **Slider de modelos destacados** con scroll horizontal
- **Configurador de accesorios** con cálculo de precio total
- **Formulario de cotización** por vehículo
- **Página de contacto** con mapa, FAQ interactivo y sección de empleos
- **Animaciones** con Framer Motion (transiciones, scroll reveals, hover effects)
- **Diseño responsive** (mobile-first, iPhone 12+)
- **Scroll suave** al cambiar de ruta

## Scripts

```bash
npm run dev       # Desarrollo (http://localhost:5173)
npm run build     # Build producción
npm run preview   # Preview del build
npm run lint      # Linter
```

## Personalización

### Vehículos
Editar `src/data/cars.js` para agregar, modificar o eliminar vehículos del catálogo.

### Colores y tema
Editar `tailwind.config.js` en la sección `colors.brand` para cambiar la paleta de la marca.

### Modelo 3D
Reemplazar `public/models/tesla_2018_model_3.glb` por el modelo GLB del vehículo deseado.

### Imágenes
Reemplazar las imágenes en `public/assets/cars/` y `public/assets/` con las del concesionario.

## Despliegue

```bash
npm run build
```

El directorio `dist/` está listo para subir a Vercel, Netlify o cualquier hosting estático.  
Ver [DEPLOY.md](./DEPLOY.md) para instrucciones detalladas de deploy en Vercel.

---

*Plantilla creada por Willians Alcala como muestra para concesionarios de lujo.*
