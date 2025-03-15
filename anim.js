
function handleScroll() {
    const lgex = document.querySelector('.lgex');
    
    
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const maxScroll = scrollHeight - clientHeight;
    const currentScroll = window.scrollY;
    
   
    const scrollIniciado = maxScroll * 0.1;
    const scrollTerminado = maxScroll * 0.9;
    if (currentScroll >= scrollIniciado) {
      lgex.classList.add('move-left');
    } else {
      lgex.classList.remove('move-left');
    }

    if (currentScroll >= scrollTerminado) {
      lgex.classList.add('centrar');
    } else {
    
      lgex.classList.remove('centrar');
    }
  }
  

  window.addEventListener('scroll', handleScroll);
  
  document.addEventListener('DOMContentLoaded', handleScroll);