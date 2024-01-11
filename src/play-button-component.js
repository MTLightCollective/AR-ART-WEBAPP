AFRAME.registerComponent('play-button', {
    init: function () {
        // Code de l'initialisation du composant
        console.log("init")
        this.clickEvent = this.clickEvent.bind(this);
        this.el.addEventListener('click', this.clickEvent);
    },

    clickEvent: function () {
        console.log("start video");
        document.getElementById('penseurvideo').play();
    },

    remove: function () {
        // Code exécuté lorsque le composant est supprimé
        this.el.removeEventListener('click', this.clickEvent);
    },
    
});
