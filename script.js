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