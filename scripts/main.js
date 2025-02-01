// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Function to create floating shapes dynamically
const createShapes = () => {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        const size = Math.random() * 50 + 30;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        hero.appendChild(shape);

        gsap.to(shape, {
            x: `+=${Math.random() * 100 - 50}`,
            y: `+=${Math.random() * 100 - 50}`,
            duration: 5 + Math.random() * 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
};

// Initialize floating shapes
createShapes();

// Initial hero section animation
const heroAnimations = () => {
    gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" });
};

heroAnimations();

// Showcase animations with a more dynamic motion
const showcaseMotion = () => {
    gsap.utils.toArray('.showcase-item').forEach((item, i) => {
        gsap.fromTo(item, 
            { opacity: 0, y: 50, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
};

showcaseMotion();

// Parallax effect for shapes on mouse move
let timeout;
document.addEventListener('mousemove', (e) => {
    if (timeout) window.cancelAnimationFrame(timeout);
    timeout = window.requestAnimationFrame(() => {
        const shapes = document.querySelectorAll('.shape');
        const x = (window.innerWidth - e.pageX) / 100;
        const y = (window.innerHeight - e.pageY) / 100;

        shapes.forEach(shape => {
            gsap.to(shape, {
                x: `+=${x * 2}`,
                y: `+=${y * 2}`,
                duration: 2,
                ease: "power1.out"
            });
        });
    });
});

// Large text animation
const animateLargeText = () => {
    // Animate regular large text elements (excluding email)
    gsap.utils.toArray('.large-text:not(.email)').forEach((text) => {
        gsap.to(text, {
            scrollTrigger: {
                trigger: text,
                start: "top bottom-=100",
                end: "bottom center",
                scrub: 1,
            },
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: { amount: 0.3 }
        });
    });

    // Separate animation for email
    const emailElement = document.querySelector('.email');
    if (emailElement) {
        gsap.fromTo(emailElement,
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: emailElement,
                    start: "top bottom",
                    toggleActions: "play none none none",
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }
        );
    }
};

animateLargeText();

// Cursor
// Only initialize cursor effect on desktop
if (window.innerWidth >= 1024) {
    const cursor = document.querySelector('.cursor');
    let mouseX = 0;
    let mouseY = 0;

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Main cursor follows mouse immediately
        gsap.to(cursor, {
            x: mouseX - cursor.offsetWidth / 2,
            y: mouseY - cursor.offsetHeight / 2,
            duration: 0.1,
            ease: "none"
        });
    });

    // Add hover effect on cursor for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .showcase-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                duration: 0.3,
                backgroundColor: '#ffffff'
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                backgroundColor: '#ffff00'
            });
        });
    });
}