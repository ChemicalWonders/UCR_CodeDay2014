// Generated by CoffeeScript 1.6.3
var Player, ground_line, hero, hero_texture;

ground_line = 500;

Player = (function() {
  Player.life = 3;

  function Player(sprite) {
    this.sprite = sprite;
    sprite.anchor.x = 0;
    sprite.anchor.y = 0;
    sprite.position.y = ground_line - sprite.height;
    this.alive = true;
    this.health = 6;
    this.velocity_x = 0;
    this.velocity_y = 0;
    this.direction = 1;
  }

  Player.prototype.flip_sprite = function() {
    this.direction *= -1;
    this.sprite.scale.x *= -1;
    return this;
  };

  Player.prototype.fall = function(dy) {
    if (dy == null) {
      dy = 0;
    }
    if (this.sprite.position.y < ground_line) {
      return this.sprite.position.y += 1;
    }
  };

  Player.prototype.jump = function() {
    return this.sprite.position.y += this.sprite.height;
  };

  Player.prototype.fire_projectile = function(stage) {
    return new Projectile(stage, this.sprite.position.x  + .5 * this.sprite.width * -this.direction, this.sprite.position.y, 5, -this.direction, 1000, true);
  };

  Player.prototype.move_character = function(dx, dy) {
    if (dx == null) {
      dx = 0;
    }
    if (dy == null) {
      dy = 0;
    }
    this.sprite.position.x += dx;
    this.fall(dy);
    return this;
  };

  Player.prototype.update = function() {
    var flip;
    if (this.health <= 0) {
      this.alive = false;
    } else {
      console.log(this.health);
      flip = (this.direction === -1 && this.velocity_x < 0) || (this.direction === 1 && this.velocity_x > 0);
      if (flip) {
        this.move_character(this.direction * this.sprite.width, 0);
        this.flip_sprite();
      }
      if (!flip) {
        this.move_character(this.velocity_x, this.velocity_y);
      }
      this.velocity_x = 0;
      this.velocity_y = 0;
    }
    return this;
  };

  return Player;

})();

hero_texture = PIXI.Texture.fromImage('static/duckpower.gif');

hero = new Player(new PIXI.Sprite(hero_texture));
