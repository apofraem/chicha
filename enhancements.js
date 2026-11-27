(() => {
  const style = document.createElement('style');
  style.textContent = `
    .header-actions{display:flex;align-items:center;gap:12px}
    .theme-toggle{display:inline-flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid #e8e4de;border-radius:22px;background:#fff;color:#302d37;font:700 11px 'DM Sans',sans-serif;cursor:pointer}
    .theme-toggle span:first-child{font-size:15px}
    body[data-theme="mono"]{--ink:#111;--muted:#555;--pink:#222;--pink-dark:#111;--cream:#f5f5f5;--yellow:#ddd;--line:#d5d5d5;--lav:#eee;--mint:#eee;--shadow:0 12px 32px rgba(0,0,0,.12);background:#fff;color:#111;filter:grayscale(1)}
    body[data-theme="mono"] .topbar,body[data-theme="mono"] .profile-form,body[data-theme="mono"] .profile-card,body[data-theme="mono"] .lesson-card,body[data-theme="mono"] .filter-panel,body[data-theme="mono"] .quote-card,body[data-theme="mono"] .welcome-strip,body[data-theme="mono"] .footer{background:#fff;color:#111;border-color:#ccc}
    body[data-theme="mono"] .hero,body[data-theme="mono"] .level-sd,body[data-theme="mono"] .level-smp,body[data-theme="mono"] .level-sma,body[data-theme="mono"] .study-tip,body[data-theme="mono"] .empty-gallery{background:#f1f1f1;border-color:#ccc}
    body[data-theme="mono"] .lesson-tag,body[data-theme="mono"] .subject-icon,body[data-theme="mono"] .filter-tab,body[data-theme="mono"] .note-icon{background:#eee;color:#111}
    body[data-theme="mono"] .theme-toggle{background:#111;color:#fff;border-color:#111}
    .lesson-modal-backdrop{position:fixed;inset:0;z-index:110;background:rgba(20,18,22,.58);display:grid;place-items:center;padding:18px;animation:pageIn .2s both}
    .lesson-modal{width:min(560px,100%);max-height:min(85vh,760px);overflow:auto;background:#fff;border:1px solid #eee7df;border-radius:20px;padding:26px;box-shadow:0 24px 80px #0003;color:#302d37}
    body[data-theme="mono"] .lesson-modal{filter:grayscale(1)}
    .lesson-modal-head{display:flex;align-items:flex-start;gap:14px}.lesson-modal-icon{width:48px;height:48px;border-radius:15px;background:#fff1e2;display:grid;place-items:center;font-size:25px;flex:none}
    .lesson-modal h2{font:900 22px/1.25 Nunito,sans-serif;margin:2px 0 6px}.lesson-modal .lesson-modal-subject{font-size:10px;font-weight:800;letter-spacing:1px;color:#a49aa0;text-transform:uppercase}.lesson-modal-close{margin-left:auto;width:34px;height:34px;border:0;border-radius:50%;background:#f5f2ef;font-size:21px;cursor:pointer;color:inherit;flex:none}
    .lesson-modal-section{margin-top:19px;padding:16px;border-radius:13px;background:#faf8f5}.lesson-modal-section h3{margin:0 0 7px;font:900 13px Nunito}.lesson-modal-section p{margin:0;color:#6e6870;font-size:13px;line-height:1.75;white-space:pre-wrap}.lesson-modal-practice{margin-top:17px;padding:16px;border:1px dashed #e6d9cd;border-radius:13px}.lesson-modal-practice b{display:block;font:900 13px Nunito;margin-bottom:6px}.lesson-modal-practice p{font-size:12px;line-height:1.65;color:#777;margin:0}.lesson-modal-actions{display:flex;justify-content:flex-end;margin-top:18px}
    @media(max-width:600px){.header-actions{gap:7px}.theme-toggle{padding:7px 9px}.theme-toggle #themeLabel{display:none}.lesson-modal{padding:21px}.lesson-modal h2{font-size:19px}}
  `;
  document.head.append(style);

  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('kayokoTheme');
  if (savedTheme === 'mono') document.body.dataset.theme = 'mono';
  function updateThemeButton() {
    const mono = document.body.dataset.theme === 'mono';
    themeLabel.textContent = mono ? 'Putih' : 'Hitam';
    themeIcon.textContent = mono ? '☼' : '◐';
    themeToggle.setAttribute('aria-label', mono ? 'Kembali ke tema berwarna' : 'Aktifkan tema hitam putih');
  }
  updateThemeButton();
  themeToggle.addEventListener('click', () => {
    const mono = document.body.dataset.theme !== 'mono';
    if (mono) document.body.dataset.theme = 'mono';
    else delete document.body.dataset.theme;
    localStorage.setItem('kayokoTheme', mono ? 'mono' : 'color');
    updateThemeButton();
  });

  const grid = document.getElementById('lessonGrid');
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
    const backdrop = document.createElement('div');
    backdrop.className = 'lesson-modal-backdrop';
    backdrop.innerHTML = `<section class="lesson-modal" role="dialog" aria-modal="true" aria-labelledby="lessonModalTitle"><div class="lesson-modal-head"><span class="lesson-modal-icon"></span><div><span class="lesson-modal-subject"></span><h2 id="lessonModalTitle"></h2></div><button class="lesson-modal-close" type="button" aria-label="Tutup materi">×</button></div><div class="lesson-modal-section"><h3>📘 Ringkasan materi</h3><p class="lesson-summary"></p></div><div class="lesson-modal-section"><h3>✏️ Contoh dan latihan</h3><p class="lesson-example-text"></p></div><div class="lesson-modal-practice"><b>🌟 Cek pemahamanmu</b><p>Coba jelaskan kembali topik ini dengan kata-katamu sendiri, lalu kerjakan contoh di atas di buku catatan.</p></div><div class="lesson-modal-actions"><button class="button primary lesson-done" type="button">Selesai membaca ✓</button></div></section>`;
    backdrop.querySelector('.lesson-modal-icon').textContent = icon;
    backdrop.querySelector('.lesson-modal-subject').textContent = subject;
    backdrop.querySelector('#lessonModalTitle').textContent = title;
    backdrop.querySelector('.lesson-summary').textContent = summary;
    backdrop.querySelector('.lesson-example-text').textContent = example;
    const close = () => backdrop.remove();
    backdrop.addEventListener('click', e => { if (e.target === backdrop) close(); });
    backdrop.querySelector('.lesson-modal-close').addEventListener('click', close);
    backdrop.querySelector('.lesson-done').addEventListener('click', close);
    document.addEventListener('keydown', function onEscape(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEscape); } }, { once: true });
    document.body.append(backdrop);
    backdrop.querySelector('.lesson-modal-close').focus();
  }, true);
})();
