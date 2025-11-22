const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgmusic");

// เล่นเพลงเมื่อกด NO
noBtn.addEventListener("click", () => {
  music.play();
});

// ปุ่ม NO หนี
noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector('.btn-box');
  const containerRect = container.getBoundingClientRect();
  
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = containerRect.width - btnWidth;
  const maxY = containerRect.height - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ปุ่ม YES
yesBtn.addEventListener("click", () => {
  alert("ดีใจที่สุดเลย 💖 ผมรักพี่นัทที่สุดเลยย");
});