

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5d64d6df-cd07-4c98-8679-2efa6e91991c","9a947567-8b12-4a75-a02c-d621dd539a49","180ebd09-4082-4819-8673-9aa6f6d85ff9","e9d920e2-992c-4d30-9ab1-5c49d82a8417"],"propsByKey":{"5d64d6df-cd07-4c98-8679-2efa6e91991c":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"9a947567-8b12-4a75-a02c-d621dd539a49":{"name":"playerShip1_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/EFY9oqBBpFM5UwPvGD7JcFtTTIiVjD1./category_vehicles/playerShip1_blue.png","frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"EFY9oqBBpFM5UwPvGD7JcFtTTIiVjD1.","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EFY9oqBBpFM5UwPvGD7JcFtTTIiVjD1./category_vehicles/playerShip1_blue.png"},"180ebd09-4082-4819-8673-9aa6f6d85ff9":{"name":"enemyBlack5_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Dmbny5CdYWjRRG9b.CgSBK8tWqc.uYsH/category_vehicles/enemyBlack5.png","frameSize":{"x":97,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dmbny5CdYWjRRG9b.CgSBK8tWqc.uYsH","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dmbny5CdYWjRRG9b.CgSBK8tWqc.uYsH/category_vehicles/enemyBlack5.png"},"e9d920e2-992c-4d30-9ab1-5c49d82a8417":{"name":"sticker_34_1","sourceUrl":null,"frameSize":{"x":244,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"BElS_1I1Zj3avYpEg.uzF.prgZ3Uwrkk","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":400},"rootRelativePath":"assets/e9d920e2-992c-4d30-9ab1-5c49d82a8417.png"}}};
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
var e = createSprite(200, 200);
e.setAnimation("space_1");
var e = createSprite(200, 350);
e.setAnimation("playerShip1_blue_1");
e.scale = 1;
var h = createSprite(200, 0);
h.setAnimation("enemyBlack5_1");
h.velocityY = 4;
var s = createSprite(200, 200);
s.setAnimation("sticker_34_1");
s.scale = 0.2;
// Create the sprites
// set velocity for the obstacle and the target
e.setCollider("circle");
h.setCollider("rectangle");
s.velocityY = 2;

//create the variables
var score = 0;
var health = 100;

function draw() {
    if (keyDown("space")) {
      e.velocityX = 0;
    }
    if (e.isTouching(s)) {
    score = score + 1;
    s.y = -25;
    s.x = randomNumber(-400,400);
  }
  if (e.isTouching(h)) {
    health = health - 2;
  }
  if (keyDown("left")) {
    e.velocityX = -2;
  }
  if (keyDown("right")) {
    e.velocityX = 2;
  }
  if (h.y > 425) {
    h.y = -25;
    h.x = randomNumber(-400,400);
  }
  if (s.y > 425) {
    s.y = -25;
    s.x = randomNumber(-400,400);
  }
  if (e.x > 425) {
    e.x = -25;
  }
  if (-25 > e.x) {
    e.x = 425;
  }
  // BACKGROUND
  // draw the ground and other background


  // SPRITE INTERACTIONS
  // if the player touches the obstacle
  // the health goes down, and the obstacle turns

  // if the player touches the target
  // the score goes up, the target resets


  // JUMPING
  // if the player has reached the ground
  // stop moving down

  // if the player presses the up arrow
  // start moving up

  // if the player reaches the top of the jump
  // start moving down


  // LOOPING
  // if the obstacle has gone off the left hand side of the screen, 
  // move it to the right hand side of the screen

  // if the target has gone off the left hand side of the screen,
  // move it to the right hand side of the screen

  // DRAW SPRITES
  drawSprites();
  
  // SCOREBOARD
  // add scoreboard and health meter
  fill("green");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
    fill("green");
  textSize(20);
  text("score:", 15, 30);
  text (score, 70, 30);
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
