const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalWindow = document.createElement('div');
modalWindow.classList.add('modal-window');
modal.appendChild(modalWindow);

const modalTitle = document.createElement('h2');
modalTitle.classList.add('modal-title');
modalWindow.appendChild(modalTitle);

const modalText = document.createElement('p');
modalText.classList.add('modal-text');
modalWindow.appendChild(modalText);

const closeBtn = document.createElement('button');
closeBtn.classList.add('modal-close');
closeBtn.innerText = '확 인'
modalWindow.appendChild(closeBtn);


closeBtn.addEventListener('click',()=>{
    closeModal();
})

window.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})

window.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape'){
        closeModal();
    }
})


function openModal(title,text){
    modalTitle.innerText = title;
    modalText.innerText = text;
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}