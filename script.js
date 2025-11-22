const stateSelectRole = document.getElementById('state-select-role');
const stateStudentPortal = document.getElementById('state-student-portal');
const studentRoleButton = document.querySelector('.role-button[data-role="student"]');
const switchRoleBtn = document.querySelector('.switch-role-btn');

function showStudentPortal() {
stateSelectRole.classList.add('hidden');
stateStudentPortal.classList.remove('hidden');
}

function showSelectRole() {
stateStudentPortal.classList.add('hidden');
stateSelectRole.classList.remove('hidden');
}

if (studentRoleButton) {
studentRoleButton.addEventListener('click', showStudentPortal);
}

if (switchRoleBtn) {
switchRoleBtn.addEventListener('click', showSelectRole);
}

const tabButtons = document.querySelectorAll(".student-tabs .tab");
const tab1 = document.getElementById("tab-schedule");
const tab2 = document.getElementById("tab-rooms");

tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (index === 0) {
      tab1.classList.remove("hidden");
      tab2.classList.add("hidden");
    } else {
      tab2.classList.remove("hidden");
      tab1.classList.add("hidden");
    }
  });
});
