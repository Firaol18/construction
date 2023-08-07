// Select the menu bar element
let menubar = document.querySelector('#menu-bar');

// Select the navigation element
let mynav = document.querySelector('.nav');

// Select the search bar element
let searchbar = document.querySelector('#search-bar');

// Select the search form element
let search = document.querySelector('.search-form');

// Toggle menu bar and navigation visibility on click
menubar.onclick = () => {
  // Toggle the "fa-times" class on the menu bar element
  menubar.classList.toggle('fa-times');

  // Toggle the "active" class on the navigation element
  mynav.classList.toggle('active');
}

// Toggle search form visibility on click
searchbar.onclick = () => {
  // Toggle the "active" class on the search form element
  search.classList.toggle('active');
}