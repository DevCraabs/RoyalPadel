document.addEventListener("DOMContentLoaded", () => {
    // Animation d’apparition des sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.section, .section-contact').forEach(el => observer.observe(el));
  
    // Header sticky qui se rétrécit
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 80) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
  
      // Parallaxe + zoom dynamique
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax-bg').forEach(el => {
        const offset = scrollY * 0.1;
        const zoom = 1 + scrollY * 0.0003; // ajuste l'intensité ici si besoin
        el.style.transform = `translateY(${offset}px) scale(${zoom})`;
      });
    });
  });
  