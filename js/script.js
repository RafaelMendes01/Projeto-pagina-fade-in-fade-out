const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshhold: 1
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearoptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});