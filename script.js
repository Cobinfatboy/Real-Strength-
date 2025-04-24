let xp = 0;
let level = 1;
let bossHp = 100;

function addXP(type) {
  let gain = type === 'pushup' ? 10 : type === 'pullup' ? 15 : 8;
  xp += gain;
  updateStats();
}

function updateStats() {
  if (xp >= 100) {
    xp -= 100;
    level++;
  }
  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;
  document.getElementById("xpBar").style.width = xp + "%";
}

function fightBoss() {
  if (xp < 30) {
    alert("You need at least 30 XP to attack!");
    return;
  }

  let damage = Math.floor(Math.random() * 20) + 10;
  bossHp -= damage;
  xp -= 30;

  if (bossHp <= 0) {
    document.querySelector('.boss').innerHTML = `<h2>You defeated the boss!</h2>`;
  } else {
    document.getElementById("bossHp").innerText = bossHp;
  }

  updateStats();
}
