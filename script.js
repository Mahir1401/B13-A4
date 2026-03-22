
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('Total-count');
let interviewCount = document.getElementById('Interview-count');
let rejectedCount = document.getElementById('Rejected-count');

let allSection = document.getElementById('All-section');
let interviewSection = document.getElementById('Interview-section');
let rejectedSection = document.getElementById('Rejected-section');

const noJobsOne = document.getElementById('No-jobs-one');
const noJobsTwo = document.getElementById('No-jobs-two');

function count(){
  if(interviewSection.contains(noJobsOne) && rejectedSection.contains(noJobsTwo)){
  totalCount.innerText = allSection.childElementCount;
  interviewCount.innerText = interviewSection.childElementCount-1;
  rejectedCount.innerText = rejectedSection.childElementCount-1;
  }
  else if(interviewSection.contains(noJobsOne) && !rejectedSection.contains(noJobsTwo)){
  totalCount.innerText = allSection.childElementCount;
  interviewCount.innerText = interviewSection.childElementCount-1;
  rejectedCount.innerText = rejectedSection.childElementCount;
  }
  else if(!interviewSection.contains(noJobsOne) && rejectedSection.contains(noJobsTwo)){
  totalCount.innerText = allSection.childElementCount;
  interviewCount.innerText = interviewSection.childElementCount;
  rejectedCount.innerText = rejectedSection.childElementCount-1;
  }
  else if(!interviewSection.contains(noJobsOne) && !rejectedSection.contains(noJobsTwo)){
  totalCount.innerText = allSection.childElementCount;
  interviewCount.innerText = interviewSection.childElementCount;
  rejectedCount.innerText = rejectedSection.childElementCount;
  }
}

count();

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

  if(name == 'Interview-filter-btn'){
    allSection.classList.add('hidden')
    rejectedSection.classList.add('hidden')
    interviewSection.classList.remove('hidden')
  }
  else if(name == 'All-filter-btn'){
    allSection.classList.remove('hidden')
    interviewSection.classList.add('hidden')
    rejectedSection.classList.add('hidden')
  }
  else{
    allSection.classList.add('hidden')
    interviewSection.classList.add('hidden')
    rejectedSection.classList.remove('hidden')
  }
}

const mainContainer = document.getElementById('main-container');

mainContainer.addEventListener('click', function (event) {
  if(event.target.classList.contains('Rejected-btn')){
  const parentNode = event.target.parentNode.parentNode;
  const name = parentNode.querySelector('.name').innerText;
  const position = parentNode.querySelector('.position').innerText;
  const place = parentNode.querySelector('.place').innerText;
  const time = parentNode.querySelector('.time').innerText;
  const salary = parentNode.querySelector('.salary').innerText;
  const status = parentNode.querySelector('.statu').innerText;
  const description = parentNode.querySelector('.description').innerText;
  parentNode.querySelector('.statu').innerText = 'Rejected';
  parentNode.querySelector('.statu').classList.remove('bg-green-400');
  parentNode.querySelector('.statu').classList.remove('bg-blue-400');
  parentNode.querySelector('.statu').classList.add('bg-red-400');
  const cardInfo = {
    name,
    position,
    place,
    time,
    salary,
    status: 'Rejected',
    description
  };
  
  
  const rejectedExist = rejectedList.find(item => item.name === cardInfo.name)
  if (!rejectedExist) {
    rejectedList.push(cardInfo);
    renderRejected()
  }
  interviewList = interviewList.filter(item => item.name != cardInfo.name);
  renderInterview();
  count();
  }
  
  else if(event.target.classList.contains('Interview-btn')){
  const parentNode = event.target.parentNode.parentNode;
  const name = parentNode.querySelector('.name').innerText;
  const position = parentNode.querySelector('.position').innerText;
  const place = parentNode.querySelector('.place').innerText;
  const time = parentNode.querySelector('.time').innerText;
  const salary = parentNode.querySelector('.salary').innerText;
  const status = parentNode.querySelector('.statu').innerText;
  const description = parentNode.querySelector('.description').innerText;
  parentNode.querySelector('.statu').innerText = 'Interview';
  parentNode.querySelector('.statu').classList.add('bg-green-400');
  parentNode.querySelector('.statu').classList.remove('bg-blue-400');
  parentNode.querySelector('.statu').classList.remove('bg-red-400');
  const cardInfo = {
    name,
    position,
    place,
    time,
    salary,
    status: 'Interview',
    description
  };

  const interviewExist = interviewList.find(item => item.name === cardInfo.name)
  if (!interviewExist) {
    interviewList.push(cardInfo);
    renderInterview()
  }
  rejectedList = rejectedList.filter(item => item.name != cardInfo.name);
  renderRejected();
  count();
  
  }

  else if (event.target.closest('.Delete-btn')) {
  const card = event.target.closest('.border-0');

  const name = card.querySelector('.name').innerText;

  interviewList = interviewList.filter(item => item.name !== name);
  rejectedList = rejectedList.filter(item => item.name !== name);

  card.remove();

  renderInterview();
  renderRejected();

  count();
  }
})


