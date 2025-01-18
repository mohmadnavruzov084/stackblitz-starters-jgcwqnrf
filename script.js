'use strict';

let myElement = document.getElementById('myElement');
myElement.textContent = 'Hello world!';
myElement.style.backgroundColor = 'lightblue';

let spanTest = document.querySelector('.test');
spanTest.classList.add('highlighted');
spanTest.classList.remove('highlighted');

let paragraph = document.createElement('p');
paragraph.textContent = 'It new paragraph';

let removeParagraph = paragraph.classList.add('pVanRemove');
removeParagraph.remove();

spanTest.appendChild(paragraph);

let changeUrlImg = document.querySelector('.myLink');
changeUrlImg.setAttribute('src', 'cute_cat-2.jpg');
changeUrlImg = document.querySelector('.myLink');
if (changeUrlImg) {
  console.log('Элемент найден', changeUrlImg)
   changeUrlImg.setAttribute('src', 'cute_cat-2.jpg');
 } else {
     console.error('Элемент не найден')
 }