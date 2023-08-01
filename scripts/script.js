const profilePopup = document.querySelector('#popup');
const profileEdit = document.querySelector('#profile_edit');
const profilePopupCloseButton = document.querySelector('#popup_close');
const name = document.querySelector('#name');
const status = document.querySelector('#status');
const inputName = document.querySelector('#name_input');
const inputStatus = document.querySelector('#status_input');
const profilePopupForm = profilePopup.querySelector('.popup__form');
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

const openPopup = popup => {
    popup.classList.add('popup_active');
}
const closePopup = popup => {
    popup.classList.remove('popup_active');
}

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
        openPopup(popupScreen);
        const screenImage = popupScreen.querySelector('.popup__image');
        screenImage.src = card.link;
        const screenTitle = popupScreen.querySelector('.popup__name');
        screenTitle.textContent = card.name;
    }

    elementsClone.querySelector('.elements__photo').addEventListener('click', screenOpen);

    function deleteElement() {
        elementsClone.remove();
    }

    buttonDelete.addEventListener('click', deleteElement);


    return elementsClone;
}

popupScreen.querySelector('.popup__close').addEventListener('click', () => closePopup(popupScreen));

function clickProfileEdit() {  //открытие попапа на карандаш и получение инпутов из profile__info
    openPopup(profilePopup);
    inputName.value = name.textContent;
    inputStatus.value = status.textContent;
}


profileEdit.addEventListener('click', clickProfileEdit);

function closePopupProfile() {
    closePopup(profilePopup);
}

profilePopupCloseButton.addEventListener('click', closePopupProfile);


function saveProfile(event) { //кнопка "сохранить" и изменение результата в profile__info
    event.preventDefault();
    name.textContent = inputName.value;
    status.textContent = inputStatus.value;
    closePopupProfile();
}

profilePopupForm.addEventListener('submit', saveProfile);

addButton.addEventListener('click', () => openPopup(addPopup));

function addClickClose() { // закрытие попапа на крестик
    closePopup(addPopup);
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

