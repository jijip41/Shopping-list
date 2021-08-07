'use strict';

const btn = document.querySelector('.list__bottom > form > button');
const text = document.querySelector('#text');
const ul = document.querySelector('#list__body--container > ul');

let new_item = '';

function addList(e) {
  e.preventDefault();

  const template = document.querySelector('#list__template');
  const domFrag = template.content.cloneNode(true);

  domFrag.querySelector('li').textContent = new_item;
  ul.append(domFrag);
  text.value = 'Type..';
  text.focus();
}

function emptyInput() {
  text.value = '';
}

function updateText() {
  new_item = text.value;
}

text.addEventListener('click', emptyInput);

text.addEventListener('change', updateText);

btn.addEventListener('click', addList);
