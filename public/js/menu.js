function miFuncion(){
    document.querySELECTor(".miLink").style.backgroundColor = "yellow";
}

//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
    var header = document.querySELECTor("header");
    header.classList.toggle('down', window.scrollY > 0);

      //change logo
      var logo = document.querySELECTor(".brand img");
      if (window.scrollY>0) {
          logo.setAttribute('src', 'resource/img/white.png');
      }else{
          logo.setAttribute('src', 'resource/img/blue.png');
      }

  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySELECTor('.menu');
  var menuBtn = document.querySELECTor('.menu-btn');
  var closeBtn = document.querySELECTor('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });


var boton = document.getElementById('boton-ojo');
var input = document.getElementById('contraseña');

boton.addEventListener('click',mostrarContr());

function mostrarContr(){
  if(input.type == "password"){
    input.type = "text";
    boton.src = "eye-slash-fill.svg";
  }else{
    input.type = "password";
    boton.src = "resource/img/eye-fill.svg";
  }

}




