// alert("Viss Fashion")

// toggle navbar 
const mobileNav = document.querySelector('.mobileMenu');
const mobileNavBtn = document.querySelector('.mobileMenuBtn');

mobileNavBtn.addEventListener('click', function(){
    mobileNav.style.display = ( mobileNav.style.display === 'none' || mobileNav.style.display === '') ? 'block' :'none';
})


// navigation 

const authBtn = document.querySelector('#authBtn');
const backBtn = document.querySelector('#backBtn');

// to auth page 
authBtn.addEventListener('click', function(){
    window.location.href = 'auth.html'
})

// to home page 
backBtn.addEventListener('click', function(){
    window.location.href = 'viss.html'
})



