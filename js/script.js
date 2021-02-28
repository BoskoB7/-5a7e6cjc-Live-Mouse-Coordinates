// [5a7e6cjc] Live Mouse Coordinates

// Show and change the mouse location coordinates in realtime, in the DOM.

document.addEventListener('mousemove', (e) => {
  // ovaj handler se poziva svaki put kada se mis pomeri
  console.log('mis se pomerio');
  console.log(e);
  // ocitavamo kordinate misa iz eventa
  let x = e.clientX; // iz podatak o eventu uzimamo samo x poziciju misa 
  let y = e.clientY; // iz podatak o eventu uzimamo samo y poziciju misa 
  // prikazujemo kordinate na ekranu
  document.getElementById('xpos').innerText = x;
  document.getElementById('ypos').innerText = y;

});


/*
(e)=> {} je isto sto i function(e){}

=> ovaj zank se zove FTA ARROW (DEBELA STRELICA)
ta vrsta funkcija sa => se zovu "arrow funkcije"


() => {}
function() {}

a => {}
(a) => {}
function(a) {}

(a, b) => {}
functon(a,b) {}


() => 5
() => { 
  return 5
}
function() {
  return 5
}

a => 7
(a) => 7
a => {
  return 7
}
(a) => {
  return 7
}
function(a) {
  return 7
}


*/

