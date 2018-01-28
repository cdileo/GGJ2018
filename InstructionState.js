const InstructionState = {
    spaceKey: null,

    preload : function () {
        game.load.image("background", "assets/images/background.png");
    },

    create : function () {
        game.add.sprite(0, 0, "background");
        this._createInstructionsText();
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update : function () {
        if (this.spaceKey.isDown) {
            game.state.start("play");
        }
    },

    _createInstructionsText : () => {
        game.add.text(
            100, 
            100, 
            `Controls:
            A - Purple
            B - Blue
            
            Teleport your robot to the satellite to win!
            Hold down your control button for a longer shot but beware: 
            the longer you charge, the faster you'll spin.`,
            { fontSize: '32px', fill: '#FFD1BA' }
        );
    }
};