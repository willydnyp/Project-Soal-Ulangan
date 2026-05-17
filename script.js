/* ============================================
   MINECRAFT QUIZ - script.js
   ============================================ */

/* ============================================
   DATA SOAL
   ============================================ */
const dataSoal = [
  {
    soal: "Struktur dasar dokumen HTML yang benar dan wajib ada di setiap halaman web adalah...",
    pilihan: [
      "<!DOCTYPE html>, <html>, <head>, <body>",
      "<html>, <title>, <content>, <footer>",
      "<!DOCTYPE>, <webpage>, <header>, <main>",
      "<doctype html>, <html>, <meta>, <body>",
      "<start>, <html>, <head>, <end>"
    ],
    jawaban: 0
  },
  {
    soal: "Atribut HTML yang digunakan untuk menentukan alamat tujuan sebuah link adalah...",
    pilihan: ["src", "link", "href", "url", "target"],
    jawaban: 2
  },
  {
    soal: "Tag HTML yang digunakan untuk membuat tabel data di halaman web adalah...",
    pilihan: ["<tab>", "<tbl>", "<table>", "<tr>", "<grid>"],
    jawaban: 2
  },
  {
    soal: "Atribut yang digunakan pada tag <img> untuk menampilkan teks alternatif ketika gambar gagal dimuat adalah...",
    pilihan: ["title", "caption", "name", "alt", "desc"],
    jawaban: 3
  },
  {
    soal: "Tag HTML yang digunakan untuk menampilkan gambar di halaman web adalah...",
    pilihan: ["<picture>", "<img>", "<image>", "<src>", "<photo>"],
    jawaban: 1
  },
  {
    soal: "Properti CSS yang digunakan untuk mengubah warna teks adalah...",
    pilihan: ["text-color", "font-color", "color", "foreground", "text-style"],
    jawaban: 2
  },
  {
    soal: "Selector CSS yang digunakan untuk memilih elemen berdasarkan ID adalah...",
    pilihan: [".namaID", "#namaID", "*namaID", "@namaID", "!namaID"],
    jawaban: 1
  },
  {
    soal: "Properti CSS yang mengatur jarak di dalam elemen (antara konten dan border) disebut...",
    pilihan: ["margin", "spacing", "border-space", "padding", "gap"],
    jawaban: 3
  },
  {
    soal: "Nilai properti CSS 'display' yang membuat elemen menjadi kotak fleksibel adalah...",
    pilihan: ["block", "inline", "flex", "grid", "box"],
    jawaban: 2
  },
  {
    soal: "Cara penulisan CSS yang ditempatkan langsung di dalam tag HTML menggunakan atribut apa?",
    pilihan: ["class", "css", "style", "design", "format"],
    jawaban: 2
  },
  {
    soal: "Keyword JavaScript yang digunakan untuk mendeklarasikan variabel yang nilainya tidak bisa diubah adalah...",
    pilihan: ["var", "let", "const", "fixed", "static"],
    jawaban: 2
  },
  {
    soal: "Fungsi JavaScript yang digunakan untuk menampilkan kotak dialog pesan kepada pengguna adalah...",
    pilihan: ["print()", "console.log()", "document.write()", "alert()", "show()"],
    jawaban: 3
  },
  {
    soal: "Metode JavaScript yang digunakan untuk mengambil elemen HTML berdasarkan ID-nya adalah...",
    pilihan: [
      "document.getElement()",
      "document.getElementById()",
      "document.queryId()",
      "document.findById()",
      "document.selectId()"
    ],
    jawaban: 1
  },
  {
    soal: "Perulangan (loop) dalam JavaScript yang akan selalu dieksekusi minimal satu kali adalah...",
    pilihan: ["for", "while", "do...while", "foreach", "loop"],
    jawaban: 2
  },
  {
    soal: "Tipe data JavaScript yang digunakan untuk menyimpan kumpulan nilai dalam satu variabel adalah...",
    pilihan: ["Object", "String", "Array", "Number", "Boolean"],
    jawaban: 2
  },
  {
    soal: "Simbol yang digunakan untuk mendeklarasikan variabel dalam bahasa PHP adalah...",
    pilihan: ["@", "#", "$", "&", "%"],
    jawaban: 2
  },
  {
    soal: "Fungsi PHP yang digunakan untuk menghitung jumlah elemen dalam sebuah array adalah...",
    pilihan: ["sizeof()", "length()", "count()", "total()", "num()"],
    jawaban: 2
  },
  {
    soal: "Fungsi PHP yang digunakan untuk menampilkan output ke halaman web adalah...",
    pilihan: ["print_r()", "display()", "write()", "echo", "output()"],
    jawaban: 3
  },
  {
    soal: "Metode pengiriman data form HTML yang tidak menampilkan data di URL adalah...",
    pilihan: ["GET", "PUT", "POST", "SEND", "SUBMIT"],
    jawaban: 2
  },
  {
    soal: "Ekstensi file yang digunakan untuk menyimpan kode PHP adalah...",
    pilihan: [".html", ".js", ".py", ".php", ".css"],
    jawaban: 3
  }
];

