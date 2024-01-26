let persoon = {
    naam: 'Wouters',
    voornaam: 'Bo',
    leeftijd: '20',
    beroep: 'student',
    lengte: '1m58',
    gewicht: '51kg',
    huidskleur:'blank',
    oogkleur: 'blauw',
}

console.log(persoon)
document.getElementById("naam").innerHTML = persoon.naam;
document.getElementById("voornaam").innerHTML = persoon.voornaam;
document.getElementById("leeftijd").innerHTML = persoon.leeftijd;
document.getElementById("beroep").innerHTML = persoon.beroep;
document.getElementById("lengte").innerHTML = persoon.lengte;
document.getElementById("gewicht").innerHTML = persoon.gewicht;
document.getElementById("huidskleur").innerHTML = persoon.huidskleur;
document.getElementById("oogkleur").innerHTML = persoon.oogkleur;



document.getElementById('zin').innerHTML = 'Mijn naam is ' + persoon.naam +  ' ' + persoon.voornaam + ' en ik ben ' +
    persoon.beroep + ' van beroep.' + 'mijn leeftijd is ' + persoon.leeftijd + ' jaar.';

delete persoon.lengte;
delete persoon.gewicht;

let persoonArray = Object.values(persoon);
console.log();