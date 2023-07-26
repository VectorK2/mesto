const popup = document.querySelector('#popup');
const profileEdit = document.querySelector('#profile_edit');
const cross = document.querySelector('#popup_close');
const name = document.querySelector('#name');
const status = document.querySelector('#status');
const inputName = document.querySelector('#name_input');
const inputStatus = document.querySelector('#status_input');
const form = document.querySelector('.popup__form');
const addPopup = document.querySelector('#add_popup');
const addButton = document.querySelector('.profile__button');
const addClose = document.querySelector('#add_close');
const addName = document.querySelector('#add_name_input');
const addLink = document.querySelector('#add_link_input');
const sectionElements = document.querySelector('.elements');
const addButtonSave = document.querySelector('#add_button');
const screenOpen = document.querySelector('.profile__image');
const screen = document.querySelector('.elements__photo-container');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function addElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('elements__block');
    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.classList.add('elements__delete');
    cardElement.append(cardDeleteButton);
    const image = document.createElement('img');
    image.src = card.link;
    image.classList.add('elements__photo');
    image.alt = card.name;
    image.addEventListener('click', () => screenClickOpen(card)); // открытие картинки в попапе
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('elements__photo-container');
    imageContainer.append(image);
    cardElement.append(imageContainer);
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('elements__title');
    const h2Element = document.createElement('h2');
    h2Element.classList.add('elements__name');
    h2Element.textContent = card.name;
    cardTitle.append(h2Element);
    const cardLike = document.createElement('button');
    cardLike.classList.add('elements__like');
    cardLike.addEventListener('click', like);
    cardTitle.append(cardLike);
    cardElement.append(cardTitle);

    function like() {
        cardLike.style.backgroundImage = "url('../images/likeblack.jpg')"
    }

    function screenClickOpen(card) {  // попап на открытие картинки
        const popupElement = document.createElement('div');

        function screenCloseButton() {
            document.body.querySelector('.popup');
            popupElement.remove();
        }

        popupElement.addEventListener('click', screenCloseButton);
        popupElement.classList.add('popup');
        const popupWindow = document.createElement('div');
        popupWindow.classList.add('popup__container');
        const screenClose = document.createElement('button');
        screenClose.classList.add('popup__close');
        popupWindow.append(screenClose);
        const screenImage = document.createElement('img');
        screenImage.classList.add('popup__image');
        screenImage.src = card.link;
        popupWindow.append(screenImage);
        const screenName = document.createElement('h3');
        screenName.classList.add('popup__name');
        screenName.textContent = card.name;
        popupWindow.append(screenName);
        popupElement.append(popupWindow);
        document.body.append(popupElement);
        popupElement.classList.add('popup_active');
    }

    screenOpen.addEventListener('click', screenClickOpen);

    function deleteElement() {
        cardElement.remove();
    }

    cardDeleteButton.addEventListener('click', deleteElement);


    return cardElement;
}

initialCards.forEach(card => {
    sectionElements.append(addElement(card))
});

function clickProfileEdit() {
    popup.classList.add('popup_active');
    inputName.value = name.textContent;
    inputStatus.value = status.textContent;
}


profileEdit.addEventListener('click', clickProfileEdit);

function popupClick() {
    popup.classList.remove('popup_active');
}

cross.addEventListener('click', popupClick);


function clickPopupButton(event) {
    event.preventDefault();
    name.textContent = inputName.value;
    status.textContent = inputStatus.value;
    popupClick();
}

form.addEventListener('submit', clickPopupButton);

function addClickButton() { //открытие попапа на "+"
    addPopup.classList.add('add_active');
}

addButton.addEventListener('click', addClickButton);

function addClickClose() { // закрытие попапа на крестик
    addPopup.classList.remove('add_active');
}

addClose.addEventListener('click', addClickClose);

function addSave(event) {  // добавление картинки и текста в elements
    event.preventDefault();
    addClickClose();
    const card = {
        name: addName.value,
        link: addLink.value
    };
    sectionElements.prepend(addElement(card));
    initialCards.unshift(card);

}

addButtonSave.addEventListener('click', addSave);

