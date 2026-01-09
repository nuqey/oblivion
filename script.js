/* CLOCK */
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');

function pad(n){return String(n).padStart(2,'0')}
function updateClock(){
  const d = new Date();
  timeEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  dateEl.textContent = d.toDateString();
}
setInterval(updateClock,1000);
updateClock();

/* QUOTES */
const quotes = [
  {t:"You don't need to be loud to be powerful.",a:"— nuqxo"},
  {t:"Silence is not empty.",a:"— unknown"}
];
let qi=0;
const qEl=document.getElementById('quote');
const qA=document.getElementById('quoteAuthor');

function showQuote(){
  qEl.textContent=`"${quotes[qi].t}"`;
  qA.textContent=quotes[qi].a;
  qi=(qi+1)%quotes.length;
}
setInterval(showQuote,8000);
showQuote();

/* NOTES */
const notes=document.getElementById('notes');
notes.value=localStorage.getItem('ob_notes')||'';
notes.oninput=()=>localStorage.setItem('ob_notes',notes.value);

/* AUDIO */
const audio=document.getElementById('audio');
const playBtn=document.getElementById('playBtn');
const file=document.getElementById('audioFile');
const vol=document.getElementById('vol');

vol.oninput=e=>audio.volume=e.target.value;
file.onchange=e=>{
  audio.src=URL.createObjectURL(e.target.files[0]);
  audio.play();
};

playBtn.onclick=()=>{
  if(audio.paused){audio.play();playBtn.textContent='⏸ Pause'}
  else{audio.pause();playBtn.textContent='▶ Play'}
};

/* THEMES */
document.getElementById('themeDark').onclick=()=>document.body.className='theme-dark';
document.getElementById('themeGlass').onclick=()=>document.body.className='theme-glass';
document.getElementById('themeCyber').onclick=()=>document.body.className='theme-cyber';
