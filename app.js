const lessonTopics = {
  SD: {
    1: [
      ["Bahasa Indonesia","📖","Membaca huruf dan suku kata","Kenali huruf vokal dan konsonan, lalu rangkai menjadi suku kata: ba, bi, bu, be, bo. Latihan: tulis nama benda yang dimulai huruf B.","Contoh: buku = bu-ku; bola = bo-la."],
      ["Bahasa Indonesia","✏️","Menulis kalimat sederhana","Susun kalimat berpola subjek-predikat: “Budi membaca.” Tambahkan objek: “Budi membaca buku.”","Contoh: aku makan nasi."],
      ["Matematika","🔢","Bilangan 1 sampai 20","Hitung maju dan mundur, membandingkan lebih banyak/lebih sedikit, serta mengenali angka.","Contoh: 12 lebih besar dari 8."],
      ["Matematika","➕","Penjumlahan dan pengurangan","Jumlahkan dengan bantu jari atau benda. Pengurangan berarti mengambil sebagian.","Contoh: 7 + 3 = 10; 10 − 4 = 6."],
      ["IPAS","🌱","Tubuhku dan pancaindra","Pancaindra membantu mengenali dunia: mata melihat, telinga mendengar, hidung membaui, lidah mengecap, kulit meraba.","Jaga mata, telinga, dan seluruh tubuh."],
      ["Pendidikan Pancasila","⭐","Aturan di rumah dan sekolah","Aturan menjaga ketertiban. Contohnya antre, merapikan alat, dan menghormati orang lain.","Bunyi sila pertama: Ketuhanan Yang Maha Esa."],
      ["Seni dan Budaya","🎨","Warna dan bentuk","Kenali warna dasar, garis lurus/ lengkung, dan bentuk lingkaran, segitiga, persegi.","Gabungkan dua warna: biru + kuning = hijau."],
      ["Bahasa Inggris","A","Salam dan perkenalan","Gunakan “Good morning”, “Hello”, “My name is…”, dan “Thank you”.","Good morning! My name is Kayoko."]
    ],
    2: [
      ["Bahasa Indonesia","📖","Kalimat dan tanda baca","Gunakan titik untuk kalimat berita, tanda tanya untuk pertanyaan, dan tanda seru untuk perasaan kuat.","Siapa namamu? Aku suka belajar!"],
      ["Bahasa Indonesia","📚","Dongeng sederhana","Dongeng berisi tokoh, tempat, masalah, dan penyelesaian.","Tuliskan amanat dari cerita Kancil dan Buaya."],
      ["Matematika","🔢","Nilai tempat","Angka dua angka terdiri puluhan dan satuan. Angka 42 = 4 puluhan dan 2 satuan.","35 = 30 + 5."],
      ["Matematika","✖️","Perkalian dan pembagian","Perkalian adalah penjumlahan berulang; pembagian membagi sama rata.","3 × 4 = 12; 12 ÷ 3 = 4."],
      ["IPAS","🌿","Tumbuh-tumbuhan","Tumbuhan memerlukan cahaya matahari, air, udara, dan tanah untuk tumbuh.","Amati perubahan kecambah selama satu minggu."],
      ["IPAS","🐾","Hewan di sekitar","Hewan memiliki tempat hidup, makanan, dan cara bergerak yang berbeda.","Ikan berenang dan ayam berjalan."],
      ["Pendidikan Pancasila","🤝","Musyawarah dan gotong royong","Musyawarah adalah membahas masalah bersama untuk mencapai keputusan.","Contoh: memilih ketua kelompok dengan musyawarah."],
      ["Bahasa Inggris","A","Keluarga dan warna","Kata: father, mother, brother, sister, red, blue, yellow.","This is my mother. She likes blue."]
    ],
    3: [
      ["Bahasa Indonesia","📰","Jenis teks informasi","Teks informasi menyampaikan fakta. Judul, informasi pokok, dan gambar membantu memahami isi.","Baca teks kupu-kupu lalu temukan gagasan utamanya."],
      ["Bahasa Indonesia","🎭","Puisi anak","Puisi menggunakan pilihan kata indah dan dapat mempunyai rima.","Contoh rima: senang—berbunga, terang—bintang."],
      ["Matematika","➗","Operasi hitung campuran","Kerjakan perkalian atau pembagian dahulu, lalu penjumlahan atau pengurangan.","5 + 3 × 2 = 5 + 6 = 11."],
      ["Matematika","📐","Bangun datar dan keliling","Keliling adalah jumlah panjang seluruh sisi bangun.","Keliling persegi 4 × 5 cm = 20 cm."],
      ["Matematika","⏰","Waktu dan pecahan","Jam digital dan analog menunjukkan waktu; pecahan menunjukkan bagian dari keseluruhan.","½ artinya satu dari dua bagian sama besar."],
      ["IPAS","🪨","Benda dan perubahan wujud","Benda dapat padat, cair, atau gas. Benda dapat berubah wujud melalui pemanasan atau pendinginan.","Es mencair menjadi air saat dipanaskan."],
      ["IPS","🗺️","Lingkungan dan denah","Denah membantu menemukan lokasi; mata angin menunjukan arah.","Utara, selatan, timur, barat."],
      ["Seni dan Budaya","🎵","Gerak, lagu, dan ritme","Lagu mempunyai irama, tempo, dan tinggi-rendah nada.","Tepukkan dua kali untuk ketukan pendek."]
    ],
    4: [
      ["Bahasa Indonesia","📝","Paragraf dan ide pokok","Ide pokok adalah inti paragraf. Kalimat penjelas mendukung ide pokok.","Tandai satu kalimat utama dalam setiap paragraf."],
      ["Bahasa Indonesia","📣","Membuat laporan","Laporan memuat pengamatan, tempat, waktu, hasil, dan kesimpulan.","Laporkan pertumbuhan tanaman dengan tanggal dan ukuran."],
      ["Matematika","🍕","Pecahan dan desimal","Pecahan dapat diubah menjadi bentuk desimal; penyebut menunjukkan jumlah bagian.","½ = 0,5; ¼ = 0,25."],
      ["Matematika","📏","Pengukuran dan luas","Luas persegi = sisi × sisi. Luas persegi panjang = panjang × lebar.","3 cm × 5 cm = 15 cm²."],
      ["IPAS","⚡","Gaya dan energi","Gaya dapat mengubah gerak atau bentuk benda. Energi meliputi cahaya, panas, bunyi, dan listrik.","Dorongan dan tarikan adalah gaya."],
      ["IPAS","🌍","Siklus air","Air menguap, membentuk awan, turun sebagai hujan, lalu mengalir kembali.","Evaporasi adalah penguapan air oleh matahari."],
      ["IPS","🏛️","Keragaman Indonesia","Indonesia kaya suku, bahasa, budaya, dan makanan daerah.","Menghormati perbedaan memperkuat persatuan."],
      ["Bahasa Inggris","🗣️","Daily activities","Gunakan simple present untuk kegiatan rutin: “I wake up at six.”","I brush my teeth every morning."]
    ],
    5: [
      ["Bahasa Indonesia","🗞️","Iklan, teks, dan ikhtisar","Iklan menyampaikan pesan persuasif dengan sasaran dan fakta yang jelas. Ikhtisar merangkum isi penting.","Temukan fakta dan ajakan dalam sebuah iklan."],
      ["Bahasa Indonesia","🎤","Wawancara","Wawancara menggunakan pertanyaan terbuka, tertutup, dan sopan untuk menggali informasi.","Contoh: Bagaimana cara Anda merawat tanaman?"],
      ["Matematika","📊","Data dan diagram","Data dapat disajikan dalam tabel, diagram batang, dan diagram garis.","Baca sumbu, judul, dan satuan sebelum menafsirkan diagram."],
      ["Matematika","📐","Volume bangun ruang","Volume kubus = s³. Volume balok = panjang × lebar × tinggi.","Kubus dengan rusuk 3 cm mempunyai volume 27 cm³."],
      ["IPAS","🌋","Bumi dan alam semesta","Permukaan bumi berubah akibat erosi, gempa, gunung berapi, dan aktivitas manusia.","Gempa adalah getaran kulit bumi."],
      ["IPAS","🍎","Sistem pencernaan","Makanan diproses di mulut, lambung, usus, dan dikelola menjadi zat guna serta sisa.","Serat membantu proses pencernaan."],
      ["IPS","🌊","Kenampakan alam Indonesia","Indonesia mempunyai dataran rendah, dataran tinggi, pegunungan, sungai, dan laut.","Hubungkan kenampakan alam dengan mata pencarian."],
      ["Pendidikan Pancasila","⚖️","Hak dan kewajiban","Hak diterima warga, kewajiban dilakukan secara tanggung jawab.","Hak mendapat pelajaran; kewajiban menghormati guru."]
    ],
    6: [
      ["Bahasa Indonesia","🎓","Teks laporan dan pidato","Laporan berisi fakta. Pidato memuat pembuka, isi, ajakan, dan penutup.","Susun pidato singkat bertema menjaga lingkungan."],
      ["Bahasa Indonesia","📓","Gaya bahasa dan cerita","Gaya bahasa membuat tulisan hidup. Cerita memuat tema, tokoh, latar, alur, dan amanat.","Contoh majas: Seperti bintang di langit."],
      ["Matematika","➗","Bilangan bulat dan pecahan","Operasikan bilangan positif dan negatif; sederhanakan serta urutkan pecahan.","−5 lebih kecil dari −2."],
      ["Matematika","⭕","Lingkaran dan skala","Lingkaran memiliki jari-jari, diameter, dan keliling. Skala menunjukkan perbandingan jarak peta.","Keliling = π × diameter."],
      ["IPAS","🔋","Listrik, magnet, dan tata surya","Rangkaian listrik memerlukan sumber, kabel, dan beban tertutup. Tata surya terdiri Matahari dan benda-benda langit.","Magnet menarik benda berbahan besi."],
      ["IPAS","🫁","Peredaran darah dan pernapasan","Jantung memompa darah; paru-paru membantu pertukaran oksigen dan karbon dioksida.","Oksigen dibawa darah ke seluruh tubuh."],
      ["IPS","🌐","Globalisasi","Globalisasi mempercepat pertukaran barang, informasi, dan budaya.","Internet dapat menghubungkan siswa lintas negara."],
      ["Bahasa Inggris","✈️","Directions and professions","Gunakan “Go straight”, “Turn left/right” untuk arah dan tanya profesi.","A teacher works at school."]
    ]
  },
  SMP: {
    7: [
      ["Bahasa Indonesia","📖","Teks deskripsi dan narasi","Teks deskripsi menggambarkan objek; narasi menceritakan rangkaian kejadian.","Tentukan gagasan pokok dan urutan peristiwa."],
      ["Bahasa Indonesia","🧾","Puisi rakyat","Pantun memiliki sampiran dan isi; gurindam berisi nasihat dalam dua baris berpasangan.","Cari rima akhir dan pesan dalam pantun."],
      ["Matematika","🔢","Bilangan bulat dan rasional","Bilangan bulat meliputi negatif, nol, positif. Operasikan dengan garis bilangan.","−3 + 5 = 2."],
      ["Matematika","📐","Aljabar dan himpunan","Pengenalan variabel, suku, bentuk aljabar, serta operasi himpunan.","x + 3x = 4x; irisan A ∩ B adalah anggota bersama."],
      ["IPA","🌱","Objek IPA dan klasifikasi makhluk hidup","IPA menelaah gejala alam melalui pengamatan. Makhluk hidup diklasifikasikan berdasarkan ciri.","Sebutkan ciri makhluk hidup: bergerak, bernapas, tumbuh."],
      ["IPA","⚖️","Pengukuran dan zat","Pengukuran memerlukan besaran, satuan, dan alat. Zat berwujud padat, cair, gas.","Rumus massa jenis: ρ = m/V."],
      ["IPS","🗺️","Keruangan dan interaksi sosial","Keruangan berkaitan lokasi, jarak, dan wilayah. Manusia berinteraksi dalam keluarga dan masyarakat.","Jarak memengaruhi intensitas interaksi."],
      ["Informatika","💻","Teknologi dan algoritma","Algoritma adalah langkah sistematis untuk menyelesaikan masalah.","Urutan memasak mie adalah algoritma harian."]
    ],
    8: [
      ["Bahasa Indonesia","🗣️","Berita dan iklan","Berita memuat 5W+1H. Iklan memengaruhi pembaca dengan fakta dan bahasa menarik.","Pastikan sumber berita dapat dipercaya."],
      ["Bahasa Indonesia","📚","Teks eksposisi dan puisi","Eksposisi menyampaikan pendapat berdasarkan argumen. Puisi menyampaikan makna melalui diksi.","Temukan tesis, argumen, dan penegasan ulang."],
      ["Matematika","📊","Relasi, fungsi, dan persamaan","Relasi menghubungkan dua himpunan. Fungsi memberikan tepat satu pasangan untuk setiap domain.","f(x) = 2x + 1; f(3) = 7."],
      ["Matematika","📐","Teorema Pythagoras","Pada segitiga siku-siku, kuadrat sisi miring sama dengan jumlah kuadrat dua sisi lain.","3² + 4² = 5²."],
      ["IPA","🫀","Sistem tubuh manusia","Sistem gerak, pencernaan, pernapasan, dan peredaran darah saling mendukung.","Oksigen berdifusi di paru-paru."],
      ["IPA","🧲","Gaya, tekanan, dan usaha","Usaha terjadi saat gaya menyebabkan perpindahan: W = F × s.","Tekanan = gaya luas permukaan."],
      ["IPS","🏛️","Kolonialisme dan pergerakan nasional","Pelajari dampak kolonialisme, organisasi pergerakan, dan tokoh kebangsaan.","Kebangkitan nasional diperingati 20 Mei."],
      ["Bahasa Inggris","🌐","Past experience","Simple past membahas kejadian yang selesai: verb 2 atau did + verb 1.","I visited the museum yesterday."]
    ],
    9: [
      ["Bahasa Indonesia","📝","Teks laporan percobaan dan pidato","Laporan percobaan berisi tujuan, alat/bahan, langkah, hasil, dan simpulan.","Gunakan kalimat pasif dan istilah ilmiah secara tepat."],
      ["Bahasa Indonesia","🎭","Cerita pendek dan tanggapan","Cerpen memuat konflik dan resolusi. Tanggapan memuat pujian, kritik, dan saran yang etis.","Jelaskan amanat dengan bukti dari teks."],
      ["Matematika","📈","Persamaan kuadrat","Persamaan kuadrat ax² + bx + c = 0 dapat diselesaikan dengan pemfaktoran, rumus, atau grafik.","x² − 5x + 6 = 0 mempunyai akar 2 dan 3."],
      ["Matematika","📊","Bangun ruang sisi lengkung","Tabung, kerucut, dan bola memiliki rumus luas permukaan serta volume.","V tabung = πr²t."],
      ["IPA","⚡","Kelistrikan dan kemagnetan","Arus, tegangan, hambatan, serta medan magnet dijelaskan oleh rumus dasar.","Hukum Ohm: V = I × R."],
      ["IPA","🧬","Reproduksi dan pewarisan sifat","Gen, kromosom, dan alel menentukan sifat keturunan.","Persilangan dapat dihitung menggunakan diagram Punnett."],
      ["IPS","🌏","Perubahan sosial dan ekonomi","Modernisasi, urbanisasi, dan perdagangan global memengaruhi kehidupan.","Analisis dampak positif dan negatif perubahan sosial."],
      ["Informatika","🌐","Internet dan keamanan digital","Gunakan kata sandi kuat, autentikasi dua langkah, serta cek sumber informasi.","Jangan membagikan OTP atau data pribadi."]
    ]
  },
  SMA: {
    10: [
      ["Bahasa Indonesia","📚","Teks laporan hasil observasi","Struktur: pernyataan umum, deskripsi bagian, deskripsi manfaat. Bersifat objektif.","Bedakan fakta, opini, dan istilah ilmiah."],
      ["Bahasa Indonesia","🎭","Puisi dan cerpen","Analisis tema, diksi, majas, tipografi, sudut pandang, alur, dan latar.","Tafsirkan makna puisi tanpa mengabaikan bukti teks."],
      ["Matematika","📐","Eksponen, logaritma, dan fungsi","Eksponen adalah perpangkatan berulang; logaritma adalah kebalikan eksponen.","log₁₀100 = 2 karena 10² = 100."],
      ["Matematika","📈","Trigonometri dasar","Sinus, cosinus, dan tangen menghubungkan sudut dengan perbandingan sisi segitiga.","sin θ = sisi depan/sisi miring."],
      ["Fisika","⚖️","Besaran, pengukuran, dan vektor","Besaran mempunyai nilai dan satuan; vektor mempunyai besar serta arah.","Gunakan aturan analisis dimensi dan angka penting."],
      ["Kimia","⚗️","Struktur atom dan tabel periodik","Atom terdiri proton, neutron, elektron; konfigurasi elektron menentukan sifat unsur.","Nomor atom menunjukkan jumlah proton."],
      ["Biologi","🧬","Sel dan sistem kehidupan","Sel adalah unit kehidupan. Sel tumbuhan dan hewan memiliki struktur berbeda.","Mitokondria menghasilkan energi sel."],
      ["Sejarah","🏛️","Manusia dan jalannya sejarah","Sejarah ditulis berdasarkan sumber primer/sekunder dengan berpikir kronologis dan sinkronis.","Bedakan kronologi dan periodisasi."],
      ["Informatika","💻","Berpikir komputasional","Penguraian, pengenalan pola, abstraksi, dan algoritma membantu memecahkan masalah.","Buat algoritma pencarian buku di perpustakaan."]
    ],
    11: [
      ["Bahasa Indonesia","📝","Teks prosedur dan eksplanasi","Prosedur menjelaskan cara melakukan sesuatu; eksplanasi menjelaskan proses fenomena.","Gunakan konjungsi kronologis dan kausal."],
      ["Bahasa Indonesia","📖","Ceramah dan cerpen lanjutan","Ceramah memuat tesis, argumentasi, dan rekomendasi dengan etika berbahasa.","Bedakan fakta dan pendapat dalam pidato."],
      ["Matematika","∫","Fungsi, matriks, dan kalkulus dasar","Pelajari komposisi fungsi, matriks, transformasi, limit, dan turunan dasar.","(f ∘ g)(x) = f(g(x)); turunan x² adalah 2x."],
      ["Matematika","🎲","Statistika dan peluang","Statistika mengolah data; peluang mengukur kemungkinan kejadian.","P(A) = banyak kejadian A / banyak seluruh hasil."],
      ["Fisika","⚡","Gerak, gaya, dan dinamika","Hukum Newton menjelaskan hubungan gaya, massa, dan percepatan.","ΣF = m × a."],
      ["Kimia","🧪","Stoikiometri dan larutan","Stoikiometri menghitung perbandingan mol reaktan dan produk.","n = m/Mr; konsentrasi molar M = mol/V(L)."],
      ["Biologi","🌿","Sel, metabolisme, dan genetika","Enzim mempercepat reaksi; fotosintesis dan respirasi mengubah energi.","Fotosintesis: CO₂ + H₂O → glukosa + O₂."],
      ["Sejarah","🌏","Pergerakan bangsa Indonesia","Uraikan kolonialisme, organisasi pergerakan, nasionalisme, dan kemerdekaan.","Sumpah Pemuda lahir pada 28 Oktober 1928."],
      ["Bahasa Inggris","🌐","Academic English","Gunakan kalimat formal, cause-effect, comparison, dan evidence dalam teks akademik.","The data indicate that...; because/although/as a result."]
    ],
    12: [
      ["Bahasa Indonesia","🎓","Novel, kritik, dan esai","Analisis unsur intrinsik-ekstrinsik, kritik sastra, argumen, serta struktur esai.","Gunakan tesis yang jelas dan bukti yang relevan."],
      ["Bahasa Indonesia","📰","Artikel dan surat resmi","Artikel ilmiah populer menyajikan fakta dan opini secara logis; surat resmi memakai format baku.","Perhatikan kop surat, alamat, identitas, dan lampiran."],
      ["Matematika","📉","Integral dan statistik lanjutan","Integral menghitung luas/akumulasi; distribusi dan inferensi membantu menafsirkan data.","∫2x dx = x² + C."],
      ["Matematika","➗","Dimensi tiga dan transformasi","Hitung jarak, sudut, proyeksi, serta transformasi geometri bidang dan ruang.","Gunakan proyeksi orthogonal dan koordinat Kartesius."],
      ["Fisika","🌊","Gelombang, listrik, dan fisika modern","Pelajari gelombang, induksi, arus bolak-balik, relativitas, dan kuantum dasar.","Gelombang memindahkan energi, bukan selalu materi."],
      ["Kimia","⚗️","Termokimia, laju, dan kesetimbangan","Energi reaksi, faktor laju, serta arah kesetimbangan dijelaskan secara kuantitatif.","Katalis mempercepat laju tanpa mengubah kesetimbangan."],
      ["Biologi","🌍","Ekologi, evolusi, dan bioteknologi","Evolusi menjelaskan keragaman hayati; ekologi mempelajari interaksi organisme dan lingkungan.","Jelaskan rantai makanan, aliran energi, dan daur unsur."],
      ["Sejarah","🌐","Sejarah kontemporer dan global","Analisis perang dunia, gerakan dekolonisasi, Perang Dingin, dan globalisasi.","Gunakan konsep kesinambungan, perubahan, dan dampak."],
      ["Kewirausahaan","💡","Ide, bisnis, dan perencanaan","Temukan masalah, validasi kebutuhan, buat proposal nilai, anggaran, dan strategi pemasaran.","Uji prototype secara sederhana sebelum meluncurkan produk."]
    ]
  }
};

