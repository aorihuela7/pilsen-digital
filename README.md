# Pilsen Digital
## Cartography of Resistance, Language & Identity

A digital humanities project from the University of Chicago

**Author:** Alejandro Orihuela  
**Mentor:** Dr. Maria Cecilia Lozada

---

## 📁 Project Structure

```
pilsen-digital/
├── index.html              # Home page
├── map.html                # Interactive Map
├── voices.html             # Podcasts and interviews
├── gallery.html            # Mural gallery
├── repository.html         # Academic works
├── css/
│   └── styles.css          # Site styles
├── js/
│   └── main.js             # JavaScript
├── images/
│   ├── logo-uchicago.png       # University of Chicago Logo
│   ├── logo-romance-languages.png  # Dept. Romance Languages Logo
│   ├── logo-lacs.png           # Latin American Studies Logo
│   ├── hero-bg.jpg             # Hero background image
│   ├── preview-map.jpg         # Preview for Map section
│   ├── preview-voices.jpg      # Preview for Voices section
│   ├── preview-gallery.jpg     # Preview for Gallery section
│   ├── preview-repository.jpg  # Preview for Repository section
│   ├── murales/                # Mural photos
│   ├── historias/              # Family history photos
│   ├── entrevistas/            # Interview photos
│   └── projects/               # Creative project images
└── documents/
    └── proyectos/              # Student project PDFs
```

---

## 🚀 Cómo Subir a GitHub Pages

### Paso 1: Crear un repositorio en GitHub
1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón verde "New" para crear un nuevo repositorio
3. Nombra el repositorio: `pilsen-digital` (o el nombre que prefieras)
4. Hazlo **público**
5. NO marques ninguna de las opciones de inicialización
6. Haz clic en "Create repository"

### Paso 2: Subir los archivos
Opción A - Usando la interfaz web:
1. En tu nuevo repositorio, haz clic en "uploading an existing file"
2. Arrastra todos los archivos y carpetas de este proyecto
3. Haz clic en "Commit changes"

Opción B - Usando Git (línea de comandos):
```bash
cd pilsen-digital
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/pilsen-digital.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a Settings (Configuración) de tu repositorio
2. En el menú lateral, haz clic en "Pages"
3. En "Source", selecciona "Deploy from a branch"
4. En "Branch", selecciona "main" y "/ (root)"
5. Haz clic en "Save"
6. Espera unos minutos y tu sitio estará en:
   `https://TU-USUARIO.github.io/pilsen-digital/`

---

## 🖼️ Instrucciones para Agregar Imágenes

### Logos Institucionales
- **Ubicación:** `images/`
- **Archivos necesarios:**
  - `logo-uchicago.png` - Logo de la Universidad de Chicago
  - `logo-romance-languages.png` - Logo del Departamento
  - `logo-lacs.png` - Logo de Latin American Studies
- **Formato:** PNG con fondo transparente
- **Tamaño recomendado:** Altura de 60-80px

### Imagen del Hero (portada)
- **Ubicación:** `images/hero-bg.jpg`
- **Tamaño recomendado:** Mínimo 1920x1080px
- **Sugerencia:** Una foto panorámica de Pilsen, un mural emblemático, o una escena callejera del barrio

### Imágenes de Preview
- **Ubicación:** `images/`
- **Archivos:**
  - `preview-cartografia.jpg` - Imagen representativa del mapa
  - `preview-voces.jpg` - Imagen de entrevistas/podcasts
  - `preview-galeria.jpg` - Una foto de un mural
  - `preview-repositorio.jpg` - Imagen académica/libros
- **Tamaño:** 600x400px aproximadamente

### Fotos de Murales
- **Ubicación:** `images/murales/`
- **Nombres sugeridos:** 
  - `corazon-chicago.jpg`
  - `declaration-immigration.jpg`
  - `mural-3.jpg`, `mural-4.jpg`, etc.
- **Tamaño:** 800x600px o similar

### Fotos de Historias Familiares
- **Ubicación:** `images/historias/`
- **Nombres:** `familia-1.jpg`, `familia-2.jpg`, etc.

### Fotos de Entrevistados
- **Ubicación:** `images/entrevistas/`
- **Nombres:** `lider-1.jpg`, `lider-2.jpg`, etc.

---

## 🎵 Sobre los Podcasts de Google Drive

Los audios de Google Drive ya están configurados para reproducirse directamente en la página. 

**Importante:** Para que funcionen, los archivos en Google Drive deben tener permisos de "Cualquier persona con el enlace puede ver".

Para cambiar los audios:
1. Sube tu archivo de audio a Google Drive
2. Haz clic derecho > Compartir > Cualquier persona con el enlace
3. Copia el ID del archivo (la parte entre `/d/` y `/view`)
4. En `voces.html`, reemplaza el ID en el `src` del iframe:
   ```html
   src="https://drive.google.com/file/d/TU-ID-AQUI/preview"
   ```

---

## 🗺️ Cómo Insertar el Mapa de ArcGIS StoryMap

Una vez que tengas tu StoryMap creado:

1. Abre tu StoryMap en ArcGIS
2. Haz clic en "Share" (Compartir)
3. Copia el código de embed o el URL
4. Abre `cartografia.html`
5. Busca el `<div class="map-placeholder">` y reemplázalo con:
   ```html
   <iframe 
       src="https://storymaps.arcgis.com/stories/TU-ID" 
       width="100%" 
       height="600" 
       frameborder="0"
       allowfullscreen>
   </iframe>
   ```

---

## ✏️ Textos por Completar

En cada página HTML encontrarás comentarios como `<!-- TEXTO A COMPLETAR -->` indicando dónde debes agregar tu contenido. Los principales son:

### index.html
- Contexto histórico de Pilsen
- Pregunta de investigación
- Justificación pedagógica
- Tu email de contacto

### cartografia.html
- Descripción de cada capa del mapa
- Metodología de recolección de datos

### voces.html
- Títulos y descripciones de los 4 podcasts
- Información de historias familiares
- Información de líderes entrevistados

### galeria.html
- Títulos, artistas y descripciones de cada mural

### repositorio.html
- Títulos y descripciones de guías de inmersión
- Títulos, autores y descripciones de proyectos finales
- Enlaces a publicaciones en Væranda

---

## 📄 Cómo Agregar Documentos PDF

### Guías de Inmersión
1. Sube los PDFs a `documents/guias/`
2. En `repositorio.html`, actualiza el `href`:
   ```html
   <a href="documents/guias/tu-guia.pdf" class="resource-link">
   ```

### Proyectos Estudiantiles
1. Sube los PDFs a `documents/proyectos/`
2. En `repositorio.html`, actualiza el `href` correspondiente

---

## 🎨 Personalización de Colores

El color principal (guinda UChicago #800000) se puede cambiar editando las variables CSS en `css/styles.css`:

```css
:root {
    --color-primary: #800000;      /* Color principal */
    --color-primary-dark: #5c0000; /* Versión oscura */
    --color-primary-light: #a03030; /* Versión clara */
}
```

---

## ❓ Soporte

Si tienes problemas con el sitio o necesitas ayuda adicional, los comentarios en el código HTML te guiarán sobre qué hacer en cada sección.

---

© 2024 Alejandro Orihuela | Universidad de Chicago
