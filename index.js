// console.log('it is working')
document.addEventListener('click', () => {
  const music = document.querySelector('.music');
  if (!music) return; // guard if element not found

  // unmute just in case
  music.muted = false;

  if (music.paused) {
    music.play().catch(e => console.log("Playback prevented:", e));
  } else {
    music.pause();
  }
});
