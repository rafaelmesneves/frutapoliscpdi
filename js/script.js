const voltarAoTopo = () => {
    window.scrollTo({
   top: 0,
   behavior: 'smooth'
    })
   }

let modoDark = document.getElementById('modoDark')
let body = document.querySelector('body')

modoDark.addEventListener('click', ()=> {
    modoDark.classList.toggle('dark')
    body.classList.toggle('dark')
})
