// SettlingRain Home Player (minimal)
// Note: No autoplay (mobile browsers block it anyway).

const HOME_TRACK = {
  id: "interlude-in-rain",
  title: "Interlude in Rain",
  duration: "3:57",
  file: "assets/audio/interlude-in-rain.mp3"
};

const titleEl = document.getElementById("np-title");
const metaEl = document.getElementById("np-meta");
const downloadEl = document.getElementById("np-download");
const audioEl = document.getElementById("home-audio");
const sourceEl = document.getElementById("home-source");

if (titleEl) titleEl.textContent = HOME_TRACK.title;
if (metaEl) metaEl.textContent = `SettlingRain · ${HOME_TRACK.duration}`;
if (downloadEl) downloadEl.href = HOME_TRACK.file;

if (sourceEl && audioEl) {
  sourceEl.src = HOME_TRACK.file;
  audioEl.load();
}
