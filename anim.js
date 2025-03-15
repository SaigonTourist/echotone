
function handleScroll() {
    const lgexElement = document.querySelector('.lgex');
    
    
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const maxScroll = scrollHeight - clientHeight;
    const currentScroll = window.scrollY;
    
   
    // Por ejemplo, cuando hemos desplazado el 90% de la página
    const scrollThreshold = maxScroll * 0.9;

    if (currentScroll >= scrollThreshold) {
      lgexElement.classList.add('move-left');
    } else {
    
      lgexElement.classList.remove('move-left');
    }
  }
  

  window.addEventListener('scroll', handleScroll);
  
  document.addEventListener('DOMContentLoaded', handleScroll);