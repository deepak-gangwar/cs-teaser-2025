// console.log('it is working')
document.addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    music.muted = false;
    music.play().catch(e => console.log("Playback prevented:", e));
    }, { once: true });