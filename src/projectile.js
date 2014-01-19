//PROJECTIEL CLASS
//DO THIS

function Projectile(stage, x, y, speed, direction, lifetime)
{
		//initialize values
		var texture = PIXI.Texture.fromImage("static/ball.jpg");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		this.speed = speed;
		this.direction = direction;
		this.object.hitArea = new PIXI.Rectangle(0,0,1,1);
		this.stage = stage;
		Projectile.allProjectiles.push(this);
		this.addToStage(stage);
		this.endTimer = Date.now() + lifetime;
}


Projectile.prototype.run = function()
{
		//shoot in the direction that we were pointing to
		if(this.endTimer > Date.now())
		{
				if(this.direction == -1){
						this.object.position.x += this.speed;
				}
				else if(this.direction == 1){
						this.object.position.x -= this.speed;
				}
		}
		else
		{
				//kill
				
		}
}

Projectile.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}

Projectile.allProjectiles = new Array();


