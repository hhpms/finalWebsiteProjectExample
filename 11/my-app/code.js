

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f79c2fd0-11f3-46db-bfd2-638cbb41e6cf","1f59afa3-5a17-4857-8568-20c5cf12de49","ddf31e19-1c57-4a5f-9b72-7dfdf47e4270","c107d76b-03f7-44b5-a27b-92cad71e4040"],"propsByKey":{"f79c2fd0-11f3-46db-bfd2-638cbb41e6cf":{"name":"owl","sourceUrl":"assets/api/v1/animation-library/gamelab/ROfvIkZ05bIpXT0KxlHvoknpK8pdPGaY/category_animals/barnowl.png","frameSize":{"x":292,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"ROfvIkZ05bIpXT0KxlHvoknpK8pdPGaY","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ROfvIkZ05bIpXT0KxlHvoknpK8pdPGaY/category_animals/barnowl.png"},"1f59afa3-5a17-4857-8568-20c5cf12de49":{"name":"bee","sourceUrl":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png","frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":2,"version":"N602_cNy0LoPLXkwaUfCp2XJWPo86SUw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":50},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png"},"ddf31e19-1c57-4a5f-9b72-7dfdf47e4270":{"name":"bread","sourceUrl":"assets/api/v1/animation-library/gamelab/c6La7knlrH.bVzPnr1pES1l9Y4dmX4uM/category_food/baguette.png","frameSize":{"x":367,"y":367},"frameCount":1,"looping":true,"frameDelay":2,"version":"c6La7knlrH.bVzPnr1pES1l9Y4dmX4uM","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":367,"y":367},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c6La7knlrH.bVzPnr1pES1l9Y4dmX4uM/category_food/baguette.png"},"c107d76b-03f7-44b5-a27b-92cad71e4040":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eoh_kg5NP1Kj0MRPa_OrPsAFMWthREZl/category_backgrounds/bg_landscape06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//GAME SETUP
var background1 = createSprite(200, 200);
background1.setAnimation("background");
var owl = createSprite(75, 300);
owl.setAnimation("owl");
owl.scale = 0.4;
var bread = createSprite(700, 160);
bread.setAnimation("bread");
bread.scale = 0.2;
bread.velocityX = -2;
var bee = createSprite(500, 350);
bee.setAnimation("bee");
bee.scale = 0.8;
bee.velocityX = -2;
// Create the sprites
// set velocity for the obstacle and the target


//create the variables
var score = 0;
var health = 100;

function draw() {
  // BACKGROUND
  // draw the ground and other background


  // SPRITE INTERACTIONS
  if (owl.isTouching(bee)) {
    health = health - 1;
  }
  if (owl.isTouching(bread)) {
    score = score + 1;
  }
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  if (keyDown("up")) {
    owl.velocityY = -5;
  }
  if (owl.y < 50) {
    owl.velocityY = 5;
  }
  if (owl.y > 301) {
    owl.velocityY = 0;
    owl.y = 300;
  }
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  if (bee.x < -20) {
    bee.x = 420;
  }
  if (bread.x < -20) {
    bread.x = 420;
  }
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  
  drawSprites();
  // SCOREBOARD
  fill("black");
  textSize(20);
  text("score:", 90, 30);
  text (score, 150, 30);
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  // GAME OVER
  // if health runs out
  // show Game over
  if (health < 0) {
    background("black");
    fill("green");
    textSize(50);
    text("Game Over!" , 40, 200);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
