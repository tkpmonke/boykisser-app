let video = document.getElementById("vid");
let button = document.getElementById("show");

let mediaDevices = navigator.mediaDevices;
video.muted = true;

button.addEventListener("click", () => {
	
	mediaDevices.getUserMedia({
		video: true,
		audio: false,
	}).then((stream) => {
		video.srcObject = stream;
		video.addEventListener("loadedmetadata", () => {
			video.play();

			let txt = document.createElement("p");
			txt.innerText = "It's You!!!";
			video.parentElement.appendChild(txt);
		});
		button.hidden = true;
	}).catch(() => {
		video.style.display = "none";

		let image = document.createElement("img");
		image.src = "/images/it_is_you.jpg";

		let txt = document.createElement("p");
		txt.innerText = "It's You!!!";

		video.parentElement.appendChild(image);
		video.parentElement.appendChild(txt);

		button.hidden = true;
	});
});
