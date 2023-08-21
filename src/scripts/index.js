import{ darkModeAdd } from "./darkMode.js";
import { products, categories } from "./productsData.js";
/* Desenvolva sua lógica aqui ... */

// function createCard(product){
//     const card = document.createElement("li")
//     /* Trabalhe sua lógica aqui */

//     return card
// }

function render() {
    const albumsList = document.querySelector(".albums__list");
    albumsList.innerHTML = "";
    products.forEach((products) => {
        const cardCreate = createCard(products);
        albumsList.appendChild(cardCreate);
    });
}

const createCard = ({id, title, category, price, img, band, year}) => {
    const card = document.createElement("li");
    const cardImg = document.createElement("img");
    const cardParag = document.createElement("p");
    const cardTitle = document.createElement("h2");
    const cardSpan = document.createElement("span");
    const cardButton = document.createElement("Button");
    const categorieAlbum = document.createElement("span");

    card.classList.add("album__container");

    cardImg.src = img;
    cardImg.alt = band;

    cardParag.classList.add("album__name-year");
    cardParag.innerText = `${band} ${year}`;

    cardTitle.classList.add("album__title");
    cardTitle.innerText = title;
    
    cardSpan.classList.add("album__price");
    cardSpan.innerText = `R$ ${price}.00`;
    
    cardButton.classList.add("album__button")
    cardButton.innerText = "Comprar";

    categorieAlbum.classList.add("album__category");
    categorieAlbum.innerText = category;

    card.append(cardImg, cardParag, cardTitle, cardSpan, cardButton, categorieAlbum);

    return card
}

function renderButtons () {
    const genderButtons = document.querySelector(".gender__buttons-list");

    categories.forEach((element)=>{
        const butonsCreate = createButtons(element);
        // console.log(butonsCreate);
        genderButtons.appendChild(butonsCreate);
    });
}

const createButtons = (categorieName) => {

    const genderListButtons = document.querySelector(".gender__buttons-list");

    
    // categories.forEach((nome) => {
        const listButtons = document.createElement("li");
        const genderButtons = document.createElement("button");
        genderButtons.classList.add("gender__buttons-select");
        
        genderButtons.innerText = categorieName;
        
        // listButtons.append(genderButtons);
        
        // genderListButtons.append(listButtons);

        return genderButtons;
    // })

}

const filterCategories = (products) => {
    const buttonCategory = document.getElementsByClassName("gender__buttons-select");
    const albumsList = document.querySelector(".albums__list");

    // console.log('estuman');
    // console.log(buttonCategory.value);

    Object.values(buttonCategory).forEach((element) =>{
        element.addEventListener('click', (event) => {
            console.log(albumsList.childNodes);
            console.log(event.target.innerText);
            // const buttonFilter = products.filter(() => products.category = buttonCategory.value)
    
            // render(buttonFilter)
        })
    })

}

const filterInputRange = (array) => {

    const inputRange = document.querySelector("#filter__input");

    inputRange.addEventListener('input', () => {

        const parag = document.querySelector("#filter__price");
        
        const filterRangeArray = array.filter((products) => products.price <= Number(inputRange.value));
        
        parag.innerText = `${parag.textContent}${inputRange.value}`;

        render(filterRangeArray);
    })
} 

filterInputRange(products);
darkModeAdd();
render();
renderButtons();
createButtons();
filterCategories();