/* ============================================
   KONSTANTA & STATE
   ============================================ */
const WAKTU_TOTAL   = 30 * 60; // 30 menit dalam detik
const STORAGE_KEY   = 'minecraft_quiz_riwayat';
const OPSI_HURUF    = ['A', 'B', 'C', 'D', 'E'];

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
  snapshotJawaban  : null  // disimpan setelah selesai ulangan, dipakai untuk review langsung
};

/* ============================================
   AUDIO ENGINE
   ============================================ */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(freq, duration, type = 'square', volume = 0.3) {
  if (!state.audioOn || !audioCtx) return;
  try {
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function soundClick()    { initAudio(); playTone(440, 0.08, 'square', 0.2); setTimeout(() => playTone(660, 0.06, 'square', 0.15), 40); }
function soundNextSoal() { initAudio(); playTone(523, 0.1, 'square', 0.2);  setTimeout(() => playTone(659, 0.1, 'square', 0.18), 80); }
function soundPilih()    { initAudio(); playTone(659, 0.12, 'square', 0.25); }
function soundWin()      { initAudio(); [523, 659, 784, 1047, 784, 659, 784, 1047].forEach((n, i) => setTimeout(() => playTone(n, 0.18, 'square', 0.25), i * 110)); }
function soundError()    { initAudio(); playTone(220, 0.15, 'sawtooth', 0.2); setTimeout(() => playTone(180, 0.2, 'sawtooth', 0.15), 100); }

// Background music
let bgMusicInterval = null;
const bgNotes       = [262, 330, 392, 523, 392, 330, 262, 196, 247, 330, 392, 294];
let bgNoteIndex     = 0;

function startBgMusic() {
  if (bgMusicInterval) return;
  bgMusicInterval = setInterval(() => {
    if (state.audioOn && audioCtx) {
      playTone(bgNotes[bgNoteIndex % bgNotes.length], 0.35, 'square', 0.08);
      bgNoteIndex++;
    }
  }, 380);
}

function stopBgMusic() {
  if (bgMusicInterval) {
    clearInterval(bgMusicInterval);
    bgMusicInterval = null;
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
    showToast('Suara dinyalakan 🔊');
  } else {
    btn.textContent = '🔇 SUARA: OFF';
    stopBgMusic();
    showToast('Suara dimatikan 🔇');
  }
}

/* ============================================
   BACKGROUND BLOCKS (Dekorasi)
   ============================================ */
function generateBgBlocks() {
  const container = document.getElementById('bgBlocks');

  // Bintang piksel
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'pixel-star';
    star.style.cssText = `
      top:${Math.random() * 55}%;
      left:${Math.random() * 100}%;
      animation-delay:${Math.random() * 3}s;
      animation-duration:${1.5 + Math.random() * 2}s;
      opacity:${0.2 + Math.random() * 0.8};
    `;
    container.appendChild(star);
  }

  // Blok melayang
  const blockTypes = ['grass', 'stone', 'wood', 'diamond'];
  for (let i = 0; i < 14; i++) {
    const block = document.createElement('div');
    const type  = blockTypes[Math.floor(Math.random() * blockTypes.length)];
    block.className = `float-block ${type}`;
    const dur   = 12 + Math.random() * 18;
    const delay = Math.random() * -20;
    const left  = Math.random() * 95;
    const size  = 24 + Math.floor(Math.random() * 3) * 8;
    block.style.cssText = `
      left:${left}%;
      animation-duration:${dur}s;
      animation-delay:${delay}s;
      width:${size}px;
      height:${size}px;
    `;
    container.appendChild(block);
  }
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
function showToast(pesan, durasi = 2000) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className   = 'toast';
  toast.textContent = pesan;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity    = '0';
    toast.style.transition = 'opacity 0.3s';
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
    showToast('⚠️ Nama tidak boleh kosong!');
    document.getElementById('inputNama').focus();
    return;
  }
  if (!kelas) {
    soundError();
    showToast('⚠️ Kelas tidak boleh kosong!');
    document.getElementById('inputKelas').focus();
    return;
  }

  // Reset state
  state.nama          = nama;
  state.kelas         = kelas;
  state.soalIndex     = 0;
  state.jawaban       = new Array(dataSoal.length).fill(null);
  state.timer         = WAKTU_TOTAL;
  state.waktuTerpakai = 0;
  state.startTime     = Date.now();

  document.getElementById('quizNama').textContent  = `👤 ${nama}`;
  document.getElementById('quizKelas').textContent = `🏫 ${kelas}`;

  renderNavNomor();
  startTimer();
  startBgMusic();
  tampilkanSoal(0);
  showPage('pageQuiz');
  showToast('🎮 Ulangan dimulai! Semangat!');
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

    if (state.timer === 5 * 60) { showToast('⚠️ Sisa waktu 5 menit!', 3000); soundError(); }
    if (state.timer === 60)     { showToast('🚨 Sisa waktu 1 menit!', 3000); soundError(); }
    if (state.timer <= 0) {
      state.timer = 0;
      updateTimerDisplay();
      clearInterval(state.timerInterval);
      showToast('⏰ Waktu habis!', 3000);
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

  if (state.timer <= 60)       el.style.color = '#e74c3c';
  else if (state.timer <= 300) el.style.color = '#f0c030';
  else                         el.style.color = 'var(--mc-yellow)';
}

function formatWaktu(detik) {
  return `${Math.floor(detik / 60)}m ${detik % 60}s`;
}

/* ============================================
   NAVIGASI NOMOR SOAL (2 kolom)
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
    btn.className    = 'nav-btn';
    btn.textContent  = i + 1;
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
    if (i === state.soalIndex)   btn.classList.add('active');
    if (state.jawaban[i] !== null) btn.classList.add('answered');
  });
}

/* ============================================
   TAMPILKAN SOAL
   ============================================ */
function tampilkanSoal(index) {
  const soal = dataSoal[index];
  document.getElementById('soalNumber').textContent = `Soal ${index + 1} / ${dataSoal.length}`;
  document.getElementById('soalText').innerHTML     = escapeHTML(soal.soal);

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
    showToast('✅ Semua soal sudah dijawab! Tekan Selesai.');
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
      showToast(`⚠️ Masih ada ${belumDijawab} soal belum dijawab!`);
      goToSoal(state.jawaban.findIndex(j => j === null));
      return;
    }
    soundClick();
  }

  stopTimer();
  stopBgMusic();

  // Hitung skor
  let benar = 0;
  dataSoal.forEach((soal, i) => {
    if (state.jawaban[i] === soal.jawaban) benar++;
  });

  const salah   = dataSoal.length - benar;
  const nilai   = benar * 5;
  const waktuStr = formatWaktu(state.waktuTerpakai);

  // Simpan snapshot jawaban ke state agar review halaman hasil bisa pakai langsung
  state.snapshotJawaban = [...state.jawaban];

  // Simpan ke riwayat localStorage
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
  setTimeout(() => buatFireworks(), 300);
}

