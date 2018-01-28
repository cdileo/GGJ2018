const WinState = {
    spaceKey: null,

    preload : function () {
        game.load.image("background", "assets/images/background.png");
    },

    create : function () {
        game.add.sprite(0, 0, "background");
        this._createFlavourText();
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update : function () {
        if (this.spaceKey.isDown) {
            game.state.start("menu");
        }
    },

    _createFlavourText : () => {
        game.add.text(
            100, 
            100, 
            `Congratulations! You've managed to escape the dark reaches of space!
You return to your home planet and fufill your destiny of becoming 
room-bot-001.
            
            Press Spacebar to restart.`,
            { fontSize: '32px', fill: '#FFD1BA' }
        );
    }
};