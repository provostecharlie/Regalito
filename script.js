// ======================
// ELEMENTOS
// ======================
const music = document.getElementById("bg-music");
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const letterVideo = document.getElementById("letter-video");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const gallery = document.getElementById("photo-gallery");
const preLoveText = document.getElementById("pre-love-message");

const preLoveMessages = [
  "Tengo algo que decirte… 💌",
  "Eres el amor de y para mi vida ✨",
  "Ojalá te saque una sonrisa (o varias) 😌",
  "Recuerda siempre lo mucho que te amo y lo feliz que estoy de tenerte en mi vida",
  "Haz click cuando estés lista! 💖"
];

let preIndex = 0;
let preInterval = null;

// ======================
// MENSAJES
// ======================
function showPreMessage() {
  preLoveText.style.opacity = 0;

  setTimeout(() => {
    preLoveText.textContent = preLoveMessages[preIndex];
    preLoveText.style.opacity = 1;

    preIndex++;
    if (preIndex >= preLoveMessages.length) {
      preIndex = 0;
    }
  }, 600);
}

// ======================
// INICIO DEL CICLO
// ======================
if (preLoveText) {
  showPreMessage();
  preInterval = setInterval(showPreMessage, 3000);
}

// ======================
// CLICK EN EL SOBRE
// ======================
envelope.addEventListener("click", () => {
  clearInterval(preInterval);
  envelope.style.display = "none";
  letter.style.display = "flex";

  music.volume = 0.3;
  music.play();

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// ======================
// MOVIMIENTO DEL BOTÓN NO
// ======================
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// ======================
// CLICK EN YES
// ======================
yesBtn.addEventListener("click", () => {
  title.style.display = "none";
  gallery.style.display = "none";

  letterVideo.style.display = "block";
  letterVideo.play();

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";
});

const cat = document.getElementById("pixel-cat");
const catWrap = document.getElementById("cat-wrapper");
const heart = document.getElementById("cat-heart");

// caminar random
function moveCat() {
  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 140;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  catWrap.classList.add("cat-walk");
  catWrap.style.left = x + "px";
  catWrap.style.bottom = y + "px";

  setTimeout(() => {
    catWrap.classList.remove("cat-walk");
  }, 1200);
}

setTimeout(moveCat, 500);
setInterval(moveCat, 2500);

// sentarse
setTimeout(() => {
  catWrap.classList.add("cat-sit");
}, 8000);


// click = amor
cat.addEventListener("click", () => {
  catWrap.classList.add("cat-love");
  heart.style.animation = "none";
  heart.offsetHeight;
  heart.style.animation = null;
  setTimeout(() => catWrap.classList.remove("cat-love"), 2000);
});

// acercarse al YES
yesBtn.addEventListener("mouseenter", () => {
  const rect = yesBtn.getBoundingClientRect();
  catWrap.style.left = rect.left + "px";
  catWrap.style.bottom = "120px";
});

// asustarse con NO
noBtn.addEventListener("mouseenter", () => {
  catWrap.classList.add("cat-scare");
  setTimeout(() => catWrap.classList.remove("cat-scare"), 1200);
});

console.log("CAT:", catWrap);