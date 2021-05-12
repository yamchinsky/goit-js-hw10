const body = document.querySelector('body');

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
themeSwitchToggle.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



export function changeTheme(e) {
  if (e.target.checked) {
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', 'dark');
    }
    else {
        body.classList.add(Theme.LIGHT)
         body.classList.remove(Theme.DARK)
         localStorage.setItem('theme', 'light');
    }
}


