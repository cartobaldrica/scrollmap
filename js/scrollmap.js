function scrollmap(){

    positionTitle()

    var centerPad = '<div class="col-lg-3 col-md-2 col-sm-1 col-0"></div>',
        sidePad = '<div class="col-lg-1 col-md-0 col-sm-0 col-0"></div>',
        rightPad = '<div class="col-lg-6 col-md-6 col-sm-6 col-0"></div>';

    document.querySelectorAll('.center').forEach(div =>{
        div.classList.add('col','col-lg-6','col-md-8','col-sm-10','col-12')
        div.insertAdjacentHTML('beforebegin',centerPad)
        div.insertAdjacentHTML('afterend',centerPad)
    });
    document.querySelectorAll('.left').forEach(div =>{
        div.classList.add('col','col-lg-5','col-md-6','col-sm-6','col-12')
        div.insertAdjacentHTML('beforebegin',sidePad)
    });
    document.querySelectorAll('.right').forEach(div =>{
        var children = div.parentNode.childNodes,
            containsLeft;

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

    });
}


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


document.addEventListener('DOMContentLoaded', scrollmap)
document.addEventListener('resize', positionTitle)

