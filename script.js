// --------- cached DOM ----------
const stateSelectRole = document.getElementById('state-select-role');
const portals = document.querySelectorAll('.portal');
const roleButtons = document.querySelectorAll('.role-button[data-role]');
const switchRoleBtns = document.querySelectorAll('.switch-role-btn');

const modal = document.getElementById("reservation-modal");
const overlay = document.getElementById("modal-overlay");
const newReservationBtns = document.querySelectorAll('.new-reservation-btn');

// --------- basic role switching (unchanged) ----------
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
switchRoleBtns.forEach(btn => btn.addEventListener('click', showSelectRole));

// --------- Tabs: scope tabs to their portal/container ----------
document.querySelectorAll('.student-tabs').forEach(tabsContainer => {
  // find portal root (closest element that has data-portal or the main container)
  const portalRoot = tabsContainer.closest('[data-portal]') || tabsContainer.closest('.container') || document;
  // find all tab buttons inside this tabsContainer
  const tabs = Array.from(tabsContainer.querySelectorAll('.tab'));
  // find all tab-content elements inside the same portal root (scoped)
  const contents = Array.from(portalRoot.querySelectorAll('.tab-content'));

  // if there are no contents — nothing to do
  if (tabs.length === 0 || contents.length === 0) return;

  // ensure initial state: activate first tab and show its content, hide others
  tabs.forEach((t, i) => t.classList.toggle('active', i === 0));
  contents.forEach((c, i) => {
    if (i === 0) c.classList.remove('hidden'); else c.classList.add('hidden');
  });

  // attach handlers
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach((c, i) => {
        if (i === index) c.classList.remove('hidden');
        else c.classList.add('hidden');
      });
    });
  });
});

// --------- Dropdown (club select) ----------
document.querySelectorAll('.club-dropdown').forEach(dd => {
  const btn = dd.querySelector('.dropdown-toggle');
  const menu = dd.querySelector('.dropdown-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });

  // clicking an item sets the label and closes menu
  menu.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      // set button label while keeping chevron
      btn.firstChild.nodeValue = li.textContent + " ";
      menu.classList.add('hidden');
      // optional: mark selected visually
      menu.querySelectorAll('li').forEach(x => x.classList.remove('selected'));
      li.classList.add('selected');
    });
  });

  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dd.contains(e.target)) menu.classList.add('hidden');
  });
});

// --------- Modal open/close ----------
function openModal() {
  if (modal) modal.classList.remove('hidden');
  if (overlay) overlay.classList.remove('hidden');
}
function closeModal() {
  if (modal) modal.classList.add('hidden');
  if (overlay) overlay.classList.add('hidden');
}
if (openModalTrigger) openModalTrigger.addEventListener('click', openModal);
// open from any New Reservation button
newReservationBtns.forEach(b => b.addEventListener('click', openModal));

const modalCloseBtn = document.getElementById("modal-close");
const modalCancelBtn = document.getElementById("modal-cancel");
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', closeModal);

// --------- small safeguard: close modal on Esc ----------
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
