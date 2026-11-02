document.querySelector('#year').textContent=String(new Date().getFullYear());
// Contact links open WhatsApp; this site never sends a message automatically.
document.querySelectorAll('[data-service]').forEach(link=>{
  link.href='https://wa.me/523312318201?'+new URLSearchParams({text:`Hola, quiero cotizar un envío ${link.dataset.service} con TiempoLibre Exprés. ¿Me ayudan a revisar cobertura y disponibilidad?`});
});
