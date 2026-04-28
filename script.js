document.addEventListener('DOMContentLoaded', () => {
    // ===== THEME TOGGLE FUNCTIONALITY =====
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Theme toggle button click handler
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update icon
        themeToggle.innerHTML = isDark 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    });

    // ===== INITIALISATION AOS =====
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            navLinks.style.display = isActive ? 'flex' : 'none';
            
            if (isActive) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = body.classList.contains('dark-theme') 
                    ? 'rgba(3, 7, 18, 0.98)' 
                    : 'rgba(248, 249, 250, 0.98)';
                navLinks.style.padding = '30px 20px';
                navLinks.style.textAlign = 'center';
                navLinks.style.zIndex = '999';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // ===== PARTICLES.JS CONFIGURATION =====
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#6366f1" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.2, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#6366f1", "opacity": 0.1, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // ===== EFFET TYPEWRITER =====
    const words = ["Data Science","BI Analyst", "Interfaces BI Modernes", "Machine Learning ","Etudiant en BI & Big Data", "Developpeur Full Stack"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter-text');

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 100;
        if (isDeleting) typeSpeed /= 2;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typewriterElement) type();

    // ===== DONNÉES DES PROJETS =====
    const projects = [
        {
            id: 1,
            category: 'data',
            title: 'MHD COOPERATION',
            tags: ['Python', 'Streamlit', 'Data Science'],
            desc: 'Outil d\'analyse prédictive et de légalisation de documents administratifs.',
            img: 'images/iris.jpg',
            liveUrl: 'https://iris-prediction-i.streamlit.app/'
        },
        {
            id: 2,
            category: 'web',
            title: 'House Hold Services',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            desc: 'Application de mise en relation pour services ménagers de proximité.',
            img: 'images/project_placeholder.jpg',
            liveUrl: ''
        },
        {
            id: 3,
            category: 'mobile',
            title: 'HealthHome App',
            tags: ['Flutter', 'Firebase'],
            desc: 'Application mobile de prise de rendez-vous médicaux et suivi de santé.',
            img: 'images/project_placeholder.jpg',
            liveUrl: ''
        },
        {
            id: 4,
            category: 'web',
            title: 'ImmoNivo',
            tags: ['Next.js', 'TypeScript', 'Tailwind'],
            desc: 'Portail immobilier moderne avec visites virtuelles intégrées.',
            img: 'images/project_placeholder.jpg',
            liveUrl: ''
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function displayProjects(category) {
        if (!projectsContainer) return;
        
        const filteredProjects = category === 'all' ? projects : projects.filter(p => p.category === category);

        projectsContainer.innerHTML = filteredProjects.map((p, index) => `
            <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="project-img-wrapper">
                    <img src="${p.img}" alt="${p.title}">
                    <div class="project-overlay">
                        <a href="${p.liveUrl || '#'}" target="_blank" class="btn btn-primary" ${!p.liveUrl ? 'style="opacity:0.5; pointer-events:none;"' : ''}>
                            ${p.liveUrl ? 'Voir le projet' : 'Bientôt disponible'}
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-tags">
                        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.desc}</p>
                </div>
            </div>
        `).join('');

        // Reinitialize AOS for new elements
        AOS.refresh();
    }

    // Initial display
    displayProjects('all');

    // Tab button click handlers
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProjects(btn.dataset.target);
        });
    });

    // ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // ===== FORM SUBMISSION =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalContent = btn.innerHTML;
            
            // Simulation d'envoi
            btn.disabled = true;
            btn.innerHTML = '<span>Envoi en cours...</span> <i class="fas fa-spinner fa-spin"></i>';

            setTimeout(() => {
                alert('Merci HK ! Votre message a été simulé avec succès. (Pour un vrai fonctionnement, intégrez un service comme Formspree ou EmailJS)');
                btn.disabled = false;
                btn.innerHTML = originalContent;
                contactForm.reset();
            }, 1500);
        });
    }
});
