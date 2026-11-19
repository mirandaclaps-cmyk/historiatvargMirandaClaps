// Navegación: cerrar el menú móvil al elegir una sección.
document.querySelectorAll('#menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

// Encuesta demostrativa: la respuesta se muestra localmente, no se guarda ni envía.
const pollResult = document.getElementById('pollResult');
document.querySelectorAll('.poll-option').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.poll-option').forEach(option => {
      option.classList.remove('selected');
      option.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('selected');
    button.setAttribute('aria-pressed', 'true');
    pollResult.textContent = '¡Gracias por participar! Esta es una encuesta de demostración; no recopila respuestas.';
  });
  button.setAttribute('aria-pressed', 'false');
});

// Fallback accesible cuando todavía falta descargar una fotografía.
document.querySelectorAll('.image-grid img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.minHeight = '190px';
    img.style.objectFit = 'contain';
    img.alt += ' (imagen pendiente de incorporar)';
  }, { once: true });
});
