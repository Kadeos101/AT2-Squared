function setup() {
  createCanvas(1000, 1000);
    let buttonback = createButton('Back To Main Menu');
  button.position(0, 0);
  button.size(100, 50);
  button.mousePressed(backToMain);

    let buttonEnglish = createButton('English');
  button.position(100, 100);
  button.size(100, 50);
  button.mousePressed();

    let buttonMaths = createButton('Maths');
  button.position(200, 100);
  button.size(100, 50);
  button.mousePressed();

    let buttonScience = createButton('Science');
  button.position(100, 100);
  button.size(100, 50);
  button.mousePressed();

    let buttonHistory = createButton('History');
  button.position(200, 200);
  button.size(100, 50);
  button.mousePressed();
  
}

function draw() {
  background(220);
}

function backToMain(){
  window.location.href = "index.html";
  console.log ("returning");
}





//maverick