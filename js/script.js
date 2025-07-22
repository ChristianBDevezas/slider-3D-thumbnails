import { commitmentItemsData } from "./database.js";
import { createCommitmentElements } from "./create-elements.js";

import { commitmentSmallItemsData } from "./database.js";
import { createSmallCommitmentElements } from "./create-elements.js"

const commitmentsContent = document.querySelector(".commitments__content");
const commitmentsSmall = document.querySelector(".commitments__small");

//create background image
const background = document.createElement("div");
background.classList.add("commitments__background");
commitmentsContent.appendChild(background);

const backgroundImage = document.createElement("img");
backgroundImage.classList.add("commitments__item__image");
backgroundImage.setAttribute("src", "./img/quality.jpg");
backgroundImage.setAttribute("alt", "Quality of Services");
background.appendChild(backgroundImage);

// populate Commitments Content div
for(let itemData of commitmentItemsData) {
    commitmentsContent.appendChild(createCommitmentElements(itemData));
}

const commitmentsItems = document.querySelectorAll(".commitments__item");
commitmentsItems[0].classList.add("commitments__item", "show-commitment");

// populate Commitments Small Images div
for(let smallItemData of commitmentSmallItemsData) {
    commitmentsSmall.appendChild(createSmallCommitmentElements(smallItemData));
}

const commitmentsSmallItems = document.querySelectorAll(".commitments__small__item");
commitmentsSmallItems[0].classList.add("commitments__small__item", "active-small");

let itemCounter = 0;

function hideCommitmentsItems() {
    commitmentsItems.forEach((commitment) => {
        if(commitment.classList.contains("show-commitment")) {
            let imageShow = commitment.querySelector("img.commitments__item__image");
            let backgroundImageShow = background.querySelector("img.commitments__item__image");
            backgroundImageShow.src = imageShow.src;
        }

        commitment.classList.remove("show-commitment");
    });
}

function hideActiveItems() {
    commitmentsSmallItems.forEach((smallItem) => {
        smallItem.classList.remove("active-small");
    });
}

function changeImage() {
    itemCounter++;    

    if(itemCounter == commitmentsItems.length) itemCounter = 0;

    hideCommitmentsItems();
    
    if(commitmentsItems[itemCounter] instanceof HTMLElement) {
        commitmentsItems[itemCounter].classList.add("show-commitment");
    }

    hideActiveItems();

    if(commitmentsSmallItems[itemCounter] instanceof HTMLElement) {
        commitmentsSmallItems[itemCounter].classList.add("active-small");
    }
}

let intervalChange = setInterval(() => changeImage(), 4300);

commitmentsSmallItems.forEach((smallItem, idx) => {
    smallItem.addEventListener("click", () => {
        clearInterval(intervalChange);
        intervalChange = setInterval(() => changeImage(), 4300);

        itemCounter = idx - 1;

        changeImage();
    });
});