/* ============================================
   MULTI-TEMA QUIZ - script.js
   ============================================ */

/* ============================================
   DATA SOAL PER TEMA
   ============================================ */
const semuaSoal = {

  /* ──────────── MINECRAFT ──────────── */
  minecraft: [
    {
      soal: "Manakah dari berikut ini yang BUKAN merupakan struktur dasar dokumen HTML yang wajib ada?",
      pilihan: ["<!DOCTYPE html>","<html lang>","<head>","<content>","<body>"],
      jawaban: 3
    },
    {
      soal: "Saat browser membaca HTML, ia membangun representasi dokumen di memori yang disebut...",
      pilihan: ["BOM (Browser Object Model)","CSSOM","DOM (Document Object Model)","XML Schema","JSON Tree"],
      jawaban: 2
    },
    {
      soal: "Perbedaan utama antara atribut 'href' dan 'src' pada HTML adalah...",
      pilihan: [
        "href untuk gambar, src untuk link",
        "href membuat referensi ke resource eksternal, src menyematkan resource langsung",
        "keduanya sama persis fungsinya",
        "href hanya untuk CSS, src hanya untuk JS",
        "href bisa dipakai di semua tag, src tidak bisa"
      ],
      jawaban: 1
    },
    {
      soal: "Manakah cara penulisan tag <img> yang paling lengkap dan sesuai standar aksesibilitas?",
      pilihan: [
        "<img src='foto.jpg'>",
        "<img src='foto.jpg' alt='Deskripsi foto' width='300' height='200'>",
        "<image src='foto.jpg'>",
        "<img href='foto.jpg' alt='foto'>",
        "<img src='foto.jpg' title='foto'>"
      ],
      jawaban: 1
    },
    {
      soal: "Pada tabel HTML, tag mana yang digunakan untuk membuat sel header (judul kolom)?",
      pilihan: ["<td>","<th>","<tr>","<thead>","<caption>"],
      jawaban: 1
    },
    {
      soal: "Urutan spesifisitas CSS dari terendah ke tertinggi yang BENAR adalah...",
      pilihan: [
        "ID > class > elemen",
        "!important > inline > ID > class > elemen",
        "elemen > class > ID > inline > !important",
        "class > ID > elemen > inline",
        "elemen > ID > class > inline > !important"
      ],
      jawaban: 2
    },
    {
      soal: "Properti CSS 'box-model' terdiri dari (dari dalam ke luar)...",
      pilihan: [
        "content → margin → padding → border",
        "content → border → padding → margin",
        "content → padding → border → margin",
        "padding → content → border → margin",
        "margin → border → content → padding"
      ],
      jawaban: 2
    },
    {
      soal: "Properti CSS yang digunakan untuk membuat elemen tersembunyi NAMUN tetap memakan ruang di halaman adalah...",
      pilihan: ["display: none","opacity: 0","visibility: hidden","z-index: -1","overflow: hidden"],
      jawaban: 2
    },
    {
      soal: "Pada Flexbox CSS, property mana yang digunakan untuk mengatur penyelarasan item secara sumbu silang (cross axis)?",
      pilihan: ["justify-content","flex-direction","align-items","flex-wrap","align-self vs justify-self"],
      jawaban: 2
    },
    {
      soal: "CSS pseudo-class ':nth-child(2n+1)' akan memilih elemen ke berapa saja?",
      pilihan: [
        "Elemen genap (2, 4, 6, ...)",
        "Elemen ganjil (1, 3, 5, ...)",
        "Hanya elemen ke-2",
        "Elemen ke-1 dan ke-2",
        "Semua elemen"
      ],
      jawaban: 1
    },
    {
      soal: "Perbedaan antara 'let', 'var', dan 'const' dalam JavaScript yang paling tepat adalah...",
      pilihan: [
        "Ketiganya sama, hanya beda penulisan",
        "var bersifat function-scoped, let dan const bersifat block-scoped; const tidak dapat di-reassign",
        "let tidak bisa digunakan di dalam fungsi",
        "const tidak bisa menyimpan array atau object",
        "var dan let sama, hanya const yang berbeda"
      ],
      jawaban: 1
    },
    {
      soal: "Apa output dari kode berikut: console.log(typeof null)?",
      pilihan: ["'null'","'undefined'","'object'","'boolean'","Error"],
      jawaban: 2
    },
    {
      soal: "Method JavaScript yang digunakan untuk mengubah semua elemen array menjadi nilai baru dan mengembalikan array baru adalah...",
      pilihan: ["forEach()","filter()","reduce()","map()","find()"],
      jawaban: 3
    },
    {
      soal: "Pada JavaScript, apa perbedaan antara '==' dan '==='?",
      pilihan: [
        "Keduanya sama persis",
        "'==' membandingkan nilai DAN tipe data, '===' hanya nilai",
        "'==' membandingkan nilai saja (coercion), '===' membandingkan nilai DAN tipe data",
        "'===' hanya untuk string, '==' untuk number",
        "'===' tidak bisa digunakan di JavaScript"
      ],
      jawaban: 2
    },
    {
      soal: "Manakah cara yang BENAR untuk mengambil data dari API menggunakan JavaScript modern (async)?",
      pilihan: [
        "XMLHttpRequest('https://api.example.com')",
        "async function getData() { const res = await fetch('url'); const data = await res.json(); }",
        "sync fetch('https://api.example.com')",
        "document.getAPI('https://api.example.com')",
        "window.request('url').then(data => data)"
      ],
      jawaban: 1
    },
    {
      soal: "Dalam PHP, perbedaan antara echo dan print adalah...",
      pilihan: [
        "echo bisa menerima multiple argument dan tidak memiliki return value; print hanya satu argument dan return 1",
        "print lebih cepat dari echo",
        "echo hanya untuk string, print untuk semua tipe data",
        "Keduanya persis sama",
        "echo adalah fungsi, print adalah statement"
      ],
      jawaban: 0
    },
    {
      soal: "Fungsi PHP yang digunakan untuk memeriksa apakah sebuah variabel sudah di-set dan tidak bernilai NULL adalah...",
      pilihan: ["is_null()","empty()","isset()","defined()","exists()"],
      jawaban: 2
    },
    {
      soal: "Dalam PHP, perbedaan antara include dan require adalah...",
      pilihan: [
        "Keduanya sama persis",
        "require akan menyebabkan fatal error jika file tidak ditemukan; include hanya warning",
        "include lebih cepat dari require",
        "require hanya untuk file PHP, include untuk semua file",
        "include bisa digunakan di dalam kondisi, require tidak"
      ],
      jawaban: 1
    },
    {
      soal: "Pada metode POST di HTML form, data dikirim melalui...",
      pilihan: [
        "URL sebagai query string (?key=value)",
        "Header HTTP",
        "Body dari HTTP request",
        "Cookie browser",
        "Session storage"
      ],
      jawaban: 2
    },
    {
      soal: "Manakah query SQL yang benar untuk mengambil nama dan nilai siswa yang nilainya di atas 75, diurutkan dari tertinggi?",
      pilihan: [
        "SELECT nama, nilai FROM siswa WHERE nilai > 75 ORDER BY nilai DESC",
        "GET nama, nilai FROM siswa WHERE nilai > 75 SORT BY nilai",
        "SELECT * FROM siswa FILTER nilai > 75 ORDER nilai",
        "FETCH nama, nilai FROM siswa HAVING nilai > 75",
        "SELECT nama, nilai FROM siswa LIMIT 75 ORDER BY nilai"
      ],
      jawaban: 0
    }
  ],

  /* ──────────── LEGO ──────────── */
  lego: [
    {
      soal: "LEGO pertama kali didirikan pada tahun berapa dan oleh siapa?",
      pilihan: [
        "1949, oleh Ole Kirk Christiansen",
        "1932, oleh Ole Kirk Kristiansen",
        "1958, oleh Godtfred Kirk Christiansen",
        "1940, oleh Ole Kirk Christophersen",
        "1965, oleh Kjeld Kirk Kristiansen"
      ],
      jawaban: 1
    },
    {
      soal: "Kata 'LEGO' berasal dari dua kata Denmark. Apa artinya secara harfiah?",
      pilihan: [
        "Blok Kreatif",
        "Mainan Anak",
        "'leg godt' yang berarti 'bermain dengan baik'",
        "Bangun Bersama",
        "Susun Rapi"
      ],
      jawaban: 2
    },
    {
      soal: "LEGOLAND pertama di dunia dibuka pada tahun 1968. Di negara mana taman hiburan pertama itu berada?",
      pilihan: ["Jerman","Amerika Serikat","Inggris","Denmark","Belanda"],
      jawaban: 3
    },
    {
      soal: "Sistem desain LEGO yang revolusioner menggunakan prinsip 'stud-and-tube'. Apa yang dimaksud dengan sistem ini?",
      pilihan: [
        "Balok LEGO menggunakan magnet untuk menempel",
        "Tonjolan (stud) di atas balok masuk ke dalam tabung (tube) di bawah balok lain untuk menciptakan koneksi yang kuat dan presisi",
        "LEGO dihubungkan menggunakan lem khusus",
        "Balok LEGO dikaitkan dengan klip plastik",
        "LEGO menggunakan sistem rel untuk bersambung"
      ],
      jawaban: 1
    },
    {
      soal: "Set LEGO manakah yang terkenal sebagai salah satu set terbesar yang pernah diproduksi dengan lebih dari 9.000 pieces?",
      pilihan: [
        "LEGO Colosseum",
        "LEGO Titanic",
        "LEGO Millennium Falcon",
        "LEGO World Map",
        "LEGO Eiffel Tower"
      ],
      jawaban: 1
    },
    {
      soal: "Seri LEGO Technic diperkenalkan pertama kali pada tahun 1977. Apa yang membedakan Technic dari seri LEGO biasa?",
      pilihan: [
        "Menggunakan bahan material yang berbeda",
        "Lebih murah harganya",
        "Menggunakan pins, axles, dan gears untuk membuat model dengan fungsi mekanik yang lebih kompleks",
        "Hanya tersedia dalam satu warna",
        "Dirancang khusus untuk anak di bawah 3 tahun"
      ],
      jawaban: 2
    },
    {
      soal: "Tema LEGO Mindstorms/Robot Inventor mengajarkan apa kepada pengguna?",
      pilihan: [
        "Seni melukis dan mewarnai",
        "Pemrograman dan robotika",
        "Memasak makanan",
        "Bahasa asing",
        "Fotografi digital"
      ],
      jawaban: 1
    },
    {
      soal: "LEGO Architecture adalah lini produk yang mereplikasi bangunan ikonik dunia. Manakah yang BUKAN termasuk koleksi LEGO Architecture?",
      pilihan: [
        "Menara Eiffel",
        "Empire State Building",
        "Colosseum Roma",
        "Death Star dari Star Wars",
        "Burj Khalifa"
      ],
      jawaban: 3
    },
    {
      soal: "Dalam seri LEGO Ninjago, berapa banyak 'elemental master' utama yang menjadi anggota inti tim ninja?",
      pilihan: ["4 ninja","5 ninja","6 ninja","7 ninja","8 ninja"],
      jawaban: 2
    },
    {
      soal: "LEGO DUPLO dirancang untuk kelompok usia tertentu. Apa yang membuat DUPLO berbeda secara fisik dari LEGO biasa?",
      pilihan: [
        "Terbuat dari bahan yang lebih lunak",
        "Balok DUPLO berukuran 2x lebih besar dari semua dimensi dibanding LEGO standar, sehingga aman untuk balita",
        "DUPLO tidak memiliki tonjolan (stud)",
        "DUPLO hanya tersedia dalam satu bentuk",
        "DUPLO tidak kompatibel sama sekali dengan LEGO biasa"
      ],
      jawaban: 1
    },
    {
      soal: "Kolaborasi LEGO dengan franchise mana yang pertama kali menghadirkan tema berlisensi resmi ke dunia LEGO pada tahun 1999?",
      pilihan: [
        "Harry Potter",
        "Batman",
        "Star Wars",
        "Indiana Jones",
        "Spider-Man"
      ],
      jawaban: 2
    },
    {
      soal: "Warna apa yang TIDAK ada dalam palet warna standar awal LEGO (era 1958-1990an)?",
      pilihan: [
        "Merah",
        "Putih",
        "Biru",
        "Kuning",
        "Ungu muda (lavender)"
      ],
      jawaban: 4
    },
    {
      soal: "LEGO Ideas adalah platform di mana fans bisa mengajukan desain set mereka sendiri. Berapa banyak dukungan (votes) yang diperlukan agar sebuah project bisa dipertimbangkan oleh LEGO?",
      pilihan: ["1.000","5.000","10.000","50.000","100.000"],
      jawaban: 2
    },
    {
      soal: "Minifigure LEGO pertama kali diperkenalkan pada tahun 1978. Apa ciri fisik unik dari wajah minifigure klasik?",
      pilihan: [
        "Memiliki ekspresi wajah yang bisa diubah",
        "Wajah kuning dengan senyum sederhana dan mata titik hitam",
        "Terbuat dari karet yang fleksibel",
        "Memiliki rambut yang tumbuh",
        "Ukurannya sama dengan DUPLO"
      ],
      jawaban: 1
    },
    {
      soal: "Dalam tema LEGO City, departemen layanan publik apa saja yang biasanya direpresentasikan? (pilih yang PALING lengkap)",
      pilihan: [
        "Hanya kepolisian",
        "Kepolisian dan pemadam kebakaran saja",
        "Kepolisian, pemadam kebakaran, dan rumah sakit saja",
        "Kepolisian, pemadam kebakaran, rumah sakit, penjaga pantai, bandara, dan stasiun ruang angkasa",
        "Hanya layanan militer"
      ],
      jawaban: 3
    },
    {
      soal: "Seri LEGO Bionicle yang populer di awal 2000-an bercerita tentang apa?",
      pilihan: [
        "Robot-robot yang bertarung di luar angkasa",
        "Pahlawan biomekanikal yang melindungi pulau Mata Nui dari Makuta dan kekuatannya",
        "Dinosaurus yang hidup di zaman modern",
        "Nelayan yang menyelamatkan laut dari polusi",
        "Penyihir yang mencari benda-benda ajaib"
      ],
      jawaban: 1
    },
    {
      soal: "LEGO mengklaim produk mereka sangat tahan lama. Seberapa besar gaya tekan yang diperlukan untuk menghancurkan satu balok LEGO 2x2 standar?",
      pilihan: [
        "Sekitar 100 kg",
        "Sekitar 200 kg",
        "Sekitar 350 kg",
        "Sekitar 432 kg",
        "Sekitar 600 kg"
      ],
      jawaban: 3
    },
    {
      soal: "Manakah dari pernyataan berikut tentang kompatibilitas LEGO yang BENAR?",
      pilihan: [
        "LEGO dari tahun 1958 tidak kompatibel dengan LEGO modern",
        "Sistem LEGO menggunakan standar yang sama sejak 1958, sehingga balok lama dan baru tetap kompatibel",
        "Setiap seri LEGO memiliki sistem yang sepenuhnya berbeda",
        "LEGO Technic tidak kompatibel dengan LEGO biasa sama sekali",
        "Hanya LEGO dari merek asli yang kompatibel satu sama lain"
      ],
      jawaban: 1
    },
    {
      soal: "Pada tahun berapa LEGO mengumumkan target untuk membuat semua produk dari material yang sustainable (ramah lingkungan) menggantikan plastik berbasis minyak bumi?",
      pilihan: [
            "2020","2025","2030","2035","2040"
      ],
      jawaban: 2
    },
    {
      soal: "Film 'The LEGO Movie' (2014) menampilkan karakter protagonis bernama Emmet. Apa yang membuatnya 'spesial' menurut ramalan dalam film tersebut?",
      pilihan: [
        "Dia adalah master builder terhebat",
        "Dia memiliki kekuatan super",
        "Prophecy menyebutnya sebagai 'The Special' yang menemukan Piece of Resistance untuk menghentikan Kragle",
        "Dia adalah satu-satunya minifigure yang bisa berbicara",
        "Dia mampu mengubah warna balok LEGO"
      ],
      jawaban: 2
    }
  ],

  /* ──────────── TOY STORY ──────────── */
  toystory: [
    {
      soal: "Toy Story (1995) adalah film animasi 3D CGI pertama yang diproduksi sepenuhnya oleh komputer. Studio mana yang memproduksinya?",
      pilihan: [
        "DreamWorks Animation",
        "Blue Sky Studios",
        "Pixar Animation Studios bekerjasama dengan Walt Disney Pictures",
        "Sony Pictures Animation",
        "Warner Bros. Animation"
      ],
      jawaban: 2
    },
    {
      soal: "Woody adalah mainan favorit Andy. Apa pangkat/identitas karakter Woody dalam dunia permainan Andy?",
      pilihan: [
        "Sheriff koboi dari Wild West",
        "Kapten bajak laut",
        "Astronot luar angkasa",
        "Prajurit perang",
        "Detektif polisi"
      ],
      jawaban: 0
    },
    {
      soal: "Buzz Lightyear adalah astronot mainan yang awalnya tidak percaya dirinya adalah mainan. Apa misi utama yang selalu dia sebutkan?",
      pilihan: [
        "Menjaga galaksi dari ancaman Zurg",
        "Melindungi Andy dari bahaya",
        "Menjadi teman terbaik Woody",
        "Mencari planet baru untuk dihuni",
        "Menghancurkan Evil Emperor Zurg dan melindungi galaksi"
      ],
      jawaban: 4
    },
    {
      soal: "Dalam Toy Story, tokoh antagonis utama adalah Sid Phillips. Apa yang membuat Sid menjadi ancaman bagi mainan-mainan?",
      pilihan: [
        "Dia mencuri mainan dari toko",
        "Dia adalah kolektor mainan yang tidak pernah memainkannya",
        "Dia menyiksa dan menghancurkan mainan-mainannya sendiri serta mainan adiknya",
        "Dia menjual mainan di pasar gelap",
        "Dia adalah agen perusahaan saingan Al's Toy Barn"
      ],
      jawaban: 2
    },
    {
      soal: "Siapakah Hamm dalam cerita Toy Story?",
      pilihan: [
        "Dinosaurus mainan berwarna hijau",
        "Celengan babi bermulut sarkastis yang cerdas",
        "Kuda kayu berwarna coklat",
        "Robot mainan dengan lampu berkelip",
        "Anjing berbulu yang bisa melompat"
      ],
      jawaban: 1
    },
    {
      soal: "Rex adalah dinosaurus mainan dalam koleksi Andy. Apa ironi terbesar dari karakter Rex?",
      pilihan: [
        "Dia T-Rex yang takut pada segala sesuatu dan cemas berlebihan",
        "Dia terbuat dari plastik tapi ingin menjadi nyata",
        "Dia tidak bisa bergerak meski memiliki kaki besar",
        "Dia berbicara sangat keras tapi tidak punya gigi",
        "Dia adalah dinosaurus terkecil tapi paling berani"
      ],
      jawaban: 0
    },
    {
      soal: "Dalam Toy Story 2, Woody diculik oleh seorang kolektor. Siapa nama kolektor tersebut dan apa tujuannya?",
      pilihan: [
        "Stinky Pete, ingin menghancurkan Woody",
        "Al McWhiggin, ingin menjual Woody ke museum mainan di Tokyo",
        "Lotso, ingin menjadikan Woody pemimpin di Sunnyside",
        "Emperor Zurg, ingin menggunakan Woody sebagai senjata",
        "Geri, ingin merestorasi Woody sebagai koleksi pribadi"
      ],
      jawaban: 1
    },
    {
      soal: "Karakter Jessie dalam Toy Story 2 memiliki latar belakang yang menyedihkan. Apa yang pernah terjadi padanya?",
      pilihan: [
        "Dia pernah dibuang oleh pabrik mainan karena cacat produksi",
        "Dia ditinggalkan oleh pemiliknya Emily yang tumbuh dewasa dan tidak membutuhkannya lagi",
        "Dia pernah terbakar dalam kebakaran",
        "Dia diambil paksa dari toko mainan",
        "Dia pernah tersesat dan tidak bisa pulang"
      ],
      jawaban: 1
    },
    {
      soal: "Stinky Pete (Prospector) dalam Toy Story 2 menjadi tokoh antagonis. Apa alasan dia ingin dikirim ke museum?",
      pilihan: [
        "Dia ingin terkenal di seluruh dunia",
        "Dia ingin balas dendam pada Woody",
        "Dia belum pernah dibuka dari kotak dan takut dimainkan; ingin selamanya ada di museum sebagai koleksi tak tersentuh",
        "Dia ingin bertemu dengan kolektor lain",
        "Dia ingin melarikan diri dari dunia mainan"
      ],
      jawaban: 2
    },
    {
      soal: "Dalam Toy Story 3, mainan-mainan Andy disumbangkan ke Sunnyside Daycare. Lotso adalah karakter antagonis utama. Apa sifat manipulatif yang dilakukan Lotso?",
      pilihan: [
        "Dia mencuri mainan dari anak-anak",
        "Dia berpura-pura baik sambil sebenarnya mengendalikan Sunnyside dengan sistem hierarki kejam, menempatkan mainan baru di ruang kelas yang brutal",
        "Dia memaksa mainan untuk bekerja tanpa istirahat",
        "Dia menjual mainan kepada kolektor secara diam-diam",
        "Dia menghapus memori semua mainan yang datang"
      ],
      jawaban: 1
    },
    {
      soal: "Mengapa Lotso (bearik strawberry) menjadi jahat dalam Toy Story 3?",
      pilihan: [
        "Dia selalu diperlakukan buruk sejak pertama kali dibeli",
        "Dia pernah hilang, dan saat kembali pemiliknya (Daisy) sudah memiliki Lotso baru, membuatnya merasa dikhianati dan hancur hatinya",
        "Dia diciptakan oleh pabrik yang jahat",
        "Dia selalu kalah dalam permainan dan menjadi dendam",
        "Dia dipaksa oleh Evil Emperor Zurg untuk menjadi jahat"
      ],
      jawaban: 1
    },
    {
      soal: "Di akhir Toy Story 3, kepada siapa Andy memberikan mainan-mainannya sebelum berangkat ke kuliah?",
      pilihan: [
        "Ke pusat donasi Goodwill",
        "Ke adiknya Molly",
        "Ke seorang gadis kecil bernama Bonnie Anderson",
        "Ke museum mainan",
        "Ke tetangganya Hannah"
      ],
      jawaban: 2
    },
    {
      soal: "Toy Story 4 memperkenalkan karakter baru bernama Forky. Apa yang unik dari asal-usul Forky?",
      pilihan: [
        "Dia mainan mewah yang dibeli di toko mahal",
        "Dia dibuat oleh Bonnie dari garpu plastik bekas, pipe cleaner, dan googly eyes — mainan buatan sendiri",
        "Dia adalah mainan antik dari toko barang antik",
        "Dia robot canggih yang bisa berbicara sendiri",
        "Dia hadiah ulang tahun dari teman sekolah Bonnie"
      ],
      jawaban: 1
    },
    {
      soal: "Siapakah Gabby Gabby dalam Toy Story 4 dan apa motivasinya?",
      pilihan: [
        "Boneka antik jahat yang ingin menghancurkan semua mainan",
        "Boneka cantik yang sudah lama di toko antik; ingin mengambil voice box Woody agar bisa dimiliki seorang anak",
        "Mainan milik pemilik toko yang dijaga ketat",
        "Karakter jahat yang membantu Lotso kembali",
        "Boneka yang mencari jalan pulang ke pabriknya"
      ],
      jawaban: 1
    },
    {
      soal: "Duke Caboom adalah karakter baru di Toy Story 4. Dari negara mana mainan stuntman ini berasal?",
      pilihan: ["Amerika Serikat","Prancis","Kanada","Meksiko","Brasil"],
      jawaban: 2
    },
    {
      soal: "Karakter Bo Peep kembali di Toy Story 4 dengan kepribadian yang berubah drastis. Apa perubahan utamanya dibanding Toy Story 1 & 2?",
      pilihan: [
        "Dia menjadi antagonis yang ingin menaklukkan mainan lain",
        "Dia menjadi pemimpin sekelompok mainan yang hilang (lost toy), mandiri dan tidak bergantung pada seorang anak pemilik",
        "Dia kini bisa terbang menggunakan tongkatnya",
        "Dia berubah menjadi manusia sungguhan",
        "Dia kembali menjadi mainan yang pasif dan tidak bergerak"
      ],
      jawaban: 1
    },
    {
      soal: "Lagu ikonik dari seri Toy Story yang memenangkan Academy Award adalah...",
      pilihan: [
        "\"I Will Always Love You\" oleh Whitney Houston",
        "\"You've Got a Friend in Me\" oleh Randy Newman",
        "\"Hakuna Matata\" oleh Elton John",
        "\"A Whole New World\" dari Aladdin",
        "\"Circle of Life\" dari The Lion King"
      ],
      jawaban: 1
    },
    {
      soal: "Dalam Toy Story, nomor seri di telapak kaki Woody adalah milik siapa (seperti yang ditulisi Andy)?",
      pilihan: [
        "Tertulis 'WOODY'",
        "Tertulis 'ANDY'",
        "Tertulis 'SID'",
        "Tidak ada tulisan apapun",
        "Tertulis nomor seri produksi"
      ],
      jawaban: 1
    },
    {
      soal: "Slinky Dog, slink yang berbadan spiral, adalah mainan yang mewakili apa dalam filosofi persahabatan Toy Story?",
      pilihan: [
        "Dia mewakili sifat yang selalu berubah pikiran",
        "Loyalitas dan kesetiaan — selalu siap membantu meski harus meregang jauh",
        "Kecerdasan dan strategi dalam kelompok",
        "Keberanian menghadapi bahaya sendirian",
        "Sifat cemburu terhadap mainan baru"
      ],
      jawaban: 1
    },
    {
      soal: "Apa tagline paling ikonik dari karakter Buzz Lightyear yang menjadi simbol ambisi dan keberanian?",
      pilihan: [
        "\"Reach for the sky!\"",
        "\"There's a snake in my boot!\"",
        "\"To infinity and beyond!\"",
        "\"I am not a toy, I am Space Ranger!\"",
        "\"Buzz Lightyear to the rescue!\""
      ],
      jawaban: 2
    }
  ],

  /* ──────────── MARVEL ──────────── */
  marvel: [
    {
      soal: "Marvel Comics didirikan pada tahun berapa, dan dengan nama apa perusahaan ini pertama kali dikenal?",
      pilihan: [
        "1939, sebagai Timely Comics",
        "1945, sebagai Atlas Comics",
        "1961, sebagai Marvel Comics",
        "1950, sebagai Timely Publications",
        "1930, sebagai Marvel Mystery Comics"
      ],
      jawaban: 0
    },
    {
      soal: "Serum super soldier yang mengubah Steve Rogers menjadi Captain America dikembangkan oleh siapa?",
      pilihan: [
        "Howard Stark",
        "Dr. Abraham Erskine",
        "Nick Fury",
        "Peggy Carter",
        "Dr. Zola"
      ],
      jawaban: 1
    },
    {
      soal: "Iron Man diperkenalkan pertama kali dalam komik Marvel mana pada tahun 1963?",
      pilihan: [
        "Tales of Suspense #39",
        "The Invincible Iron Man #1",
        "Avengers #1",
        "Strange Tales #100",
        "Journey into Mystery #83"
      ],
      jawaban: 0
    },
    {
      soal: "Dalam Marvel Cinematic Universe (MCU), urutan Infinity Stones dan kekuatannya manakah yang PALING benar?",
      pilihan: [
        "Space (biru) — teleportasi; Mind (kuning) — kendalikan pikiran; Reality (merah) — ubah realitas; Power (ungu) — kekuatan; Time (hijau) — kendalikan waktu; Soul (oranye) — kendalikan jiwa",
        "Space (ungu), Mind (merah), Reality (kuning), Power (biru), Time (oranye), Soul (hijau)",
        "Semua batu berwarna putih, warna ditentukan oleh penggunanya",
        "Hanya ada 5 Infinity Stone dalam MCU",
        "Power (ungu), Space (biru), Reality (merah), Mind (kuning), Time (hijau), Soul (oranye)"
      ],
      jawaban: 4
    },
    {
      soal: "Thor adalah Dewa Petir dari Asgard. Senjata aslinya Mjolnir memiliki satu aturan sakral. Apa aturan tersebut?",
      pilihan: [
        "Hanya bisa diangkat oleh dewa Asgard",
        "Hanya bisa diangkat oleh mereka yang dianggap layak (worthy)",
        "Hanya Thor yang bisa menggunakannya karena terhubung DNA-nya",
        "Hanya bisa diangkat saat ada badai petir",
        "Mjolnir tidak memiliki aturan, siapapun bisa mengangkatnya"
      ],
      jawaban: 1
    },
    {
      soal: "Spider-Man mendapat kekuatannya setelah digigit laba-laba radioaktif. Peter Parker adalah murid jenius yang kehilangan seseorang karena ia sempat membiarkan pencuri lolos. Siapa yang meninggal?",
      pilihan: ["Bibi May","Ben Parker (Paman Ben)","Gwen Stacy","Harry Osborn","Mary Jane Watson"],
      jawaban: 1
    },
    {
      soal: "Black Panther, T'Challa, adalah raja dari negara fiksi Wakanda. Apa yang membuat Wakanda begitu istimewa dalam Marvel Universe?",
      pilihan: [
        "Negara dengan teknologi paling kuno di dunia",
        "Satu-satunya negara yang pernah dijajah oleh Thanos",
        "Sumber terbesar Vibranium — metal paling langka dan kuat di Bumi, yang belum pernah dijajah",
        "Negara dengan populasi terbanyak di Marvel Universe",
        "Tempat bersembunyinya semua Infinity Stone"
      ],
      jawaban: 2
    },
    {
      soal: "Doctor Strange adalah Sorcerer Supreme. Manakah yang merupakan musuh dimensi terbesar yang sering ia lawan?",
      pilihan: [
        "Thanos",
        "Dormammu dari Dark Dimension",
        "Ultron",
        "Hela",
        "Ego the Living Planet"
      ],
      jawaban: 1
    },
    {
      soal: "Dalam 'Avengers: Infinity War', Thanos mengumpulkan semua Infinity Stone untuk melakukan 'The Snap'. Apa alasan filosofis Thanos melakukan hal ini?",
      pilihan: [
        "Dia ingin menjadi penguasa seluruh alam semesta",
        "Dia ingin membalas dendam pada planet yang menghancurkan Titan",
        "Dia percaya bahwa dengan menghapus setengah populasi semesta, sumber daya alam akan seimbang kembali dan makhluk hidup tidak akan punah karena overpopulation",
        "Dia ingin menghidupkan kembali kekasihnya Lady Death",
        "Dia ingin menguji kekuatan para Avengers"
      ],
      jawaban: 2
    },
    {
      soal: "Wolverine memiliki kekuatan penyembuhan (regenerasi) dan tulang-tulangnya dilapisi logam. Logam apa yang melapisi kerangka Wolverine?",
      pilihan: [
        "Vibranium",
        "Adamantium",
        "Carbonadium",
        "Titanium",
        "Steel alloy"
      ],
      jawaban: 1
    },
    {
      soal: "The Hulk adalah alter ego dari seorang ilmuwan. Siapa nama aslinya, dan apa yang memicunya berubah menjadi Hulk?",
      pilihan: [
        "Bruce Banner, terkena radiasi gamma berlebih saat mencoba menyelamatkan orang dari ledakan bom gamma",
        "Tony Stark, terkena ledakan bom nuklir",
        "Steve Rogers, efek samping dari serum super soldier",
        "Reed Richards, terpapar sinar kosmik di luar angkasa",
        "Henry Pym, hasil eksperimen formula pertumbuhan yang gagal"
      ],
      jawaban: 0
    },
    {
      soal: "Dalam 'Captain America: Civil War', Avengers terbagi dua. Apa inti dari Sokovia Accords yang memecah belah mereka?",
      pilihan: [
        "Perdebatan siapa yang berhak menjadi pemimpin Avengers",
        "Sokovia Accords mengharuskan Avengers berada di bawah pengawasan dan kendali PBB, Iron Man setuju; Captain America menolak",
        "Avengers diminta untuk melepaskan kekuatan super mereka secara permanen",
        "Sokovia Accords melarang Avengers beroperasi di luar Amerika",
        "Perdebatan tentang penggunaan senjata nuklir melawan musuh"
      ],
      jawaban: 1
    },
    {
      soal: "Loki adalah saudara angkat Thor. Apa asal-usul sesungguhnya Loki yang terungkap dalam film pertama Thor?",
      pilihan: [
        "Dia adalah putra Odin dan Frigga",
        "Dia adalah anak dari musuh bebuyutan Asgard; seorang Frost Giant (Jotun) bernama Laufey yang diadopsi Odin",
        "Dia ditemukan di Bumi sebagai bayi manusia",
        "Dia diciptakan oleh sihir Odin sendiri",
        "Dia adalah putra dari Hela, dewi kematian"
      ],
      jawaban: 1
    },
    {
      soal: "Guardians of the Galaxy memiliki anggota tim yang unik. Siapakah Groot, dan apa kalimat ikoniknya?",
      pilihan: [
        "Robot mekanik yang selalu berkata 'GROOT IS GROOT'",
        "Alien berbentuk pohon Flora Colossus dari Planet X yang hanya bisa mengatakan 'I am Groot'",
        "Monster tanaman raksasa yang tidak bisa berkomunikasi",
        "Makhluk alien dari dimensi lain yang berbicara dalam bahasa pohon",
        "Androin yang diprogram untuk mengatakan nama penciptanya"
      ],
      jawaban: 1
    },
    {
      soal: "Wanda Maximoff (Scarlet Witch) menggunakan kekuatan yang disebut Chaos Magic. Di MCU, dari mana kekuatan Wanda sebenarnya berasal?",
      pilihan: [
        "Dari eksperimen genetik yang dilakukan HYDRA",
        "Dia memiliki kekuatan sejak lahir yang diperkuat oleh Mind Stone dari batu Infinity",
        "Dari ritual sihir gelap yang dipelajari sendiri",
        "Diberikan oleh Doctor Strange sebagai pelindung Bumi",
        "Dari paparan radiasi kosmik yang sama dengan Reed Richards"
      ],
      jawaban: 1
    },
    {
      soal: "Dalam 'Avengers: Endgame', time heist dilakukan untuk mengumpulkan Infinity Stones dari masa lalu. Lokasi pengambilan Time Stone adalah...",
      pilihan: [
        "New York 2012 saat pertempuran Avengers",
        "Asgard 2013 saat Dark World events",
        "Sanctum Sanctorum New York 2012 dari Ancient One",
        "Morag 2014 tempat Power Stone disimpan",
        "Vormir tempat Soul Stone berada"
      ],
      jawaban: 2
    },
    {
      soal: "Manakah dari superhero berikut yang merupakan mutant asli dan bukan manusia yang mengalami modifikasi buatan?",
      pilihan: [
        "Iron Man dan Captain America",
        "Wolverine dan Cyclops (X-Men)",
        "Captain America dan Black Widow",
        "Hulk dan Spider-Man",
        "Falcon dan War Machine"
      ],
      jawaban: 1
    },
    {
      soal: "Shang-Chi, superhero baru MCU, adalah master dari seni bela diri tertentu. Senjata ikoniknya dalam film adalah...",
      pilihan: [
        "Pedang bermata dua",
        "Cincin-cincin legendaris (Ten Rings) yang pernah dimiliki ayahnya Xu Wenwu",
        "Tangan besi yang tidak bisa hancur",
        "Perisai energi seperti Captain America",
        "Sarung tangan berenergi seperti Thanos"
      ],
      jawaban: 1
    },
    {
      soal: "Ms. Marvel (Kamala Khan) adalah karakter Marvel bersejarah karena...",
      pilihan: [
        "Superhero wanita pertama dalam komik Marvel",
        "Superhero Muslim-Amerika pertama yang mendapatkan seri komik solo sendiri",
        "Superhero pertama yang berasal dari Pakistan di semua komik",
        "Karakter Marvel pertama yang bisa terbang tanpa alat bantu",
        "Pahlawan pertama yang tidak memiliki kekuatan super"
      ],
      jawaban: 1
    },
    {
      soal: "Thanos mendapatkan Soul Stone di Vormir dengan pengorbanan besar. Apa yang harus diserahkan untuk mendapatkan Soul Stone?",
      pilihan: [
        "Salah satu Infinity Stone yang sudah dimiliki",
        "Nyawa seseorang yang paling dicintai (soul for a soul)",
        "Kekuatan fisik sang pencari secara permanen",
        "Kenangan terbesar sepanjang hidup",
        "Separuh kekuatan kosmik yang dimiliki"
      ],
      jawaban: 1
    }
  ]
};

