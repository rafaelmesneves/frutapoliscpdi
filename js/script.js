const voltarAoTopo = () => {
    window.scrollTo({
   top: 0,
   behavior: 'smooth'
    })
   }

if (window.innerWidth < 1280) {
     window.location.href = 'desktop-version.html';
}
