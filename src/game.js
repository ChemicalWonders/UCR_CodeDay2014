

(function(){
	var stage = new PIXI.Stage(0x066FF99);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	var renderer = PIXI.autoDetectRenderer(1500, 625);
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
=======
	var renderer = PIXI.autoDetectRenderer(800, 600);
>>>>>>> 3f7af9ee36edf044ce4a404c6f2328fd7b07ad9d
	document.body.appendChild(renderer.view);
	requestAnimFrame(animate);

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("static/bunny.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);
		var person = new Player(0,0);
    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);
		person.addToStage(stage);
    function animate() {

        requestAnimFrame( animate );


        document.addEventListener('keydown',function(event){
            if(event.keyCode == 37 || event.keyCode == 65) {
                bunny.position.x -= 0.005;
            }

            if (event.keyCode == 39 || event.keyCode == 68){
                bunny.position.x += 0.005;
            }

            if (event.keyCode == 40 || event.keyCode == 83)
                bunny.position.y +=0.005;

            if (event.keyCode == 38 || event.keyCode == 87)
                bunny.position.y -=0.005;
        });

        // render the stage
        renderer.render(stage);
    }
    animate();
})();
