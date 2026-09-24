function setup() {
  createCanvas(1000, 1000);

    let buttonBack = createButton('Back To Main Menu'); 
  buttonBack.position(0, 0); 
  buttonBack.size(100, 50); 
  buttonBack.mousePressed(backToMain); 
  buttonBack.style('font-size', '16px');

    let buttonEnglish = createButton('English');
  buttonEnglish.position(100, 50);
  buttonEnglish.size(100, 50);
  buttonEnglish.mousePressed();
  buttonEnglish.style('font-size', '18px');

    let buttonMaths = createButton('Maths');
  buttonMaths.position(200, 50);
  buttonMaths.size(100, 50);
  buttonMaths.mousePressed();
  buttonMaths.style('font-size', '18px');

    let buttonScience = createButton('Science');
  buttonScience.position(100, 100);
  buttonScience.size(100, 50);
  buttonScience.mousePressed();
  buttonScience.style('font-size', '18px');

    let buttonHistory = createButton('History');
  buttonHistory.position(200, 100);
  buttonHistory.size(100, 50);
  buttonHistory.mousePressed();
  buttonHistory.style('font-size', '18px');
  
}

function draw() {
  background(220);
}

function backToMain(){
  window.location.href = "index.html";
  console.log ("returning");
}










//maverick