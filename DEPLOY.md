# Luxury Motors - Deployment Guide

## 🚀 Deploy to Vercel

Este proyecto está listo para ser desplegado en Vercel. Sigue estos pasos:

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Sube el proyecto a GitHub:**
   ```bash
   cd luxury-motors
   git init
   git add .
   git commit -m "Initial commit - Luxury Motors Portfolio"
   git remote add origin https://github.com/TU_USUARIO/luxury-motors.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"

### Opción 2: Deploy desde CLI

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd luxury-motors
   vercel
   ```

3. Sigue las instrucciones en pantalla

### Opción 3: Deploy Manual

1. **Construye el proyecto:**
   ```bash
   npm install
   npm run build
   ```

2. **Arrastra la carpeta `dist` a Vercel:**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Arrastra la carpeta `dist` generada

## 📋 Verificación Pre-Deploy

✅ **El proyecto incluye:**
- `package.json` con todas las dependencias
- `vite.config.js` configurado correctamente
- Scripts de build (`npm run build`)
- Configuración de Tailwind CSS
- Configuración de React Router

✅ **Configuración de Vercel automática:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 🔧 Variables de Entorno (Opcional)

Si necesitas variables de entorno en el futuro:
1. Crea un archivo `.env.local` (ya está en `.gitignore`)
2. En Vercel, ve a Settings > Environment Variables
3. Agrega las variables necesarias

## 🌐 Después del Deploy

Una vez desplegado, Vercel te dará:
- **URL de producción:** `tu-proyecto.vercel.app`
- **URL de preview:** Para cada commit/PR
- **Analytics:** Para ver tráfico y performance

## 📱 Características del Proyecto

- ✅ Responsive design (iPhone 12 y superior)
- ✅ Dark mode toggle
- ✅ 3D car viewer con React Three Fiber
- ✅ Animaciones con Framer Motion
- ✅ Optimizado para SEO
- ✅ Performance optimizado

## 🛠️ Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Lint del código
npm run lint
```

## 📞 Soporte

Si tienes problemas con el deploy:
1. Revisa los logs en Vercel Dashboard
2. Verifica que todas las dependencias estén en `package.json`
3. Asegúrate de que el build local funcione (`npm run build`)

---

**¡Listo para impresionar! 🚗✨**
