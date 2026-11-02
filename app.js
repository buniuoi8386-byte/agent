const sourceToggle = document.querySelector('#source-toggle');
const sourceDetails = document.querySelector('#source-details');

sourceToggle?.addEventListener('click', () => {
  const isExpanded = sourceToggle.getAttribute('aria-expanded') === 'true';
  sourceToggle.setAttribute('aria-expanded', String(!isExpanded));
  sourceDetails.hidden = isExpanded;
  sourceToggle.innerHTML = isExpanded
    ? 'Xem nguồn đã đối chiếu <span aria-hidden="true">＋</span>'
    : 'Ẩn nguồn tham khảo <span aria-hidden="true">−</span>';
});
