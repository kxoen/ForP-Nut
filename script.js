const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgmusic");

// เริ่มเล่นเพลงครั้งแรกที่มีการกดปุ่มใดก็ตาม
let musicStarted = false;
function startMusic() {
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }
}

// ปุ่ม No หนีได้
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ปุ่ม Yes
yesBtn.addEventListener("click", () => {
  startMusic();
  alert("ดีใจที่สุดเลย 💖 ผมรักพี่นะ!!");
});

// เผื่อคลิก No ก็ให้เพลงเริ่ม
noBtn.addEventListener("click", startMusic);