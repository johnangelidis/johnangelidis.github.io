function toggleNav(){
    let navItems = document.getElementById("main-nav");
    navItems.classList.toggle("hidden");
}

function toggleSearch(){
    let searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("hidden");
}

const navToggle = document.getElementById("menu");
navToggle.onclick = toggleNav;

const navSearch = document.getElementById("search");
navSearch.onclick = toggleSearch;