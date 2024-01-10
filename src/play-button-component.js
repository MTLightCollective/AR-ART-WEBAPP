AFRAME.registerComponent('play-button', {
    init: function () {
        // Code de l'initialisation du composant
        this.clickEvent = this.clickEvent.bind(this);
        this.el.addEventListener('click', this.clickEvent);
    },
    remove: function () {
        // Code exécuté lorsque le composant est supprimé
    },
    clickEvent: function () {
        console.log("start video");
    }
});
