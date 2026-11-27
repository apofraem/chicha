// Daily JLPT quiz — deterministic by local date, with answers, explanations, and local progress.

const $=id=>document.getElementById(id);

const QUIZ_KEY='kayokoDailyQuizV2';
const safeRead=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};

const quizBank=[
  {level:'N5',question:'「ありがとう」の arti yang tepat adalah…',choices:['Maaf','Terima kasih','Selamat pagi','Sampai jumpa'],answer:1,explanation:'「ありがとう」 berarti terima kasih.'},
  {level:'N5',question:'Partikel untuk menandai topik kalimat adalah…',choices:['を','に','は','で'],answer:2,explanation:'Partikel 「は」 digunakan untuk menandai topik pembicaraan.'},
  {level:'N5',question:'「みず」 dalam kanji ditulis…',choices:['火','水','風','土'],answer:1,explanation:'「みず」 berarti air dan ditulis 水.'},
  {level:'N5',question:'「駅」の bacaan adalah…',choices:['みせ','えき','まち','いえ'],answer:1,explanation:'駅 dibaca えき dan berarti stasiun.'},
  {level:'N4',question:'「ゆっくり話してください。」 berarti…',choices:['Tolong berbicara perlahan','Tolong segera pulang','Saya ingin berbicara','Jangan berbicara'],answer:0,explanation:'「ゆっくり」 berarti perlahan dan 「話してください」 berarti tolong berbicara.'},
  {level:'N4',question:'Bentuk lampau ます dari 食べます adalah…',choices:['食べました','食べません','食べています','食べたい'],answer:0,explanation:'Bentuk lampau sopan dari 食べます adalah 食べました.'},
  {level:'N4',question:'「必要」の arti adalah…',choices:['Perjalanan','Perlu','Pentingnya','Mengerti'],answer:1,explanation:'「必要」 dibaca ひつよう dan berarti perlu atau diperlukan.'},
  {level:'N3',question:'Pola 「〜ながら」 menyatakan…',choices:['Dua kegiatan bersamaan','Larangan','Pengandaian','Alasan'],answer:0,explanation:'Pola 「〜ながら」 menghubungkan dua kegiatan yang dilakukan bersamaan.'},
  {level:'N3',question:'「経験」の arti adalah…',choices:['Kesempatan','Pengalaman','Perubahan','Peraturan'],answer:1,explanation:'「経験」 dibaca けいけん dan berarti pengalaman.'},
  {level:'N3',question:'「雨にもかかわらず」 paling dekat artinya…',choices:['Karena hujan','Jika hujan','Meskipun hujan','Sebelum hujan'],answer:2,explanation:'Pola 「にもかかわらず��� berarti meskipun atau walaupun.'},
  {level:'N2',question:'「責任を負う」 berarti…',choices:['Mengambil tanggung jawab','Menghindari masalah','Memberi saran','Membuat keputusan'],answer:0,explanation:'「責任を負う」 berarti menanggung atau mengambil tanggung jawab.'},
  {level:'N2',question:'「一方で」 digunakan untuk…',choices:['Menyatakan tujuan','Menyajikan sisi lain','Menyatakan larangan','Mengutip ucapan'],answer:1,explanation:'「一方で」 digunakan untuk menyatakan sisi lain atau hal yang berbeda.'},
  {level:'N1',question:'「余儀なくされる」 bermakna…',choices:['Diberi kesempatan','Terpaksa harus','Berhasil menghindari','Mulai mencoba'],answer:1,explanation:'Ungkapan 「余儀なくされる」 berarti terpaksa melakukan sesuatu.'},
  {level:'N1',question:'「〜に即して」 berarti…',choices:['Berlawanan dengan','Sesuai dengan','Terlepas dari','Sebelum terjadi'],answer:1,explanation:'Pola 「〜に即して」 berarti sesuai dengan keadaan, fakta, atau aturan.'}
];