/* ============================================
   KONFIGURASI TEMA
   ============================================ */
const temaConfig = {
  minecraft: {
    nama: "MINECRAFT QUIZ", icon: "⛏️", subtitle: "[ HTML, CSS & JavaScript ]",
    kelas: "tema-minecraft", chip: "⛏️ Minecraft",
    winIcon: "🏆", badge: "⛏️ Minecraft",
    formHeader: "📋 DATA PESERTA", historyHeader: "📜 RIWAYAT NILAI",
    soalBadge: "❓",
    soundProfile: "minecraft"
  },
  lego: {
    nama: "LEGO QUIZ", icon: "🧱", subtitle: "[ Dunia Balok & Kreasi ]",
    kelas: "tema-lego", chip: "🧱 LEGO",
    winIcon: "🏆", badge: "🧱 LEGO",
    formHeader: "📋 DATA PESERTA", historyHeader: "📜 RIWAYAT NILAI",
    soalBadge: "🧩",
    soundProfile: "lego"
  },
  toystory: {
    nama: "TOY STORY QUIZ", icon: "🤠", subtitle: "[ Karakter & Cerita Film ]",
    kelas: "tema-toystory", chip: "🤠 Toy Story",
    winIcon: "🤠", badge: "🤠 Toy Story",
    formHeader: "📋 DATA PESERTA", historyHeader: "📜 RIWAYAT NILAI",
    soalBadge: "🎬",
    soundProfile: "toystory"
  },
  marvel: {
    nama: "MARVEL QUIZ", icon: "🦸", subtitle: "[ Superhero & Universe ]",
    kelas: "tema-marvel", chip: "🦸 Marvel",
    winIcon: "🦸", badge: "🦸 Marvel",
    formHeader: "📋 DATA PESERTA", historyHeader: "📜 RIWAYAT NILAI",
    soalBadge: "⚡",
    soundProfile: "marvel"
  }
};

