// function theBeatlesPlay([Beatles, Agulero, Michael Jackson], [Guitar, Musical, Piano, Fortopiano]){
//   var arr = [""];
//   for(var i = 0; i <= arr.length; i++){
//       console.log(arr[0][i]);
//   }
// }
// theBeatlesPlay();

// function theBeatlesPlay(musicians, instruments) {
//   var array = [];
//   for (var i = 0; i < musicians.length; i++) {
//     array.push(musicians[i] + " plays " + instruments[i]);
//   }
//   return array;
// }

const theBeatlesPlay = (musicians, instruments) =>
  musicians.map((musician, i) =>
    `${musician} plays ${instruments[i]}`);

theBeatlesPlay([
  "Beatles",
  "Agulero",
  "Michael Jackson"
], [
  "Guitar",
  "Musical",
  "Piano",
  "Fortopiano"
]);