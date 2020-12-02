var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	if (video.paused)
		video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	if (!video.paused)
		video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	if (video.playbackRate - 0.1 > 0.05)
		video.playbackRate -= 0.1;
	console.log("Slowed Down to "+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log("Speed Up to "+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 < video.duration)
		video.currentTime += 5
	else
		video.currentTime = 0

	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted
});

document.querySelector("#volumeSlider").addEventListener("mousemove", function() {
	// video.volume = !video.muted
});

document.querySelector("#old").addEventListener("click", function() {
	// video.muted = !video.muted
});

document.querySelector("#original").addEventListener("click", function() {
	// video.muted = !video.muted
});