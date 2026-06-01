
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
