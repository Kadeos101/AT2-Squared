function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  let button = createButton('Back To Main Menu');
  button.position(100, 100, 100);
  button.size(100, 50);
  button.mousePressed(backToMain);
  
}

function backToMain(){
  window.location.href = "index.html";
  console.log ("returning");
}





//maverick