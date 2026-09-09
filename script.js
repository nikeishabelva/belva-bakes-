const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

function addToCart(item) {
  const toast = document.getElementById('toast');
  toast.textContent = `♡ ${item} ditambahkan ke pesanan!`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.product-card, .about-copy, .about-art').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
