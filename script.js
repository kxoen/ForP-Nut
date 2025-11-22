const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgmusic");

// เล่นเพลงทันทีที่เปิดเว็บ (workaround autoplay)
window.addEventListener("load", () => {
  music.muted = true;
  music.play().then(() => {
    setTimeout(() => {
      music.muted = false; // เปิดเสียงหลัง 0.5 วิ
    }, 500);
  }).catch(err => {
    console.log("Autoplay ถูกบล็อก:", err);
  });
});

// ปุ่ม No หนีเมาส์
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ปุ่ม Yes
yesBtn.addEventListener("click", () => {
  alert("ดีใจที่สุดเลย 💖 ผมรักพี่นะ!!");
});