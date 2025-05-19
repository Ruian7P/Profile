document.querySelector('.theme-switch__checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Hide scroll-to-explore text when scrolling
const scrollToExplore = document.querySelector('.scroll-to-explore');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {  // Hide after scrolling 50px
        scrollToExplore.style.opacity = '0';
        scrollToExplore.style.transition = 'opacity 0.5s ease-out';
    } else {
        scrollToExplore.style.opacity = '1';
    }
});

// Only try to access myName if it exists
const myName = document.querySelector('.my-name');
function handleScroll() {
    if (myName) {  // Check if element exists before using it
        const isVisible = window.scrollY >= myName.offsetTop - window.innerHeight;
        if(isVisible) {
            myName.classList.add('animate');
        } else {
            myName.classList.remove('animate');
        }
    }
}

window.addEventListener('scroll', handleScroll);

if(window.innerWidth>767){
    window.addEventListener('scroll', () =>{
        const scrollLine  = document.querySelectorAll(".parallax");
        var index = 0, length = scrollLine.length;
        for(index;index<length;index++){
            var pos = window.pageYOffset * scrollLine[index].dataset.rate;
    
            if(scrollLine[index].dataset.direction === 'vertical'){
                scrollLine[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
            }
            else{
                var posX = window.pageYOffset * scrollLine[index].dataset.ratex;
                var posY = window.pageYOffset * scrollLine[index].dataset.ratey;
                scrollLine[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
            }
        }
    })
}