const gradeRanges={SD:[1,6],SMP:[7,9],SMA:[10,12]};
const defaultProfile={name:'Teman Kayoko',level:'SD',grade:'1',bio:'',avatar:'',gallery:[]};
let profile=loadProfile();let activePage='beranda';let activeLevel='SD';let toastTimer;

function loadProfile(){try{return{...defaultProfile,...JSON.parse(localStorage.getItem('kayokoProfile')||'{}')}}catch{return{...defaultProfile}}}
function saveProfile(){try{localStorage.setItem('kayokoProfile',JSON.stringify(profile))}catch{showToast('Penyimpanan penuh. Coba foto yang lebih kecil ya!')}}
function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2500)}

function switchPage(page,animate=true){if(!document.getElementById(`page-${page}`))return;if(page===activePage){document.querySelector('.main-nav').classList.remove('open');return}const render=()=>{document.querySelectorAll('.page').forEach(el=>el.classList.toggle('active',el.id===`page-${page}`));document.querySelectorAll('.nav-link').forEach(el=>el.classList.toggle('active',el.dataset.page===page));activePage=page;document.querySelector('.main-nav').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});if(page==='profil')fillProfileForm();if(page==='galeri')renderGallery()};if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const wipe=document.getElementById('pageWipe');wipe.classList.remove('wiping');void wipe.offsetWidth;wipe.classList.add('wiping');setTimeout(render,250);setTimeout(()=>wipe.classList.remove('wiping'),600)}else render()}

