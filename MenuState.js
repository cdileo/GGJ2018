const MenuState = {
    preload : function () {

    },

    create : function () {
        
    },

    update : function () {
        this._createMenuText();
    },

    _createMenuText : () => {
        game.add.text(
            100, 
            600, 
            `¡SPACE GOLF!`,
            { fontSize: '32px', fill: '#fff' }
        );
    }
};