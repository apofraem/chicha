(() => {
  const monoStyle = document.createElement('style');
  monoStyle.textContent = `
    .header-actions{display:flex;align-items:center;gap:12px}
    .theme-toggle{display:inline-flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid #d5d5d5;border-radius:22px;background:#fff;color:#111;font:700 11px 'DM Sans',sans-serif;cursor:pointer;transition:background .2s,color .2s}
    .theme-toggle span:first-child{font-size:15px}
    body[data-theme="mono"]{--ink:#111;--muted:#555;--pink:#111;--pink-dark:#000;--cream:#f4f4f4;--yellow:#ddd;--line:#d3d3d3;--lav:#eee;--mint:#eee;--shadow:0 12px 32px rgba(0,0,0,.13);background:#fff;color:#111}
    body[data-theme="mono"],body[data-theme="mono"] *{color-scheme:light}
    body[data-theme="mono"] .topbar,body[data-theme="mono"] .profile-form,body[data-theme="mono"] .profile-card,body[data-theme="mono"] .lesson-card,body[data-theme="mono"] .filter-panel,body[data-theme="mono"] .quote-card,body[data-theme="mono"] .welcome-strip,body[data-theme="mono"] .footer,body[data-theme="mono"] .gallery-item,body[data-theme="mono"] .empty-gallery,body[data-theme="mono"] .lesson-intro,body[data-theme="mono"] .lesson-modal{background:#fff!important;color:#111!important;border-color:#cfcfcf!important}
    body[data-theme="mono"] .hero,body[data-theme="mono"] .level-sd,body[data-theme="mono"] .level-smp,body[data-theme="mono"] .level-sma,body[data-theme="mono"] .study-tip,body[data-theme="mono"] .profile-cover,body[data-theme="mono"] .heading-doodle{background:#f1f1f1!important;color:#111!important;border-color:#ccc!important}
    body[data-theme="mono"] .lesson-tag,body[data-theme="mono"] .subject-icon,body[data-theme="mono"] .filter-tab,body[data-theme="mono"] .note-icon,body[data-theme="mono"] .lesson-modal-icon,body[data-theme="mono"] .lesson-modal-section,body[data-theme="mono"] .lesson-modal-practice{background:#eee!important;color:#111!important;border-color:#bbb!important}
    body[data-theme="mono"] .primary,body[data-theme="mono"] .brand-mark,body[data-theme="mono"] .page-wipe,body[data-theme="mono"] .avatar-edit{background:#111!important;color:#fff!important;box-shadow:none!important}
    body[data-theme="mono"] .brand b,body[data-theme="mono"] .hero h1 span,body[data-theme="mono"] .subpage-heading h1 span,body[data-theme="mono"] .nav-link.active,body[data-theme="mono"] .lesson-open,body[data-theme="mono"] .link-arrow span,body[data-theme="mono"] .quote-mark,body[data-theme="mono"] .sparkle{color:#111!important}
    body[data-theme="mono"] .hero-art{filter:grayscale(1)}
    body[data-theme="mono"] .theme-toggle{background:#111;color:#fff;border-color:#111}
    body[data-theme="mono"] .toast{background:#111;color:#fff}
    .lesson-modal-backdrop{position:fixed;inset:0;z-index:110;background:rgba(20,18,22,.64);display:grid;place-items:center;padding:18px;animation:pageIn .2s both}
    .lesson-modal{width:min(620px,100%);max-height:min(88vh,820px);overflow:auto;background:#fff;border:1px solid #eee7df;border-radius:20px;padding:26px;box-shadow:0 24px 80px #0003;color:#302d37}
    .lesson-modal-head{display:flex;align-items:flex-start;gap:14px}.lesson-modal-icon{width:48px;height:48px;border-radius:15px;background:#fff1e2;display:grid;place-items:center;font-size:25px;flex:none}
    .lesson-modal h2{font:900 22px/1.25 Nunito,sans-serif;margin:2px 0 6px}.lesson-modal-subject{font-size:10px;font-weight:800;letter-spacing:1px;color:#a49aa0;text-transform:uppercase}.lesson-modal-close{margin-left:auto;width:36px;height:36px;border:0;border-radius:50%;background:#f5f2ef;font-size:21px;cursor:pointer;color:inherit;flex:none}
    .lesson-modal-section{margin-top:16px;padding:16px;border-radius:13px;background:#faf8f5}.lesson-modal-section h3{margin:0 0 7px;font:900 13px Nunito}.lesson-modal-section p{margin:0;color:#6e6870;font-size:13px;line-height:1.75;white-space:pre-wrap}.lesson-modal-practice{margin-top:14px;padding:16px;border:1px dashed #e6d9cd;border-radius:13px}.lesson-modal-practice b{display:block;font:900 13px Nunito;margin-bottom:6px}.lesson-modal-practice p{font-size:12px;line-height:1.65;color:#777;margin:0;white-space:pre-wrap}.lesson-modal-actions{display:flex;justify-content:flex-end;margin-top:18px}
    .lesson-example{margin-top:12px;padding:10px;border-radius:9px;background:#faf8f5}.lesson-example b,.lesson-example span{display:block}.lesson-example b{font-size:9px;color:#9a8d8e;margin-bottom:4px}.lesson-example span{font-size:10px;line-height:1.55;color:#777}
    @media(max-width:600px){.header-actions{gap:7px}.theme-toggle{padding:7px 9px}.theme-toggle #themeLabel{display:none}.lesson-modal{padding:20px}.lesson-modal h2{font-size:19px}}
  `;
  document.head.append(monoStyle);

  const extraCurriculum = {
    SD: {
      1: [
        ['Bahasa Indonesia','🔡','Mengenal kata benda dan kata kerja','Kata benda menamai orang, tempat, atau barang; kata kerja menjelaskan tindakan. Kalimat sederhana biasanya memiliki siapa dan melakukan apa.','Lingkari kata benda dan garis bawahi kata kerja: “Rani membaca buku.”','Pada contoh, Rani adalah nama orang dan buku adalah benda. Membaca menunjukkan kegiatan. Coba buat tiga kalimat tentang kegiatanmu di sekolah.'],
        ['Matematika','🧮','Bentuk, pola, dan pengukuran awal','Bentuk datar dapat dikenali dari sisi dan sudutnya. Pola adalah susunan yang berulang secara teratur.','Lanjutkan pola: ○ △ ○ △ __ __. Bandingkan pensil panjang dan pendek.','Lingkaran dan segitiga bergantian, jadi dua bentuk berikutnya adalah ○ lalu △. Pengukuran awal dapat dilakukan dengan membandingkan benda atau memakai satuan tidak baku seperti klip kertas.'],
        ['IPAS','☀️','Cuaca dan kebutuhan sehari-hari','Cuaca dapat cerah, berawan, hujan, atau berangin. Keadaan cuaca memengaruhi pakaian dan kegiatan yang kita pilih.','Gambarkan cuaca hari ini dan pilih benda yang perlu dibawa.','Saat hujan, kita dapat membawa payung dan memakai jas hujan. Amati langit pagi dan sore, lalu catat apakah cuacanya berubah.'],
        ['Pendidikan Pancasila','🤝','Berbagi dan bersikap baik','Sikap baik membuat kegiatan bersama terasa aman. Kita dapat mendengarkan, berbagi, meminta izin, dan meminta maaf.','Apa yang kamu lakukan jika teman tidak kebagian alat mewarnai?','Tawarkan alat secara bergantian dan tunggu giliran. Bersikap adil berarti memberi kesempatan kepada setiap teman.']
      ],
      2: [
        ['Bahasa Indonesia','📝','Menyusun paragraf pendek','Paragraf terdiri atas beberapa kalimat yang membahas satu gagasan. Urutan kalimat membantu pembaca memahami cerita.','Susun: “Aku menyiramnya. Bunga itu tumbuh. Aku menanam biji.”','Urutan yang masuk akal: menanam biji, menyiramnya, lalu bunga tumbuh. Gunakan kata penghubung seperti kemudian dan setelah itu.'],
        ['Matematika','💰','Uang dan pemecahan masalah','Nilai uang membantu kita menghitung harga dan kembalian. Jumlahkan nilai setiap lembar atau koin dengan teliti.','Harga roti Rp4.000 dan susu Rp3.000. Berapa total belanja?','Totalnya Rp4.000 + Rp3.000 = Rp7.000. Jika membayar Rp10.000, kembaliannya Rp3.000.'],
        ['IPAS','🌿','Bagian tumbuhan dan kegunaannya','Akar menyerap air, batang menyangga tumbuhan, daun membantu tumbuhan membuat makanan, dan bunga dapat berkembang menjadi buah.','Amati satu tumbuhan dan gambar akar, batang, serta daunnya.','Tidak semua akar terlihat karena berada di tanah. Jangan mencabut tumbuhan; amati tanaman dalam pot atau gambar yang tersedia.'],
        ['Bahasa Inggris','🔤','Angka dan benda di kelas','Gunakan angka satu sampai dua puluh dan nama benda kelas seperti book, pencil, chair, dan bag.','Hitung: “I have three pencils.”','Three berarti tiga. Coba ubah kalimat dengan angka dan benda lain: “I have two books.”']
      ],
      3: [
        ['Bahasa Indonesia','🧭','Petunjuk dan urutan kegiatan','Teks petunjuk berisi langkah yang disusun berurutan. Kata pertama, lalu, kemudian, dan akhirnya membantu pembaca.','Tuliskan tiga langkah mencuci tangan.','Contoh: basahi tangan, gunakan sabun, gosok seluruh bagian, bilas, lalu keringkan. Langkah harus jelas dan tidak melompat-lompat.'],
        ['Matematika','✖️','Perkalian sebagai kelompok sama banyak','Perkalian meringkas penjumlahan berulang dari kelompok yang ukurannya sama.','Ada 4 piring, masing-masing berisi 3 kue. Berapa kue semuanya?','Jumlahnya 3 + 3 + 3 + 3 = 12, atau 4 × 3 = 12. Gambar kelompok untuk membantu menghitung.'],
        ['IPAS','🌦️','Sumber daya alam dan lingkungan','Air, tanah, tumbuhan, dan sinar matahari bermanfaat bagi kehidupan. Sumber daya perlu digunakan dengan hemat dan dijaga kebersihannya.','Sebutkan dua cara menghemat air di rumah.','Matikan keran saat tidak digunakan dan gunakan air secukupnya. Sampah pada saluran air dapat menyebabkan lingkungan kotor dan banjir.'],
        ['IPS','🏘️','Kegiatan dan pekerjaan di lingkungan','Warga melakukan pekerjaan berbeda untuk memenuhi kebutuhan bersama. Setiap pekerjaan memiliki alat dan tempat kerja tertentu.','Cocokkan: dokter—rumah sakit; petani—___.','Petani bekerja di sawah atau kebun. Pekerjaan saling membantu: petani menghasilkan bahan pangan dan pedagang menyalurkannya.']
      ],
      4: [
        ['Bahasa Indonesia','🔎','Membandingkan fakta dan pendapat','Fakta dapat diperiksa kebenarannya. Pendapat berisi penilaian atau perasaan seseorang.','“Air membeku pada suhu 0°C” fakta; “Es krim cokelat paling enak” pendapat.','Cari kata penanda pendapat seperti menurut saya, sebaiknya, atau paling. Pastikan sumber dan bukti sebelum menyebut suatu kalimat sebagai fakta.'],
        ['Matematika','➗','Faktor, kelipatan, dan pembagian','Faktor membagi suatu bilangan tanpa sisa. Kelipatan diperoleh dengan mengalikan bilangan dengan bilangan bulat.','Faktor dari 12 antara lain 1, 2, 3, 4, 6, dan 12.','Karena 12 ÷ 3 = 4 tanpa sisa, 3 merupakan faktor 12. Kelipatan 4 adalah 4, 8, 12, 16, dan seterusnya.'],
        ['IPAS','🔌','Rangkaian listrik sederhana dan keselamatan','Rangkaian tertutup memungkinkan arus mengalir dari sumber melalui kabel menuju beban. Listrik harus digunakan dengan aman.','Mengapa lampu tidak menyala jika salah satu kabel terputus?','Jalur arus terputus sehingga rangkaian terbuka. Jangan menyentuh stopkontak atau melakukan percobaan listrik rumah tanpa pendamping dewasa.'],
        ['IPS','🗺️','Peta, legenda, dan skala sederhana','Peta menggambarkan tempat dari atas. Legenda menjelaskan simbol dan skala membandingkan jarak peta dengan jarak sebenarnya.','Jika 1 cm mewakili 1 km, jarak 3 cm pada peta berarti berapa?','Jarak sebenarnya 3 km. Periksa satuan skala dan gunakan penggaris dengan hati-hati.']
      ],
      5: [
        ['Bahasa Indonesia','🗞️','Meringkas teks dengan kata sendiri','Ringkasan mengambil gagasan utama tanpa menyalin seluruh teks. Gunakan kalimat pendek dan tetap jaga makna sumber.','Baca satu paragraf, catat gagasan pokoknya, lalu tulis ulang dalam satu kalimat.','Hapus contoh berulang dan rincian yang tidak penting. Jangan mengubah fakta atau menambahkan informasi yang tidak ada pada teks.'],
        ['Matematika','📐','Perbandingan dan skala','Perbandingan membandingkan dua besaran sejenis. Skala peta adalah perbandingan jarak pada peta terhadap jarak sebenarnya.','Skala 1:100 berarti 1 cm pada gambar mewakili 100 cm sebenarnya.','Samakan satuan sebelum menghitung. Pada skala 1:100, panjang 4 cm pada gambar menunjukkan 400 cm atau 4 m.'],
        ['IPAS','🌱','Ekosistem dan rantai makanan','Ekosistem terdiri atas makhluk hidup dan lingkungan tak hidup yang berinteraksi. Energi berpindah melalui rantai makanan.','Rumput → belalang → katak → ular. Apa yang mungkin terjadi jika rumput berkurang?','Belalang dapat kekurangan makanan sehingga jumlahnya turun; dampaknya dapat berlanjut ke pemangsa. Setiap makhluk hidup berperan dalam keseimbangan ekosistem.'],
        ['IPS','🇮🇩','Peristiwa menuju kemerdekaan Indonesia','Perjuangan kemerdekaan melibatkan organisasi, tokoh, dan berbagai peristiwa. Kronologi membantu memahami urutan sebab dan akibat.','Buat garis waktu tiga peristiwa penting menuju Proklamasi.','Cantumkan tanggal, peristiwa, dan dampaknya. Gunakan buku pelajaran atau sumber sejarah tepercaya untuk memeriksa tanggal.']
      ],
      6: [
        ['Bahasa Indonesia','🎤','Menyusun presentasi yang runtut','Presentasi yang baik memiliki pembukaan, beberapa gagasan utama, bukti atau contoh, dan kesimpulan. Gunakan suara jelas dan kontak mata sewajarnya.','Buat presentasi satu menit tentang kebiasaan membaca.','Mulai dengan topik, sampaikan manfaat dan contoh, lalu tutup dengan ajakan. Latihan lebih dulu agar penyampaian tidak terlalu cepat.'],
        ['Matematika','📊','Rasio, skala, dan penyajian data','Rasio membandingkan dua nilai. Data dapat diringkas dalam tabel atau diagram agar mudah dibaca.','Dari 20 siswa, 12 memilih buku cerita. Berapa persen?','12/20 × 100% = 60%. Pada diagram, tulis judul, label kategori, dan skala yang sama jaraknya.'],
        ['IPAS','🌎','Tata surya dan perubahan bumi','Planet mengorbit Matahari; rotasi bumi menyebabkan siang dan malam, sedangkan revolusi bumi bersama kemiringan sumbu berpengaruh pada musim.','Bedakan rotasi dan revolusi bumi.','Rotasi adalah perputaran bumi pada sumbunya, kira-kira satu hari. Revolusi adalah peredaran bumi mengelilingi Matahari, kira-kira satu tahun.'],
        ['IPS','🧭','Persiapan belajar mandiri di SMP','Belajar mandiri meliputi mengatur jadwal, mencatat tugas, memecah pekerjaan besar, dan meminta bantuan saat diperlukan.','Buat jadwal 30 menit membaca dan 15 menit mengulang catatan.','Pilih target yang realistis dan beri jeda singkat. Setelah belajar, cek kembali apa yang sudah dipahami dan tandai pertanyaan untuk guru.']
      ]
    },
    SMP: {
      7: [
        ['Bahasa Indonesia','📰','Teks prosedur dan laporan','Teks prosedur menjelaskan langkah; laporan pengamatan menyampaikan tujuan, metode, hasil, dan simpulan secara faktual.','Susun prosedur membuat minuman dan pastikan langkahnya tidak ambigu.','Gunakan kata kerja tindakan dan penanda urutan. Untuk laporan, bedakan hasil pengamatan dari dugaan pribadi.'],
        ['Matematika','📏','Perbandingan dan aritmetika sosial','Perbandingan senilai berubah dengan rasio tetap. Aritmetika sosial menggunakan harga, diskon, untung, dan rugi.','Harga 3 buku Rp24.000. Berapa harga 5 buku dengan harga satuan sama?','Harga satu buku Rp8.000; lima buku Rp40.000. Diskon 10% dari Rp40.000 adalah Rp4.000.'],
        ['IPA','🌿','Organisasi kehidupan dan ekosistem','Sel membentuk jaringan, jaringan membentuk organ, lalu organ bekerja dalam sistem. Organisme berinteraksi dengan lingkungannya.','Urutkan: organ, sel, sistem organ, jaringan.','Urutannya sel → jaringan → organ → sistem organ. Tingkat organisasi membantu menjelaskan fungsi tubuh secara bertahap.'],
        ['IPS','🌏','Peta Indonesia dan interaksi antarruang','Letak, kondisi alam, dan akses transportasi memengaruhi perpindahan orang, barang, dan informasi antardaerah.','Pilih satu barang yang berasal dari daerah lain dan telusuri jalur distribusinya.','Catat daerah asal, moda transportasi, pasar tujuan, dan alasan barang itu dibutuhkan. Jarak dan infrastruktur memengaruhi waktu serta biaya.']
      ],
      8: [
        ['Bahasa Indonesia','🧠','Menyusun teks eksposisi berbasis bukti','Teks eksposisi menyatakan tesis, memberikan argumen, dan menegaskan kembali posisi. Bukti membuat argumen lebih kuat.','Tuliskan pendapat tentang kebersihan sekolah dan dua bukti pendukung.','Pilih bukti yang relevan dan dapat diperiksa. Hindari menyerang orang; fokus pada gagasan, alasan, dan dampak.'],
        ['Matematika','📉','Persamaan garis lurus','Persamaan y = mx + c menunjukkan garis dengan gradien m dan titik potong sumbu-y c. Gradien mengukur perubahan y terhadap x.','Untuk y = 2x + 1, hitung y saat x = 3.','y = 2(3) + 1 = 7. Buat tabel pasangan (x,y), plot titiknya, lalu amati kemiringan garis.'],
        ['IPA','🧪','Struktur materi dan perubahan kimia','Perubahan fisika tidak menghasilkan zat baru; perubahan kimia menghasilkan zat dengan sifat berbeda. Partikel materi selalu bergerak.','Kelompokkan: es mencair, kertas terbakar, gula larut.','Es mencair dan gula larut umumnya perubahan fisika; kertas terbakar menghasilkan zat baru sehingga merupakan perubahan kimia. Amati bukti seperti gas, warna, atau panas.'],
        ['IPS','💹','Permintaan, penawaran, dan kegiatan ekonomi','Harga terbentuk melalui interaksi permintaan dan penawaran. Produksi, distribusi, serta konsumsi saling berkaitan.','Apa dampak panen cabai berkurang pada harga di pasar?','Jika permintaan tetap dan pasokan turun, harga cenderung naik. Ini model sederhana; biaya, penyimpanan, dan kebijakan juga dapat berpengaruh.']
      ],
      9: [
        ['Bahasa Indonesia','🔍','Menilai sumber dan argumen','Sumber tepercaya jelas penulis dan tanggalnya, memuat bukti, serta dapat dibandingkan dengan sumber lain. Argumen yang baik relevan dan logis.','Periksa siapa penulis artikel, kapan diterbitkan, dan apa bukti utamanya.','Jangan menilai hanya dari judul. Bandingkan laporan dengan sumber independen dan bedakan fakta, interpretasi, serta klaim yang belum terbukti.'],
        ['Matematika','🎲','Statistika, peluang, dan interpretasi data','Rata-rata, median, dan modus merangkum data dengan cara berbeda. Peluang menyatakan kemungkinan suatu kejadian.','Data 2, 3, 3, 7, 10: tentukan median dan modus.','Median adalah 3 dan modus adalah 3. Rata-rata 25/5 = 5; pencilan dapat membuat rata-rata kurang mewakili data.'],
        ['IPA','🧬','Genetika dan pewarisan sifat','DNA menyimpan informasi genetik. Alel dapat diwariskan; hasil persilangan sederhana dapat dimodelkan dengan diagram Punnett.','Persilangan Aa × Aa menghasilkan kemungkinan genotipe apa?','Kombinasinya AA, Aa, Aa, dan aa, sehingga rasio genotipe 1:2:1. Peluang model bukan kepastian sifat untuk setiap keluarga nyata.'],
        ['Informatika','🔐','Jejak digital dan keamanan akun','Informasi yang dibagikan daring dapat tersimpan lama. Lindungi akun dengan sandi unik, verifikasi dua langkah, dan pengaturan privasi.','Apa langkahmu sebelum membuka tautan hadiah yang dikirim akun asing?','Periksa alamat pengirim dan domain, jangan masukkan sandi atau kode OTP, dan tanyakan kepada orang dewasa/guru jika ragu.']
      ]
    },
    SMA: {
      10: [
        ['Bahasa Indonesia','🧾','Menulis karya ilmiah sederhana','Karya ilmiah menyatakan pertanyaan, metode, hasil, dan simpulan. Kutip sumber agar pembaca dapat memeriksa informasi.','Rancang pertanyaan pengamatan tentang kebiasaan membaca di kelas.','Tentukan responden dan cara mencatat data. Sajikan hasil tanpa mengubah jawaban; tulis keterbatasan pengamatan dan cantumkan sumber.'],
        ['Matematika','📊','Sistem persamaan dan pemodelan','Sistem persamaan mencari nilai variabel yang memenuhi beberapa hubungan sekaligus. Model matematika menyederhanakan situasi nyata.','2x + y = 11 dan x + y = 7. Tentukan x dan y.','Kurangi persamaan kedua dari pertama: x = 4. Substitusi ke x + y = 7 memberi y = 3. Periksa dengan memasukkan kembali hasil.'],
        ['Fisika','🚲','Gerak lurus dan grafik','Kecepatan adalah perubahan posisi per waktu; percepatan adalah perubahan kecepatan per waktu. Kemiringan grafik posisi-waktu menunjukkan kecepatan.','Benda menempuh 100 m dalam 20 s dengan laju tetap. Berapa lajunya?','v = s/t = 100/20 = 5 m/s. Periksa satuan dan bedakan jarak yang ditempuh dari perpindahan.'],
        ['Kimia','⚗️','Ikatan kimia dan persamaan reaksi','Atom berikatan untuk mencapai susunan elektron lebih stabil. Persamaan reaksi disetarakan agar jumlah atom tiap unsur sama di kedua sisi.','Setarakan H₂ + O₂ → H₂O.','Persamaan setara: 2H₂ + O₂ → 2H₂O. Koefisien mengubah jumlah molekul, bukan indeks dalam rumus zat.']
      ],
      11: [
        ['Bahasa Indonesia','🧪','Proposal penelitian dan sitasi','Proposal memuat latar belakang, pertanyaan, tujuan, metode, jadwal, serta daftar pustaka. Sitasi menunjukkan asal gagasan atau data.','Buat pertanyaan penelitian yang terukur tentang waktu belajar dan tidur.','Tentukan variabel dan cara pengumpulan data. Jaga privasi responden, minta persetujuan, serta jangan menyimpulkan sebab-akibat dari korelasi saja.'],
        ['Matematika','📈','Turunan dan optimasi dasar','Turunan menyatakan laju perubahan sesaat. Untuk polinom, aturan pangkat membantu menghitung turunannya.','Jika s(t)=t²+3t, tentukan kecepatan v(t).','v(t)=s′(t)=2t+3. Pada t=2, v=7 satuan jarak per satuan waktu. Pastikan domain dan satuan sesuai konteks.'],
        ['Fisika','🌊','Usaha, energi, dan momentum','Usaha mengubah energi; energi mekanik dapat terdiri dari energi kinetik dan potensial. Momentum bergantung pada massa serta kecepatan.','Benda 2 kg bergerak 3 m/s. Hitung energi kinetiknya.','Ek = ½mv² = ½(2)(9) = 9 J. Energi dapat berubah bentuk; perhatikan sistem dan gaya luar.'],
        ['Biologi','🧬','Genetika molekuler dan ekspresi gen','Informasi DNA ditranskripsi menjadi RNA dan dapat diterjemahkan menjadi protein. Regulasi gen membuat sel berbeda menjalankan fungsi khusus.','Jelaskan alur DNA → RNA → protein dengan satu kalimat.','DNA ditranskripsi menjadi RNA; ribosom membaca kodon RNA untuk merangkai asam amino menjadi protein. Mutasi dapat berdampak berbeda bergantung lokasinya.']
      ],
      12: [
        ['Keterampilan akademik','🎓','Membaca jurnal dan menulis argumen','Baca abstrak, pertanyaan penelitian, metode, hasil, dan keterbatasan. Nilai apakah bukti benar-benar mendukung kesimpulan penulis.','Ringkas satu artikel menjadi: pertanyaan, metode, hasil, keterbatasan.','Catat sitasi lengkap dan parafrase dengan kata sendiri. Jangan menganggap satu studi sebagai bukti final; cari tinjauan atau replikasi penelitian.'],
        ['Matematika','∫','Integral tentu dan luas daerah','Integral tentu mengakumulasi perubahan pada interval. Untuk fungsi positif, nilainya dapat menyatakan luas di bawah kurva.','Hitung ∫₀² 2x dx.','Anti-turunan 2x adalah x². Nilai batas: 2² − 0² = 4. Perhatikan batas integrasi dan interpretasi satuan luas.'],
        ['Statistika','📊','Korelasi, sampel, dan ketidakpastian','Korelasi menunjukkan hubungan, bukan otomatis sebab-akibat. Sampel yang representatif membantu memperkirakan populasi.','Mengapa survei hanya pada satu kelas belum tentu mewakili seluruh sekolah?','Sampelnya mungkin berbeda dari populasi dalam jurusan, usia, atau kebiasaan. Nyatakan metode, ukuran sampel, potensi bias, dan ketidakpastian.'],
        ['Kesiapan kuliah','💡','Literasi digital, riset, dan manajemen waktu','Mahasiswa mengelola bacaan, tugas, kolaborasi, referensi, dan tenggat. Pecah proyek besar menjadi langkah mingguan yang terukur.','Buat rencana tujuh hari untuk tugas esai dengan tenggat pekan depan.','Hari 1 pilih pertanyaan; hari 2–3 cari dan catat sumber; hari 4 buat kerangka; hari 5 tulis draf; hari 6 revisi dan cek sitasi; hari 7 finalisasi. Sisakan waktu cadangan.']
      ]
    }
  };

  Object.entries(extraCurriculum).forEach(([level, grades]) => {
    Object.entries(grades).forEach(([grade, lessons]) => lessonTopics[level][grade].push(...lessons));
  });

  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const themeIcon = document.getElementById('themeIcon');
  let savedTheme = 'color';
  try { savedTheme = localStorage.getItem('kayokoTheme') || 'color'; } catch (_) {}
  function updateThemeButton() {
    const mono = document.body.dataset.theme === 'mono';
    themeLabel.textContent = mono ? 'Monokrom' : 'Warna';
    themeIcon.textContent = mono ? '◐' : '◑';
    themeToggle.setAttribute('aria-label', mono ? 'Kembali ke tema berwarna' : 'Aktifkan tema hitam putih');
    themeToggle.setAttribute('aria-pressed', String(mono));
    themeToggle.title = mono ? 'Tema hitam-putih aktif — klik untuk tema warna' : 'Tema warna aktif — klik untuk hitam-putih';
  }
  if (savedTheme === 'mono') document.body.dataset.theme = 'mono';
  updateThemeButton();
  themeToggle.addEventListener('click', () => {
    const mono = document.body.dataset.theme !== 'mono';
    if (mono) document.body.dataset.theme = 'mono';
    else delete document.body.dataset.theme;
    try { localStorage.setItem('kayokoTheme', mono ? 'mono' : 'color'); } catch (_) {}
    updateThemeButton();
  });

  const grid = document.getElementById('lessonGrid');
  let lastFocusedElement;
  const closeLessonModal = () => {
    const modal = document.querySelector('.lesson-modal-backdrop');
    if (!modal) return;
    modal.remove();
    document.body.classList.remove('lesson-modal-open');
    if (lastFocusedElement?.isConnected) lastFocusedElement.focus();
  };
  grid.addEventListener('click', event => {
    const button = event.target.closest('.lesson-open');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const card = button.closest('.lesson-card');
    const title = card.querySelector('h3')?.textContent || 'Materi belajar';
    const summary = card.querySelector('p')?.textContent || 'Baca ringkasan materi ini dengan saksama.';
    const example = card.querySelector('.lesson-example span')?.textContent || 'Coba tuliskan satu hal yang kamu pahami dari topik ini.';
    const icon = card.querySelector('.subject-icon')?.textContent || '📘';
    const subject = title.split(':')[0];
    const gradeText = card.querySelector('.lesson-tag')?.textContent || '';
    const match = gradeText.match(/(SD|SMP|SMA)\s*·\s*KELAS\s*(\d+)/);
    const fullLesson = match ? lessonTopics[match[1]][Number(match[2])]?.find(item => `${item[0]}: ${item[2]}` === title) : null;
    const detailedNotes = fullLesson?.[5] || `Pahami gagasan utama: ${summary}\n\nBaca contoh, tulis kembali konsep dengan bahasamu sendiri, lalu buat satu contoh baru untuk menguji pemahaman.`;
    closeLessonModal();
    lastFocusedElement = button;
    const backdrop = document.createElement('div');
    backdrop.className = 'lesson-modal-backdrop';
    backdrop.innerHTML = `<section class="lesson-modal" role="dialog" aria-modal="true" aria-labelledby="lessonModalTitle"><div class="lesson-modal-head"><span class="lesson-modal-icon"></span><div><span class="lesson-modal-subject"></span><h2 id="lessonModalTitle"></h2></div><button class="lesson-modal-close" type="button" aria-label="Tutup materi">×</button></div><div class="lesson-modal-section"><h3>📘 Penjelasan materi</h3><p class="lesson-summary"></p></div><div class="lesson-modal-section"><h3>🧠 Materi dan langkah belajar</h3><p class="lesson-details"></p></div><div class="lesson-modal-practice"><b>✏️ Contoh dan latihan</b><p class="lesson-example-text"></p></div><div class="lesson-modal-practice"><b>🌟 Cek pemahamanmu</b><p>Coba jelaskan kembali topik ini tanpa melihat catatan, kerjakan latihan di buku, lalu periksa langkah dan satuannya.</p></div><div class="lesson-modal-actions"><button class="button primary lesson-done" type="button">Selesai membaca ✓</button></div></section>`;
    backdrop.querySelector('.lesson-modal-icon').textContent = icon;
    backdrop.querySelector('.lesson-modal-subject').textContent = subject;
    backdrop.querySelector('#lessonModalTitle').textContent = title;
    backdrop.querySelector('.lesson-summary').textContent = summary;
    backdrop.querySelector('.lesson-details').textContent = detailedNotes;
    backdrop.querySelector('.lesson-example-text').textContent = example;
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeLessonModal(); });
    backdrop.querySelector('.lesson-modal-close').addEventListener('click', closeLessonModal);
    backdrop.querySelector('.lesson-done').addEventListener('click', closeLessonModal);
    document.body.append(backdrop);
    document.body.classList.add('lesson-modal-open');
    backdrop.querySelector('.lesson-modal-close').focus();
  }, true);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLessonModal(); });
})();
