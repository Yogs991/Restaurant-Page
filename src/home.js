import logo from './pub.png';

export function loadHomePage(){
    const content = document.querySelector("#content");
    content.className = 'home-content';
    const home = homePageHeading();
    content.appendChild(home);
    const info = homePageInfo();
    content.appendChild(info);
    const logo = logoIcon();
    content.appendChild(logo);
}

function homePageHeading(){
    const restaurantName = "Athen's Beer House";
    const siteHeading = document.createElement("h1");
    siteHeading.classList.add("siteHeading");
    siteHeading.innerText = restaurantName;
    return siteHeading;
}

function homePageInfo(){
    const homeDescription = 
    `Athens beer house, one of the best hangouts in Athens, offers food, drinks, beer and musical entertainment.
    It began operating in the Syntagma area as a beer hall in early 2006. Soon his fame spread everywhere,
    managing to gain the best impressions and conquer a very large audience.
    Our philosophy includes the excellent quality of food combined with rich and filling quantities, 
    paying great attention to raw materials, always with fresh and superior quality Greek products.`;
    const homePageInfo = document.createElement("p");
    homePageInfo.classList.add("home-info");
    homePageInfo.innerText = homeDescription;
    return homePageInfo;
}

function logoIcon(){
    const logoImg = document.createElement("img");
    logoImg.classList.add("logo");
    logoImg.src = logo;
    return logoImg;
}




