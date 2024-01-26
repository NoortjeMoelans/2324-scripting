let getal1 = prompt("Geef een eerste getal");
let getal2 = prompt("Geef een tweede getal");
optellen = getal1 + getal2;
aftrekken= getal1 - getal2;
vermenigvuldiging = getal1 * getal2;
delen = getal1 / getal2;
document.getElementById("uitkomst").innerText = "De uitkomst van de vermenigvuldiging is: " + vermenigvuldiging + " \n De optelling van de twee getallen is: " + optellen + " \n De aftrekking van de twee getallen is: " + aftrekken + " \n De deling van de twee getallen is: " + delen;
