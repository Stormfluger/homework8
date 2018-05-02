'use strict';

function handleTableClick(event) {
  const th = event.target,
        table = event.currentTarget;

  let thList = document.querySelectorAll('th');
  //thList = Array.from(thList).filter(item => {return item !== th});
  Array.from(thList).forEach(item => {return item !== th});

  Array.from(thList).forEach(item => {
    item.removeAttribute('data-dir');
  });

  th.dataset.dir = th.dataset.dir ? -th.dataset.dir : 1;
  sortTable(th.dataset.propName, th.dataset.dir);

  table.dataset.sortBy = th.dataset.propName;
}