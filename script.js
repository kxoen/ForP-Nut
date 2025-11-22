// ข้อความพิมพ์เอง
const text = "หนูมีเรื่องอยากบอกพี่... 💗";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// แสดงปุ่ม Yes/No
function showQuestion() {
    document.getElementById("question").style.display = "block";
}

// ปุ่ม No หนีไปเรื่อยๆ
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// หัวใจลอยขึ้นมา
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
setInterval(createHeart, 500);