function tampilkanHasil(benar, salah, nilai, waktu) {
  document.getElementById('resultNama').textContent  = `👤 ${state.nama}`;
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

  // Grade
  const gradeEl = document.getElementById('nilaiGrade');
  let gradeClass, gradeLabel;
  if      (nilai >= 90) { gradeClass = 'grade-A'; gradeLabel = 'Grade A — ⭐ LUAR BIASA!'; }
  else if (nilai >= 75) { gradeClass = 'grade-B'; gradeLabel = 'Grade B — 👍 BAGUS!'; }
  else if (nilai >= 60) { gradeClass = 'grade-C'; gradeLabel = 'Grade C — 😊 CUKUP'; }
  else if (nilai >= 40) { gradeClass = 'grade-D'; gradeLabel = 'Grade D — 😅 PERLU BELAJAR LAGI'; }
  else                  { gradeClass = 'grade-E'; gradeLabel = 'Grade E — 😢 TERUS SEMANGAT!'; }

  gradeEl.textContent = gradeLabel;
  gradeEl.className   = `nilai-grade ${gradeClass}`;
}

function buatFireworks() {
  const container = document.getElementById('fireworks');
  const colors    = ['#5aac44', '#f0c030', '#e74c3c', '#3498db', '#e67e22', '#9b59b6'];

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const px    = document.createElement('div');
      px.className = 'firework-pixel';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const tx    = (Math.random() - 0.5) * 200;
      const ty    = (Math.random() - 0.5) * 200;
      px.style.cssText = `
        background:${color};
        left:${20 + Math.random() * 60}%;
        top:${20 + Math.random() * 60}%;
        --tx:${tx}px;
        --ty:${ty}px;
        box-shadow:0 0 6px ${color};
      `;
      container.appendChild(px);
      setTimeout(() => px.remove(), 1500);
    }, i * 80);
  }
}

