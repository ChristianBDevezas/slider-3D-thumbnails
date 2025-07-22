export function createCommitmentElements(itemData) {    
    const commitmentsItem = document.createElement("div");
    commitmentsItem.classList.add("commitments__item");

    const commitmentsItemImage = document.createElement("img");
    commitmentsItemImage.classList.add("commitments__item__image");
    commitmentsItemImage.setAttribute("src", itemData.imageUrl);
    commitmentsItemImage.setAttribute("alt", itemData.title);
    commitmentsItem.appendChild(commitmentsItemImage);
    
    const commitmentsItemTitle = document.createElement("h3");
    commitmentsItemTitle.classList.add("commitments__item__title");
    commitmentsItemTitle.innerText = itemData.title;
    commitmentsItem.appendChild(commitmentsItemTitle);
    
    const commitmentsItemDescription = document.createElement("p");
    commitmentsItemDescription.classList.add("commitments__item__description");
    commitmentsItemDescription.innerText = itemData.description;
    commitmentsItem.appendChild(commitmentsItemDescription);
    
    return commitmentsItem;
}

export function createSmallCommitmentElements(smallItemData) {
    const commitmentsSmallItem = document.createElement("div");
    commitmentsSmallItem.classList.add("commitments__small__item");

    const commitmentsSmallItemImage = document.createElement("img");
    commitmentsSmallItemImage.setAttribute("src", smallItemData.imageUrl);
    commitmentsSmallItemImage.setAttribute("alt", smallItemData.title);
    commitmentsSmallItem.appendChild(commitmentsSmallItemImage);

    return commitmentsSmallItem;
}