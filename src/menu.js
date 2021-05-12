import './styles.css';
import getMenu from '../src/templates/menuTpl.hbs';
import menuData from './menu.json';
const menuMarkup = document.querySelector(".js-menu");

menuMarkup.insertAdjacentHTML('beforeend',  makeMenu(menuData));

function makeMenu(menuData) {
return menuData.map(getMenu).join('');
}




// import './styles.css';

// import menuTpl from "./templates/menuTpl.hbs";
// import menuList from "./menu.json";


// const markUpNode = document.querySelector(".js-menu");
// const createMarkUp = menuTpl(menuList);

// markUpNode.insertAdjacentHTML('beforeend', createMarkUp);

import changeTheme from './change-theme.js';
