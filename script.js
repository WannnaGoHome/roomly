const stateSelectRole = document.getElementById('state-select-role');
const portals = document.querySelectorAll('.portal');
const roleButtons = document.querySelector('.role-button[data-role]');
const switchRoleBtn = document.querySelector('.switch-role-btn');

function hideAllPortals() {
  portals.forEach((portal) => portal.classList.add('hidden'));
}

function showSelectRole() {
  hideAllPortals();
  stateSelectRole.classList.remove('hidden');
}

roleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const role = btn.dataset.role;
    stateSelectRole.classList.add('hidden');
    hideAllPortals();

    const portal = document.querySelector(`.portal[data-portal="${role}"]`);
    if (portal) portal.classList.remove('hidden');
  });
});

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
