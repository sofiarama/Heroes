document.addEventListener("DOMContentLoaded", function(){
    const opcionesBtn = document.getElementById('mas');
    const opcionesMenu = document.getElementsByClassName('acc2')[0];
    
    opcionesBtn.addEventListener('click', function(event) {
        event.preventDefault();
    
      // Si el menu está visible, lo oculta, sino lo muestra.
      if (opcionesMenu.style.display === 'block') {
        opcionesMenu.style.display = 'none';
      } else {
        opcionesMenu.style.display = 'block';
      }
    });

});
