const MenuState = {
    spaceKey: null,

    preload : function () {
        game.load.image("splashScreen", "assets/submission/coverart.png");
    },

    create : function () {
        game.add.sprite(0, 0, "splashScreen");
        this._createMenuText();
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update : function () {
        if (this.spaceKey.isDown) {
            game.state.start("instructions");
        }
    },

    _createMenuText : () => {
        game.add.text(
            600, 
            600, 
            `¡Press Spacebar to Play!`,
            { fontSize: '32px', fill: '#FFD1BA' }
        );
    }
};