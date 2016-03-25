// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

	this.x = x;
	this.y = y;
	this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	if (this.x > 500) {
    this.x = -50;
    this.speed = randomSpeed();
  	} else {
    this.x = this.x += this.speed * dt;
  	}

  if (player.x + 70 >= this.x && player.x <= this.x + 70 && player.y + 50 <= this.y + 100 &player.y + 100 >= this.y + 50)
	{
	  alert("Try again!");
 	  player.reset();
	
 	}
};
 
function randomSpeed(min, max) {
  min = 50;
  max = 500;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function() {
   if (this.x >= 500) {
        this.x = -101;
        this.speed = random(200, 400);
    }
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y){
  
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-princess-girl.png'; 
};

Player.prototype.update = function(dt) {
 
};

Player.prototype.render = function() {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
};
//keyboard controls

Player.prototype.handleInput = function(key){
  if (key == 'up') {
        this.y = this.y - 70;
		
	 } else if (key == 'down') {
        this.y = this.y + 70;
    
	} else if (key == 'left') {
        this.x = this.x - 100;
    
	} else if (key == 'right') {
        this.x = this.x + 100;
    }

// keep player on canvas
   
    if (this.x < 0) {
        this.x = 0;

    } else if (this.x > 400) {
        this.x = 400;
	}

    if (this.y < 0) {
		this.reset();

    } else if (this.y > 400) {
        this.y = 400;
        this.reset();
    }
};

Player.prototype.reset = function () {
	
    this.x = 200;
    this.y = 400;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for (var i = 0; i < 3; i++) {
  allEnemies.push(new Enemy(-50, 60 + (75 * i), randomSpeed())); 
}

var player = new Player(200, 400);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


