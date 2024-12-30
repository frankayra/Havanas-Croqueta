const nav_tabs = document.querySelectorAll('nav .nav-tab');

nav_tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        nav_tabs.forEach(tab => {
            tab.classList.remove('selected');
        });
        e.target.classList.add('selected');
        console.log(tab.name);
    });
    
});