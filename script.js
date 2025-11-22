const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgmusic");

// เล่นเพลงเมื่อกดปุ่ม NO
noBtn.addEventListener("click", () => {
  music.play();
});

// ปุ่ม No หนีเมาส์
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ปุ่ม YES
yesBtn.addEventListener("click", () => {
  alert("ดีใจที่สุดเลย 💖 ผมรักพี่นะคับบ!");
});