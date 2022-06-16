let btn=document.querySelector('.button');

window.addEventListener('scroll',function(){
if(window.scrollY>400){
    btn.classList.add('activebtn')
   
}
else{
    btn.classList.remove('activebtn')
   
}
})

btn.addEventListener('click',function(){
window.scrollTo({
    top:0
})

})

// let a=document.querySelectorAll('ul li a')

// a.forEach((element)=>{
// element.addEventListener('click',()=>{
   
// element.classList.add('active')
// })
// })
