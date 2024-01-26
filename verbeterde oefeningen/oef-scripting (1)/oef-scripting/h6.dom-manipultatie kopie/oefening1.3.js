const donkerrood = document.getElementById('red');
donkerrood.style.color = 'darkred';

const verwijder = document.getElementById('weg');
//verwijder.remove();
document.getElementById('main').removeChild(verwijder);

const nieuweH1 = document.createElement('h1');
nieuweH1.innerText = 'Welkom Pandix';

const header = document.getElementsByTagName('div')[0];
header.appendChild(nieuweH1);

const aside = document.createElement('aside');
aside.innerText = 'Elfde-Liniestraat 24 3500 Hasselt';
document.getElementById('main').appendChild(aside);
