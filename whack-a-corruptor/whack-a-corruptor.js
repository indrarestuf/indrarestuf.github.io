const semuaTikus = document.querySelectorAll('.tikus')
const papanSkor = document.querySelector('#papan-skor');
let skor = 0;

  function munculTikusRandom() {
    
    semuaTikus.forEach(t => t.classList.add('translate-y-full'))

    const random = Math.floor(Math.random() * semuaTikus.length)
    const target = semuaTikus[random]

    target.classList.remove('translate-y-full')

    // setTimeout(() => {
    //   target.classList.add('translate-y-full')
    // }, 1500)
  }

  setInterval(munculTikusRandom, 1000)

  const gameArea = document.getElementById("game-area");

  gameArea.style.cursor = "url('img/palu-1.png') 20 20, auto";

  gameArea.addEventListener("mousedown", () => {
    gameArea.style.cursor = "url('img/palu-2.png') 20 20, auto";
  });

  gameArea.addEventListener("mouseup", () => {
    gameArea.style.cursor = "url('img/palu-1.png') 20 20, auto";
  });

function pukul(e) {
  const tikus = e.target;
  skor++;
  papanSkor.innerText = skor;

  tikus.classList.add('blink');

  setTimeout(() => {
    tikus.classList.remove('blink');
    tikus.classList.add('translate-y-full'); // turun
  }, 1500);
}


semuaTikus.forEach(t => {
  t.addEventListener('click', pukul);
});

