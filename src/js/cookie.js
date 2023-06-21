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

function setModePreference() {
  const darkModeCheckbox = document.querySelector('#dark-mode-switch');
  const darkModeChecked = darkModeCheckbox.checked;
  const darkModeValue = darkModeChecked ? 'on' : 'off';
  document.cookie = `dark-mode=${darkModeValue}; path=/; max-age=31536000`;
  
  const lightModeCheckbox = document.querySelector('#light-mode-switch');
  const lightModeChecked = lightModeCheckbox.checked;
  const lightModeValue = lightModeChecked ? 'on' : 'off';
  document.cookie = `light-mode=${lightModeValue}; path=/; max-age=31536000`;
}
  
function toggleMode() {
  const darkModeCheckbox = document.querySelector('#dark-mode-switch');
  const lightModeCheckbox = document.querySelector('#light-mode-switch');
  const body = document.querySelector('body');
  if (darkModeCheckbox.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else if (lightModeCheckbox.checked) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.remove('light-mode');
  }
  setModePreference();
}

function getModePreference() {
  const cookies = document.cookie.split(';');
  const darkModeCookie = cookies.find(cookie => cookie.trim().startsWith('dark-mode='));
  if (darkModeCookie) {
    const value = darkModeCookie.split('=')[1].trim();
    const darkModeCheckbox = document.querySelector('#dark-mode-switch');
    darkModeCheckbox.checked = value === 'on';
    const body = document.querySelector('body');
    if (darkModeCheckbox.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  const lightModeCookie = cookies.find(cookie => cookie.trim().startsWith('light-mode='));
  if (lightModeCookie) {
    const value = lightModeCookie.split('=')[1].trim();
    const lightModeCheckbox = document.querySelector('#light-mode-switch');
    lightModeCheckbox.checked = value === 'on';
    const body = document.querySelector('body');
    if (lightModeCheckbox.checked) {
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
    }
  }
}

window.addEventListener('load', getModePreference);