/* ============================================
   KONSTANTA & STATE
   ============================================ */
const WAKTU_TOTAL = 30 * 60;
const STORAGE_KEY = 'multitema_quiz_riwayat';
const OPSI_HURUF  = ['A','B','C','D','E'];

let state = {
  tema: null, nama: '', kelas: '',
  soalIndex: 0,
  jawaban: [],
  timer: WAKTU_TOTAL, timerInterval: null,
  audioOn: true, startTime: null,
  waktuTerpakai: 0, snapshotJawaban: null
};

let dataSoal = [];

/* ============================================
   AUDIO ENGINE
   ============================================ */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playTone(freq, duration, type = 'square', volume = 0.3, delay = 0) {
  if (!state.audioOn || !audioCtx) return;
  try {
    const osc  = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const t    = audioCtx.currentTime + delay;
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.type = type; osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.start(t); osc.stop(t + duration);
  } catch(e) {}
}

/* ── Profil suara per tema ── */
const soundProfiles = {
  minecraft: {
    click:    () => { playTone(440,0.08,'square',0.2); playTone(660,0.06,'square',0.15,0.04); },
    next:     () => { playTone(523,0.1,'square',0.2); playTone(659,0.1,'square',0.18,0.08); },
    pilih:    () => { playTone(659,0.12,'square',0.25); },
    error:    () => { playTone(220,0.15,'sawtooth',0.2); playTone(180,0.2,'sawtooth',0.15,0.1); },
    win:      () => { [523,659,784,1047,784,659,784,1047].forEach((n,i)=> setTimeout(()=>playTone(n,0.18,'square',0.25),i*110)); },
    bgNotes:  [262,330,392,523,392,330,262,196,247,330,392,294],
    bgType:   'square', bgVol: 0.08, bgInterval: 380
  },
  lego: {
    /* Pop plastik saat klik, melodi ceria untuk LEGO */
    click:    () => { playTone(800,0.04,'square',0.25); playTone(1000,0.05,'square',0.2,0.05); },
    next:     () => { playTone(587,0.08,'square',0.22); playTone(740,0.08,'square',0.2,0.07); playTone(880,0.1,'square',0.18,0.14); },
    pilih:    () => { playTone(880,0.06,'square',0.28); playTone(1047,0.06,'square',0.22,0.07); },
    error:    () => { playTone(300,0.1,'square',0.3); playTone(250,0.15,'square',0.25,0.12); },
    win:      () => { [523,659,784,880,1047,880,1047,1319].forEach((n,i)=>setTimeout(()=>playTone(n,0.15,'square',0.28),i*90)); },
    bgNotes:  [330,415,494,587,494,415,330,262,330,415,494,440],
    bgType:   'square', bgVol: 0.07, bgInterval: 320
  },
  toystory: {
    /* Melodi country/western untuk Toy Story */
    click:    () => { playTone(523,0.1,'triangle',0.2); playTone(659,0.08,'triangle',0.15,0.06); },
    next:     () => { playTone(392,0.12,'triangle',0.2); playTone(494,0.12,'triangle',0.18,0.1); playTone(587,0.12,'triangle',0.16,0.2); },
    pilih:    () => { playTone(659,0.15,'triangle',0.22); playTone(784,0.1,'triangle',0.18,0.1); },
    error:    () => { playTone(330,0.12,'sawtooth',0.2); playTone(277,0.2,'sawtooth',0.18,0.15); },
    win:      () => { [392,494,587,659,784,659,784,988].forEach((n,i)=>setTimeout(()=>playTone(n,0.2,'triangle',0.22),i*130)); },
    bgNotes:  [294,370,440,523,440,370,294,247,294,370,440,392],
    bgType:   'triangle', bgVol: 0.07, bgInterval: 420
  },
  marvel: {
    /* Fanfare heroik dan bass berat untuk Marvel */
    click:    () => { playTone(220,0.05,'sawtooth',0.3); playTone(440,0.08,'square',0.2,0.05); },
    next:     () => { playTone(440,0.15,'sawtooth',0.25); playTone(587,0.12,'sawtooth',0.2,0.1); playTone(740,0.15,'sawtooth',0.18,0.2); },
    pilih:    () => { playTone(587,0.08,'sawtooth',0.3); playTone(740,0.12,'sawtooth',0.25,0.06); },
    error:    () => { playTone(150,0.2,'sawtooth',0.35); playTone(120,0.3,'sawtooth',0.3,0.2); },
    win:      () => {
      // Fanfare Marvel
      [440,440,440,349,523,440,349,523,440].forEach((n,i)=>setTimeout(()=>playTone(n,0.25,'sawtooth',0.3),i*150));
      [110,110,110,87,131,110,87,131,110].forEach((n,i)=>setTimeout(()=>playTone(n,0.25,'sawtooth',0.2),i*150));
    },
    bgNotes:  [220,277,330,440,330,277,220,196,247,330,277,330],
    bgType:   'sawtooth', bgVol: 0.06, bgInterval: 500
  }
};

