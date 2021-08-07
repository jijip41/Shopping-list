'use strict';

// button click event

const btn = document.querySelector('.list__bottom > form > button');
const text = document.querySelector('#text');
const ul = document.querySelector('#list__body--container > ul');

let new_item = '';

// function - when click button, add items to the list
function addList(e) {
  e.preventDefault();

  const template = document.querySelector('#list__template');
  const domFrag = template.content.cloneNode(true);

  if (new_item.length > 0) {
    domFrag.querySelector('.item__name').textContent = new_item.toUpperCase();
    domFrag.querySelector('.item__bin').innerHTML =
      '<i class="far fa-trash-alt"></i>';
    ul.append(domFrag);
    text.value = '';
  }

  const bin_btn = Array.from(document.querySelectorAll('.item__bin'));

  bin_btn.forEach((e) =>
    e.addEventListener('click', () => {
      e.parentElement.remove();
    })
  );

  new_item = '';
  text.focus();
}

// function - when click input section, empty input value
function emptyInput() {
  text.value = '';
}

//function - when input has changed update input value
function updateText() {
  new_item = text.value;
}

function removeList(e) {
  e.parentNode.remmove();
}

text.addEventListener('click', emptyInput);

text.addEventListener('change', updateText);

btn.addEventListener('click', addList);
