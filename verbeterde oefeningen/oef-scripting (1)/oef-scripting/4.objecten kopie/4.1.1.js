let persoon = {
    naam: 'Wouters',
    voornaam: 'Bo',
    leeftijd: '20',
    beroep: 'student',

}
console.log(persoon)
document.getElementById("naam").innerHTML = persoon.naam;
document.getElementById("voornaam").innerHTML = persoon.voornaam;
document.getElementById("leeftijd").innerHTML = persoon.leeftijd;
document.getElementById("beroep").innerHTML = persoon.beroep;

//for (eigenschap in persoon){
   // console.log(persoon[eigenschap])}