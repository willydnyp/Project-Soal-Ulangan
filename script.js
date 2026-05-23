/* ============================================
   TOY STORY QUIZ - script.js
   ============================================ */

/* ============================================
   DATA SOAL — Lebih Sulit (HTML/CSS/JS/PHP)
   ============================================ */
const dataSoal = [
  {
    soal: "Perhatikan kode berikut: <div id='box'><p class='text'>Hello</p></div>. Selector CSS mana yang memiliki spesifisitas (specificity) TERTINGGI untuk menargetkan elemen <p>?",
    pilihan: [
      "p { color: red; }",
      ".text { color: red; }",
      "#box p { color: red; }",
      "#box .text { color: red; }",
      "div .text { color: red; }"
    ],
    jawaban: 3
  },
  {
    soal: "Dalam model CSS Box Model, jika sebuah elemen memiliki: width: 200px; padding: 10px; border: 5px solid; margin: 20px; dan box-sizing adalah nilai DEFAULT (content-box), berapakah lebar TOTAL yang ditempati elemen tersebut termasuk margin?",
    pilihan: [
      "200px",
      "230px",
      "250px",
      "270px",
      "290px"
    ],
    jawaban: 3
  },
  {
    soal: "Apa output yang dihasilkan oleh kode JavaScript berikut?\nconsole.log(typeof null);",
    pilihan: [
      "\"null\"",
      "\"undefined\"",
      "\"object\"",
      "\"boolean\"",
      "Error"
    ],
    jawaban: 2
  },
  {
    soal: "Apa output dari kode JavaScript ini?\nlet x = 5;\nlet y = x++;\nconsole.log(x, y);",
    pilihan: [
      "5 5",
      "6 5",
      "5 6",
      "6 6",
      "undefined undefined"
    ],
    jawaban: 1
  },
  {
    soal: "Dalam PHP, perbedaan utama antara == (double equals) dan === (triple equals) adalah...",
    pilihan: [
      "== membandingkan nilai, === membandingkan alamat memori",
      "== untuk angka, === untuk string",
      "== membandingkan nilai saja, === membandingkan nilai DAN tipe data",
      "Keduanya identik, tidak ada perbedaan",
      "== lebih cepat, === lebih lambat"
    ],
    jawaban: 2
  },
  {
    soal: "Tag HTML5 semantik mana yang paling TEPAT digunakan untuk menampilkan navigasi menu utama sebuah website?",
    pilihan: [
      "<div id='menu'>",
      "<menu>",
      "<nav>",
      "<header>",
      "<section>"
    ],
    jawaban: 2
  },
  {
    soal: "Properti CSS flex mana yang digunakan untuk mengatur urutan sebuah item flex secara individual TANPA mengubah urutan di HTML?",
    pilihan: [
      "flex-direction",
      "align-self",
      "flex-grow",
      "order",
      "z-index"
    ],
    jawaban: 3
  },
  {
    soal: "Perhatikan kode PHP berikut:\n$a = '5';\n$b = 5;\necho ($a == $b) ? 'sama' : 'beda';\necho ($a === $b) ? 'sama' : 'beda';\nApa output yang dihasilkan?",
    pilihan: [
      "beda beda",
      "sama beda",
      "sama sama",
      "beda sama",
      "Error"
    ],
    jawaban: 1
  },
  {
    soal: "Dalam JavaScript, method array mana yang TIDAK mengubah array asli (non-mutating)?",
    pilihan: [
      "push()",
      "sort()",
      "splice()",
      "map()",
      "reverse()"
    ],
    jawaban: 3
  },
  {
    soal: "Apa perbedaan antara localStorage dan sessionStorage dalam JavaScript?",
    pilihan: [
      "localStorage hanya untuk angka, sessionStorage untuk string",
      "localStorage data permanen hingga dihapus manual, sessionStorage hilang saat tab/browser ditutup",
      "localStorage tersimpan di server, sessionStorage di browser",
      "localStorage kapasitas lebih kecil dari sessionStorage",
      "Tidak ada perbedaan, keduanya identik"
    ],
    jawaban: 1
  },
  {
    soal: "Dalam HTML, atribut 'defer' pada tag <script> berfungsi untuk...",
    pilihan: [
      "Menjalankan script sebelum HTML selesai di-parse",
      "Memuat script secara asinkron dan menjalankannya setelah HTML selesai di-parse",
      "Menonaktifkan script secara sementara",
      "Memuat script dari cache browser",
      "Menghentikan rendering halaman"
    ],
    jawaban: 1
  },
  {
    soal: "Di CSS, apa yang dilakukan properti 'position: sticky'?",
    pilihan: [
      "Elemen mengikuti scroll seperti position: fixed selamanya",
      "Elemen berperilaku seperti relative sampai batas scroll tertentu, lalu seperti fixed",
      "Elemen menempel di sudut kiri atas halaman",
      "Elemen tidak bisa digeser dengan scroll",
      "Elemen melekat pada elemen induknya saja"
    ],
    jawaban: 1
  },
  {
    soal: "Apa output dari kode PHP berikut?\n$arr = [3, 1, 4, 1, 5, 9];\nsort($arr);\necho $arr[0];",
    pilihan: [
      "3",
      "9",
      "1",
      "0",
      "Error"
    ],
    jawaban: 2
  },
  {
    soal: "Dalam JavaScript, apa yang dimaksud dengan 'Event Bubbling'?",
    pilihan: [
      "Event hanya terjadi pada elemen target saja",
      "Event menyebar dari elemen induk ke elemen anak",
      "Event menyebar dari elemen target ke atas menuju elemen induk (dan seterusnya ke atas)",
      "Event diulang berkali-kali secara otomatis",
      "Event berjalan bersamaan secara paralel"
    ],
    jawaban: 2
  },
  {
    soal: "Nilai CSS 'display: inline-block' berbeda dari 'display: inline' karena...",
    pilihan: [
      "inline-block tidak bisa disejajarkan dengan elemen lain",
      "inline-block memungkinkan pengaturan width dan height, sedangkan inline tidak",
      "inline-block selalu mengambil lebar penuh container",
      "inline-block tidak bisa diberi padding atau margin",
      "Tidak ada perbedaan antara keduanya"
    ],
    jawaban: 1
  },
  {
    soal: "Dalam PHP, fungsi apa yang digunakan untuk mencegah SQL Injection saat menggunakan ekstensi MySQLi?",
    pilihan: [
      "mysql_escape_string()",
      "htmlspecialchars()",
      "strip_tags()",
      "mysqli_real_escape_string()",
      "addslashes()"
    ],
    jawaban: 3
  },
  {
    soal: "Apa output dari kode JavaScript berikut?\nconsole.log(0.1 + 0.2 === 0.3);",
    pilihan: [
      "true",
      "false",
      "undefined",
      "NaN",
      "Error"
    ],
    jawaban: 1
  },
  {
    soal: "Pada CSS Grid, properti shorthand 'grid-area' dapat menerima nilai berupa...",
    pilihan: [
      "Hanya nama area yang didefinisikan di grid-template-areas",
      "row-start / column-start / row-end / column-end",
      "Hanya angka untuk menentukan kolom",
      "Nilai pixel untuk ukuran area",
      "Nama dan ukuran sekaligus"
    ],
    jawaban: 1
  },
  {
    soal: "Manakah cara yang BENAR untuk membuat prepared statement di PHP menggunakan PDO?",
    pilihan: [
      "$db->query(\"SELECT * FROM users WHERE id = $id\")",
      "$db->prepare(\"SELECT * FROM users WHERE id = ?\")->execute([$id])",
      "$db->select(\"users\", [\"id\" => $id])",
      "mysqli_query($conn, \"SELECT * FROM users WHERE id = $id\")",
      "SELECT * FROM users WHERE id = :id"
    ],
    jawaban: 1
  },
  {
    soal: "Dalam JavaScript ES6+, apa perbedaan utama antara 'let' dan 'var' dalam hal scope?",
    pilihan: [
      "let memiliki function scope, var memiliki block scope",
      "var memiliki block scope, let memiliki global scope",
      "let memiliki block scope, var memiliki function/global scope",
      "Keduanya memiliki scope yang sama persis",
      "let hanya untuk angka, var untuk semua tipe data"
    ],
    jawaban: 2
  }
];