document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>switchPage(button.dataset.page)));
document.querySelectorAll('.level-card').forEach(card=>card.addEventListener('click',()=>{setLevel(card.dataset.level);switchPage('materi')}));
document.querySelectorAll('[data-filter-level]').forEach(tab=>tab.addEventListener('click',()=>setLevel(tab.dataset.filterLevel)));

function setLevel(level){activeLevel=level;document.querySelectorAll('[data-filter-level]').forEach(t=>t.classList.toggle('selected',t.dataset.filterLevel===level));const [start,end]=gradeRanges[level];const select=document.getElementById('gradeSelect');select.innerHTML=Array.from({length:end-start+1},(_,i)=>`<option value="${start+i}">Kelas ${start+i}</option>`).join('');const current=Number(select.value);const chosen=lessonTopics[level][current]?current:start;select.value=String(chosen);renderLessons()}

document.getElementById('gradeSelect').addEventListener('change',renderLessons);

function renderLessons(){const grade=Number(document.getElementById('gradeSelect').value);const level=activeLevel;const topics=lessonTopics[level][grade]||[];const icons={SD:'🌱',SMP:'🔬',SMA:'🚀'};document.getElementById('gradeEmoji').textContent=icons[level];document.getElementById('gradeTitle').textContent=`Kelas ${grade} ${level}`;document.getElementById('lessonCount').textContent=`${topics.length} topik lengkap`;document.getElementById('lessonGrid').innerHTML=topics.map((lesson,index)=>`<article class="lesson-card" style="animation-delay:${index*45}ms"><div class="lesson-top"><span class="subject-icon">${lesson[1]}</span><span class="lesson-tag">${level} · KELAS ${grade}</span></div><h3>${lesson[0]}: ${lesson[2]}</h3><p>${lesson[3]}</p><div class="lesson-example"><b>Contoh / latihan</b><span>${lesson[4]}</span></div><button class="lesson-open" data-lesson="${lesson[0]} — ${lesson[2]}">Pahami topik <span>→</span></button></article>`).join('');document.querySelectorAll('.lesson-open').forEach(button=>button.addEventListener('click',()=>showToast(`${button.dataset.lesson} — lanjutkan dengan contoh di atas!`)))}

