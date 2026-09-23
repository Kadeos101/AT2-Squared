function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  let button = createButton('subjects');
  button.position(100, 100, 100);
  button.size(100, 50);
  button.mousePressed(subjects);
  
  let button2 = createButton('quiz');
  button2.position(200, 100);
  button2.size(100, 50);
  button2.mousePressed(other);
  
  let button3 = createButton('set questions');
  button3.position(300, 100);
  button3.size(100, 50);
  button3.mousePressed(setquestions);
  
  let button4 = createButton('other');
  button4.position(400, 100);
  button4.size(100, 50);
  button4.mousePressed(quiz);
}

function subjects(){
  window.open()
  console.log ("subjects");
}

function other(){
  console.log ("quiz");
}
function setquestions(){
  console.log ("set questions");
}

function quiz(){
  console.log ("other");
}

//im gooned out
// /j
//verity phonk
//yorick
//windows logo
//maverick