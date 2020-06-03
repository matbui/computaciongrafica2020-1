document.querySelector('#btnRegistro').addEventListener('click',obtenerDatos);


function obtenerDatos(){
    var a2, c2, f2, x2, v2;
    x2 = document.getElementById('1Nombre').value;
    v2 = document.getElementById('1Correo').value;
    a2 = document.getElementById('1Contrasena').value;
    c2 = document.getElementById('1reContrasena').value;
    f2 = document.getElementById('1genero').value;
    
  

  if (a2==c2){
    
    var r = [ x2, v2, f2, a2];
    
    console.log(r.length);
    
  return r;
  }
else {
  alert("No coinciden las contraseñas.")
}

  
  

}

document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);
function iniciarSesion(){
    var sCorreo = '';
    var sContraseña ='';
    var bAcceso = false;
    sCorreo = document.querySelector('#txtCorreo').value;
    sContraseña = document.querySelector('#txtContrasena').value;
    bAcceso = login(sCorreo,sContraseña);
    if(bAcceso==true){
        window.location.href = "menu.html";
    }
   

}
document.querySelector('#btnGenerar').addEventListener('click',obtenerDatosV());
function obtenerDatosV(){
  var a2, x2, v2;
  x2 = document.getElementById('#iViaje').value;
  v2 = document.getElementById('#fViaje').value;
  a2 = document.getElementById('#cupos').value;
 

  var r = [ x2, v2, a2];
  return r;


}
document.querySelector('#btnBuscar').addEventListener('click',obtenerDatosB());
function obtenerDatosB(){
  var  x2;
  x2 = document.getElementById('#destino').value;
  return x2;


}
function generarViaje(){
  var sInicio = '';
  var sFin ='';
  var sCupos ='';
  var bAcceso = false;
  sInicio = document.querySelector('#iViaje').value;
  sFin = document.querySelector('#fViaje').value;
  sCupos = document.querySelector('#cupos').value;
  bAcceso = loginV(sInicio,sFin,sCupos);
  if(bAcceso==true){
      window.location.href = "Proyecto.html";
  }
 

}
function buscarViaje(){
  var sDestino = '';
  var bAcceso = false;
  sDestino = document.querySelector('#destino').value;
  
  bAcceso = loginB(sDestino);
  if(bAcceso==true){
      window.location.href = "Proyecto.html";
  }
 

}
