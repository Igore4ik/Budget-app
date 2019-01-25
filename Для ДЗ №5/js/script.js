let li = document.querySelectorAll('.menu-item'),
    ul = document.querySelector('.menu'),
    ad = document.querySelector('.adv'),
    promp = document.getElementById('prompt'),
    
    imgBack = document.querySelectorAll('.column'),
    title = document.getElementById("title");
    
ul.insertBefore(li[2], li[1]);
let li5 = document.createElement('li');
li5.classList.add('menu-item');
ul.appendChild(li5);
li5.textContent = ('Пятый пункт');

if (ad.parentNode) {
  ad.parentNode.removeChild(ad);
}

let ask = prompt("Как вы относитесь к технике apple?", "");
promp.textContent = ask;

var NewImg = new Image ();
NewImg.src =  'file:///C:/Users/Igorek/Desktop/%D0%94%D0%BB%D1%8F%20%D0%94%D0%97%20%E2%84%965/img/apple_true.jpg';
NewImg.classList.add('column');
document.body.replaceChild(NewImg, imgBack[0]);

let title1 = document.createElement('div');
title1.classList.add('title');
title1.textContent = "Мы продаем только подлинную технику Apple";

imgBack[1].replaceChild(title1, title);
console.log(imgBack);
console.log(title1);