function renderInterview() {
  interviewSection.innerHTML = ''
  for (let interview of interviewList) {
    let div = document.createElement('div');
    div.classList.add("border-0", "rounded-md", "shadow", "bg-white", "p-6", "mb-7", "flex", "justify-between")
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
              <span class="statu badge badge-xl font-semibold bg-green-400">${interview.status}</span>
            </div>
            <br>
            <p class="description">${interview.description}</p>
            <br>
            <div>
              <button class="btn btn-outline btn-success Interview-btn">Interview</button>
              <button class="btn btn-outline btn-error Rejected-btn">Rejected</button>
            </div>
          </div>
          <div>
            <button class="Delete-btn btn rounded-full"><i class="fa-regular fa-trash-can"></i></button>
          </div>
    `
    interviewSection.appendChild(div);
  }
}

function renderRejected() {
  rejectedSection.innerHTML = ''
  for (let rejected of rejectedList) {
    let divs = document.createElement('div');
    divs.classList.add("border-0", "rounded-md", "shadow", "bg-white", "p-6", "mb-7", "flex", "justify-between")
    divs.innerHTML = `
          <div>
            <h2 class="font-bold text-xl name">
              ${rejected.name}
            </h2>
            <p class="text-lg position">
              ${rejected.position}
            </p>
            <br>
            <ul class="flex gap-8">
              <li class="place">${rejected.place}</li>
              <li class="list-disc time">${rejected.time}</li>
              <li class="list-disc salary">${rejected.salary}</li>
            </ul>
            <br>
            <div>
              <span class="statu badge badge-xl font-semibold bg-red-400">${rejected.status}</span>
            </div>
            <br>
            <p class="description">${rejected.description}</p>
            <br>
            <div>
              <button class="btn btn-outline btn-success Interview-btn">Interview</button>
              <button class="btn btn-outline btn-error Rejected-btn">Rejected</button>
            </div>
          </div>
          <div>
            <button class="Delete-btn btn rounded-full"><i class="fa-regular fa-trash-can"></i></button>
          </div>
    `
    rejectedSection.appendChild(divs);
  }
}

function noJobsRejectedSection(){
  if(rejectedSection.childElementCount == 0){
    const div = document.createElement('div');
    div.innerHTML = `
    <div id="No-jobs-two" class="border-0 rounded-md shadow bg-white py-20 mb-7 text-center">
        <i class="fa-regular fa-file-lines text-[80px]"></i>
        <h1 class="font-bold text-3xl">No jobs available</h1>
        <p class="text-slate-400">Check back soon for new job opportunities</p>
      </div>
    `
    rejectedSection.appendChild(div);
  }
}
function noJobsInterviewSection(){
  if(interviewSection.childElementCount == 0){
    const div = document.createElement('div');
    div.innerHTML = `
    <div id="No-jobs-one" class="border-0 rounded-md shadow bg-white py-20 mb-7 text-center">
        <i class="fa-regular fa-file-lines text-[80px]"></i>
        <h1 class="font-bold text-3xl">No jobs available</h1>
        <p class="text-slate-400">Check back soon for new job opportunities</p>
      </div>
    `
    interviewSection.appendChild(div);
  }

}
noJobsRejectedSection()
noJobsInterviewSection()

