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

document.getElementById('zin').innerHTML = 'Mijn naam is ' + persoon.naam +  ' ' + persoon.voornaam + ' en ik ben ' + persoon.beroep + ' van beroep.' + 'mijn leeftijd is ' + persoon.leeftijd + ' jaar.';