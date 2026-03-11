let interviewList = [];
let rejectedList = [];

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

const mainContainer = document.getElementById('main-container');

mainContainer.addEventListener('click', function (event) {
  
  if(event.target.classList.contains('Interview-btn')){
  const parentNode = event.target.parentNode.parentNode;
  const name = parentNode.querySelector('.name').innerText;
  const position = parentNode.querySelector('.position').innerText;
  const place = parentNode.querySelector('.place').innerText;
  const time = parentNode.querySelector('.time').innerText;
  const salary = parentNode.querySelector('.salary').innerText;
  const statu = parentNode.querySelector('.statu').innerText;
  const description = parentNode.querySelector('.description').innerText;

  const cardInfo = {
    name,
    position,
    place,
    time,
    salary,
    statu,
    description
  };

  const interviewExist = interviewList.find(item => item.name === cardInfo.name)
  if (!interviewExist) {
    interviewList.push(cardInfo);
  }
  renderInterview()
  }
})

function renderInterview() {
  interviewSection.innerHTML = '';
  let div = document.createElement('div');
  div.classList.add("border-0", "rounded-md", "shadow", "bg-white", "p-6", "mb-7", "flex", "justify-between")
  for (let interview of interviewList) {
    div.innerHTML = `
          <div>
            <h2 class="font-bold text-xl name">
              ${interview.name}
            </h2>
            <p class="text-lg position">
              ${interview.position}
            </p>
            <br>
            <ul class="flex gap-8">
              <li class="place">${interview.place}</li>
              <li class="list-disc time">${interview.time}</li>
              <li class="list-disc salary">${interview.salary}</li>
            </ul>
            <br>
            <div>
              <span class="badge badge-xl font-semibold bg-green-400">Interview</span>
            </div>
            <br>
            <p class="description">${interview.description}</p>
            <br>
            <div>
              <button id="Interview-btn" class="btn btn-outline btn-success">Interview</button>
              <button id="Rejected-btn" class="btn btn-outline btn-error">Rejected</button>
            </div>
          </div>
          <div>
            <button class="Delete-btn btn rounded-full"><i class="fa-regular fa-trash-can"></i></button>
          </div>
    `
  }
}

