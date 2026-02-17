const ARTIST = "SettlingRain";

const TRACKS = [
  { id: "interlude-in-rain", title: "Interlude in Rain", duration: "3:57", mp3: "assets/audio/interlude-in-rain.mp3", featured: true },
  { id: "vesper-light", title: "Vesper Light", duration: "4:27", mp3: "assets/audio/vesper-light.mp3" },
  { id: "nocturne-in-blue", title: "Nocturne in Blue", duration: "5:15", mp3: "assets/audio/nocturne-in-blue.mp3" },
  { id: "adagio-in-mist", title: "Adagio in Mist", duration: "2:30", mp3: "assets/audio/adagio-in-mist.mp3" },
  { id: "hearth-in-shadow", title: "Hearth in Shadow", duration: "4:22", mp3: "assets/audio/hearth-in-shadow.mp3" },
  { id: "blue-vigil", title: "Blue Vigil", duration: "5:09", mp3: "assets/audio/blue-vigil.mp3" },
  { id: "lunar-stillness", title: "Lunar Stillness", duration: "4:34", mp3: "assets/audio/lunar-stillness.mp3" },
  { id: "quiet-interval", title: "Quiet Interval", duration: "5:14", mp3: "assets/audio/quiet-interval.mp3" },
  { id: "lamplight-reverie", title: "Lamplight Reverie", duration: "3:33", mp3: "assets/audio/lamplight-reverie.mp3" },
  { id: "hushed-etude", title: "Hushed Étude", duration: "5:09", mp3: "assets/audio/hushed-etude.mp3" }
];

const container = document.getElementById("tracks");

TRACKS.forEach(t => {
  const card = document.createElement("article");
  card.className = "track card";

  const note = t.featured ? `<p class="featured">Featured in the SettlingRain welcome video</p>` : "";

  card.innerHTML = `
    <div class="track-head">
      <div>
        <h2 class="track-title">
          <a class="track-link" href="track.html?id=${t.id}">${t.title}</a>
        </h2>
        <p class="muted">${ARTIST} · ${t.duration}</p>
        ${note}
      </div>

      <div class="track-actions">
        <a class="button small" href="track.html?id=${t.id}">Open</a>
        <a class="button small ghost" href="${t.mp3}" download>Download</a>
      </div>
    </div>
  `;

  container.appendChild(card);
});
