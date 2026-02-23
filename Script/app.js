//Array for Storing--

let interviewList = [];
let rejectedList = [];

//currentStatus--

let currentStatus = 'All';

// total id of dashboard and tab section--

let total = document.getElementById("total");
let totalJob = document.getElementById("total-job");

//main id for Delegation--

const main = document.getElementById('main');

//Getting All Jobs and count children length--

const allJobs = document.getElementById("all-jobs");
const allJobsCount = allJobs.children.length;

//hide or show item count in Tabs--

const intCountHide = document.getElementById("int-count-hide");
const rejectCountHide = document.getElementById("reject-count-hide");

// Tab Counter ID--
const intContCount = document.getElementById("int-cont-count");
const rejectContCount = document.getElementById("reject-cont-count");

//INTERVIEW AND REJECTED Counter--

const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

//iD FOR noJobsCard--
const noJobsCard = document.getElementById("no-job-available");

//ID FOR filter Section

const filterSection = document.getElementById("filter-section");
                                                                    



function calculator() {
  total.innerText = allJobsCount;
  totalJob.innerText = allJobsCount;

  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  intContCount.innerText = interviewCount.innerText;
  rejectContCount.innerText = rejectedCount.innerText;
}

calculator();

//all btn on toggleStyle

function toggleStyle(id) {

  const allBtn = document.getElementById("all-btn");
  const intBtn = document.getElementById("int-btn");
  const rejectBtn = document.getElementById("reject-btn");

  allBtn.classList.remove("bg-blue-500", "text-white");
  intBtn.classList.remove("bg-blue-500", "text-white");
  rejectBtn.classList.remove("bg-blue-500", "text-white");

  allBtn.classList.add("bg-white", "text-black");
  intBtn.classList.add("bg-white", "text-black");
  rejectBtn.classList.add("bg-white", "text-black");

  const activeBtn = document.getElementById(id);
  activeBtn.classList.remove("bg-white", "text-black");
  activeBtn.classList.add("bg-blue-500", "text-white");

  currentStatus = id;

  if (id == "int-btn") {

    allJobs.classList.add("hidden");
    
    intCountHide.classList.remove("hidden");
    rejectCountHide.classList.add("hidden");

    noJobsCard.classList.add("hidden");

    if (interviewCount.innerText == 0) {
      noJobsCard.classList.remove("hidden");
    } else {
      // //interview section will be shown
      filterSection.classList.remove('hidden');
      renderingInterview();
    }
  } else if (id == "all-btn") {
    
    allJobs.classList.remove("hidden");
    noJobsCard.classList.add("hidden");
    filterSection.classList.add('hidden');

    intCountHide.classList.add("hidden");
    rejectCountHide.classList.add("hidden");

  } else if (id == "reject-btn") {
    
    allJobs.classList.add("hidden");
    
    rejectCountHide.classList.remove("hidden");
    intCountHide.classList.add("hidden");

    if (rejectedCount.innerText == 0) {
      noJobsCard.classList.remove('hidden');
    } else {
      // Rejected section will be shown here
      
      filterSection.classList.remove('hidden');
      renderingRejected();
    }
  }
}

//all btn toggleStyle close

//Event Delegation-

