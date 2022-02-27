(function(){
    function scrollmap(){

    ////DIV positioning////
        //bootstrap classes for positioning
        var centerPad = '<div class="col-lg-3 col-md-2 col-sm-1 col-0"></div>',
        sidePad = '<div class="col-lg-1 col-md-0 col-sm-0 col-0"></div>',
        rightPad = '<div class="col-lg-6 col-md-6 col-sm-6 col-0"></div>';
        //center
        document.querySelectorAll('.center').forEach(div =>{
            div.classList.add('col','col-lg-6','col-md-8','col-sm-10','col-12')
            div.insertAdjacentHTML('beforebegin',centerPad)
            div.insertAdjacentHTML('afterend',centerPad)
        })
        //center with narrow margin
        document.querySelectorAll('.center-wide').forEach(div =>{
            div.classList.add('col','col-lg-10','col-md-12','col-sm-12','col-12')
            div.insertAdjacentHTML('beforebegin',sidePad)
            div.insertAdjacentHTML('afterend',sidePad)
        });
        //left
        document.querySelectorAll('.left').forEach(div =>{
            div.classList.add('col','col-lg-5','col-md-6','col-sm-6','col-12')
            div.insertAdjacentHTML('beforebegin',sidePad)
        });
        //right
        document.querySelectorAll('.right').forEach(div =>{
            var children = div.parentNode.childNodes,
                containsLeft;

            //calculate if positioned next to a .left element
            for (child of children){
                if(child.classList){
                    containsLeft = child.classList.contains("left");
                    if (containsLeft){
                        div.classList.add('col','col-lg-5','col-md-6','col-sm-6','col-12')
                        div.insertAdjacentHTML('afterend',sidePad)
                        break;
                    }
                }
            }
            
            if (!containsLeft){
                div.insertAdjacentHTML('beforebegin',rightPad)
                div.classList.add('col','col-lg-5','col-md-6','col-sm-6','col-12')
                div.insertAdjacentHTML('afterend',sidePad)
            }
        //full width element
        });
        document.querySelectorAll('.full-width').forEach(div =>{
            div.parentNode.style.padding = 0;
        });

        resize();
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
    //center element vertically within its parent
    function vertCenter(){
        document.querySelectorAll('.vert-center').forEach(div =>{
            var width = document.documentElement.clientWidth,
                cHeight = div.clientHeight,
                pHeight = div.parentNode.clientHeight;

            div.style.marginTop = (pHeight - cHeight)/2 + "px";
        });
    }
    //center element vertically within the page
    function vertCenter(){
        document.querySelectorAll('.vert-center-page').forEach(div =>{
            var height = document.documentElement.clientHeight,
                cHeight = div.clientHeight;

            div.style.marginTop = (height - cHeight)/2 + "px";
        });
    }
    //resize background elements
    function resizeBackround(){
        var width = document.documentElement.clientWidth;

        document.querySelectorAll('.container').forEach(div =>{
            div.width = width + 'px !important';
        });
    }
    //functions to fire on resize
    function resize(){
        vertCenter();
        positionTitle();
        resizeBackround();
    }



    document.addEventListener('DOMContentLoaded', scrollmap);
    window.addEventListener('resize', resize);

})();