function localDateKey(date=new Date()) {
  const year=date.getFullYear();
  const month=String(date.getMonth()+1).padStart(2,'0');
  const day=String(date.getDate()).padStart(2,'0');
  return `${year}-${month}-${day}`;
}

function getDailyQuiz(date=new Date()) {
  const seed = Math.floor(new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()/86400000);
  const start = ((seed % quizBank.length) + quizBank.length) % quizBank.length;
  return [0,1,2].map(offset=>quizBank[(start+offset)%quizBank.length]);
}

function initDailyQuiz() {
  const container=$('dailyQuestions');
  const submit=$('submitQuiz');
  const status=$('quizStatus');
  const points=$('quizPoints');
  if(!container||!submit||!status||!points)return;

  const dateKey=localDateKey();
  const daily=getDailyQuiz();
  const saved=safeRead(QUIZ_KEY,{date:'',answers:[],score:0});

  if($('dailyDate')) {
    $('dailyDate').textContent=new Intl.DateTimeFormat('id-ID',{dateStyle:'long'}).format(new Date());
  }

  container.innerHTML=daily.map((item,index)=>`
    <article class="daily-question" data-question="${index}">
      <h3>${index+1}. ${item.question}</h3>
      <span class="daily-level">JLPT ${item.level}</span>
      ${item.choices.map((choice,choiceIndex)=>`
        <label class="daily-choice">
          <input type="radio" name="quiz-${index}" value="${choiceIndex}">
          <span>${choice}</span>
        </label>`).join('')}
      <p class="quiz-explanation" hidden></p>
    </article>`).join('');

  const restoreSaved=()=>{
    if(saved.date!==dateKey)return;
    points.textContent=`${saved.score||0} poin`;
    status.textContent=`Tantangan hari ini sudah selesai. Skor: ${saved.score||0}/30.`;
    submit.disabled=true;
    container.querySelectorAll('input').forEach(input=>{input.disabled=true});
    if(Array.isArray(saved.answers)) {
      saved.answers.forEach((answer,index)=>{
        const radio=container.querySelector(`input[name="quiz-${index}"][value="${answer}"]`);
        if(radio)radio.checked=true;
      });
    }
  };

  restoreSaved();

  submit.addEventListener('click',()=>{
    if(safeRead(QUIZ_KEY,{}).date===dateKey)return;

    const answers=[];
    for(let index=0;index<daily.length;index++){
      const selected=container.querySelector(`input[name="quiz-${index}"]:checked`);
      if(!selected){
        status.textContent=`Jawab soal nomor ${index+1} terlebih dahulu.`;
        const question=container.querySelector(`[data-question="${index}"]`);
        question?.scrollIntoView({behavior:'smooth',block:'center'});
        return;
      }
      answers.push(Number(selected.value));
    }

    let score=0;
    daily.forEach((item,index)=>{
      const article=container.querySelector(`[data-question="${index}"]`);
      const selected=Number(answers[index]);
      const correct=selected===item.answer;
      if(correct)score+=10;

      article.querySelectorAll('.daily-choice').forEach((label,choiceIndex)=>{
        label.classList.toggle('correct-choice',choiceIndex===item.answer);
        label.classList.toggle('wrong-choice',choiceIndex===selected&&!correct);
      });

      const explanation=article.querySelector('.quiz-explanation');
      explanation.hidden=false;
      explanation.textContent=`${correct?'Benar.':'Kurang tepat.'} ${item.explanation}`;
    });

    try{
      localStorage.setItem(QUIZ_KEY,JSON.stringify({date:dateKey,answers,score}));
    }catch{}

    points.textContent=`${score} poin`;
    status.textContent=`Selesai! Jawaban benar ${score/10} dari ${daily.length}. Soal baru tersedia besok.`;
    submit.disabled=true;
    container.querySelectorAll('input').forEach(input=>input.disabled=true);
  });
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initDailyQuiz);
else initDailyQuiz();
