function makeCountUp(target, goal, duration, accFunc = 'ease', frame = 60){
    const totalFrame = duration * frame;

    let progressFunc;

    try{
        if(accFunc === 'ease'){
            progressFunc = easeInOutCubic;
        }else if(typeof accFunc === 'function'){
            progressFunc = accFunc;
        }else if(accFunc === 'linear'){
            progressFunc = (x)=>{
                return x
            }
        }else{
            throw new Error("잘못된 가속도 함수입니다.");
        }

        for(let i = 0; i <= totalFrame; i++){
            const 진행도 = i/totalFrame;
            setTimeout(()=>{
                count.innerText = parseInt(goal * progressFunc(진행도));
            },i/frame * 1000);
        }; 

    } catch (e){
    try {
        if(accFunc === 'ease') {
            progressFunc = easeInOutCubic;
        }else if(typeof accFunc === 'function'){
            progressFunc = accFunc;
        }else if(accFunc === 'linear') {
            progressFunc = (x)=>{
                return x
            };
        }else {
            throw new Error("잘못된 가속도 함수 입니다.");
        }

        for(let i = 0 ; i <= totalFrame ; i ++) {
        const 진행도 = i/totalFrame;
        setTimeout(()=>{
            count.innerText = parseInt(goal * progressFunc(진행도));
        },i/frame * 1000)
    }

    } catch (e) {
        console.error(e);
    }

    function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    function easeInOutBack(x) {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;

        return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    }

    function easeInExpo(x) {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    }
    }
}