/* ============================================
   KONSTANTA & STATE
   ============================================ */
const WAKTU_TOTAL  = 30 * 60;
const STORAGE_KEY  = 'toystory_quiz_riwayat';
const OPSI_HURUF   = ['A', 'B', 'C', 'D', 'E'];

let state = {
  nama             : '',
  kelas            : '',
  soalIndex        : 0,
  jawaban          : new Array(dataSoal.length).fill(null),
  timer            : WAKTU_TOTAL,
  timerInterval    : null,
  audioOn          : true,
  startTime        : null,
  waktuTerpakai    : 0,
  snapshotJawaban  : null
};

/* ============================================
   AUDIO ENGINE — Toy Story / Western / Space
   ============================================ */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(freq, duration, type = 'sine', volume = 0.3, detune = 0) {
  if (!state.audioOn || !audioCtx) return;
  try {
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type    = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.detune.setValueAtTime(detune, audioCtx.currentTime);
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function playChord(freqs, duration, type = 'sine', volume = 0.2) {
  freqs.forEach(f => playTone(f, duration, type, volume));
}

/* Woody's yodel-like click — "YEEHAW!" sfx */
function soundClick() {
  initAudio();
  // Western whistle-like ascending
  playTone(523, 0.06, 'triangle', 0.25);
  setTimeout(() => playTone(659, 0.06, 'triangle', 0.2),  60);
  setTimeout(() => playTone(784, 0.08, 'triangle', 0.18), 120);
}

/* Buzz Lightyear "To infinity!" — space laser */
function soundPilih() {
  initAudio();
  // Laser zap: descending freq sweep
  if (!audioCtx) return;
  try {
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.22);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.25);
  } catch (e) {}
}

