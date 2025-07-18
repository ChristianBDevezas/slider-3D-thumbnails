const commitmentsItems = document.querySelectorAll(".commitments__item");
const commitmentsSmallItems = document.querySelectorAll(".commitments__small__item");
const backgroundImage = document.querySelector(".commitments__background");
let itemCounter = 0;

function hideCommitmentsItems() {
    commitmentsItems.forEach((commitment) => {
        if(commitment.classList.contains("show-commitment")) {
            let imageShow = commitment.querySelector("img.commitments__item__image");
            let backgroundImageShow = backgroundImage.querySelector("img.commitments__item__image");
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