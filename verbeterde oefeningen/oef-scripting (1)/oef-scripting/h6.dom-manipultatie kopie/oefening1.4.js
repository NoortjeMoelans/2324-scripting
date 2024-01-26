const boeken= [
    {
        titel: 'The theory of everything',
        auteur: 'Stephen Hawking',
        gelezen: 'Ja'
    },
    {
        titel: '12 rules for life',
        auteur: 'Jordan Peterson',
        gelezen: 'Nee'
    }
];
const nogNietGelezenBoeken = boeken.filter((boek)=>boek.gelezen.toLowerCase() === 'Nee');

const h1 = document.createElement('h1');
h1.innerText = 'Boekenlijst';
document.body.appendChild(h1);

const ul = document.createElement('ul');
ul.id = 'boekenlijst';
document.body.appendChild(ul);

for (let i = 0; i < boeken.length; i++){
    const li = document.createElement('li');
    //titel van autuer, gelezen: ja of nee
    const huidigBoek = boeken[i] //{}
    li.innerText = huidigBoek.titel + ' van ' + huidigBoek.auteur +' , gelezen :' + huidigBoek.gelezen;


    ul.appendChild(li);

}
