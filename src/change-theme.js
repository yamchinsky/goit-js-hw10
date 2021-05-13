const body = document.querySelector('body');

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
themeSwitchToggle.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



export function changeTheme(e) {
  if (e.target.checked) {
    updateClass(Theme.DARK, Theme.LIGHT)
    localStorage.setItem('theme', 'dark');
    }
    else {
    updateClass(Theme.LIGHT, Theme.DARK)
      localStorage.setItem('theme', 'light');
    }
}


function updateClass(addClass, removeClass) {
body.classList.add(addClass)
body.classList.remove(removeClass)

};


