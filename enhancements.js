(() => {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    .page.active { animation: page-arrive .48s cubic-bezier(.2,.8,.2,1) both; }
    .lesson-card, .vocab-card, .level-card, .profile-form, .profile-card { transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease; }
    .lesson-card:hover, .vocab-card:hover, .level-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(67,83,49,.13); }
    .extra-learning { max-width:1180px; margin:34px auto 70px; padding:0 18px; }
    .extra-heading { margin-bottom:18px; }
    .extra-heading h2 { margin:6px 0; }
    .extra-intro { color:var(--muted); }
    .extra-filters { display:flex; flex-wrap:wrap; gap:8px; margin:18px 0; }
    .extra-filter { border:1px solid var(--line); border-radius:999px; padding:9px 15px; color:var(--ink); background:#fff; font:inherit; font-weight:700; cursor:pointer; transition:transform .2s,background .2s,color .2s; }
    .extra-filter:hover { transform:translateY(-2px); }
    .extra-filter.selected { color:#fff; border-color:var(--matcha); background:var(--matcha); }
    .extra-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; }
    .extra-card { padding:18px; border:1px solid var(--line); border-radius:17px; background:rgba(255,255,255,.9); animation:extra-arrive .38s both; }
    .extra-card h3 { margin:7px 0; }
    .extra-card p { color:var(--muted); margin:7px 0; }
    .extra-card .jp-example { padding:10px 12px; border-radius:12px; background:var(--matcha-pale); color:var(--ink); font-family:'Noto Sans JP',sans-serif; }
    .extra-tag { color:var(--matcha-dark); font-size:12px; font-weight:800; letter-spacing:.06em; text-transform:uppercase; }
    .extra-study-tip { margin-top:18px; padding:18px; border:1px dashed var(--line); border-radius:16px; background:rgba(255,255,255,.55); }
    .extra-study-tip strong { color:var(--matcha-dark); }
    .extra-vocab { margin-top:32px; }
    @keyframes page-arrive { from { opacity:.35; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
    @keyframes extra-arrive { from { opacity:0; transform:translateY(10px) scale(.985); } to { opacity:1; transform:translateY(0) scale(1); } }
    @media(max-width:850px) { .extra-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
    @media(max-width:560px) { .extra-grid { grid-template-columns:1fr; } }
    @media(prefers-reduced-motion:reduce) { *,*::before,*::after { scroll-behavior:auto!important; animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; } }
  `;
  document.head.append(style);

  // Keep the theme preference available on every visit.
  const themeToggle = document.getElementById('themeToggle');
  let savedTheme = 'matcha';
  try { savedTheme = localStorage.getItem('kayokoTheme') || 'matcha'; } catch {}
  if (savedTheme === 'night') document.body.dataset.theme = 'night';
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const updateThemeLabel = () => {
    const night = document.body.dataset.theme === 'night';
    if (themeIcon) themeIcon.textContent = night ? '🌙' : '🌿';
    if (themeLabel) themeLabel.textContent = night ? 'Malam' : 'Matcha';
    if (themeToggle) themeToggle.setAttribute('aria-label', night ? 'Aktifkan tema matcha' : 'Aktifkan tema malam');
  };
  updateThemeLabel();
  themeToggle?.addEventListener('click', () => {
    const night = document.body.dataset.theme !== 'night';
    if (night) document.body.dataset.theme = 'night';
    else delete document.body.dataset.theme;
    try { localStorage.setItem('kayokoTheme', night ? 'night' : 'matcha'); } catch {}
    updateThemeLabel();
  });

  // Add a practical, level-specific learning path without replacing existing lessons.
  const lessonSets = {
    N5: [
      ['Partikel は dan です','Pola kalimat dasar','は menandai topik; です membuat pernyataan sopan.','私は学生です。','Saya seorang pelajar.'],
      ['Partikel の','Kepemilikan dan keterangan','Hubungkan dua kata benda untuk menyatakan kepemilikan atau kategori.','これは私の本です。','Ini buku saya.'],
      ['Kata kerja ます','Rutinitas sehari-hari','Gunakan bentuk ます untuk menyampaikan kegiatan secara sopan.','毎日、日本語を勉強します。','Setiap hari saya belajar bahasa Jepang.'],
      ['Kata sifat い','Deskripsi sederhana','Kata sifat い dapat langsung menerangkan kata benda.','この花はきれいです。','Bunga ini cantik.'],
      ['Membuat pertanyaan','Kata tanya dan か','Tambahkan か di akhir kalimat untuk membentuk pertanyaan sopan.','これは何ですか。','Ini apa?']
    ],
    N4: [
      ['Bentuk てください','Permintaan sopan','Ubah kata kerja ke bentuk て lalu tambahkan ください.','ゆっくり話してください。','Tolong berbicara perlahan.'],
      ['Bentuk ないでください','Larangan sopan','Pola ini meminta seseorang untuk tidak melakukan sesuatu.','ここで写真を撮らないでください。','Tolong jangan mengambil foto di sini.'],
      ['Bentuk たことがあります','Pengalaman','Gunakan bentuk lampau sebelum ことがあります untuk pengalaman.','日本へ行ったことがあります。','Saya pernah pergi ke Jepang.'],
      ['Perbandingan より','Membandingkan dua hal','Pola A は B より… menyatakan A lebih … daripada B.','電車はバスより速いです。','Kereta lebih cepat daripada bus.'],
      ['Alasan から','Sebab dan alasan','Letakkan から setelah klausa yang menjadi alasan.','雨ですから、出かけません。','Karena hujan, saya tidak pergi keluar.']
    ],
    N3: [
      ['〜ようになる','Perubahan kemampuan/kebiasaan','Gunakan setelah bentuk kamus atau bentuk negatif untuk perubahan bertahap.','漢字が読めるようになりました。','Saya jadi bisa membaca kanji.'],
      ['〜てしまう','Selesai atau penyesalan','Menyatakan sesuatu sudah terlanjur selesai atau disesali.','宿題を忘れてしまいました。','Saya terlanjur lupa PR.'],
      ['〜そうだ','Kesan dari pengamatan','Tempelkan pada akar kata sifat atau bentuk kata kerja untuk dugaan visual.','このケーキはおいしそうです。','Kue ini kelihatannya enak.'],
      ['〜ながら','Dua kegiatan bersamaan','Pasangkan bentuk ます tanpa ます dengan ながら.','音楽を聞きながら勉強します。','Saya belajar sambil mendengarkan musik.'],
      ['〜ために','Tujuan','Letakkan tujuan sebelum ために; sering digunakan dengan kata kerja bentuk kamus.','日本で働くために、日本語を勉強しています。','Saya belajar bahasa Jepang agar bisa bekerja di Jepang.']
    ],
    N2: [
      ['〜に対して','Sasaran atau sikap','Menunjukkan sasaran tindakan atau sikap terhadap seseorang/hal.','お客様に対して丁寧に説明します。','Saya menjelaskan dengan sopan kepada pelanggan.'],
      ['〜にもかかわらず','Meskipun','Menghubungkan keadaan yang berlawanan dengan hasil yang terjadi.','雨にもかかわらず、試合は続きました。','Pertandingan tetap berlangsung meskipun hujan.'],
      ['〜わけではない','Tidak berarti bahwa','Menolak kesimpulan umum secara sebagian atau memberi nuansa pengecualian.','日本語が嫌いなわけではありません。','Bukan berarti saya tidak suka bahasa Jepang.'],
      ['〜おかげで','Berkat','Mengungkapkan hasil baik yang terjadi berkat sebab tertentu.','先生のおかげで合格できました。','Berkat guru, saya bisa lulus.'],
      ['〜一方で','Di sisi lain','Menyajikan sisi lain atau keadaan yang berjalan bersamaan.','便利な一方で、費用が高いです。','Di satu sisi praktis, tetapi biayanya mahal.']
    ],
    N1: [
      ['〜を余儀なくされる','Terpaksa harus','Ungkapan formal untuk keadaan yang memaksa seseorang melakukan sesuatu.','台風で計画の変更を余儀なくされた。','Karena topan, kami terpaksa mengubah rencana.'],
      ['〜に即して','Sesuai dengan','Menunjukkan tindakan yang berlandaskan keadaan, aturan, atau fakta.','現状に即して制度を見直す。','Meninjau ulang sistem sesuai keadaan saat ini.'],
      ['〜を禁じ得ない','Tidak dapat menahan','Ungkapan formal untuk perasaan yang sulit dibendung.','その知らせに驚きを禁じ得ない。','Saya tidak dapat menahan rasa terkejut atas kabar itu.'],
      ['〜ならでは','Khas / hanya ada pada','Menekankan ciri unik yang dimiliki orang, tempat, atau hal tertentu.','京都ならではの景色を楽しみました。','Saya menikmati pemandangan khas Kyoto.'],
      ['〜と相まって','Berpadu dengan','Menjelaskan dua faktor yang bersama-sama menghasilkan suatu dampak.','経験と努力が相まって成功した。','Pengalaman berpadu dengan usaha sehingga berhasil.']
    ]
  };
  const vocabSets = {
    N5:[['朝','あさ','pagi'],['昼','ひる','siang'],['夜','よる','malam'],['駅','えき','stasiun'],['買う','かう','membeli'],['新しい','あたらしい','baru']],
    N4:[['旅行','りょこう','perjalanan'],['必要','ひつよう','perlu'],['習う','ならう','belajar dari guru'],['急ぐ','いそぐ','bergegas'],['近所','きんじょ','lingkungan sekitar'],['予定','よてい','rencana']],
    N3:[['経験','けいけん','pengalaman'],['場合','ばあい','keadaan/kasus'],['複雑','ふくざつ','rumit'],['続ける','つづける','melanjutkan'],['確かめる','たしかめる','memastikan'],['表現','ひょうげん','ekspresi']],
    N2:[['影響','えいきょう','pengaruh'],['責任','せきにん','tanggung jawab'],['維持','いじ','mempertahankan'],['状況','じょうきょう','situasi'],['効率','こうりつ','efisiensi'],['比較','ひかく','perbandingan']],
    N1:[['促進','そくしん','promosi/percepatan'],['懸念','けねん','kekhawatiran'],['著しい','いちじるしい','mencolok'],['遂げる','とげる','mencapai/menuntaskan'],['妥当','だとう','wajar/patut'],['緩和','かんわ','pelonggaran']]
  };
  const materia = document.getElementById('page-materi');
  if (materia) {
    const section = document.createElement('section');
    section.className = 'extra-learning';
    section.innerHTML = `<div class="extra-heading"><span class="eyebrow">BUNPŌ · CONTOH · KOSAKATA</span><h2>Belajar selangkah lebih jauh</h2><p class="extra-intro">Materi ringkas tambahan dari N5 hingga N1, lengkap dengan contoh kalimat dan arti.</p></div><div class="extra-filters" role="group" aria-label="Pilih level materi tambahan">${Object.keys(lessonSets).map((level,i)=>`<button class="extra-filter${i===0?' selected':''}" type="button" data-extra-level="${level}" aria-pressed="${i===0}">${level}</button>`).join('')}</div><div class="extra-grid" id="extraLessonGrid"></div><div class="extra-study-tip"><strong>🌱 Cara belajar yang disarankan:</strong> baca contoh dengan suara keras, tutup artinya lalu coba terjemahkan sendiri, dan ulangi kosakata setelah 1 hari, 3 hari, serta 1 minggu.</div><div class="extra-vocab"><div class="extra-heading"><span class="eyebrow">KOSAKATA INTI</span><h2 id="extraVocabTitle">Kosakata N5</h2></div><div class="extra-grid" id="extraVocabGrid"></div></div>`;
    materia.append(section);
    const lessons = section.querySelector('#extraLessonGrid');
    const vocabGrid = section.querySelector('#extraVocabGrid');
    const vocabTitle = section.querySelector('#extraVocabTitle');
    function showLevel(level) {
      const chosen = lessonSets[level] ? level : 'N5';
      lessons.innerHTML = lessonSets[chosen].map(([title,kind,detail,example,meaning],i)=>`<article class="extra-card" style="animation-delay:${i*45}ms"><span class="extra-tag">${chosen} · ${kind}</span><h3>${title}</h3><p>${detail}</p><p class="jp-example" lang="ja">${example}</p><p>${meaning}</p></article>`).join('');
      vocabTitle.textContent = `Kosakata ${chosen}`;
      vocabGrid.innerHTML = vocabSets[chosen].map(([word,reading,meaning],i)=>`<article class="extra-card" style="animation-delay:${i*35}ms"><span class="extra-tag">${chosen} · Kosakata</span><h3 lang="ja">${word} <small>${reading}</small></h3><p>${meaning}</p></article>`).join('');
      section.querySelectorAll('[data-extra-level]').forEach(button=>{
        const selected = button.dataset.extraLevel === chosen;
        button.classList.toggle('selected',selected);
        button.setAttribute('aria-pressed',String(selected));
      });
    }
    section.querySelector('.extra-filters').addEventListener('click',event=>{
      const button = event.target.closest('[data-extra-level]');
      if (button) showLevel(button.dataset.extraLevel);
    });
    showLevel('N5');
  }

  // Soft falling sakura, automatically disabled for reduced-motion preferences.
  const canvas = document.getElementById('petalCanvas');
  if (canvas && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const context = canvas.getContext('2d');
    if (context) {
      let petals = [];
      let frame = 0;
      const resize = () => {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(window.innerWidth * ratio);
        canvas.height = Math.round(window.innerHeight * ratio);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        context.setTransform(ratio,0,0,ratio,0,0);
        petals = Array.from({length:24},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:2+Math.random()*3,s:.35+Math.random()*.75,a:Math.random()*Math.PI*2,w:(Math.random()-.5)*.02}));
      };
      const draw = () => {
        if (++frame % 2 === 0) {
          context.clearRect(0,0,innerWidth,innerHeight);
          for (const p of petals) {
            p.y += p.s; p.x += Math.sin(p.a)*.55; p.a += p.w;
            if (p.y > innerHeight + 8) { p.y = -8; p.x = Math.random()*innerWidth; }
            context.save(); context.translate(p.x,p.y); context.rotate(p.a); context.fillStyle='rgba(232,167,181,.55)';
            context.beginPath(); context.ellipse(0,0,p.r,p.r*.62,0,0,Math.PI*2); context.fill(); context.restore();
          }
        }
        requestAnimationFrame(draw);
      };
      resize(); window.addEventListener('resize',resize,{passive:true}); requestAnimationFrame(draw);
    }
  }
})();