let bgMusicInterval = null;
let bgNoteIndex     = 0;

function soundClick()  { initAudio(); soundProfiles[state.tema || 'minecraft'].click(); }
function soundNext()   { initAudio(); soundProfiles[state.tema || 'minecraft'].next(); }
function soundPilih()  { initAudio(); soundProfiles[state.tema || 'minecraft'].pilih(); }
function soundError()  { initAudio(); soundProfiles[state.tema || 'minecraft'].error(); }
function soundWin()    { initAudio(); soundProfiles[state.tema || 'minecraft'].win(); }

function startBgMusic() {
  if (bgMusicInterval) return;
  const profile = soundProfiles[state.tema || 'minecraft'];
  bgNoteIndex   = 0;
  bgMusicInterval = setInterval(() => {
    if (state.audioOn && audioCtx) {
      playTone(profile.bgNotes[bgNoteIndex % profile.bgNotes.length], 0.3, profile.bgType, profile.bgVol);
      bgNoteIndex++;
    }
  }, profile.bgInterval);
}

function stopBgMusic() {
  if (bgMusicInterval) { clearInterval(bgMusicInterval); bgMusicInterval = null; }
}

function toggleAudio() {
  soundClick(); initAudio();
  state.audioOn = !state.audioOn;
  const btn = document.getElementById('btnAudio');
  if (state.audioOn) { btn.textContent = '🔊 SUARA: ON'; startBgMusic(); showToast('Suara dinyalakan 🔊'); }
  else               { btn.textContent = '🔇 SUARA: OFF'; stopBgMusic();  showToast('Suara dimatikan 🔇'); }
}

