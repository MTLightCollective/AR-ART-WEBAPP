AFRAME.registerComponent('play-button', {
    init: function () {
        // Code de l'initialisation du composant
        console.log("init")
        this.clickEvent = this.clickEvent.bind(this);
        this.el.addEventListener('click', this.clickEvent);

        // Get your video element
        this.videoEl = document.getElementById('penseurvideo');

        // Get your video Plane element
        this.videoPlaneEl = document.getElementById('video-plane');

        // Listen for when the video ends
        this.videoEl.addEventListener('ended', () => {
            console.log('Video ended!');
            this.el.setAttribute('visible', true); // Show the button again
            this.videoPlaneEl.setAttribute('visible', false); // Hides the videoplane again
        });

    },

    clickEvent: function () {
        console.log("start video");
        this.videoEl.play();
        this.videoPlaneEl.setAttribute('visible', true);
        this.el.setAttribute('visible', false); // Hide the button
    },

    remove: function () {
        // Code exécuté lorsque le composant est supprimé
        this.el.removeEventListener('click', this.clickEvent);
    },
    
});
