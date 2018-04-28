
'use strict';

list.addEventListener('click', event => {
  event.preventDefault();
  event.target.classList.contains('add-to-cart') ? addToCart({title: event.target.dataset.title, price: event.target.dataset.price}) : false;
});