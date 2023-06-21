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

function setDarkModePreference() {
  const checkbox = document.querySelector('#dark-mode-switch');
  const checked = checkbox.checked;
  const value = checked ? 'on' : 'off';
  document.cookie = `dark-mode=${value}; path=/; max-age=31536000`;
  
 function toggleDarkMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
  setDarkModePreference();
}

function getDarkModePreference() {
  const cookies = document.cookie.split(';');
  const darkModeCookie = cookies.find(cookie => cookie.trim().startsWith('dark-mode='));
  if (darkModeCookie) {
    const value = darkModeCookie.split('=')[1].trim();
    const checkbox = document.querySelector('#dark-mode-switch');
    checkbox.checked = value === 'on';
    const body = document.querySelector('body');
    if (checkbox.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
}

window.addEventListener('load', getDarkModePreference);