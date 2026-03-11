function openModal(projectId) {
  // 모든 모달 콘텐츠 숨기기
  document.querySelectorAll('.modal-content').forEach(el => {
    el.style.display = 'none';
  });

  // 해당 프로젝트 콘텐츠 보이기
  const target = document.getElementById('modal-' + projectId);
  if (target) {
    target.style.display = 'block';
  }

  // 오버레이 표시
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ESC 키로 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
