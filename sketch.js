//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogImage1 = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(200,200);
  dog.addImage(dogImage);
  dog.scale = 0.15;

foodStock = database.ref('Food');
foodStock.on("value",readStock);  
}


function draw() {  
background(46, 139, 87);
  //add styles here

    if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogImage1)
    }
  
    drawSprites();
    // Directions
    text("Note : Press UP_ARROW key To Feed Drago Milk", 250,250);
      fill("green");
        stroke("blue");
    //
    text("Food Remaining"+foodS,170,200);
      fill("yellow");
        stroke("black");
}
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}