main.addEventListener("click", function (e) {
    
    
  if (e.target.classList.contains('interview')) {
    const parentNode = e.target.parentNode.parentNode.parentNode;
    

    const jobTittle = parentNode.querySelector(".job-tittle").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    let jobBadge = parentNode.querySelector(".badge").innerText;
    const jobNote = parentNode.querySelector(".job-note").innerText;

    parentNode.querySelector(".badge").innerText = 'INTERVIEW';

    const jobCardInfo = {
      jobTittle,
      jobPosition,
      jobType,
      jobBadge: 'INTERVIEW',
      jobNote,
    };

    const itemExist = interviewList.find(item => item.jobTittle == jobCardInfo.jobTittle);

    
    if (!itemExist) {
      interviewList.push(jobCardInfo);
    }

    rejectedList = rejectedList.filter(item => item.jobTittle != jobCardInfo.jobTittle);
    if (currentStatus == 'reject-btn'){
        renderingRejected();
    }

    calculator();
    
    //function for reject button here -

  } else if(e.target.classList.contains('rejected')){

    const parentNode = e.target.parentNode.parentNode.parentNode;
    

    const jobTittle = parentNode.querySelector(".job-tittle").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    let jobBadge = parentNode.querySelector(".badge").innerText;
    const jobNote = parentNode.querySelector(".job-note").innerText;

    parentNode.querySelector(".badge").innerText = 'REJECTED';

    const jobCardInfo = {
        jobTittle,
        jobPosition,
        jobType,
        jobBadge: 'REJECTED',
        jobNote,
      };

    const itemExist = rejectedList.find(item => item.jobTittle == jobCardInfo.jobTittle);

    
    
    if (!itemExist) {
      rejectedList.push(jobCardInfo);
    }

    interviewList = interviewList.filter(item => item.jobTittle != jobCardInfo.jobTittle);

    if (currentStatus == 'int-btn'){
        renderingInterview();
    }

    calculator();
    
    
  }




    
});


//rendering function for Interview Tab

function renderingInterview() {
  filterSection.innerHTML = "";
  for (let interview of interviewList) {
    const div = document.createElement("div");
    div.className =
      "job-card bg-white p-6 rounded-lg border-1 border-[#F1F2F4] flex justify-between";
    div.innerHTML = `
         <div class="left">
                        <div class="card-header">
                        <div class="content">
                            <h3 class="job-tittle font-bold text-[#002C5C]"> ${interview.jobTittle}</h3>
                            <p class="job-position text-[#64748B]">${interview.jobPosition}</p>
                        </div>
                        
                    </div>

                    <div class="cards-body">
                        <p class="job-type text-[#64748B] py-5">${interview.jobType}</p>
                        <button class="badge py-3 px-6 bg-[#EEF4FF] rounded-lg font-bold"> ${interview.jobBadge} </button>
                        <p class="job-note py-5"> ${interview.jobNote} </p>

                        <div>
                            <button class="btn interview btn-outline btn-warning">Interview</button>
                            <button class="btn rejected btn-outline btn-error pl-2">Rejected</button>
                        </div>

                    </div>
                    </div>

                    <div class="icon border-1 border-[#F1F2F4] rounded-full p-3 cursor-pointer w-12 h-12">
                            <i class="fa-regular fa-trash-can"></i>
                    </div>

                </div>`;

            filterSection.appendChild(div);
  }
}


//rendering function for Rejected Tab

function renderingRejected() {
  filterSection.innerHTML = "";
  for (let rejected of rejectedList) {
    const div = document.createElement("div");
    div.className =
      "job-card bg-white p-6 rounded-lg border-1 border-[#F1F2F4] flex justify-between";
    div.innerHTML = `
         <div class="left">
                        <div class="card-header">
                        <div class="content">
                            <h3 class="job-tittle font-bold text-[#002C5C]"> ${rejected.jobTittle}</h3>
                            <p class="job-position text-[#64748B]">${rejected.jobPosition}</p>
                        </div>
                        
                    </div>

                    <div class="cards-body">
                        <p class="job-type text-[#64748B] py-5">${rejected.jobType}</p>
                        <button class="badge py-3 px-6 bg-[#EEF4FF] rounded-lg font-bold"> ${rejected.jobBadge} </button>
                        <p class="job-note py-5"> ${rejected.jobNote} </p>

                        <div>
                            <button class="btn interview btn-outline btn-warning">Interview</button>
                            <button class="btn rejected btn-outline btn-error pl-2">Rejected</button>
                        </div>

                    </div>
                    </div>

                    <div class="icon border-1 border-[#F1F2F4] rounded-full p-3 cursor-pointer w-12 h-12">
                            <i class="fa-regular fa-trash-can"></i>
                    </div>

                </div>`;

            filterSection.appendChild(div);
  }
};



// this section for item deleting-

document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    console.log('clicked');
    
    icon.parentNode.classList.add("hidden");
    total.innerText = Number(total.innerText) - 1;
    totalJob.innerText = Number(totalJob.innerText) - 1;
  });
});





