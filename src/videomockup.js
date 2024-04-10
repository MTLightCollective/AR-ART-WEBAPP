document.addEventListener("DOMContentLoaded", function () {
	navigator.mediaDevices.getUserMedia = () => {
		return new Promise((resolve, reject) => {
			const source = "../assets/MOV_0679.mp4";
			format = source.split(".").pop();
			if (format === "mp4") {
				const video = document.createElement("video");
				video.setAttribute("src", source);
				video.setAttribute("autoplay", "");
				video.setAttribute("loop", "");
				video.muted = true;
				video.oncanplay = () => {
					video.play();
					const stream = video.captureStream();
					resolve(stream);
				};
			} else {
				const image = new Image();
				image.src = source;
				image.onload = () => {
					const canvas = document.createElement("canvas");
					const context = canvas.getContext("2d");
					canvas.width = image.width;
					canvas.height = image.height;
					context.drawImage(image, 0, 0);
					const stream = canvas.captureStream();
					resolve(stream);
				};
			}
		});
	};
});
