function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  let button = createButton('subjects');
  button.position(100, 100, 100);
  button.size(100, 50);
  button.mousePressed(subjects);
  let button2 = createButton('other');
  button2.position(200, 100);
  button2.size(100, 50);
  button2.mousePressed(other);
}

function subjects(){
  console.log ("poop");
}

function other(){
  console.log ("goop");
}

//im gooned out
// /j
//verity phonk
//yorick
//windows logo
//maverick