import beer from './beer.png';

export function loadAboutPage(){
    const content = document.querySelector("#content");
    content.className = 'home-content';
    const about = aboutPageInfo();
    content.appendChild(about);
    const aboutImg = aboutPagePhoto();
    content.appendChild(aboutImg);
}

function aboutPageInfo(){
    const aboutDescription = 
        `The 1st self-service beer bar in Athens! 
        Berlin by 5 drunkmen is more an innovative beer-bar rather than a traditional beer-restaurant. 
        This awarded bar is located in Pagrati district, an old and worth visiting neighborhood of Athens city centre.
        What makes this bar unique, is the fact that every table has its own personal taps where you can serve yourself at will, whenever you want. 
        Then, you can see your "score" on the big screen located on the wall! You can also taste fresh finger food and tapas to accompany your beer!
        A beer bar where you are definitely treated as a local and not as tourist!!`;
    const aboutPage = document.createElement("p");
    aboutPage.classList.add("about-info");
    aboutPage.innerText = aboutDescription;
    return aboutPage
}

function aboutPagePhoto(){
    const aboutPageImg = document.createElement("img");
    aboutPageImg.classList.add("about-img");
    aboutPageImg.src = beer;
    return aboutPageImg;
}