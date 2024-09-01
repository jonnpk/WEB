function createMoveHorizonScroll(target,breakPoint) {

    const horizonContainer = document.createElement('div');
    target.parentElement.insertBefore(horizonContainer,target)

    const horizonSticky = document.createElement('div')
    const moveContainer = document.createElement('div');

    horizonContainer.appendChild(horizonSticky);
    horizonSticky.appendChild(moveContainer)
    moveContainer.appendChild(target);


    const scrollbarWidth = window.innerWidth - document.body.clientWidth


    function applyPos(pos) {
        moveContainer.style.transform = `translateX(${pos}px)`
    }

    function moveHorizonScroll() {

        const pos = horizonContainer.getBoundingClientRect();
        const range = window.innerWidth - moveContainer.clientWidth;
        let targetPos;

        if(pos.top > 0){
            targetPos = 0;
        }else if(pos.top < range) {
            targetPos = range;
        }else {
            targetPos = pos.top;
        }

        if(window.innerWidth < breakPoint){
            applyPos(0)
        }else {
            applyPos(targetPos)
        }
    }

    function checkBreaking(){
        return window.innerWidth < breakPoint ? true : false
    }

    function setCSS() {
        const resp = checkBreaking();
        
        if(resp){
            horizonContainer.style.height = 'auto'
            horizonSticky.style.height = 'auto'
            horizonSticky.style.position = 'relative'
            moveContainer.style.width = `100%`;
        }else {
            moveContainer.style.width = `fit-content`
            horizonContainer.style.height = `${moveContainer.getBoundingClientRect().width - window.innerWidth + window.innerHeight + scrollbarWidth}px`
            horizonSticky.style.height = `100vh`
            horizonSticky.style.position = 'sticky'
        }
    }

    function init() {
        horizonSticky.style.width = `100%`
        horizonSticky.style.overflow = `hidden`
        horizonSticky.style.top = `0px`

        moveContainer.style.height = '100%'
        
        setCSS();
        moveHorizonScroll()
    }


    init();
    window.addEventListener('scroll',moveHorizonScroll)
    window.addEventListener('resize',()=>{
        setCSS();
        moveHorizonScroll()
    })

}