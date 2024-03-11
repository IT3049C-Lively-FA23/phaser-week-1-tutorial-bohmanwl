class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.preload.image("background", "assets/images/background.png");
        this.preload.spritesheet("ship", "assets/spritesheets/ship.png",{
            frameWidth: 16,
            frameHeight:16,
        });
        this.preload.spritesheet("ship2", "assets/spritesheets/ship2.png",{
            frameWidth: 32,
            frameHeight:16,
        });
        this.preload.spritesheet("ship3", "assets/spritesheets/ship3.png",{
            frameWidth: 32,
            frameHeight: 32,
        });
        this.preload.spritesheet("explosion", "assets/spritesheets/explosion.png",{
            frameWidth: 16,
            frameHeight:16,
        });

        this.preload.spritesheet("power-up", "assets/spritesheets/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
        })
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame"); 
    }
}
