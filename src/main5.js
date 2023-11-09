document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
      const targetTabId = event.target.dataset.tabButton;
      const targetTab = document.querySelector(`[data-tab-id=${targetTabId}]`);

      hideAllTabs();
      targetTab.classList.add('shows__list--is-active');
    });
  }

  function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
      tabsContainer[i].classList.remove('shows__list--is-active');
      tabsContainer[i].style.fontFamily = 'Roboto, sans-serif';
    }
  }
});
