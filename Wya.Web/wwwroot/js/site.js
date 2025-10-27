/* ========== HEADER NAVBAR ========== */
function initHeader() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.nav-overlay');

    if (!hamburger || !nav || !overlay) {
        console.warn('Header elements (hamburger, nav, or overlay) not found.');
        return;
    }

    const links = document.querySelectorAll('.nav-link, .dropdown-item, .sub-dropdown-item');
    const toggleNav = (active) => {
        hamburger.classList.toggle('active', active);
        nav.classList.toggle('active', active);
        overlay.classList.toggle('active', active);
        document.body.classList.toggle('no-scroll', active);
    };

    const setActiveLink = (targetLink) => {
        links.forEach(link => link.classList.remove('active'));
        if (targetLink) {
            targetLink.classList.add('active');
            const parentSubDropdown = targetLink.closest('.sub-dropdown');
            const parentDropdown = targetLink.closest('.dropdown');
            if (parentSubDropdown) {
                const dropdownItem = parentSubDropdown.querySelector('.dropdown-item');
                if (dropdownItem) dropdownItem.classList.add('active');
            }
            if (parentDropdown) {
                const navLink = parentDropdown.querySelector('.nav-link');
                if (navLink) navLink.classList.add('active');
            }
        }
    };

    const currentPath = window.location.pathname || '/';
    const activeLink = Array.from(links).find(link => link.getAttribute('href') === currentPath);
    setActiveLink(activeLink);

    hamburger.addEventListener('click', () => toggleNav(!hamburger.classList.contains('active')));
    overlay.addEventListener('click', () => toggleNav(false));

    links.forEach(link => {
        link.addEventListener('click', () => {
            setActiveLink(link);
            if (window.innerWidth <= 1200) toggleNav(false);
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) toggleNav(false);
    });
}


/* ========== CAROUSEL ========== */
function initCarousel(carousel) {
    if (!carousel || carousel._initialized) return;
    carousel._initialized = true;

    const track = carousel.querySelector('.carousel-track');
    const slides = track ? Array.from(track.children) : [];
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    const indicators = carousel.querySelector('.indicators');

    if (!track || !slides.length || !indicators) {
        console.warn('Carousel elements (track, slides, or indicators) not found.');
        return;
    }

    let current = 0, autoTimer;
    const getCardsPerView = () => window.innerWidth <= 769 ? 1 : window.innerWidth <= 995 ? 2 : 3;

    const update = (smooth = true) => {
        const cardsPerView = getCardsPerView();
        const cardWidth = carousel.offsetWidth / cardsPerView;
        track.style.transition = smooth ? 'transform .5s ease' : 'none';
        track.style.transform = `translateX(${-current * cardWidth}px)`;

        const totalGroups = slides.length - cardsPerView + 1;
        const dotsContainer = indicators.querySelector('.dots') || Object.assign(document.createElement('div'), { className: 'dots' });
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalGroups; i++) {
            const dot = Object.assign(document.createElement('span'), { className: `dot${i === current ? ' active' : ''}` });
            dot.addEventListener('click', () => { current = i; update(); resetAuto(); });
            dotsContainer.appendChild(dot);
        }
        if (!indicators.querySelector('.dots')) indicators.insertBefore(dotsContainer, nextBtn);
    };

    const next = () => {
        const cardsPerView = getCardsPerView();
        current = (current + 1) % (slides.length - cardsPerView + 1) || 0;
        update();
    };

    const prev = () => {
        const cardsPerView = getCardsPerView();
        current = (current - 1 + (slides.length - cardsPerView + 1)) % (slides.length - cardsPerView + 1);
        update();
    };

    const startAuto = () => autoTimer = setInterval(next, 3000);
    const resetAuto = () => { clearInterval(autoTimer); startAuto(); };

    // Drag/Swipe
    let startX = 0, dragging = false;
    track.addEventListener('pointerdown', e => {
        dragging = true;
        startX = e.clientX;
        track.style.transition = 'none';
    });
    window.addEventListener('pointerup', e => {
        if (!dragging) return;
        dragging = false;
        const dx = e.clientX - startX;
        const cardsPerView = getCardsPerView();
        const cardWidth = carousel.offsetWidth / cardsPerView;
        if (Math.abs(dx) > cardWidth * 0.2) dx < 0 ? next() : prev();
        else update();
        resetAuto();
    });
    window.addEventListener('pointermove', e => {
        if (dragging) {
            const cardsPerView = getCardsPerView();
            track.style.transform = `translateX(${-current * (carousel.offsetWidth / cardsPerView) + (e.clientX - startX)}px)`;
        }
    });

    window.addEventListener('resize', () => update(false));
    update(false);
    startAuto();

    carousel._destroy = () => clearInterval(autoTimer);
}
/* ========== BOOTSTRAP APP ========== */
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    document.querySelectorAll('.scroll-arrow').forEach(arrow => {
        arrow.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(arrow.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            else console.warn(`Scroll target ${arrow.getAttribute('href')} not found.`);
        });
    });
    document.querySelectorAll('.carousel').forEach(initCarousel);

    /* ========== CARD ANIMATION ========== */
    const sections = document.querySelectorAll('.section-animate');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('show', window.scrollY > 550);
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});