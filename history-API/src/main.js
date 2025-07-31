console.log('main.js loaded')

import App from './App.js';

const $target = document.querySelector('#app');

new App({ $target })