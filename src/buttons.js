document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	let arSystem;
	sceneEl.addEventListener('loaded', function () {
	  arSystem = sceneEl.systems["mindar-image-system"];
	});
	const mindarTarget = document.querySelector('#target');
	const buttonPlane = document.querySelector('#buttonPlane');
	const startButton = document.querySelector("#play-button");
	const stopButton = document.querySelector("#exit-button");
	const pauseButton = document.querySelector("#example-pause-button");
	const unpauseButton = document.querySelector("#example-unpause-button");
	startButton.addEventListener('click', () => {
	  console.log("start");
	  arSystem.start(); // start AR 
	});
	stopButton.addEventListener('click', () => {
	  arSystem.stop(); // stop AR 
	});
	pauseButton.addEventListener('click', () => {
	  arSystem.pause(); // pause AR, pause video
	});
	/*pauseKeepVideoButton.addEventListener('click', () => {
	  arSystem.pause(true); // pause AR, keep video
	});*/
	unpauseButton.addEventListener('click', () => {
	  arSystem.unpause(); // unpause AR and video
	});
	// arReady event triggered when ready
	sceneEl.addEventListener("arReady", (event) => {
	  // console.log("MindAR is ready")
	});
	// arError event triggered when something went wrong. Mostly browser compatbility issue
	sceneEl.addEventListener("arError", (event) => {
	  // console.log("MindAR failed to start")
	});
	// detect target found
	mindarTarget.addEventListener("targetFound", event => {
	  console.log("target found");
	});
	// detect target lost
	mindarTarget.addEventListener("targetLost", event => {
	  console.log("target lost");
	  //TODO : mettre video en
	});
	// detect click event
	/*buttonPlane.addEventListener("click", event => {
	  console.log("plane click");
	});*/
      });