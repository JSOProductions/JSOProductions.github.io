function setMode(mode) {
  const body = document.querySelector('body');
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else if (mode === 'light') {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }
  // Save the mode value in a cookie
  document.cookie = `mode=${mode}; path=/`;
}

function checkModeCookie() {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('mode='))
    ?.split('=')[1];

  if (cookieValue) {
    setMode(cookieValue);
  }
}