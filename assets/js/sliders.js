(function(){
    const section1 = document.querySelector('#slider-1');
    const section2 = document.querySelector('#slider-2');
    const section3 = document.querySelector('#slider-3');
    
    swipeImage('#slider-1', '#slider-1 .slider__section'); 
    
    setTimeout(() => {
        swipeImage('#slider-2', '#slider-2 .slider__section');
    }, 2000);

    setTimeout(() => {
        swipeImage('#slider-3', '#slider-3 .slider__section');
    }, 3300);

  
    

    function swipeImage(paramSlider, paramSliderSection){
        const slider = document.querySelector(paramSlider);
        let sliderSection = document.querySelectorAll(paramSliderSection); //'#slider-container-1 .slider__section'
        let sliderSectionLast = sliderSection[sliderSection.length - 1];
    
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        
        setInterval(() => {
            nextImage(paramSlider, paramSliderSection);
        }, 5000);
    }

    function nextImage(paramSlider, paramSliderSection){
        const slider = document.querySelector(paramSlider);
        let sliderSectionFirst = document.querySelectorAll(paramSliderSection)[0];
        let img = document.querySelectorAll(paramSliderSection)[2].children[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 1s";

        if(img.classList.contains('zoom')){
            img.classList.remove('zoom');
            img.classList.add('zoom-out');
        }
        else{
            img.classList.add('zoom-in');
        }
        
        setTimeout(() => {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        }, 1000);

        setTimeout(() => {
            if(img.classList.contains('zoom-out')){
                img.classList.add('zoom');
                img.classList.remove('zoom-out');
            }
            else{
                img.classList.remove('zoom-in');
            }
        }, 5000);
    }
    
    function isInViewport(elem) {
        var distance = elem.getBoundingClientRect();
        return (
            distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
        );
    }
})();