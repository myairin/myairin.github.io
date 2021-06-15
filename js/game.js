const awan = document.querySelectorAll('.awan')
const naruto = document.querySelectorAll('.naruto')
const papanSkor = document.querySelector('.skor')

let awanSebelumnya;
let selesai;
let skor;

function randomAwan(awan) {
    const t = Math.floor(Math.random() * awan.length);
    const tRandom = awan[t];
    if (tRandom == awanSebelumnya) {
        randomAwan(awan);
    } 
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanNaruto() {
    const tRandom = randomAwan(awan);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if(!selesai) {
        munculkanNaruto();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanNaruto();
    setTimeout(() => {
        selesai = true;
    },10000);
}

function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    papanSkor.textContent = skor;
}


naruto.forEach(t => {
    t.addEventListener('click', pukul);
});

