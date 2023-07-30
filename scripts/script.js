const allPopup = document.querySelector('#popup');
const profileEdit = document.querySelector('#profile_edit');
const allClose = document.querySelector('#popup_close');
const name = document.querySelector('#name');
const status = document.querySelector('#status');
const inputName = document.querySelector('#name_input');
const inputStatus = document.querySelector('#status_input');
const popupForm = allPopup.querySelector('.popup__form');
const addPopup = document.querySelector('#add_popup');
const addButton = document.querySelector('.profile__button');
const addClose = document.querySelector('#add_close');
const addName = document.querySelector('#add_name_input');
const addLink = document.querySelector('#add_link_input');
const sectionElements = document.querySelector('.elements');
const screen = document.querySelector('.elements__photo-container');
const popupScreen = document.querySelector('#screen_popup');
const popupScreenClose = document.querySelector('#screenClose');
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
initialCards.forEach(card => {
    sectionElements.append(buildElement(card))
});

function buildElement(card) {
    const elementsBox = document.querySelector('#elements-box').content;
    const elementsClone = elementsBox.querySelector('.elements__block').cloneNode(true);
    elementsClone.querySelector('.elements__photo').src = card.link;
    elementsClone.querySelector('.elements__name').textContent = card.name;
    const likeClasses = elementsClone.querySelector('.elements__like').classList;
    const buttonDelete = elementsClone.querySelector('.elements__delete');

    function like() {
        likeClasses.toggle('elements__like_active');
    }

    elementsClone.querySelector('.elements__like').addEventListener('click', like);

    function screenOpen() {
        popupScreen.classList.add('popup_active');
        const screenImage = popupScreen.querySelector('.popup__image');
        screenImage.src = card.link;
        const screenTitle = popupScreen.querySelector('.popup__name');
        screenTitle.textContent = card.name;
    }

    elementsClone.querySelector('.elements__photo').addEventListener('click', screenOpen);

    function screenClose() {
        popupScreen.classList.remove('popup_active');
    }

    popupScreen.querySelector('.popup__close').addEventListener('click', screenClose);

    //
    // function screenClickOpen(card) {  // попап на открытие картинки
    //     const popupElement = document.createElement('div');
    //
    //     function screenCloseButton() {
    //         document.body.querySelector('.popup');
    //         popupElement.remove();
    //     }
    //
    //     popupElement.addEventListener('click', screenCloseButton);
    //     popupElement.classList.add('popup');
    //     const popupWindow = document.createElement('div');
    //     popupWindow.classList.add('popup__container');
    //     const screenClose = document.createElement('button');
    //     screenClose.classList.add('popup__close');
    //     popupWindow.append(screenClose);
    //     const screenImage = document.createElement('img');
    //     screenImage.classList.add('popup__image');
    //     screenImage.src = card.link;
    //     popupWindow.append(screenImage);
    //     const screenName = document.createElement('h3');
    //     screenName.classList.add('popup__name');
    //     screenName.textContent = card.name;
    //     popupWindow.append(screenName);
    //     popupElement.append(popupWindow);
    //     document.body.append(popupElement);
    //     popupElement.classList.add('popup_active');
    // }
    //
    function deleteElement() {
        elementsClone.remove();
    }

    buttonDelete.addEventListener('click', deleteElement);


    return elementsClone;
}

function clickProfileEdit() {  //открытие попапа на карандаш и получение инпутов из profile__info
    allPopup.classList.add('popup_active');
    inputName.value = name.textContent;
    inputStatus.value = status.textContent;
}


profileEdit.addEventListener('click', clickProfileEdit);

function closePopupProfile() {
    allPopup.classList.remove('popup_active');
}

allClose.addEventListener('click', closePopupProfile);


function saveProfile(event) { //кнопка "сохранить" и изменение результата в profile__info
    event.preventDefault();
    name.textContent = inputName.value;
    status.textContent = inputStatus.value;
    closePopupProfile();
}

popupForm.addEventListener('submit', saveProfile);

function addClickButton() { //открытие попапа на "+"
    addPopup.classList.add('popup_active');
}

addButton.addEventListener('click', addClickButton);

function addClickClose() { // закрытие попапа на крестик
    addPopup.classList.remove('popup_active');
}

addClose.addEventListener('click', addClickClose);

function addSave(event) {  // добавление картинки и текста в elements
    event.preventDefault();
    addClickClose();
    const card = {
        name: addName.value,
        link: addLink.value
    };
    sectionElements.prepend(buildElement(card));
    addPopup.querySelector('.popup__form').reset();
}

addPopup.addEventListener('submit', addSave);