/* ============================================
   BACKGROUND DINAMIS
   ============================================ */
function generateBgBlocks() {
  const container = document.getElementById('bgLayer');
  // hapus blok lama kecuali pseudo-elements
  container.querySelectorAll('.pixel-star, .float-block').forEach(e => e.remove());

  if (state.tema === 'minecraft') {
    for (let i = 0; i < 40; i++) {
      const star = document.createElement('div');
      star.className = 'pixel-star';
      star.style.cssText = `top:${Math.random()*55}%;left:${Math.random()*100}%;animation-delay:${Math.random()*3}s;animation-duration:${1.5+Math.random()*2}s;opacity:${0.2+Math.random()*0.8};`;
      container.appendChild(star);
    }
    const types = ['grass','stone','wood','diamond'];
    const colors = { grass:'linear-gradient(180deg,#55a03c 30%,#8b6340 30%)', stone:'#8b8b8b', wood:'#8b6340', diamond:'#1aa8c4' };
    for (let i = 0; i < 10; i++) {
      const b = document.createElement('div');
      const t = types[Math.floor(Math.random()*4)];
      b.className = 'float-block';
      b.style.cssText = `background:${colors[t]};left:${Math.random()*95}%;width:32px;height:32px;animation-duration:${14+Math.random()*16}s;animation-delay:${Math.random()*-20}s;`;
      container.appendChild(b);
    }
  } else if (state.tema === 'lego') {
    const studs = ['🟥','🟧','🟨','🟦','🟩'];
    for (let i = 0; i < 8; i++) {
      const b = document.createElement('div');
      b.className = 'float-block';
      b.style.cssText = `background:#e3000b;left:${Math.random()*95}%;width:40px;height:20px;border-radius:3px;animation-duration:${12+Math.random()*16}s;animation-delay:${Math.random()*-20}s;`;
      container.appendChild(b);
    }
  } else if (state.tema === 'toystory') {
    const emojis = ['⭐','🌟','✨'];
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'pixel-star';
      star.style.cssText = `top:${Math.random()*70}%;left:${Math.random()*100}%;background:#f0e68c;animation-delay:${Math.random()*4}s;animation-duration:${2+Math.random()*3}s;width:${2+Math.floor(Math.random()*4)}px;height:${2+Math.floor(Math.random()*4)}px;`;
      container.appendChild(star);
    }
  } else if (state.tema === 'marvel') {
    for (let i = 0; i < 30; i++) {
      const star = document.createElement('div');
      star.className = 'pixel-star';
      const isRed = Math.random() > 0.6;
      star.style.cssText = `top:${Math.random()*90}%;left:${Math.random()*100}%;background:${isRed?'#e62429':'#c9a227'};animation-delay:${Math.random()*5}s;animation-duration:${1+Math.random()*3}s;width:${1+Math.floor(Math.random()*3)}px;height:${1+Math.floor(Math.random()*3)}px;`;
      container.appendChild(star);
    }
  }
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
   PILIH TEMA
   ============================================ */
