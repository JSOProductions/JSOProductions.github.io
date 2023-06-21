function mode() {
  const stylesheet = document.getElementById("cookieMode");
  const mode = document.getElementById("change");
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
  
	if (body.classList === 'dark-mode') {
    stylesheet.href = "./src/css/darkmode.css";
  } else {
    stylesheet.href = "./src/css/lightmode.css";
  }
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