// menu //


const menuButton = document.querySelector('.menu-button');
const topOverlay = document.querySelector('.top-overlay');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');

let isOpen = false;

menuButton.addEventListener('click', () => {
  if (!isOpen) {
    // Step 1: Animate the full-width overlay to slide down from the top
    gsap.to(topOverlay, { duration: 0.5, top: '0%', ease: 'power3.out' });

    // Step 2: After the top overlay animation, slide in the right-side menu overlay
    gsap.to(menuOverlay, { duration: 0.5, right: '0%', delay: 0.5, ease: 'power3.out' });

    // Step 3: Animate menu items to fade in sequentially
    gsap.to(menuItems, {
      duration: 0.5,
      opacity: 1,
      x: 0,
      stagger: 0.1,
      delay: 1,
      ease: "power3.out"
    });
  } else {
    // Close animations: reverse the order
    gsap.to(menuItems, { duration: 0.3, opacity: 0, x: 20, stagger: -0.1 });
    gsap.to(menuOverlay, { duration: 0.5, right: '-50%', delay: 0.2 });
    gsap.to(topOverlay, { duration: 0.5, top: '-100%', delay: 0.7, ease: 'power3.in' });
  }
  isOpen = !isOpen;
});
// menu //