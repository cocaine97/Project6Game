// Enemies our player must avoid
var defStartX = -50;
var speeeed = 200;
var Enemy = function(posX,posY) {
    this.x = posX;
    this.y = posY;
    // Making speed random here so game doesn't get more boring than it already is :P
    this.speedX = Math.random()*speeeed-5;
    
    this.sprite = 'images/char-boy.png';
    /*
        I wanted to do this but it doesn't seem to work. What was i doing wrong here?
    if(Math.random() >= 0.5)
    {
        this.sprite = 'images/char-boy.png';}
        else
            {this.sprite = 'images/char-pink-girl.png';}
            */
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speedX*dt;
    if(this.x > 500)
    {
        this.x = defStartX;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.x += 1;

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Would have 
var allEnemies = [new Enemy(30,45), new Enemy(300,130), new Enemy(500,210)];
var Slayer = function(posX,posY)
{
    this.x = posX;
    this.y = posY;
    this.sprite = 'images/enemy-bug.png';
};


var player = new Slayer(200,400);

//Controls logic of the game
Slayer.prototype.update = function(){};

// Creates Player
Slayer.prototype.render = function(){ctx.drawImage(Resources.get(this.sprite), this.x, this.y);};

// Controls how you wanna play it
Slayer.prototype.handleInput = function(){};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


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
