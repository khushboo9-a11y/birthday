let currentPage = 0;
const pages = document.querySelectorAll(".page");
const book = document.getElementById("book");

/* STACK ORDER */
pages.forEach((page, i) => {
  page.style.zIndex = pages.length - i;
});

function startExperience() {
  document.getElementById("overlay").style.display = "none";

  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play().catch(() => {});

  book.style.transition = "transform 2s ease";
  book.style.transform = "translate(-50%, -50%) scale(1.05)";
}

/* NEXT */
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    pages[currentPage].style.zIndex = 0;
    currentPage++;
  }
});

/* PREV */
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove("flipped");
    pages[currentPage].style.zIndex = pages.length - currentPage;
  }
});

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    d: Math.random() * 1
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,200,200,0.7)";
  ctx.beginPath();

  particles.forEach(p => {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  });

  ctx.fill();
  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawParticles, 33);
