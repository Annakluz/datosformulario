function translate (){
  var title = document.getElementById('form-signin-heading');
  var email = document.getElementById("inputEmail");
  var password = document.getElementById('inputPassword');
  var remember = document.getElementsByTagName('span')[0];
  var button = document.getElementsByTagName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electronico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesion";
}
 translate();

function mostrarEmail(){
  var correo = document.getElementById("inputEmail").value;
  var contrasena = document.getElementById("inputPassword").value;

  var mostrarTitulo = document.getElementById("datos");
  var mostrarContrasena = document.getElementById("devolverdatos");

  mostrarTitulo.innerHTML="Datos ingresados ";
  devolverdatos.innerHTML = "El correo ingresado es " + correo + "<br>la contraseña ingresada es " + contrasena;
}
