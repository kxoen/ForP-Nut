function showQuestion() {
    document.getElementById("question").style.display = "block";
}

// ทำให้ปุ่ม No หนีหนีหนี
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});