function pilihTema(tema) {
  soundClick(); initAudio();
  state.tema = tema;
  const cfg  = temaConfig[tema];
  dataSoal   = semuaSoal[tema];

  // Ganti kelas body
  document.body.className = cfg.kelas;

  // Isi elemen home
  document.getElementById('homeIcon').textContent       = cfg.icon;
  document.getElementById('gameTitle').textContent      = cfg.nama;
  document.getElementById('gameSubtitle').textContent   = cfg.subtitle;
  document.getElementById('formHeader').textContent     = cfg.formHeader;
  document.getElementById('historyHeader').textContent  = cfg.historyHeader;
  document.getElementById('quizThemeChip').textContent  = cfg.chip;
  document.getElementById('soalBadge').textContent      = cfg.soalBadge;
  document.getElementById('winIcon').textContent        = cfg.winIcon;
  document.getElementById('resultThemeBadge').textContent = cfg.badge;
  document.getElementById('resultHeader').textContent   = `🎉 HASIL ${tema.toUpperCase()}`;

  generateBgBlocks();
  stopBgMusic();
  bgNoteIndex = 0;

  muatRiwayat();
  showPage('pageHome');
}

function kembaliPilihTema() {
  soundClick();
  stopBgMusic();
  state.tema = null;
  document.body.className = '';
  showPage('pageTheme');
}

/* ============================================
   MULAI ULANGAN
   ============================================ */
