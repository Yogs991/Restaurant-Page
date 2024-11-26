import menu from './menu.png';

export function loadMenuPage(){
    const content = document.querySelector("#content");
    content.className = 'menu-page';
    const menuImage = menuIcon();
    content.appendChild(menuImage);
    const menuItems = menuContent();
    content.appendChild(menuItems);
}

function menuIcon(){
    const menuIcon = document.createElement("img");
    menuIcon.classList.add("menu-img");
    menuIcon.src = menu;
    return menuIcon;
}

function menuContent(){
    const menuText = `The Bullseye Burger & Fries
    • Μοσχαρίσιο Burger, τομάτα, κρεμμύδια, iceberg, Bullseye sauce + πατάτες
    • Beef Burger, tomato, onions, iceberg, Bullseye sauce + fries <br>
    Bacon Mushroom Melt & Fries
    • Μοσχαρίσιο Burger, cheddar, bacon, τομάτα, καραμελωμένα κρεμμύδια, μανιτάρια a la crème, iceberg, Bullseye sauce + πατάτες**
    • Beef Burger, cheddar, bacon, tomato, caramelized onions, mushrooms a la crème, iceberg, Bullseye sauce + fries**`
    const menu = document.createElement("p");
    menu.classList.add("menu");
    menu.innerText = menuText;
    return menu;
}