document.getElementById('lessonGrid').addEventListener('click',event=>{const btn=event.target.closest('.lesson-open');if(btn)showToast(`${btn.dataset.lesson} — lanjutkan dengan contoh di atas!`)});

function fillProfileForm(){document.getElementById('nameInput').value=profile.name==='Teman Kayoko'?'':profile.name;document.getElementById('profileLevel').value=profile.level;updateProfileGrades();document.getElementById('profileGrade').value=profile.grade;document.getElementById('bioInput').value=profile.bio||'';document.getElementById('displayName').textContent=profile.name;document.getElementById('displayGrade').textContent=profile.grade?`Kelas ${profile.grade} ${profile.level}`:'Sahabat belajar';document.getElementById('navName').textContent=profile.name==='Teman Kayoko'?'Profilku':profile.name.split(' ')[0];setAvatar(profile.avatar)}
function updateProfileGrades(){const level=document.getElementById('profileLevel').value;const [start,end]=gradeRanges[level];const select=document.getElementById('profileGrade');select.innerHTML=Array.from({length:end-start+1},(_,i)=>`<option value="${start+i}">Kelas ${start+i}</option>`).join('');if(![...select.options].some(o=>o.value===profile.grade))select.value=String(start);else select.value=profile.grade}
document.getElementById('profileLevel').addEventListener('change',updateProfileGrades);
function setAvatar(src){const avatar=document.getElementById('profileAvatar');const nav=document.getElementById('navAvatar');if(src){avatar.innerHTML=`<img src="${src}" alt="Foto profil"/>`;nav.innerHTML=`<img src="${src}" alt=""/>`}else{avatar.textContent='🌸';nav.textContent='🌸'}}

