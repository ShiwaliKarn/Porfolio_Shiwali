const nav = document.getElementById('desktop-nav');
// Function to add or remove shadow on scroll
function handleScroll() {
    if (window.scrollY > 0) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }
}

window.addEventListener('scroll', handleScroll);

// Footer with dynamic year
const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = `Copyright &#169; ${currentYear} Shiwali Karn. All Rights Reserved.`;