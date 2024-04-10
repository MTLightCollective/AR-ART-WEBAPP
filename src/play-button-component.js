/*
AFRAME.registerComponent("play-button", {
	schema: {
		videoId: { type: "string", default: "" },
		planeId: { type: "string", default: "" },
		startupTime: { type: "number", default: 0 },
	},
	init: function () {
		// Code de l'initialisation du composant
		console.log("init");
		this.clickEvent = this.clickEvent.bind(this);
		this.el.addEventListener("click", this.clickEvent);

		// Get your video element
		this.videoEl = document.getElementById(this.data.videoId);
		if (this.videoEl === null) {
			console.error(
				"No video element found with id: " + this.data.videoId
			);
			return;
		}

		// Get your video Plane element
		this.videoPlaneEl = document.getElementById(this.data.planeId);
		if (this.videoPlaneEl === null) {
			console.error(
				"No video plane element found with id: " + this.data.planeId
			);
			return;
		}

		// Listen for when the video ends
		this.videoEl.addEventListener("ended", () => {
			console.log("Video ended!");
			this.el.setAttribute("visible", true); // Show the button again
			this.videoPlaneEl.setAttribute("visible", false); // Hides the videoplane again
		});
	},

	clickEvent: function () {
		console.log("start video");
		this.videoEl.currentTime = this.data.startupTime;
		this.videoEl.play();
		this.videoPlaneEl.setAttribute("visible", true);
		this.el.setAttribute("visible", false); // Hide the button
	},

	remove: function () {
		// Code exécuté lorsque le composant est supprimé
		this.el.removeEventListener("click", this.clickEvent);
	},
});
/**/
/**/
AFRAME.registerComponent("play-button", {
	init: function () {
		// Code de l'initialisation du composant
		console.log("init");
		this.clickEvent = this.clickEvent.bind(this);
		this.el.addEventListener("click", this.clickEvent);

		// Get your video element
		this.videoEl = document.getElementById("penseurvideo");
		this.videoE2 = document.getElementById("samuraivideo");

		// Get your video Plane element
		this.videoPlaneEl = document.getElementById("video-plane");
		this.videoPlaneE2 = document.getElementById("samurai-plane");

		// Listen for when the video ends
		this.videoEl.addEventListener("ended", () => {
			console.log("Video ended!");
			this.el.setAttribute("visible", true); // Show the button again
			this.videoPlaneEl.setAttribute("visible", false); // Hides the videoplane again
			this.videoPlaneE2.setAttribute("visible", false); // Hides the videoplane again
		});
	},

	clickEvent: function () {
		console.log("start video");
		this.videoEl.play();
		this.videoE2.play();
		this.videoPlaneEl.setAttribute("visible", true);
		this.videoPlaneE2.setAttribute("visible", true);
		this.el.setAttribute("visible", false); // Hide the button
	},

	remove: function () {
		// Code exécuté lorsque le composant est supprimé
		this.el.removeEventListener("click", this.clickEvent);
	},
}); /**/
