const btnEmail = document.getElementById('btn-email');

btnEmail.addEventListener('click', () => {
  const email = 'felipe.tadeusantos1@gmail.com';
  const subject = 'Assunto do E-mail';
  const body = 'Corpo do E-mail';

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

  console.log(window.location.href)
});
