// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if(this.hash) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
  
// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } 
    else {
      header.style.backgroundColor = '';
    }
  }
});