/* ============================================
   REVIEW DARI HALAMAN HASIL (pakai state langsung)
   ============================================ */
function lihatReviewTerakhir() {
  soundClick();
  if (!state.snapshotJawaban) {
    showToast('⚠️ Data jawaban tidak ditemukan.');
    return;
  }
  // Review dari halaman hasil: tampilkan kunci jawaban (showKunci = true)
  tampilkanReviewDariData({
    nama           : state.nama,
    kelas          : state.kelas,
    nilai          : state.snapshotJawaban.filter((j, i) => j === dataSoal[i].jawaban).length * 5,
    benar          : state.snapshotJawaban.filter((j, i) => j === dataSoal[i].jawaban).length,
    salah          : state.snapshotJawaban.filter((j, i) => j !== dataSoal[i].jawaban).length,
    jawabanPeserta : state.snapshotJawaban
  }, true); // <-- showKunci = true
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

  document.getElementById('quizNama').textContent  = `👤 ${state.nama}`;
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
  riwayat.unshift(data); // tambahkan di awal (terbaru di atas)
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
    list.innerHTML        = '<p class="empty-msg">Belum ada data riwayat.</p>';
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
        <div class="history-nama">👤 ${escapeHTML(item.nama)}</div>
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
        <button class="mc-btn btn-small btn-blue" onclick="lihatReview(${idx})">🔍 Review</button>
        <button class="mc-btn btn-small btn-red"  onclick="hapusSatu(${idx})">🗑</button>
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
  showToast('🗑️ Data dihapus');
}

