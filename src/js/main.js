window.onload = function () {
  let logo = document.querySelector('.logo');
  let countSquare = 75;
  let elem;
  let arrElem = [];
  let count = 0;

  for (let i = 0; i < countSquare; i++) {
    elem = document.createElement('div');
    logo.append(elem);

    arrElem.push(elem);
  }

  function anim() {
    arrElem[count].classList.add('anim');
    count++;
    if(count > countSquare - 1) return true

    setTimeout(function() {
      anim();
    }, 50)

  }

  anim();

  console.log(5 * 15)
};