var main = function(){
		var shootTimer = Date.now();
		var jumpTimer = Date.now();
		var jumped = false;
		
	kd.LEFT.down(function() {
	  if (!hero.alive) return;
      far.tilePosition.x += 4.5;
      mid.tilePosition.x += 0.65;
      plat.tilePosition.x += 4.5;
	  box.position.x += 4.5;
	  return hero.velocity_x -= .0001;
	  
	});

	kd.RIGHT.down(function() {
	  if (!hero.alive) return;
      far.tilePosition.x -= 4.5;
      mid.tilePosition.x -= 0.65;
      plat.tilePosition.x -= 4.5;
	  box.position.x -= 4.5;
	  return hero.velocity_x += .0001
	});

		var timer = Date.now();
	kd.X.down(function() {
			if (!hero.alive) return;
				if(jumpTimer < Date.now() && !jumped)
				{
						timer = Date.now() + 100;
						jumped = true;
				}
				else if(jumped)
				{
						if(timer > Date.now()){
								hero.sprite.position.y -= hero.sprite.height * .5;
								var jumpSound = new buzz.sound("static/ducksqueel.wav");
								jumpSound.play();
							}
						else
						{
								jumped = false;
								jumpTimer = Date.now() + 2500;
						}
				}

	});



	kd.Z.down(function() {
		if(hero.alive && shootTimer < Date.now())
			{
					hero.fire_projectile(stage);
					shootTimer = Date.now()+200;
					var gunshotsound = new buzz.sound("static/gunshot.wav");
					gunshotsound.play();

			}
	});

	kd.run(function() {
		kd.tick();
	})

    // Sets up stage, canvas and renderer
	var stage = new PIXI.Stage(0x66FF99);
	var canvas = document.getElementById('game-canvas');
	var renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, canvas);
    // Sets up background

	stage.addChild(hero.sprite);
	renderer.render(stage);

	var farTexture = PIXI.Texture.fromImage("static/cave-background.jpg");
		far = new PIXI.TilingSprite(farTexture, 1300, 650);
		far.position.x = 0;
		far.position.y = 0;
		far.tilePosition.x = 0;
		far.tilePosition.y = 0;
		stage.addChild(far);

        //file doesn't exist it still works. wat
        //keeps giving me error messages on console log
		var midTexture = PIXI.Texture.fromImage("static/ignore.png");
		mid = new PIXI.TilingSprite(midTexture, 512, 256);
		mid.position.x = 0;
		mid.position.y = 128;
		mid.tilePosition.x = 0;
        mid.tilePosition.y = 0;
        stage.addChild(mid);

    // Rectangle block
    var rectBlock = PIXI.Rectangle(0, 600, 1300, 50);

    // Tiles/Platforms texture
    var platTexture = PIXI.Texture.fromImage("static/stoneBlock.jpg");
        plat = new PIXI.TilingSprite(platTexture, 1300, 50);
        plat.position.x = 0;
        plat.position.y = 600;
        plat.tilePosition.x = 0;
        plat.tilePosition.y = 0;
        stage.addChild(plat);
	var boxTexture = PIXI.Texture.fromImage("static/crate.jpg");
		box = new PIXI.TilingSprite(boxTexture,220,220);
		box.position.x = 700;
		box.position.y = 380;
		box.tilePosition.x = 0;
		box.tilePosition.y = 0;
		stage.addChild(box);
        requestAnimFrame(update);

    // Update Function
    function update() {
		renderer.render(stage);
        hero.update();
		objectmanager.run(stage);
		renderer.render(stage);
  		requestAnimFrame(update);

	}

	var objectmanager = new ObjectManager();
	stage.addChild(hero.sprite);
	renderer.render(stage);


	requestAnimFrame(update);
};



