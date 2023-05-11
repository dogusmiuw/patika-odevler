const navbarDOM = document.querySelector("#sticky-navbar");
const trendingDOM = document.querySelector("#trending");

addEventListener("scroll",() => {

    if(trendingDOM.getBoundingClientRect().y < 120) {
        navbarDOM.style.backgroundColor = "white";
    } else {
        navbarDOM.style.backgroundColor = "#ffc017";
    }
    
});