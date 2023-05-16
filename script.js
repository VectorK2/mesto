const popup = document.querySelector('#popup');
const profileEdit = document.querySelector('#profile_edit');

function clickProfileEdit() {
    popup.classList.add('popup_active');
}

profileEdit.addEventListener('click', clickProfileEdit);

const cross = document.querySelector('#popup_close');

function popupClick() {
    popup.classList.remove('popup_active');
}

cross.addEventListener('click', popupClick);

const name = document.querySelector('#name');
const status = document.querySelector('#status');

const inputName = document.querySelector('#name_input');
inputName.value = name.textContent;
const inputStatus = document.querySelector('#status_input');
inputStatus.value = status.textContent;

const popupButton = document.querySelector('#popup_button');

function clickPopupButton() {
    name.textContent = inputName.value;
    status.textContent = inputStatus.value;
    popupClick();
}

popupButton.addEventListener('click', clickPopupButton);


