class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootGame");
    }

    preload(){
        this.preload.image("background", "assets/images/background.png");
        this.preload.image("ship", "assets/images/ship.png");
        this.preload.image("ship2", "assets/images/ship2.png");
        this.preload.image("ship3", "assets/images/ship3.png");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame")
    }
}
