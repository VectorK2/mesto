const popup = document.querySelector('#popup');
const profileEdit = document.querySelector('#profile_edit');
const cross = document.querySelector('#popup_close');
const name = document.querySelector('#name');
const status = document.querySelector('#status');
const inputName = document.querySelector('#name_input');
const inputStatus = document.querySelector('#status_input');
const popupButton = document.querySelector('#popup_button');
const likeChange1 = document.querySelector('#elements_like-1');
const likeChange2 = document.querySelector('#elements_like-2');
const likeChange3 = document.querySelector('#elements_like-3');
const likeChange4 = document.querySelector('#elements_like-4');
const likeChange5 = document.querySelector('#elements_like-5');
const likeChange6 = document.querySelector('#elements_like-6');


function clickProfileEdit() {
    popup.classList.add('popup_active');
}

profileEdit.addEventListener('click', clickProfileEdit);

function popupClick() {
    popup.classList.remove('popup_active');
}

cross.addEventListener('click', popupClick);

inputName.value = name.textContent;
inputStatus.value = status.textContent;


function clickPopupButton() {
    name.textContent = inputName.value;
    status.textContent = inputStatus.value;
    popupClick();
}

popupButton.addEventListener('click', clickPopupButton);

likeChange1.addEventListener('click', likeBlackChange1);

function likeBlackChange1() {
    likeChange1.src = 'images/likeblack.jpg'
}

likeChange2.addEventListener('click', likeBlackChange2);

function likeBlackChange2() {
    likeChange2.src = 'images/likeblack.jpg'
}

likeChange3.addEventListener('click', likeBlackChange3);

function likeBlackChange3() {
    likeChange3.src = 'images/likeblack.jpg'
}

likeChange4.addEventListener('click', likeBlackChange4);

function likeBlackChange4() {
    likeChange4.src = 'images/likeblack.jpg'
}

likeChange5.addEventListener('click', likeBlackChange5);

function likeBlackChange5() {
    likeChange5.src = 'images/likeblack.jpg'
}

likeChange6.addEventListener('click', likeBlackChange6);

function likeBlackChange6() {
    likeChange6.src = 'images/likeblack.jpg'
}