/* Next soal — Sheriff's badge "ding" */
function soundNextSoal() {
  initAudio();
  // Bright bell-like tone
  playTone(880, 0.12, 'sine', 0.2);
  setTimeout(() => playTone(1046, 0.1, 'sine', 0.15), 80);
}

/* Win sound — "You've got a friend in me" melody fragment */
function soundWin() {
  initAudio();
  // Melody: C-E-G-C (major chord arpeggio then up)
  const melody = [523, 659, 784, 1046, 784, 880, 1046, 1174, 1046, 784, 1046];
  melody.forEach((note, i) => {
    setTimeout(() => playTone(note, 0.22, 'sine', 0.22), i * 130);
  });
  // Add harmony chord underneath
  setTimeout(() => playChord([262, 330, 392], 0.5, 'sine', 0.12), 400);
  setTimeout(() => playChord([349, 440, 523], 0.5, 'sine', 0.12), 900);
}

/* Error sound — sad trombone */
function soundError() {
  initAudio();
  playTone(440, 0.1, 'sawtooth', 0.2);
  setTimeout(() => playTone(392, 0.1, 'sawtooth', 0.2), 110);
  setTimeout(() => playTone(349, 0.12, 'sawtooth', 0.18), 220);
  setTimeout(() => playTone(294, 0.25, 'sawtooth', 0.15), 340);
}

/* Warning — cowboy whistle */
function soundWarning() {
  initAudio();
  playTone(740, 0.12, 'sine', 0.2);
  setTimeout(() => playTone(698, 0.08, 'sine', 0.18), 130);
  setTimeout(() => playTone(659, 0.12, 'sine', 0.15), 230);
}

/* Background music — "You've got a friend in me" inspired loop */
let bgMusicInterval = null;
const bgMelody = [
  { note: 262, dur: 0.3 },  // C
  { note: 294, dur: 0.15 }, // D
  { note: 330, dur: 0.15 }, // E
  { note: 349, dur: 0.3 },  // F
  { note: 392, dur: 0.45 }, // G
  { note: 330, dur: 0.15 }, // E
  { note: 392, dur: 0.3 },  // G
  { note: 440, dur: 0.3 },  // A
  { note: 392, dur: 0.45 }, // G
  { note: 330, dur: 0.15 }, // E
  { note: 294, dur: 0.15 }, // D
  { note: 262, dur: 0.45 }, // C
];
let bgNoteIndex = 0;
let bgTimeout   = null;

function scheduleBgNote() {
  if (!state.audioOn || !audioCtx) return;
  const n = bgMelody[bgNoteIndex % bgMelody.length];
  playTone(n.note, n.dur * 0.85, 'sine', 0.07);
  bgNoteIndex++;
  bgTimeout = setTimeout(scheduleBgNote, n.dur * 1000);
}

function startBgMusic() {
  if (bgTimeout) return;
  scheduleBgNote();
}

function stopBgMusic() {
  if (bgTimeout) {
    clearTimeout(bgTimeout);
    bgTimeout = null;
  }
}

function toggleAudio() {
  soundClick();
  initAudio();
  state.audioOn = !state.audioOn;
  const btn = document.getElementById('btnAudio');
  if (state.audioOn) {
    btn.textContent = '🔊 SUARA: ON';
    startBgMusic();
    showToast('Suara dinyalakan 🔊 Yeehaw!');
  } else {
    btn.textContent = '🔇 SUARA: OFF';
    stopBgMusic();
    showToast('Suara dimatikan 🔇');
  }
}

/* ============================================
   BACKGROUND — Andy's Room Scene
   ============================================ */
