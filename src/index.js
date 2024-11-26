import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadAboutPage } from "./about";
import './styles.css';


function removeContent() {
    const divContent = document.getElementById('content');
    divContent.innerText = "";
}

const buttons = ['home', 'menu', 'about'];
document.addEventListener('click',(event)=>{
    const buttonId = event.target.id;
    if(buttons.includes(buttonId)){
        removeContent();
        switch(buttonId){
            case "home":
                loadHomePage();
                break;
             case "menu":
                 loadMenuPage();
                 break;
            case "about":
                loadAboutPage();
                break;
        }
    }
})

loadHomePage();
