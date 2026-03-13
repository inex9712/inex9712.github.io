// ── 모달 열기/닫기 ──────────────────────────
function openModal(projectId) {
  document.querySelectorAll('.modal-content').forEach(el => {
    el.style.display = 'none';
  });

  const target = document.getElementById('modal-' + projectId);
  if (target) target.style.display = 'block';

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // 모달 열릴 때 스크롤 맨 위로
  document.querySelector('.modal').scrollTop = 0;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── 아코디언 토글 ─────────────────────────
function toggleAccordion(btn) {
  const body = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');

  // 같은 아코디언 안의 모든 항목 닫기
  const accordion = btn.closest('.accordion');
  accordion.querySelectorAll('.accordion-btn').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });

  // 클릭한 항목이 닫혀있었으면 열기
  if (!isOpen) {
    btn.classList.add('open');
    body.classList.add('open');
  }
}