function mulaiUlangan() {
  soundClick(); initAudio();
  const nama  = document.getElementById('inputNama').value.trim();
  const kelas = document.getElementById('inputKelas').value.trim();
  if (!nama)  { soundError(); showToast('⚠️ Nama tidak boleh kosong!'); document.getElementById('inputNama').focus(); return; }
  if (!kelas) { soundError(); showToast('⚠️ Kelas tidak boleh kosong!'); document.getElementById('inputKelas').focus(); return; }

  state.nama = nama; state.kelas = kelas;
  state.soalIndex = 0; state.jawaban = new Array(dataSoal.length).fill(null);
  state.timer = WAKTU_TOTAL; state.waktuTerpakai = 0; state.startTime = Date.now();

  document.getElementById('quizNama').textContent  = `👤 ${nama}`;
  document.getElementById('quizKelas').textContent = `🏫 ${kelas}`;

  renderNavNomor(); startTimer(); startBgMusic();
  tampilkanSoal(0); showPage('pageQuiz');
  showToast('🎮 Ulangan dimulai! Semangat!');
}

/* ============================================
   TIMER
   ============================================ */
function startTimer() {
  clearInterval(state.timerInterval);
  state.timer = WAKTU_TOTAL; updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timer--; state.waktuTerpakai++; updateTimerDisplay();
    if (state.timer === 5*60) { showToast('⚠️ Sisa waktu 5 menit!', 3000); soundError(); }
    if (state.timer === 60)   { showToast('🚨 Sisa waktu 1 menit!', 3000); soundError(); }
    if (state.timer <= 0) {
      state.timer = 0; updateTimerDisplay(); clearInterval(state.timerInterval);
      showToast('⏰ Waktu habis!', 3000); setTimeout(() => selesaiUlangan(true), 1000);
    }
  }, 1000);
}
function stopTimer() { clearInterval(state.timerInterval); }
function updateTimerDisplay() {
  const mnt = Math.floor(state.timer/60).toString().padStart(2,'0');
  const dtk = (state.timer%60).toString().padStart(2,'0');
  const el  = document.getElementById('quizTimer');
  el.textContent = `⏱ ${mnt}:${dtk}`;
  if (state.timer<=60)       el.style.color = '#e74c3c';
  else if (state.timer<=300) el.style.color = '#f0c030';
  else                       el.style.color = 'var(--accent)';
}
function formatWaktu(detik) { return `${Math.floor(detik/60)}m ${detik%60}s`; }

/* ============================================
   NAVIGASI NOMOR SOAL
   ============================================ */
function renderNavNomor() {
  const container = document.getElementById('soalNav');
  container.innerHTML = '';
  const half = Math.ceil(dataSoal.length / 2);
  const col1 = document.createElement('div'); col1.className = 'nav-col';
  const col2 = document.createElement('div'); col2.className = 'nav-col';
  for (let i = 0; i < dataSoal.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'nav-btn'; btn.textContent = i+1; btn.dataset.index = i;
    btn.addEventListener('click', () => { soundClick(); goToSoal(i); });
    (i < half ? col1 : col2).appendChild(btn);
  }
  container.appendChild(col1); container.appendChild(col2);
  updateNavNomor();
}
function updateNavNomor() {
  document.querySelectorAll('.nav-btn').forEach((btn, i) => {
    btn.classList.remove('active','answered');
    if (i === state.soalIndex) btn.classList.add('active');
    if (state.jawaban[i] !== null) btn.classList.add('answered');
  });
}

/* ============================================
   TAMPILKAN SOAL
   ============================================ */
function tampilkanSoal(index) {
  const soal = dataSoal[index];
  document.getElementById('soalNumber').textContent = `Soal ${index+1} / ${dataSoal.length}`;
  document.getElementById('soalText').innerHTML     = escapeHTML(soal.soal);

  const container = document.getElementById('jawabanList');
  container.innerHTML = '';
  soal.pilihan.forEach((pilihan, i) => {
    const div = document.createElement('div');
    div.className = 'jawaban-option';
    if (state.jawaban[index] === i) div.classList.add('selected');
    div.innerHTML = `<span class="jawaban-key">${OPSI_HURUF[i]}.</span><span class="jawaban-text">${escapeHTML(pilihan)}</span>`;
    div.addEventListener('click', () => { soundPilih(); pilihJawaban(index, i); });
    container.appendChild(div);
  });

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnSel  = document.getElementById('btnSelesai');
  btnPrev.disabled = (index === 0);
  if (index === dataSoal.length - 1) { btnNext.style.display = 'none'; btnSel.style.display = 'inline-block'; }
  else { btnNext.style.display = 'inline-block'; btnSel.style.display = 'none'; }
  updateNavNomor();
}

function pilihJawaban(soalIdx, jawabanIdx) {
  state.jawaban[soalIdx] = jawabanIdx;
  document.querySelectorAll('.jawaban-option').forEach((opt, i) => opt.classList.toggle('selected', i === jawabanIdx));
  updateNavNomor();
  if (state.jawaban.every(j => j !== null)) showToast('✅ Semua soal sudah dijawab!');
}

function goToSoal(index) { state.soalIndex = index; tampilkanSoal(index); soundNext(); }
function nextSoal()      { soundNext(); if (state.soalIndex < dataSoal.length-1) { state.soalIndex++; tampilkanSoal(state.soalIndex); } }
function prevSoal()      { soundClick(); if (state.soalIndex > 0) { state.soalIndex--; tampilkanSoal(state.soalIndex); } }

/* ============================================
   SELESAI ULANGAN
   ============================================ */
function selesaiUlangan(force = false) {
  if (!force) {
    const belum = state.jawaban.filter(j => j === null).length;
    if (belum > 0) { soundError(); showToast(`⚠️ Masih ${belum} soal belum dijawab!`); goToSoal(state.jawaban.findIndex(j => j === null)); return; }
    soundClick();
  }
  stopTimer(); stopBgMusic();

  let benar = 0;
  dataSoal.forEach((soal, i) => { if (state.jawaban[i] === soal.jawaban) benar++; });
  const salah    = dataSoal.length - benar;
  const nilai    = benar * 5;
  const waktuStr = formatWaktu(state.waktuTerpakai);

  state.snapshotJawaban = [...state.jawaban];
  simpanRiwayat({ tema: state.tema, nama: state.nama, kelas: state.kelas, nilai, benar, salah, waktu: waktuStr, timestamp: Date.now(), jawabanPeserta: [...state.jawaban] });
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

  let cur = 0; const step = Math.ceil(nilai/20);
  const nilaiEl = document.getElementById('nilaiAkhir');
  const iv = setInterval(() => { cur = Math.min(cur+step, nilai); nilaiEl.textContent = cur; if (cur >= nilai) clearInterval(iv); }, 50);

  const gradeEl = document.getElementById('nilaiGrade');
  let gradeClass, gradeLabel;
  if      (nilai >= 90) { gradeClass='grade-A'; gradeLabel='Grade A — ⭐ LUAR BIASA!'; }
  else if (nilai >= 75) { gradeClass='grade-B'; gradeLabel='Grade B — 👍 BAGUS!'; }
  else if (nilai >= 60) { gradeClass='grade-C'; gradeLabel='Grade C — 😊 CUKUP'; }
  else if (nilai >= 40) { gradeClass='grade-D'; gradeLabel='Grade D — 😅 PERLU BELAJAR LAGI'; }
  else                  { gradeClass='grade-E'; gradeLabel='Grade E — 😢 TERUS SEMANGAT!'; }
  gradeEl.textContent = gradeLabel; gradeEl.className = `nilai-grade ${gradeClass}`;
}

function buatFireworks() {
  const container = document.getElementById('fireworks');
  const temaColors = {
    minecraft: ['#5aac44','#f0c030','#e74c3c','#3498db','#7ed461'],
    lego:      ['#e3000b','#f5a000','#006cb7','#ffdd00','#009900'],
    toystory:  ['#1a6fbf','#e8a000','#e84040','#ffffff','#4d96e0'],
    marvel:    ['#e62429','#c9a227','#ffffff','#003087','#ff4a4f']
  };
  const colors = temaColors[state.tema] || temaColors.minecraft;
  for (let i = 0; i < 24; i++) {
    setTimeout(() => {
      const px = document.createElement('div');
      px.className = 'firework-pixel';
      const color = colors[Math.floor(Math.random()*colors.length)];
      const tx    = (Math.random()-0.5)*220; const ty = (Math.random()-0.5)*220;
      px.style.cssText = `background:${color};left:${20+Math.random()*60}%;top:${20+Math.random()*60}%;--tx:${tx}px;--ty:${ty}px;box-shadow:0 0 6px ${color};`;
      container.appendChild(px);
      setTimeout(() => px.remove(), 1500);
    }, i * 70);
  }
}

