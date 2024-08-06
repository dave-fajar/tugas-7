document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f1c40f';
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});