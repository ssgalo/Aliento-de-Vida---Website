(function(){
    const slider = document.querySelector("#person-slider");
    let sliderSection = document.querySelectorAll(".person-slider__section"); 
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    const btnLeft = document.getElementById('button_left');
    const btnRight = document.getElementById('button_right');

    slider.insertAdjacentElement('afterbegin', sliderSectionLast);

    function nextImage(){
        let sliderSectionFirst = document.querySelectorAll(".person-slider__section")[0];
        
        slider.style.marginLeft = "-200%";
        slider.style.transition = "all 0.5s";

        setTimeout(() => {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    function previousImage(){
        let sliderSection = document.querySelectorAll(".person-slider__section");
        let sliderSectionLast = sliderSection[sliderSection.length - 1];

        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";

        setTimeout(() => {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    btnLeft.addEventListener('click', function(){
        previousImage();
        console.log("click left");
    });

    btnRight.addEventListener('click', function(){
        nextImage();
        console.log("click right");
    });

    document.getElementById('img').addEventListener('click', function(){
        nextImage();
        console.log("click right");
    });
})();