function generateBgScene() {
  // Clouds
  const cloudsLayer = document.getElementById('cloudsLayer');
  const cloudData = [
    { w: 120, h: 40, top: 8,  dur: 28, delay: 0 },
    { w: 90,  h: 30, top: 15, dur: 35, delay: -12 },
    { w: 150, h: 50, top: 5,  dur: 42, delay: -22 },
    { w: 80,  h: 28, top: 22, dur: 30, delay: -8 },
    { w: 110, h: 36, top: 12, dur: 38, delay: -30 },
  ];
  cloudData.forEach(c => {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.cssText = `
      width: ${c.w}px;
      height: ${c.h}px;
      top: ${c.top}%;
      animation-duration: ${c.dur}s;
      animation-delay: ${c.delay}s;
    `;
    cloudsLayer.appendChild(cloud);
  });

  // Floating toy emojis — Toy Story characters/items
  const floatingToys = document.getElementById('floatingToys');
  const toys = ['🤠','🚀','🦕','🐻','🐷','🎪','⭐','🌟','🎠','🎀','🧸','🐶'];
  for (let i = 0; i < 16; i++) {
    const toy = document.createElement('div');
    toy.className = 'toy-float';
    const emoji = toys[Math.floor(Math.random() * toys.length)];
    const dur   = 16 + Math.random() * 20;
    const delay = Math.random() * -25;
    const left  = Math.random() * 96;
    toy.textContent = emoji;
    toy.style.cssText = `
      left: ${left}%;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      font-size: ${20 + Math.floor(Math.random() * 3) * 10}px;
    `;
    floatingToys.appendChild(toy);
  }

  // ── Scattered toys on Andy's floor ──
  const floorToys = document.getElementById('floorToys');
  // curated list: iconic Toy Story items with specific rotations & sizes
  const scatteredToys = [
    { emoji: '🤠', left:  3, rot: -22, size: 38, delay: 0.0 },   // Woody hat
    { emoji: '🚀', left:  9, rot:  15, size: 34, delay: 0.3 },   // Buzz
    { emoji: '🦕', left: 16, rot: -10, size: 40, delay: 0.6 },   // Rex
    { emoji: '🐷', left: 23, rot:  28, size: 32, delay: 0.2 },   // Hamm
    { emoji: '🎮', left: 30, rot: -18, size: 30, delay: 0.8 },   // game controller
    { emoji: '🧸', left: 38, rot:   8, size: 36, delay: 0.4 },   // teddy bear
    { emoji: '🎯', left: 45, rot: -30, size: 28, delay: 1.0 },   // dartboard / target
    { emoji: '🐶', left: 52, rot:  20, size: 34, delay: 0.1 },   // Slinky Dog
    { emoji: '⭐', left: 59, rot: -12, size: 30, delay: 0.7 },   // Sheriff star
    { emoji: '🎪', left: 66, rot:  35, size: 32, delay: 0.5 },   // Circus tent (Lotso ref)
    { emoji: '🔫', left: 73, rot: -25, size: 30, delay: 0.9 },   // Buzz laser/gun
    { emoji: '🎠', left: 80, rot:  14, size: 36, delay: 0.3 },   // carousel toy
    { emoji: '🎲', left: 87, rot: -20, size: 28, delay: 0.6 },   // dice / Mr Spell
    { emoji: '🪆', left: 93, rot:  10, size: 32, delay: 0.2 },   // Russian doll / Babushka
  ];

  scatteredToys.forEach(t => {
    const el = document.createElement('div');
    el.className = 'floor-toy';
    el.textContent = t.emoji;
    el.style.cssText = `
      left: ${t.left}%;
      font-size: ${t.size}px;
      --rot: ${t.rot}deg;
      transform: rotate(${t.rot}deg);
      animation: toyRest ${2.5 + Math.random() * 2}s ease-in-out ${t.delay}s infinite;
      filter: drop-shadow(2px 5px 4px rgba(0,0,0,0.38));
    `;
    floorToys.appendChild(el);
  });
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
function showToast(pesan, durasi = 2200) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className   = 'toast';
  toast.textContent = pesan;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity    = '0';
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.style.transform  = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, durasi);
}

/* ============================================
   NAVIGASI HALAMAN
   ============================================ */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

/* ============================================
   MULAI ULANGAN
   ============================================ */
function mulaiUlangan() {
  soundClick();
  initAudio();

  const nama  = document.getElementById('inputNama').value.trim();
  const kelas = document.getElementById('inputKelas').value.trim();

  if (!nama) {
    soundError();
    showToast('⚠️ Nama tidak boleh kosong, cowboy!');
    document.getElementById('inputNama').focus();
    return;
  }
  if (!kelas) {
    soundError();
    showToast('⚠️ Kelas tidak boleh kosong!');
    document.getElementById('inputKelas').focus();
    return;
  }

  state.nama          = nama;
  state.kelas         = kelas;
  state.soalIndex     = 0;
  state.jawaban       = new Array(dataSoal.length).fill(null);
  state.timer         = WAKTU_TOTAL;
  state.waktuTerpakai = 0;
  state.startTime     = Date.now();

  document.getElementById('quizNama').textContent  = `🤠 ${nama}`;
  document.getElementById('quizKelas').textContent = `🏫 ${kelas}`;

  renderNavNomor();
  startTimer();
  startBgMusic();
  tampilkanSoal(0);
  showPage('pageQuiz');
  showToast(`🤠 Reach for the sky, ${nama}! Semangat!`);
}

