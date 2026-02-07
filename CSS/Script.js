
// Script.js - Funcionalidades interactivas para el portafolio de Fátima Romá
// ========== TRADUCCIONES ==========
const translations = {
    es: {
        'name': 'Fátima Román',
        'subtitle': 'Estudiante de Desarrollo de Aplicaciones Multiplataforma',
        'btn-contact': 'Contactar',
        'btn-projects': 'Ver Proyectos',
        'availability': 'Buscando práctica dual · Sevilla',
        
        'nav-projects': 'Proyectos',
        'nav-technologies': 'Tecnologías',
        'nav-experience': 'Experiencia',
        'nav-contact': 'Contacto',
        
        'section-projects': 'Proyectos',
        'project1-title': 'Automatización de Sistemas',
        'project1-desc': 'Creación de scripts para automatización de tareas en entornos Linux y Windows, optimizando procesos y reduciendo tiempos de administración del sistema.',
        'project2-title': 'Infraestructura de Redes',
        'project2-desc': 'Implementación de firewalls, routers y antenas. Configuración de redes TCP/IP y medidas de ciberseguridad para protección de sistemas.',
        'project3-title': 'Gestión de Bases de Datos',
        'project3-desc': 'Diseño y administración de bases de datos relacionales con SQL Server y T-SQL, incluyendo consultas complejas y optimización de rendimiento.',
        'view-demo': 'Ver Demo',
        'view-code': 'Ver Código',
        
        'section-technologies': 'Tecnologías',
        'level-advanced': 'Advanced',
        'level-medium': 'Medium',
        'level-basic': 'Basic',
        
        'section-experience': 'Experiencia',
        'exp1-title': 'Técnico Informático',
        'exp1-date': '2024 - 2025',
        'exp1-company': 'Instituto Hispalense de Pediatría',
        'exp1-task1': 'Configuración y mantenimiento de servidores con virtualización',
        'exp1-task2': 'Gestión de bases de datos para seguimiento de equipos informáticos',
        'exp1-task3': 'Implementación de firewalls, routers y antenas',
        'exp1-task4': 'Creación de scripts para automatización en Linux y Windows',
        'exp1-hours': '✓ 800 horas de prácticas formativas',
        
        'section-contact': 'Contacto',
        'contact-email': 'Email',
        'contact-phone': 'Teléfono',
        'contact-location': 'Ubicación',
        
        'footer-rights': 'Todos los derechos reservados.'
    },
    en: {
        'name': 'Fátima Román',
        'subtitle': 'Multiplatform Application Development Student',
        'btn-contact': 'Contact',
        'btn-projects': 'View Projects',
        'availability': 'Looking for dual internship · Seville',
        
        'nav-projects': 'Projects',
        'nav-technologies': 'Technologies',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        
        'section-projects': 'Projects',
        'project1-title': 'System Automation',
        'project1-desc': 'Creation of scripts for task automation in Linux and Windows environments, optimizing processes and reducing system administration times.',
        'project2-title': 'Network Infrastructure',
        'project2-desc': 'Implementation of firewalls, routers and antennas. TCP/IP network configuration and cybersecurity measures for system protection.',
        'project3-title': 'Database Management',
        'project3-desc': 'Design and administration of relational databases with SQL Server and T-SQL, including complex queries and performance optimization.',
        'view-demo': 'View Demo',
        'view-code': 'View Code',
        
        'section-technologies': 'Technologies',
        'level-advanced': 'Advanced',
        'level-medium': 'Medium',
        'level-basic': 'Basic',
        
        'section-experience': 'Experience',
        'exp1-title': 'IT Technician',
        'exp1-date': '2024 - 2025',
        'exp1-company': 'Hispalense Pediatric Institute',
        'exp1-task1': 'Configuration and maintenance of servers with virtualization',
        'exp1-task2': 'Database management for computer equipment tracking',
        'exp1-task3': 'Implementation of firewalls, routers and antennas',
        'exp1-task4': 'Creation of automation scripts on Linux and Windows',
        'exp1-hours': '✓ 800 hours of training internship',
        
        'section-contact': 'Contact',
        'contact-email': 'Email',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        
        'footer-rights': 'All rights reserved.'
    }
};

// ========== CURSOR PERSONALIZADO ==========
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
});

// Suavizar el movimiento del outline
function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
    
    requestAnimationFrame(animateOutline);
}
animateOutline();

// Efectos hover en elementos interactivos
const hoverElements = document.querySelectorAll('a, button, .badge, .project');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// ========== PARTÍCULAS INTERACTIVAS ==========
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 60;

// Colores basados en el tema
function getParticleColor() {
    const theme = document.documentElement.getAttribute('data-theme');
    return theme === 'dark' 
        ? 'rgba(129, 140, 248, 0.4)' 
        : 'rgba(99, 102, 241, 0.3)';
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = getParticleColor();
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Rebotar en los bordes
        if (this.x > canvas.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY *= -1;
        }
        
        // Interacción con el mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
            const force = (120 - distance) / 120;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 2;
            this.y -= Math.sin(angle) * force * 2;
        }
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                const opacity = 1 - distance / 120;
                const theme = document.documentElement.getAttribute('data-theme');
                const lineColor = theme === 'dark'
                    ? `rgba(129, 140, 248, ${opacity * 0.15})`
                    : `rgba(99, 102, 241, ${opacity * 0.1})`;
                
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    connectParticles();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Redimensionar canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// ========== SISTEMA DE TRADUCCIÓN ==========
let currentLanguage = 'es';

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// ========== CAMBIO DE IDIOMA ==========
const languageToggle = document.getElementById('language-toggle');
const flagIcon = document.querySelector('.flag-icon');

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    flagIcon.textContent = currentLanguage === 'es' ? '🇪🇸' : '🇬🇧';
    translatePage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
});

// Cargar idioma guardado
const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
    currentLanguage = savedLanguage;
    flagIcon.textContent = currentLanguage === 'es' ? '🇪🇸' : '🇬🇧';
    translatePage(currentLanguage);
}

// ========== CAMBIO DE TEMA ==========
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Detectar preferencia del sistema
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', initialTheme);
updateThemeIcon();

function updateThemeIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
    
    // Actualizar colores de partículas
    particlesArray.forEach(particle => {
        particle.color = getParticleColor();
    });
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// ========== ANIMACIONES AL HACER SCROLL ==========
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-fade').forEach(el => {
    observer.observe(el);
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== PARALLAX EN HEADER ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / hero.offsetHeight;
    }
});

// ========== EFECTO RIPPLE EN BOTONES ==========
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ========== PRELOAD DE IMÁGENES ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

console.log('🚀 Portafolio de Fátima Román cargado correctamente');
console.log('✨ Cursor personalizado activo');
console.log('🎨 Partículas interactivas activadas');
console.log('🌓 Tema:', document.documentElement.getAttribute('data-theme'));
console.log('🌍 Idioma:', currentLanguage);