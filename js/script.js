//função de subir ao topo
const voltarAoTopo = () => {
    window.scrollTo({
   top: 0,
   behavior: 'smooth'
    })
   }

//função de ao ser acessado por mobile, o sistema abre diretamente a versão desktop
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

if (isMobileDevice()) {
    window.location.href = 'index.html';
}
