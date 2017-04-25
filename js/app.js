// Enemies our player must avoid
var  defStartX = -50,
     rightBorder = 410,
     leftBorder = 0,
     speeeed = 500,
     score = 0;
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
    this.score = 0;
    this.lives = 5;
};


var player = new Slayer(200,400);

//Controls winning or losing
Slayer.prototype.update = function(){
    for(i in allEnemies)
    {

        if(this.x === allEnemies[i].x && this.y === allEnemies[i].y)
        {
            this.lives-=1;
            this.x = 200;
            this.y = 400;
            if(this.lives === 0)
            {
                alert("Your score : " +this.score);
                this.score = 0;
            }
            
        }
    }
};
var H = new Image();
H.src = 'images/Heart.png';

var scr = new Image();
scr.src = 'images/Star.png';
// Creates Player
Slayer.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.drawImage(H,0 ,20);
    ctx.drawImage(scr,420 ,0);
    
    // Displays Score
    ctx.textBaseLine = "top";
     ctx.font="40px Impact";
    ctx.strokeStyle="Black";
    ctx.fillStyle="white";
    ctx.fillText(this.score,450,120);
    ctx.strokeText(this.score,450,120);

    // Displays Lives
    ctx.fillText(this.lives,40,125);
    ctx.strokeText(this.lives,40,125);
};

// Controls controls and partial logic of game
Slayer.prototype.handleInput = function(key){
        if(key === 'left')
    {
        this.x-=100;
        if(this.x < leftBorder)
        {
            this.x = rightBorder;
        }
    }


        if(key === 'right')
    {
        this.x+=100;
        if(this.x > rightBorder)
        {
            this.x = leftBorder;
        }
    }


        if(key === 'down')
    {
        this.y += 100;
        if(this.y > 400)
        {
            this.y = 400;
        }
    }

        if(key === 'up')
        {
            this.y -= 90;
            if(this.y < 10)
            {
                this.score += 5;
                this.y = 400;
            }
        }
};


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
