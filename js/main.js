/* ========================================
   PILSEN DIGITAL - JAVASCRIPT PRINCIPAL
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // NAVEGACIÓN MÓVIL
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // ========================================
    // TABS DEL REPOSITORIO
    // ========================================
    const repoTabs = document.querySelectorAll('.repo-tab');
    const repoContents = document.querySelectorAll('.repo-content');
    
    if (repoTabs.length > 0) {
        repoTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetId = this.getAttribute('data-tab');
                
                // Remover clase active de todos los tabs
                repoTabs.forEach(t => t.classList.remove('active'));
                // Agregar clase active al tab clickeado
                this.classList.add('active');
                
                // Ocultar todos los contenidos
                repoContents.forEach(content => content.classList.remove('active'));
                // Mostrar el contenido correspondiente
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
    
    // ========================================
    // FILTROS DE GALERÍA
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const muralCards = document.querySelectorAll('.mural-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Actualizar botones activos
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filtrar murales
                muralCards.forEach(card => {
                    if (filter === 'todos') {
                        card.style.display = 'block';
                    } else {
                        const category = card.getAttribute('data-category');
                        if (category === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // ========================================
    // SCROLL SUAVE PARA ANCLAS
    // ========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.main-nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // CAMBIO DE ESTILO DEL NAV AL HACER SCROLL
    // ========================================
    const mainNav = document.querySelector('.main-nav');
    let lastScroll = 0;
    
    if (mainNav) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                mainNav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                mainNav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // ========================================
    // PLACEHOLDER PARA IMÁGENES FALTANTES
    // ========================================
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Si la imagen no carga, mostrar un placeholder
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = '<span>Imagen no disponible</span>';
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                min-height: 60px;
                background: #f0f0f0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #888;
                font-size: 0.85rem;
                border-radius: 4px;
            `;
            this.parentNode.insertBefore(placeholder, this.nextSibling);
        });
    });
    
    // ========================================
    // ANIMACIONES AL HACER SCROLL
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.research-card, .preview-card, .podcast-card, .mural-card, .story-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
});

// ========================================
// FUNCIÓN PARA CARGAR MAPA DE ARCGIS
// ========================================
// Cuando tengas tu StoryMap de ArcGIS, usa esta función
// para insertar el iframe en el contenedor del mapa
function loadArcGISMap(storyMapUrl) {
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <iframe 
                src="${storyMapUrl}" 
                width="100%" 
                height="600" 
                frameborder="0" 
                allowfullscreen
                title="Mapa interactivo de Pilsen">
            </iframe>
        `;
    }
}

// Ejemplo de uso (descomenta cuando tengas el URL):
// loadArcGISMap('https://storymaps.arcgis.com/stories/TU-STORYMAP-ID');
