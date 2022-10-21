(function(){
    //calculate inline position of a right element 
    function rightPosition(){
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
                pHeight = div.parentNode.clientHeight;
                
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
                        console.log(child)
                        let id = child.dataset.slide ? child.dataset.slide : 0;
                        //activate listener for each background item
                        document.addEventListener("scroll",function(){
                            //position at the bottom of the screen
                            let scrollPos = window.scrollY + (window.innerHeight) - foregroundItems[id].clientHeight,
                            //position of the select foreground item
                                foreGroundOffset = foregroundItems[id].offsetParent.offsetTop + foregroundItems[id].offsetTop;
                            //if the current scroll position is greater than the bottom position of the foreground element
                            if (scrollPos > foreGroundOffset){
                                if (child.previousElementSibling)
                                    child.previousElementSibling.classList.add("hidden");
                                if (child.nextElementSibling)
                                    child.nextElementSibling.classList.add("hidden");
                                child.classList.remove("hidden");
                                vertCenter();
                            }  
                        })
                    }
                })
            }
        })
    }
    //functions to fire on resize
    function resize(){
        rightPosition();
        vertCenter();
        positionTitle();
        resizeBackround();
        backgroundTransition();
    }

    document.addEventListener('DOMContentLoaded', resize);
    document.addEventListener('scroll', vertCenter);
    window.addEventListener('resize', resize);

})();