function hapusSemua() {
  soundClick();
  if (confirm('Hapus semua data riwayat?')) {
    localStorage.removeItem(STORAGE_KEY);
    muatRiwayat();
    showToast('🗑️ Semua data dihapus');
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
  // Saat dari riwayat HOME, clear snapshot agar tombol kembali ke HOME
  state.snapshotJawaban = null;
  // Review dari riwayat: TIDAK tampilkan kunci jawaban (showKunci = false)
  tampilkanReviewDariData(item, false);
}

/**
 * Inti render review — menerima objek data langsung.
 * 
 * @param {object} item        - Data riwayat/hasil
 * @param {boolean} showKunci  - true: tampilkan kunci jawaban (dari halaman hasil)
 *                               false: jangan tampilkan kunci (dari riwayat home)
 *
 * MODE showKunci=true (dari halaman hasil):
 *   - Jawaban benar → hijau + badge "Jawaban kamu (Benar)"
 *   - Jawaban salah user → merah + badge "Jawaban kamu (Salah)"
 *   - Kunci jawaban → hijau + badge "Kunci Jawaban" (muncul meski beda dari jawaban user)
 *
 * MODE showKunci=false (dari riwayat):
 *   - Jawaban benar → hijau + badge "✓ BENAR!"
 *   - Jawaban salah user → merah + badge "✗ SALAH!" (kunci TIDAK ditampilkan)
 */
function tampilkanReviewDariData(item, showKunci = false) {
  if (!item) { showToast('⚠️ Data tidak ditemukan.'); return; }

  // Update label tombol kembali sesuai asal halaman
  const labelKembali = state.snapshotJawaban ? '◀ KEMBALI KE HASIL' : '🏠 KEMBALI KE HOME';
  const btnTop = document.getElementById('btnKembaliReviewTop');
  const btnBot = document.getElementById('btnKembaliReviewBot');
  if (btnTop) btnTop.textContent = labelKembali;
  if (btnBot) btnBot.textContent = labelKembali;

  // Fallback jika data lama tidak punya jawabanPeserta
  const jawabanData = item.jawabanPeserta && Array.isArray(item.jawabanPeserta)
    ? item.jawabanPeserta
    : new Array(dataSoal.length).fill(null);

  const dataLama = !item.jawabanPeserta || !Array.isArray(item.jawabanPeserta);

  // Hitung ulang benar/salah dari jawabanData (akurat)
  let benarHitung = 0;
  jawabanData.forEach((j, i) => { if (j === dataSoal[i].jawaban) benarHitung++; });
  const salahHitung = dataSoal.length - benarHitung;

  // Isi header
  document.getElementById('reviewNama').textContent  = `👤 ${item.nama}`;
  document.getElementById('reviewKelas').textContent = `🏫 ${item.kelas}`;
  document.getElementById('reviewNilai').textContent = dataLama ? item.nilai : (benarHitung * 5);
  document.getElementById('reviewBenar').textContent = dataLama ? item.benar : benarHitung;
  document.getElementById('reviewSalah').textContent = dataLama ? item.salah : salahHitung;

  const container = document.getElementById('reviewSoalList');
  container.innerHTML = '';

  // Banner data lama (hanya jika data memang lama / tidak punya jawabanPeserta)
  if (dataLama) {
    const banner = document.createElement('div');
    banner.className = 'review-banner-lama';
    banner.innerHTML = showKunci
      ? '⚠️ Data lama — jawaban peserta tidak tercatat. Hanya kunci jawaban yang ditampilkan.'
      : '⚠️ Data lama — jawaban peserta tidak tercatat. Kerjakan ulang untuk melihat hasil lengkap.';
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

      if (dataLama) {
        // ── DATA LAMA: jika showKunci=true (dari halaman hasil), tampilkan kunci
        //              jika showKunci=false (dari riwayat), tidak tampilkan apapun
        if (showKunci && j === jb) {
          pClass += ' pilihan-benar';
          badge   = '<span class="pilihan-badge badge-benar">✓ Kunci jawaban</span>';
        }

      } else if (showKunci) {
        // ── MODE HASIL (showKunci=true): tampilkan jawaban user + kunci jawaban ──
        if (j === jp && j === jb) {
          // Jawaban user benar
          pClass += ' pilihan-benar';
          badge   = '<span class="pilihan-badge badge-benar">✓ Jawaban kamu (Benar)</span>';
        } else if (j === jp && j !== jb) {
          // Jawaban user salah
          pClass += ' pilihan-salah';
          badge   = '<span class="pilihan-badge badge-salah">✗ Jawaban kamu (Salah)</span>';
        } else if (j === jb && j !== jp) {
          // Kunci jawaban (beda dari jawaban user)
          pClass += ' pilihan-benar';
          badge   = '<span class="pilihan-badge badge-benar">✓ Kunci Jawaban</span>';
        }

      } else {
        // ── MODE RIWAYAT (showKunci=false): hanya highlight jawaban user, tanpa kunci ──
        if (!tidakDijawab) {
          if (j === jp && j === jb) {
            // Jawaban user benar
            pClass += ' pilihan-benar';
            badge   = '<span class="pilihan-badge badge-benar">✓ BENAR!</span>';
          } else if (j === jp && j !== jb) {
            // Jawaban user salah — TIDAK tampilkan kunci
            pClass += ' pilihan-salah';
            badge   = '<span class="pilihan-badge badge-salah">✗ SALAH!</span>';
          }
          // Pilihan lain (termasuk kunci) → tidak diberi warna apapun
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
      <div class="review-soal-text">${escapeHTML(soal.soal)}</div>
      <div class="review-pilihan-list">${pilihanHTML}</div>
    `;
    container.appendChild(soalDiv);
  });

  showPage('pageReview');
}

function kembaliDariReview() {
  soundClick();
  // Jika ada snapshotJawaban berarti review dibuka dari halaman hasil
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
  generateBgBlocks();
  muatRiwayat();

  // Inisialisasi audio saat pertama kali klik
  document.body.addEventListener('click', () => initAudio(), { once: true });

  // Keyboard shortcut form
  document.getElementById('inputNama').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('inputKelas').focus();
  });
  document.getElementById('inputKelas').addEventListener('keydown', e => {
    if (e.key === 'Enter') mulaiUlangan();
  });
});