import { planets } from '../data/planets.js';

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const planetsholo = document.querySelector ('.planetsholo')

function populateNav() {
    planets.forEach(planets) 
    let listItem = document.createElement('li')
    navList.appendChild(listItem)




}

populateNav()