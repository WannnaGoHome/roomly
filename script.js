const stateSelectRole = document.getElementById('state-select-role');
const portals = document.querySelectorAll('.portal');
const roleButtons = document.querySelectorAll('.role-button[data-role]');
const switchRoleBtns = document.querySelectorAll('.switch-role-btn');
const modal = document.getElementById("reservation-modal");
const overlay = document.getElementById("modal-overlay");
document.getElementById("open-modal").onclick = openModal;
document.getElementById("modal-close").onclick = closeModal;
document.getElementById("modal-cancel").onclick = closeModal;
overlay.onclick = closeModal;

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

switchRoleBtns.forEach(btn => {
  btn.addEventListener('click', showSelectRole);
});

const tabButtons = document.querySelectorAll(".student-tabs .tab");
const tab1 = document.getElementById("tab-schedule");
const tab2 = document.getElementById("tab-rooms");

if (tabButtons.length > 0) {
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
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}