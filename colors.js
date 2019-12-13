//idea from: https://bost.ocks.org/mike/shuffle/

let colors = [];

let colorSet = [];
let functionArray = [];

let color1 = Math.floor(Math.random() * 256);
let color2 = Math.floor(Math.random() * 221);
let color3 = Math.floor(Math.random() * 221);

function buildColorArray(num) {
  colors = [];

  for (i = 0; i < num; i++) {
    colorSet = [];
    color1 = Math.floor(Math.random() * 256);
    color2 = Math.floor(Math.random() * 221);
    color3 = Math.floor(Math.random() * 221);

    functionArray = [color1, color2, color3];

    console.log(functionArray);
    colorSet = shuff(functionArray);

    console.log(colorSet);

    colors.push(colorSet);
  }
}

function shuff(arr) {
  let idx = arr.length;
  let hold;
  let ridx;

  // While there remain elements to shuffle...
  while (idx) {
    // Pick a remaining element...
    ridx = Math.floor(Math.random() * idx);
    idx -= 1;

    // And swap it with the current element.
    hold = arr[idx];
    arr[idx] = arr[ridx];
    arr[ridx] = hold;
  }

  return arr;
}

buildColorArray(100);
