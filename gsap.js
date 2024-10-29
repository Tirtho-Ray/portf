gsap.from(".portfolio-item", {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power1.out"
});



window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.parent_navber');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Change to desired color when scrolled
        navbar.style.borderRadius = '10px'; // Adjust to your desired rounded effect when scrolled
    } else {
        navbar.style.backgroundColor = 'transparent'; // Change back to transparent
        navbar.style.transition = 'background-color 0.3s ease, border-radius 0.3s ease'; // Add transition effect if desired
        navbar.style.borderRadius = '10px'; // Set back to your desired rounded effect when at top
    }
});

// GSAP animation for Won section items
const wonSection = document.getElementById('won-section');
const wonItems = document.querySelectorAll('.won-item');

let hasAnimated = false; // Track if animation has occurred

function animateWonSection() {
    const sectionPosition = wonSection.getBoundingClientRect().top;

    // Check if the section is in the viewport
    if (sectionPosition < window.innerHeight && !hasAnimated) {
        hasAnimated = true; // Prevent repeated animations

        // Animate each item from left and right
        gsap.from(wonItems[0], {
            duration: 1,
            x: -100,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(wonItems[1], {
            duration: 1,
            x: 100,
            opacity: 0,
            ease: "power2.out"
        });
    }
}

// Listen for scroll events
window.addEventListener('scroll', animateWonSection);
