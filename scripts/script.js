const popup = document.querySelector('#popup');
const profileEdit = document.querySelector('#profile_edit');
const cross = document.querySelector('#popup_close');
const name = document.querySelector('#name');
const status = document.querySelector('#status');
const inputName = document.querySelector('#name_input');
const inputStatus = document.querySelector('#status_input');
const form = document.querySelector('form[name="profileChange"]');


function clickProfileEdit() {
    popup.classList.add('popup_active');
    inputName.value = name.textContent;
    inputStatus.value = status.textContent;
}


profileEdit.addEventListener('click', clickProfileEdit);

function popupClick() {
    popup.classList.remove('popup_active');
    inputName.value = name.textContent;
    inputStatus.value = status.textContent;
}

cross.addEventListener('click', popupClick);


function clickPopupButton(event) {
    event.preventDefault();
    name.textContent = inputName.value;
    status.textContent = inputStatus.value;
    popupClick();
    console.log(event);
}

form.addEventListener('submit', clickPopupButton);