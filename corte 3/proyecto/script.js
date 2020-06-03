function crearUsuarios(resultados){
  
  let usuario = {
    nombre: resultados.x2,
    correo: resultados.v2,
    contrasena: resultados.a2,
    genero: resultados.f2


  }
  localStorage.setItem(usuario, JSON.stringify(usuario));
}



function obtenerListaUsuarios(){
  var listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosLs"));
  if(listaUsuarios == null){
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosLs"));
  }
  console.log(listaUsuarios);
  return listaUsuarios;


}
function login(pCorreo,pContrasena){
  var resultados = obtenerDatos();
  var bAcceso = false;

  if(pCorreo==resultados[1]&&pContrasena == resultados[3]){
    bAcceso=true;
    
  }

  
  return bAcceso;
}
function loginV(pInicio,pFin,pCupos){
  var resultados = obtenerDatosV();
  var bAcceso = false;
  if(pInicio==resultados[0]&&pFin == resultados[1]&&pCupos == resultados[2]){
    bAcceso=true;
    
  }

  
  return bAcceso;
}
function loginB(pDestino){
  var resultados = obtenerDatos();
  var bAcceso = false;
  if(pDestino==resultados[0]){
    bAcceso=true;
    
  }

  
  return bAcceso;
}


