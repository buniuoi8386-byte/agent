const sourceToggle = document.querySelector('#source-toggle');
const sourceDetails = document.querySelector('#source-details');

sourceToggle?.addEventListener('click', () => {
  const isExpanded = sourceToggle.getAttribute('aria-expanded') === 'true';
  sourceToggle.setAttribute('aria-expanded', String(!isExpanded));
  sourceDetails.hidden = isExpanded;
  sourceToggle.innerHTML = isExpanded
    ? '查看核对来源 <span aria-hidden="true">＋</span>'
    : '收起参考来源 <span aria-hidden="true">−</span>';
});