/* ============================================
   REVIEW
   ============================================ */
function lihatReviewTerakhir() {
  soundClick();
  if (!state.snapshotJawaban) { showToast('⚠️ Data jawaban tidak ditemukan.'); return; }
  tampilkanReviewDariData({ tema: state.tema, nama: state.nama, kelas: state.kelas, nilai: state.snapshotJawaban.filter((j,i)=>j===dataSoal[i].jawaban).length*5, benar: state.snapshotJawaban.filter((j,i)=>j===dataSoal[i].jawaban).length, salah: state.snapshotJawaban.filter((j,i)=>j!==dataSoal[i].jawaban).length, jawabanPeserta: state.snapshotJawaban });
}

function ulangLagi() {
  soundClick();
  state.soalIndex = 0; state.jawaban = new Array(dataSoal.length).fill(null);
  state.snapshotJawaban = null; state.timer = WAKTU_TOTAL; state.waktuTerpakai = 0; state.startTime = Date.now();
  document.getElementById('quizNama').textContent  = `👤 ${state.nama}`;
  document.getElementById('quizKelas').textContent = `🏫 ${state.kelas}`;
  renderNavNomor(); startTimer(); startBgMusic(); tampilkanSoal(0); showPage('pageQuiz');
}

function kembaliHome() {
  soundClick(); state.snapshotJawaban = null; muatRiwayat(); showPage('pageHome');
}

/* ============================================
   RIWAYAT
   ============================================ */
function simpanRiwayat(data) {
  const riwayat = ambilRiwayat(); riwayat.unshift(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(riwayat));
}
function ambilRiwayat() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function muatRiwayat() {
  const semua   = ambilRiwayat();
  const riwayat = semua.filter(item => item.tema === state.tema);
  const list    = document.getElementById('historyList');
  const actions = document.getElementById('historyActions');

  if (riwayat.length === 0) { list.innerHTML = '<p class="empty-msg">Belum ada data riwayat.</p>'; actions.style.display = 'none'; return; }
  actions.style.display = 'block'; list.innerHTML = '';

  riwayat.forEach((item) => {
    const globalIdx = semua.indexOf(item);
    const div = document.createElement('div');
    div.className = 'history-item';
    let nilaiClass = 'nilai-sedang';
    if (item.nilai >= 75) nilaiClass = 'nilai-lulus';
    else if (item.nilai < 50) nilaiClass = 'nilai-gagal';
    const tgl = item.timestamp ? new Date(item.timestamp).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) : '-';
    div.innerHTML = `
      <div class="history-info">
        <div class="history-nama">👤 ${escapeHTML(item.nama)}</div>
        <div class="history-detail">🏫 ${escapeHTML(item.kelas)} &nbsp;|&nbsp; ✅ ${item.benar} Benar &nbsp;|&nbsp; ❌ ${item.salah} Salah &nbsp;|&nbsp; ⏱ ${item.waktu} &nbsp;|&nbsp; 📅 ${tgl}</div>
      </div>
      <div class="history-nilai ${nilaiClass}">${item.nilai}</div>
      <div class="history-btn-group">
        <button class="mc-btn btn-small btn-blue" onclick="lihatReviewHistory(${globalIdx})">🔍 Review</button>
        <button class="mc-btn btn-small btn-danger" onclick="hapusSatu(${globalIdx})">🗑</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function hapusSatu(idx) {
  soundClick();
  const riwayat = ambilRiwayat(); riwayat.splice(idx, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(riwayat)); muatRiwayat();
  showToast('🗑️ Data dihapus');
}
function hapusSemua() {
  soundClick();
  if (confirm('Hapus semua data riwayat tema ini?')) {
    const semua   = ambilRiwayat();
    const tersisa = semua.filter(item => item.tema !== state.tema);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tersisa)); muatRiwayat();
    showToast('🗑️ Semua data dihapus');
  }
}

function lihatReviewHistory(idx) {
  soundClick();
  const riwayat = ambilRiwayat(); const item = riwayat[idx];
  if (!item) { showToast('⚠️ Data tidak ditemukan.'); return; }
  // Pastikan dataSoal sesuai tema item
  dataSoal = semuaSoal[item.tema] || dataSoal;
  state.snapshotJawaban = null;
  tampilkanReviewDariData(item);
}

function tampilkanReviewDariData(item) {
  if (!item) { showToast('⚠️ Data tidak ditemukan.'); return; }
  const labelKembali = state.snapshotJawaban ? '◀ KEMBALI KE HASIL' : '🏠 KEMBALI';
  document.getElementById('btnKembaliReviewTop').textContent = labelKembali;
  document.getElementById('btnKembaliReviewBot').textContent = labelKembali;

  const jawabanData = (item.jawabanPeserta && Array.isArray(item.jawabanPeserta)) ? item.jawabanPeserta : new Array(dataSoal.length).fill(null);
  const dataLama    = !item.jawabanPeserta || !Array.isArray(item.jawabanPeserta);

  let benarHitung = 0;
  jawabanData.forEach((j,i) => { if (j === dataSoal[i].jawaban) benarHitung++; });

  document.getElementById('reviewNama').textContent  = `👤 ${item.nama}`;
  document.getElementById('reviewKelas').textContent = `🏫 ${item.kelas}`;
  document.getElementById('reviewNilai').textContent = dataLama ? item.nilai : benarHitung*5;
  document.getElementById('reviewBenar').textContent = dataLama ? item.benar : benarHitung;
  document.getElementById('reviewSalah').textContent = dataLama ? item.salah : (dataSoal.length - benarHitung);

  const container = document.getElementById('reviewSoalList');
  container.innerHTML = '';

  dataSoal.forEach((soal, i) => {
    const jp = jawabanData[i]; const jb = soal.jawaban;
    const tidakDijawab = jp === null || jp === undefined;
    const isBenar      = !tidakDijawab && jp === jb;

    let statusClass, statusIcon, statusLabel;
    if (tidakDijawab) { statusClass='review-tidak-dijawab'; statusIcon='❓'; statusLabel='TIDAK TERCATAT'; }
    else if (isBenar) { statusClass='review-benar'; statusIcon='✅'; statusLabel='BENAR'; }
    else              { statusClass='review-salah'; statusIcon='❌'; statusLabel='SALAH'; }

    let pilihanHTML = '';
    soal.pilihan.forEach((pilihan, j) => {
      let pClass = 'review-pilihan'; let badge = '';
      if (!tidakDijawab && j === jp) {
        if (jp === jb) { pClass += ' pilihan-benar'; badge = '<span class="pilihan-badge badge-benar">✓ BENAR!</span>'; }
        else           { pClass += ' pilihan-salah'; badge = '<span class="pilihan-badge badge-salah">✗ SALAH!</span>'; }
      }
      pilihanHTML += `<div class="${pClass}"><span class="review-pilihan-key">${OPSI_HURUF[j]}.</span><span class="review-pilihan-text">${escapeHTML(pilihan)}</span>${badge}</div>`;
    });

    const soalDiv = document.createElement('div');
    soalDiv.className = `review-soal-item ${statusClass}`;
    soalDiv.innerHTML = `
      <div class="review-soal-header">
        <span class="review-soal-num">${statusIcon} Soal ${i+1}</span>
        <span class="review-status-label ${tidakDijawab?'label-tidak-dijawab':(isBenar?'label-benar':'label-salah')}">${statusLabel}</span>
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
  if (state.snapshotJawaban) showPage('pageResult');
  else { muatRiwayat(); showPage('pageHome'); }
}

/* ============================================
   TOAST
   ============================================ */
function showToast(pesan, durasi = 2000) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast'; toast.textContent = pesan;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, durasi);
}

/* ============================================
   UTILITY
   ============================================ */
function escapeHTML(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ============================================
   INISIALISASI
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', () => initAudio(), { once: true });
  document.getElementById('inputNama').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('inputKelas').focus(); });
  document.getElementById('inputKelas').addEventListener('keydown', e => { if (e.key === 'Enter') mulaiUlangan(); });
});