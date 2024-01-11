AFRAME.registerComponent('play-button', {
    init: function () {
        // Code de l'initialisation du composant
        console.log("init")
        this.clickEvent = this.clickEvent.bind(this);
        this.el.addEventListener('click', this.clickEvent);

        // Get your video element
        this.videoEl = document.getElementById('penseurvideo');

        // Listen for when the video ends
        this.videoEl.addEventListener('ended', () => {
            this.el.setAttribute('visible', true); // Show the button again
        });

    },

    clickEvent: function () {
        console.log("start video");
        this.videoEl.play();
        this.el.setAttribute('visible', false); // Hide the button
    },

    remove: function () {
        // Code exécuté lorsque le composant est supprimé
        this.el.removeEventListener('click', this.clickEvent);
        this.videoEl.removeEventListener('ended', this.clickEvent);
    },
    
});
