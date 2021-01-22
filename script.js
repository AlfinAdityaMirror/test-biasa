const plus=document.querySelector(".main i")
plus.addEventListener('click',function () {
    const submain=document.querySelector(".sub-main")
    submain.classList.toggle('show')
})

const plus1=document.querySelector(".main i.cost")
console.log(plus1)
plus1.addEventListener('click',function () {
    const submain=document.querySelector(".sub-main-cost")
    submain.classList.toggle('show')
})

const p=document.getElementsByTagName('p')[1]
p.childNodes[0].innerText='asdsas'