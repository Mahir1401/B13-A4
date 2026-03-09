let totalCount = document.getElementById('Total-count');
let interviewCount = document.getElementById('Interview-count');
let rejectedCount = document.getElementById('Rejected-count');

let allSection = document.getElementById('All-section');
let interviewSection = document.getElementById('Interview-section');
let rejectedSection = document.getElementById('Rejected-section');

totalCount.innerText = allSection.childElementCount;
interviewCount.innerText = interviewSection.childElementCount;
rejectedCount.innerText = rejectedSection.childElementCount;

const allFilterBtn = document.getElementById('All-filter-btn');
const interviewFilterBtn = document.getElementById('Interview-filter-btn');
const rejectedFilterBtn = document.getElementById('Rejected-filter-btn');

function toggle(name) {
  allFilterBtn.classList.remove('btn-primary');
  interviewFilterBtn.classList.remove('btn-primary');
  rejectedFilterBtn.classList.remove('btn-primary');

  allFilterBtn.classList.add('btn-soft');
  interviewFilterBtn.classList.add('btn-soft');
  rejectedFilterBtn.classList.add('btn-soft');
  
  const selectedBtn = document.getElementById(name)
  selectedBtn.classList.remove('btn-soft');
  selectedBtn.classList.add('btn-primary');
}