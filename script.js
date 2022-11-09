const OpenPopUp = document.getElementById('open_pop_up')
const ClosePopUP = document.getElementById('pop_up_close')
const popUp = document.getElementById('pop_up')
const popup = document.getElementById('popup')
const loGin = document.getElementById('btn_log')
const btnOk = document.getElementById('btn_ok')


OpenPopUp.addEventListener('click',function (e){
    e.preventDefault();
    popUp.classList.add('active')
})

ClosePopUP.addEventListener('click',()=>{
    popUp.classList.remove('active');
})

loGin.addEventListener('click', ()=>{
    popUp.remove();
    popup.style.display = 'block'
    OpenPopUp.style.display = 'none'
})

btnOk.addEventListener('click', ()=>{
    popup.style.display = 'none'
    OpenPopUp.style.display = 'block'
})