document.getElementById('profileForm').addEventListener('submit',event=>{event.preventDefault();profile.name=document.getElementById('nameInput').value.trim()||'Teman Kayoko';profile.level=document.getElementById('profileLevel').value;profile.grade=document.getElementById('profileGrade').value;profile.bio=document.getElementById('bioInput').value.trim();saveProfile();fillProfileForm();const message=document.getElementById('saveMessage');message.textContent='Profil berhasil disimpan!';setTimeout(()=>message.textContent='',2600);showToast('Profilmu berhasil diperbarui!')});

function readImage(file,callback){if(!file.type.startsWith('image/')){showToast('Pilih file gambar ya.');return}const reader=new FileReader();reader.onload=()=>callback(reader.result);reader.readAsDataURL(file)}
document.getElementById('avatarInput').addEventListener('change',event=>{const file=event.target.files[0];if(!file)return;readImage(file,data=>{profile.avatar=data;saveProfile();setAvatar(data);showToast('Foto profil berhasil diganti!')});event.target.value=''});

function renderGallery(){const grid=document.getElementById('galleryGrid');const photos=profile.gallery||[];document.getElementById('galleryCount').textContent=`${photos.length} foto tersimpan di perangkat ini`;document.getElementById('emptyGallery').classList.toggle('show',photos.length===0);grid.innerHTML=photos.map((photo,index)=>`<div class="gallery-item" style="animation-delay:${index*40}ms"><img src="${photo.src}" alt="${escapeHtml(photo.name)}"/><span class="gallery-caption">${escapeHtml(photo.name)}</span><button class="delete-photo" data-delete-photo="${index}" aria-label="Hapus foto">×</button></div>`).join('')}
function escapeHtml(text){return String(text).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function uploadPhotos(files){const selected=[...files].slice(0,12);if(!selected.length)return;let completed=0;selected.forEach(file=>readImage(file,data=>{profile.gallery=profile.gallery||[];profile.gallery.unshift({src:data,name:file.name.replace(/\.[^.]+$/,'')||'Momen belajar'});completed++;if(completed===selected.length){saveProfile();renderGallery();showToast(`${completed} foto ditambahkan ke galeri!`)}}))}
document.querySelectorAll('input[type="file"][accept="image/*"]').forEach(input=>{if(input.id==='avatarInput')return;input.addEventListener('change',event=>{uploadPhotos(event.target.files);event.target.value=''})});
document.getElementById('galleryGrid').addEventListener('click',event=>{const button=event.target.closest('[data-delete-photo]');if(!button)return;profile.gallery.splice(Number(button.dataset.deletePhoto),1);saveProfile();renderGallery();showToast('Foto dihapus dari galeri.')});
document.getElementById('mobileMenu').addEventListener('click',()=>document.querySelector('.main-nav').classList.toggle('open'));setLevel('SD');fillProfileForm();renderGallery();
