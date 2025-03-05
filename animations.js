// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for header
    gsap.from(".header-container", { duration: 1.5, opacity: 0, y: -50 });

    // Stagger animation for sections
    gsap.from("section", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        delay: 0.5
    });

    // Animation for skills
    gsap.from(".skills-list span", {
        duration: 0.5,
        scale: 0,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 1
    });
});
