// Default contact uses the existing business inbox. Change this one value when
// a dedicated address is ready; the mailto subject stays brand-specific.
const contactEmail = 'cary@indybiosystems.com';
const link = document.querySelector('[data-contact-link]');
if (link) {
  const subject = document.title.startsWith('Envoi') ? 'Envoi Publishing Inquiry' : 'Narrava Studios Inquiry';
  link.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
