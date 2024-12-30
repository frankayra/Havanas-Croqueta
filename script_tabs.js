for (const tab of tabs) {
    tab.addEventListener('click', (e) => {
        active_tab.classList.remove('active-tab');
        active_tab = e.target;
        active_tab.classList.add('active-tab');
    })
}