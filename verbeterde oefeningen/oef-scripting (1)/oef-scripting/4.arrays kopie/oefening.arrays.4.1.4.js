let hondenrassen = new Array("ras1 ", "ras2", "ras3", "ras4","ras5","ras6","ras7","ras8","ras9","ras10");
let vraag = prompt("Geef een getal tussen 1 en 10:");
if (vraag >= 1 && vraag <= 10) {
    console.log(hondenrassen[vraag-1]);
}
else {
    console.log("Sory, katten zijn niet toegelaten.");
}
console.log(vraag);