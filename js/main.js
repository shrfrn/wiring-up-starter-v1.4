'use strict'

function init(){
 // TODO: change the h1 txt
 console.log('hello');
}

function mark(elBtn) {
    // TODO: change text in the button
    // TODO: mark all spans inside .box
}


function whenMouseOnImg(elImg) {
    // TODO: change the image
}

function whenMouseOutImg(elImg) {
    // TODO: change the image
}

function changeSubHeader(elSpan) {
    alert('hi')

    // elSpan.classlist
    // TODO: change the text in the span inside the h2
}

function handleKey(ev) {
    // TODO: close the modal if escape is pressed
    console.log('ev:', ev);

}

function openModal() {
    // Todo: show the modal and schedule its closing
}
function closeModal() {
    // Todo: hide the modal
}


function bless() {
    // Todo: update the modal content and use openModal
}


function getTime() {
    return new Date().toString().split(' ')[4];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

