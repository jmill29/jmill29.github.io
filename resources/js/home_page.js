function highlightPageTab(event) {
    event.target.style.color = 'skyblue';
}
function reverseHighlight(event) {
    event.target.style.color = 'white';
}

let projectsTab = document.querySelector('.dropdown');
let homeTab = document.querySelector('#home h3');
let aboutMeTab = document.getElementById('about-me');
let navBar = document.querySelector('nav');
let pageLogo = document.querySelector('header h1');

let pageTabs = [projectsTab, aboutMeTab];
for (let tab of pageTabs) {
    tab.onmouseenter = highlightPageTab;
    tab.onmouseleave = reverseHighlight;
}

navBar.onmouseenter = function() {
    homeTab.style.color = 'white';
};
navBar.onmouseleave = function() {
    projectsTab.style.color = 'white';
    aboutMeTab.style.color = 'white';
    homeTab.style.color = 'skyblue';
};
pageLogo.onclick = function() {location.reload();}