function setup() {
  createCanvas(1000, 1000);
  let button = createButton('subjects');
  button.position(100, 100, 100);
  button.size(100, 50);
  button.mousePressed(subjects);
  
  let button2 = createButton('other');
  button2.position(200, 100);
  button2.size(100, 50);
  button2.mousePressed(other);
  
  let button3 = createButton('set questions');
  button3.position(300, 100);
  button3.size(100, 50);
  button3.mousePressed(setquestions);
  
  let button4 = createButton('quiz');
  button4.position(400, 100);
  button4.size(100, 50);
  button4.mousePressed(quiz);
}

function draw() {
  background(220);
}

function subjects(){
  window.location.href = "subjects.html";
  console.log ("subjects");
}

function other(){
  window.location.href = "other.html";
  console.log ("other");
}
function setquestions(){
  window.location.href = "setquestions.html";
  console.log ("set questions");
}

function quiz(){
  window.location.href = "quiz.html";
  console.log ("quiz");
}


//maverick
//book