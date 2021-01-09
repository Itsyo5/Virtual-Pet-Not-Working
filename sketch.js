var database;
var dog, dogStanding, happyDog, food, foodStock;

function preload(){
  dogStanding = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage(dogStanding, 200, 200);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(food);
    dog.addImage(happyDog, 200, 200);
  }

  text("Note: Press The Up Arrow Key on Your Keyboard to Feed The Dog");

  textSize(15);
  fill("white");
  stroke("black");
  text("Food Left: " + foodStock, 250, 150);

  drawSprites();
}

  function readStock(data) {
    food = data.val();
  }

  function writeStock(foodStock){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x - 1;
    }

    database.ref('/').update({
    Food: x})
  }
