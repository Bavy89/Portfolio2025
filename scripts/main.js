// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create floating shapes
const createShapes = () => {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        // Randomize size between 30 and 80 pixels
        const size = Math.random() * 50 + 30;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        // Initial position
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        hero.appendChild(shape);

        // Create smooth, continuous floating animation for each shape
        gsap.to(shape, {
            x: `+=${Math.random() * 100 - 50}`,
            y: `+=${Math.random() * 100 - 50}`,
            duration: 5 + Math.random() * 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Add click interaction
        shape.addEventListener('click', (e) => {
            // Stop propagation to prevent multiple shapes from being affected
            e.stopPropagation();
            
            // Create ripple effect
            gsap.to(shape, {
                scale: 1.5,
                opacity: 0.2,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(shape, {
                        scale: 1,
                        opacity: 0.1,
                        duration: 0.5,
                        ease: "power2.in"
                    });
                }
            });

            // Affect nearby shapes
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach(otherShape => {
                if (otherShape !== shape) {
                    const rect1 = shape.getBoundingClientRect();
                    const rect2 = otherShape.getBoundingClientRect();
                    
                    // Calculate distance between shapes
                    const distance = Math.hypot(
                        rect1.left - rect2.left,
                        rect1.top - rect2.top
                    );

                    // Only affect shapes within 200px
                    if (distance < 200) {
                        const scale = 1 + (200 - distance) / 200;
                        gsap.to(otherShape, {
                            scale: scale,
                            opacity: 0.15,
                            duration: 0.3,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.to(otherShape, {
                                    scale: 1,
                                    opacity: 0.1,
                                    duration: 0.3,
                                    ease: "power2.in"
                                });
                            }
                        });
                    }
                }
            });
        });
    }
};

// Add click interaction to the hero section
document.querySelector('.hero').addEventListener('click', (e) => {
    // Only trigger if clicking directly on the hero (not on a shape)
    if (e.target.classList.contains('hero')) {
        const shapes = document.querySelectorAll('.shape');
        const clickX = e.clientX;
        const clickY = e.clientY;

        shapes.forEach(shape => {
            const rect = shape.getBoundingClientRect();
            const shapeX = rect.left + rect.width / 2;
            const shapeY = rect.top + rect.height / 2;
            
            // Calculate distance from click
            const distance = Math.hypot(clickX - shapeX, clickY - shapeY);
            
            // Affect shapes based on distance
            if (distance < 300) {
                const scale = 1 + (300 - distance) / 300;
                const delay = distance / 1000; // Ripple effect delay
                
                gsap.to(shape, {
                    scale: scale,
                    opacity: 0.2,
                    duration: 0.5,
                    delay: delay,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(shape, {
                            scale: 1,
                            opacity: 0.1,
                            duration: 0.5,
                            ease: "power2.in"
                        });
                    }
                });
            }
        });
    }
});

// Initialize shapes
createShapes();

// Initial animation when page loads
gsap.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

// Horizontal showcase scroll animation
const showcaseTrack = document.querySelector('.showcase-track');
const showcaseWidth = showcaseTrack.offsetWidth;
const translateX = showcaseWidth - window.innerWidth;

gsap.to('.showcase-track', {
    x: -translateX,
    ease: 'none',
    scrollTrigger: {
        trigger: '.showcase',
        start: 'top top',
        end: `+=${translateX}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
            gsap.to('.progress-bar-fill', {
                width: `${self.progress * 100}%`,
                duration: 0.1
            });
        }
    }
});

// Smoother parallax effect on hero shapes with debouncing
let timeout;
document.addEventListener('mousemove', (e) => {
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

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

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate each line of text
gsap.utils.toArray('.large-text').forEach((text, i) => {
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
        stagger: {
            amount: 0.3
        }
    });
});

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate each line of text
gsap.utils.toArray('.large-text').forEach((text, i) => {
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
        stagger: {
            amount: 0.3
        }
    });
});