/* ============================================
   TIMER
   ============================================ */
function startTimer() {
  clearInterval(state.timerInterval);
  state.timer = WAKTU_TOTAL;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timer--;
    state.waktuTerpakai++;
    updateTimerDisplay();

    if (state.timer === 5 * 60) { showToast('⚠️ Sisa waktu 5 menit! Cepat, cowboy!', 3000); soundWarning(); }
    if (state.timer === 60)     { showToast('🚀 Sisa waktu 1 menit! To infinity!', 3000); soundWarning(); }
    if (state.timer <= 0) {
      state.timer = 0;
      updateTimerDisplay();
      clearInterval(state.timerInterval);
      showToast('⏰ Waktu habis, cowboy!', 3000);
      setTimeout(() => selesaiUlangan(true), 1000);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

function updateTimerDisplay() {
  const mnt = Math.floor(state.timer / 60).toString().padStart(2, '0');
  const dtk = (state.timer % 60).toString().padStart(2, '0');
  const el  = document.getElementById('quizTimer');
  el.textContent = `⏱ ${mnt}:${dtk}`;

  if (state.timer <= 60)       el.style.color = 'var(--woody-red)';
  else if (state.timer <= 300) el.style.color = '#E07000';
  else                         el.style.color = 'var(--woody-gold-dark)';
}

function formatWaktu(detik) {
  return `${Math.floor(detik / 60)}m ${detik % 60}s`;
}

/* ============================================
   NAVIGASI NOMOR SOAL
   ============================================ */
function renderNavNomor() {
  const container = document.getElementById('soalNav');
  container.innerHTML = '';

  const col1 = document.createElement('div');
  col1.className = 'nav-col';
  const col2 = document.createElement('div');
  col2.className = 'nav-col';

  for (let i = 0; i < dataSoal.length; i++) {
    const btn = document.createElement('button');
    btn.className     = 'nav-btn';
    btn.textContent   = i + 1;
    btn.dataset.index = i;
    btn.addEventListener('click', () => { soundClick(); goToSoal(i); });
    (i < 10 ? col1 : col2).appendChild(btn);
  }

  container.appendChild(col1);
  container.appendChild(col2);
  updateNavNomor();
}

function updateNavNomor() {
  document.querySelectorAll('.nav-btn').forEach((btn, i) => {
    btn.classList.remove('active', 'answered');
    if (i === state.soalIndex)     btn.classList.add('active');
    if (state.jawaban[i] !== null) btn.classList.add('answered');
  });
}

/* ============================================
   TAMPILKAN SOAL
   ============================================ */
function tampilkanSoal(index) {
  const soal = dataSoal[index];
  document.getElementById('soalNumber').textContent = `Soal ${index + 1} / ${dataSoal.length}`;
  document.getElementById('soalText').innerHTML     = escapeHTML(soal.soal).replace(/\n/g, '<br>');

  const container = document.getElementById('jawabanList');
  container.innerHTML = '';

  soal.pilihan.forEach((pilihan, i) => {
    const div = document.createElement('div');
    div.className = 'jawaban-option';
    if (state.jawaban[index] === i) div.classList.add('selected');
    div.innerHTML = `
      <span class="jawaban-key">${OPSI_HURUF[i]}.</span>
      <span class="jawaban-text">${escapeHTML(pilihan)}</span>
    `;
    div.addEventListener('click', () => { soundPilih(); pilihJawaban(index, i); });
    container.appendChild(div);
  });

  const btnPrev    = document.getElementById('btnPrev');
  const btnNext    = document.getElementById('btnNext');
  const btnSelesai = document.getElementById('btnSelesai');

  btnPrev.disabled = (index === 0);

  if (index === dataSoal.length - 1) {
    btnNext.style.display    = 'none';
    btnSelesai.style.display = 'inline-block';
  } else {
    btnNext.style.display    = 'inline-block';
    btnSelesai.style.display = 'none';
  }

  updateNavNomor();
}

function pilihJawaban(soalIdx, jawabanIdx) {
  state.jawaban[soalIdx] = jawabanIdx;
  document.querySelectorAll('.jawaban-option').forEach((opt, i) => {
    opt.classList.toggle('selected', i === jawabanIdx);
  });
  updateNavNomor();
  if (state.jawaban.every(j => j !== null)) {
    showToast('⭐ Semua soal sudah dijawab! Tekan Selesai, cowboy!');
  }
}

function goToSoal(index) {
  state.soalIndex = index;
  tampilkanSoal(index);
  soundNextSoal();
}

function nextSoal() {
  soundNextSoal();
  if (state.soalIndex < dataSoal.length - 1) {
    state.soalIndex++;
    tampilkanSoal(state.soalIndex);
  }
}

function prevSoal() {
  soundClick();
  if (state.soalIndex > 0) {
    state.soalIndex--;
    tampilkanSoal(state.soalIndex);
  }
}

/* ============================================
   SELESAI ULANGAN
   ============================================ */
function selesaiUlangan(force = false) {
  if (!force) {
    const belumDijawab = state.jawaban.filter(j => j === null).length;
    if (belumDijawab > 0) {
      soundError();
      showToast(`⚠️ Masih ada ${belumDijawab} soal belum dijawab, cowboy!`);
      goToSoal(state.jawaban.findIndex(j => j === null));
      return;
    }
    soundClick();
  }

  stopTimer();
  stopBgMusic();

  let benar = 0;
  dataSoal.forEach((soal, i) => {
    if (state.jawaban[i] === soal.jawaban) benar++;
  });

  const salah    = dataSoal.length - benar;
  const nilai    = benar * 5;
  const waktuStr = formatWaktu(state.waktuTerpakai);

  state.snapshotJawaban = [...state.jawaban];

  simpanRiwayat({
    nama           : state.nama,
    kelas          : state.kelas,
    nilai,
    benar,
    salah,
    waktu          : waktuStr,
    timestamp      : Date.now(),
    jawabanPeserta : [...state.jawaban]
  });

  tampilkanHasil(benar, salah, nilai, waktuStr);
  showPage('pageResult');
  soundWin();
  setTimeout(() => buatStarBurst(), 300);
}

function tampilkanHasil(benar, salah, nilai, waktu) {
  document.getElementById('resultNama').textContent  = `🤠 ${state.nama}`;
  document.getElementById('resultKelas').textContent = `🏫 ${state.kelas}`;
  document.getElementById('statBenar').textContent   = benar;
  document.getElementById('statSalah').textContent   = salah;
  document.getElementById('statWaktu').textContent   = waktu;

  // Animasi counter nilai
  let cur = 0;
  const step    = Math.ceil(nilai / 20);
  const nilaiEl = document.getElementById('nilaiAkhir');
  const iv = setInterval(() => {
    cur = Math.min(cur + step, nilai);
    nilaiEl.textContent = cur;
    if (cur >= nilai) clearInterval(iv);
  }, 50);

  // Grade + karakter Toy Story
  const gradeEl = document.getElementById('nilaiGrade');
  const winIcon  = document.getElementById('winIcon');
  let gradeClass, gradeLabel, icon;

  if      (nilai >= 90) { gradeClass = 'grade-A'; gradeLabel = 'Grade A — 🤠 TO INFINITY AND BEYOND!'; icon = '🏆'; }
  else if (nilai >= 75) { gradeClass = 'grade-B'; gradeLabel = 'Grade B — 🚀 You\'ve Got a Friend!'; icon = '⭐'; }
  else if (nilai >= 60) { gradeClass = 'grade-C'; gradeLabel = 'Grade C — 🦕 Cukup Bagus!'; icon = '🌟'; }
  else if (nilai >= 40) { gradeClass = 'grade-D'; gradeLabel = 'Grade D — 🐷 Perlu Belajar Lagi!'; icon = '📚'; }
  else                  { gradeClass = 'grade-E'; gradeLabel = 'Grade E — 🤠 Reach For The Sky Again!'; icon = '💪'; }

  gradeEl.textContent = gradeLabel;
  gradeEl.className   = `nilai-grade ${gradeClass}`;
  if (winIcon) winIcon.textContent = icon;
}

function buatStarBurst() {
  const container = document.getElementById('starsBurst');
  const emojis    = ['⭐', '🌟', '✨', '💫', '🎉', '🎊', '🤠', '🚀'];

  for (let i = 0; i < 24; i++) {
    setTimeout(() => {
      const star  = document.createElement('div');
      star.className = 'star-particle';
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const tx    = (Math.random() - 0.5) * 220;
      const ty    = (Math.random() - 0.5) * 220;
      star.textContent = emoji;
      star.style.cssText = `
        left: ${20 + Math.random() * 60}%;
        top:  ${20 + Math.random() * 60}%;
        --tx: ${tx}px;
        --ty: ${ty}px;
        font-size: ${14 + Math.random() * 16}px;
      `;
      container.appendChild(star);
      setTimeout(() => star.remove(), 1600);
    }, i * 70);
  }
}

/* ============================================
   REVIEW DARI HALAMAN HASIL
   ============================================ */
function lihatReviewTerakhir() {
  soundClick();
  if (!state.snapshotJawaban) {
    showToast('⚠️ Data jawaban tidak ditemukan.');
    return;
  }
  tampilkanReviewDariData({
    nama           : state.nama,
    kelas          : state.kelas,
    nilai          : state.snapshotJawaban.filter((j, i) => j === dataSoal[i].jawaban).length * 5,
    benar          : state.snapshotJawaban.filter((j, i) => j === dataSoal[i].jawaban).length,
    salah          : state.snapshotJawaban.filter((j, i) => j !== dataSoal[i].jawaban).length,
    jawabanPeserta : state.snapshotJawaban
  }, true);
}

/* ============================================
   ULANGI & HOME
   ============================================ */
function ulangLagi() {
  soundClick();
  state.soalIndex       = 0;
  state.jawaban         = new Array(dataSoal.length).fill(null);
  state.snapshotJawaban = null;
  state.timer           = WAKTU_TOTAL;
  state.waktuTerpakai   = 0;
  state.startTime       = Date.now();

  document.getElementById('quizNama').textContent  = `🤠 ${state.nama}`;
  document.getElementById('quizKelas').textContent = `🏫 ${state.kelas}`;

  renderNavNomor();
  startTimer();
  startBgMusic();
  tampilkanSoal(0);
  showPage('pageQuiz');
}

function kembaliHome() {
  soundClick();
  state.snapshotJawaban = null;
  muatRiwayat();
  showPage('pageHome');
}

/* ============================================
   RIWAYAT (localStorage)
   ============================================ */
function simpanRiwayat(data) {
  const riwayat = ambilRiwayat();
  riwayat.unshift(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(riwayat));
}

function ambilRiwayat() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function muatRiwayat() {
  const riwayat = ambilRiwayat();
  const list    = document.getElementById('historyList');
  const actions = document.getElementById('historyActions');

  if (riwayat.length === 0) {
    list.innerHTML        = '<p class="empty-msg">Belum ada data riwayat, cowboy. 🤠</p>';
    actions.style.display = 'none';
    return;
  }

  actions.style.display = 'block';
  list.innerHTML        = '';

  riwayat.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'history-item';

    let nilaiClass = 'nilai-sedang';
    if      (item.nilai >= 75) nilaiClass = 'nilai-lulus';
    else if (item.nilai <  50) nilaiClass = 'nilai-gagal';

    const tgl = item.timestamp
      ? new Date(item.timestamp).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
      : '-';

    div.innerHTML = `
      <div class="history-info">
        <div class="history-nama">🤠 ${escapeHTML(item.nama)}</div>
        <div class="history-detail">
          🏫 ${escapeHTML(item.kelas)} &nbsp;|&nbsp;
          ✅ ${item.benar} Benar &nbsp;|&nbsp;
          ❌ ${item.salah} Salah &nbsp;|&nbsp;
          ⏱ ${item.waktu} &nbsp;|&nbsp;
          📅 ${tgl}
        </div>
      </div>
      <div class="history-nilai ${nilaiClass}">${item.nilai}</div>
      <div class="history-btn-group">
        <button class="ts-btn btn-small btn-buzz" onclick="lihatReview(${idx})">🔍 Review</button>
        <button class="ts-btn btn-small btn-red"  onclick="hapusSatu(${idx})">🗑</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function hapusSatu(idx) {
  soundClick();
  const riwayat = ambilRiwayat();
  riwayat.splice(idx, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(riwayat));
  muatRiwayat();
  showToast('🗑️ Data dihapus, pardner!');
}

function hapusSemua() {
  soundClick();
  if (confirm('Hapus semua data riwayat, cowboy?')) {
    localStorage.removeItem(STORAGE_KEY);
    muatRiwayat();
    showToast('🗑️ Semua data dihapus!');
  }
}

/* ============================================
   REVIEW JAWABAN
   ============================================ */
function lihatReview(idx) {
  soundClick();
  const riwayat = ambilRiwayat();
  const item    = riwayat[idx];
  if (!item) { showToast('⚠️ Data tidak ditemukan.'); return; }
  state.snapshotJawaban = null;
  tampilkanReviewDariData(item, false);
}

function tampilkanReviewDariData(item, showKunci = false) {
  if (!item) { showToast('⚠️ Data tidak ditemukan.'); return; }

  const labelKembali = state.snapshotJawaban ? '◀ KEMBALI KE HASIL' : '🏠 KEMBALI KE HOME';
  const btnTop = document.getElementById('btnKembaliReviewTop');
  const btnBot = document.getElementById('btnKembaliReviewBot');
  if (btnTop) btnTop.textContent = labelKembali;
  if (btnBot) btnBot.textContent = labelKembali;

  const jawabanData = item.jawabanPeserta && Array.isArray(item.jawabanPeserta)
    ? item.jawabanPeserta
    : new Array(dataSoal.length).fill(null);

  const dataLama = !item.jawabanPeserta || !Array.isArray(item.jawabanPeserta);

  let benarHitung = 0;
  jawabanData.forEach((j, i) => { if (j === dataSoal[i].jawaban) benarHitung++; });
  const salahHitung = dataSoal.length - benarHitung;

  document.getElementById('reviewNama').textContent  = `🤠 ${item.nama}`;
  document.getElementById('reviewKelas').textContent = `🏫 ${item.kelas}`;
  document.getElementById('reviewNilai').textContent = dataLama ? item.nilai : (benarHitung * 5);
  document.getElementById('reviewBenar').textContent = dataLama ? item.benar : benarHitung;
  document.getElementById('reviewSalah').textContent = dataLama ? item.salah : salahHitung;

  const container = document.getElementById('reviewSoalList');
  container.innerHTML = '';

  if (dataLama) {
    const banner = document.createElement('div');
    banner.className = 'review-banner-lama';
    banner.innerHTML = '⚠️ Data lama — jawaban peserta tidak tercatat. Kerjakan ulang untuk melihat hasil lengkap.';
    container.appendChild(banner);
  }

  dataSoal.forEach((soal, i) => {
    const jp           = jawabanData[i];
    const jb           = soal.jawaban;
    const tidakDijawab = jp === null || jp === undefined;
    const isBenar      = !tidakDijawab && jp === jb;

    let statusClass, statusIcon, statusLabel;
    if (tidakDijawab)    { statusClass = 'review-tidak-dijawab'; statusIcon = '❓'; statusLabel = 'TIDAK TERCATAT'; }
    else if (isBenar)    { statusClass = 'review-benar';         statusIcon = '✅'; statusLabel = 'BENAR'; }
    else                 { statusClass = 'review-salah';         statusIcon = '❌'; statusLabel = 'SALAH'; }

    let pilihanHTML = '';
    soal.pilihan.forEach((pilihan, j) => {
      let pClass = 'review-pilihan';
      let badge  = '';

      if (!tidakDijawab && j === jp) {
        if (jp === jb) {
          pClass += ' pilihan-benar';
          badge   = '<span class="pilihan-badge badge-benar">✓ BENAR!</span>';
        } else {
          pClass += ' pilihan-salah';
          badge   = '<span class="pilihan-badge badge-salah">✗ SALAH!</span>';
        }
      }

      pilihanHTML += `
        <div class="${pClass}">
          <span class="review-pilihan-key">${OPSI_HURUF[j]}.</span>
          <span class="review-pilihan-text">${escapeHTML(pilihan)}</span>
          ${badge}
        </div>`;
    });

    const soalDiv = document.createElement('div');
    soalDiv.className = `review-soal-item ${statusClass}`;
    soalDiv.innerHTML = `
      <div class="review-soal-header">
        <span class="review-soal-num">${statusIcon} Soal ${i + 1}</span>
        <span class="review-status-label ${tidakDijawab ? 'label-tidak-dijawab' : (isBenar ? 'label-benar' : 'label-salah')}">${statusLabel}</span>
      </div>
      <div class="review-soal-text">${escapeHTML(soal.soal).replace(/\n/g, '<br>')}</div>
      <div class="review-pilihan-list">${pilihanHTML}</div>
    `;
    container.appendChild(soalDiv);
  });

  showPage('pageReview');
}

function kembaliDariReview() {
  soundClick();
  if (state.snapshotJawaban) {
    showPage('pageResult');
  } else {
    muatRiwayat();
    showPage('pageHome');
  }
}

/* ============================================
   UTILITY: Escape HTML
   ============================================ */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ============================================
   INISIALISASI
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  generateBgScene();
  muatRiwayat();

  document.body.addEventListener('click', () => initAudio(), { once: true });

  document.getElementById('inputNama').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('inputKelas').focus();
  });
  document.getElementById('inputKelas').addEventListener('keydown', e => {
    if (e.key === 'Enter') mulaiUlangan();
  });
});