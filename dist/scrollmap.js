(function(){
    //calculate inline position of a right element 
    async function rightPosition(){
        document.querySelectorAll('.right').forEach(div =>{
            var children = div.parentNode.childNodes,
                containsLeft;

            //calculate if positioned next to a .left element
            for (child of children){
                if(child.classList){
                    containsLeft = child.classList.contains("left");
                    if (containsLeft){
                        div.classList.remove('right')
                        div.classList.add('right-inline')
                        break;
                    }
                }
            }
        });

        //full width element
        document.querySelectorAll('.full-width').forEach(div =>{
            div.parentNode.style.padding = 0;
        });
    }
    //center title horizontally and vertically within page
    function positionTitle(){
        if (document.querySelector('.title')){
            var children = document.querySelector('.title').childNodes,
                tHeight = document.querySelector('.title').clientHeight,
                cHeight = 0;

            for (child of children){
                if (child.clientHeight)
                    cHeight += child.clientHeight;
            }

            document.querySelector('.title').firstElementChild.style.marginTop = (tHeight - cHeight)/2 + "px";
        }
    }
    //center element vertically within the page
    function vertCenter(){
        document.querySelectorAll('.vert-center').forEach(div =>{
            var height = div.clientHeight,
                pHeight = div.closest(".row").clientHeight;
                
            div.style.marginTop = (pHeight/2) - (height/2) + "px";
        });
    }
    //resize background elements
    function resizeBackround(){
        var width = document.documentElement.clientWidth;

        document.querySelectorAll('.container').forEach(div =>{
            div.width = width + 'px !important';
        });
    }
    //function for a smooth transition between background elements
    function backgroundTransition(){
        document.querySelectorAll(".scroll-container").forEach(function(scrollContainer){
            let foreground = scrollContainer.children[1],
                background = scrollContainer.children[0],
                foregroundItems = [];
            //add individual foreground items to the array
            foreground.childNodes.forEach(function(child){
                if (child.nodeName == "DIV"){
                    foregroundItems.push(child);
                }
            })
            //if there is more than one background item, activate scroll listener
            if(background.children.length > 1){
                background.childNodes.forEach(function(child){
                    //if the element is not a "text" element
                    if (child.nodeName != "#text" && child.nodeName != "#comment"){
                        //retrieve data-slide value to get the foreground item
                        let id = child.dataset.slide ? child.dataset.slide - 1 : 0,
                            nextId = child.nextElementSibling ? child.nextElementSibling.dataset.slide - 1 : null;
                        //activate listener for each background item
                        document.addEventListener("scroll",function(){
                            //position at the bottom of the screen
                            let scrollPos = window.scrollY + (window.innerHeight) - foregroundItems[id].clientHeight,
                            //position of the select foreground item
                                foreGroundOffset = foregroundItems[id].offsetParent.offsetTop + foregroundItems[id].offsetTop,
                            //position of the next foreground item
                                foreGroundBottom = nextId ? foregroundItems[nextId].offsetParent.offsetTop + foregroundItems[nextId].offsetTop : document.querySelector("body").offsetHeight;
                            //if the current scroll position is greater than the bottom position of the foreground element
                            if (scrollPos > foreGroundOffset && scrollPos < foreGroundBottom){
                                if (child.classList.contains("hidden")){
                                    if (child.previousElementSibling)
                                        child.previousElementSibling.classList.add("hidden");
                                    if (child.nextElementSibling)
                                        child.nextElementSibling.classList.add("hidden");

                                    child.classList.remove("hidden");
                                }
                                //if last image is longer than the viewport height, add margin to scroll container
                                if (!nextId){
                                    scrollContainer.style.marginBottom = child.offsetHeight - background.offsetHeight + "px";
                                }
                                vertCenter();
                            }  
                        })
                    }
                })
            }
        })

    }
    //slideshow functions
    document.querySelectorAll(".slideshow-container").forEach(function(slideshow){
        //set initial slide index and show first slide
        let slideIndex = 1;
        showSlides(slideIndex);
        //if next button is clicked, advance to next slide
        slideshow.querySelectorAll(".next").forEach(function(elem){
            elem.addEventListener("click",function(){
                let n = slideIndex++;
                showSlides(n);
            })
        })
        //if previous button is clicked, return to previous slide
        slideshow.querySelectorAll(".prev").forEach(function(elem){
            elem.addEventListener("click",function(){
                slideIndex = slideIndex - 1;
                showSlides(slideIndex);
            })
        })
        //if a dot is clicked, move to that dot's slide position
        slideshow.querySelectorAll(".dot").forEach(function(elem){
            elem.addEventListener("click",function(){
                slideIndex = Number(elem.id);
                showSlides(slideIndex);
            })
        })
        //funciton that shows the current slide
        function showSlides(n) {
            let i,
                slides = slideshow.getElementsByClassName("slide"),
                dots = slideshow.getElementsByClassName("dot");
            //if the last slide in the slideshow has been reached, return to the beginning
            if (n >= slides.length) {
                slideIndex = 1
            }
            //if the first slide in the slideshow has been reached, advance to the end
            if (n < 1) {
                slideIndex = slides.length
            }
            //hide all slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            //acivate current dot
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            //show active slide
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        } 

    })
    
    //functions to fire on resize
    async function onLoad(){
        await rightPosition();

        resize();
    }

    function resize(){
        positionTitle();
        resizeBackround();
        backgroundTransition();
        vertCenter();
    }

    window.onload = onLoad;
    document.addEventListener('scroll', vertCenter);
    window.addEventListener('resize', resize);

})();