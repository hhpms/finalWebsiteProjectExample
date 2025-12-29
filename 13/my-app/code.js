

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["88037817-87c4-4bef-b5a0-8ba34c538dea","0608df89-67ae-4a47-9646-2624e221ead6","340454cc-0745-4138-b0c8-0b2ecc2b01a2"],"propsByKey":{"88037817-87c4-4bef-b5a0-8ba34c538dea":{"name":"opossum_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kLvpsIXguJvCxbv3xqdhsMcduoN1wmMN/category_animals/opossum.png","frameSize":{"x":396,"y":186},"frameCount":1,"looping":true,"frameDelay":2,"version":"kLvpsIXguJvCxbv3xqdhsMcduoN1wmMN","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":186},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kLvpsIXguJvCxbv3xqdhsMcduoN1wmMN/category_animals/opossum.png"},"0608df89-67ae-4a47-9646-2624e221ead6":{"name":"python_1","sourceUrl":null,"frameSize":{"x":394,"y":116},"frameCount":1,"looping":true,"frameDelay":12,"version":"8fMYAbplow0CuXxIKi2.WCPUfU._Ndpo","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":116},"rootRelativePath":"assets/0608df89-67ae-4a47-9646-2624e221ead6.png"},"340454cc-0745-4138-b0c8-0b2ecc2b01a2":{"name":"dragonfly_1","sourceUrl":null,"frameSize":{"x":399,"y":209},"frameCount":1,"looping":true,"frameDelay":12,"version":"I15KKYbZqxu3dooHFSJxK2FvDT0_yKHj","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":209},"rootRelativePath":"assets/340454cc-0745-4138-b0c8-0b2ecc2b01a2.png"}}};
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
// Create the sprites
// set velocity for the obstacle and the target
var frog = createSprite(100, 335);
frog.setAnimation("opossum_1");
frog.scale = 0.3;
var fly = createSprite(randomNumber(0, 400), randomNumber(265, 50));
fly.setAnimation("dragonfly_1");
fly.velocityX = -3;
fly.scale = 0.2;
var mushroom = createSprite(400, 338);
mushroom.setAnimation("python_1");
mushroom.velocityX = -3;
mushroom.scale = 0.3;


//create the variables
var health = 100;
var score = 0;

function draw() {
  // BACKGROUND
  background("skyblue");
  // draw the ground and other background
  noStroke();
  fill("green");
  ellipse(100, 380, 360, 50);
  ellipse(290, 380, 360, 50);
  fill("white");
  noStroke();
  ellipse(75, 50, 275, 75);


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns
  if (frog.isTouching(mushroom)) {
    mushroom.rotation = randomNumber(-10, 10);
    health = health - 1;
  }

  // if the player touches the target
  // the score goes up, the target resets
  if (frog.isTouching(fly)) {
    fly.x = randomNumber(200, 400);
    fly.y = randomNumber(25, 270);
    score = score + 1;
  }


  // JUMPING
  // if the player has reached the ground
  // stop moving down
  if (frog.y >= 335) {
    frog.velocityY = 0;
  }

  // if the player presses the up arrow
  // start moving up
  if (keyWentDown("up")) {
    frog.velocityY = frog.velocityY - 4;
  }

  // if the player reaches the top of the jump
  // start moving down
  if ((frog.y) <= 150) {
    frog.velocityY = frog.velocityY + 4;
  }


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen
  if (mushroom.x < -50) {
    mushroom.x = 415;
  }

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen
  if ((fly.x) <= -50) {
    fly.x = 410;
    fly.y = randomNumber(25, 270);
  }

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("black");
  textSize(20);
  text("Score:", 40, 30);
  text(score, 100, 30);
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
