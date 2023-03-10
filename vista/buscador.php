<html>
    <head>
        <style>
            #cuerpo {
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <button id="btnlogin" onclick="Iniciar();">Login</button>
        <button id="deslogin" onclick="Cerrar();">Cerrar</button>

            <section id="cuerpo">
                    <input placeholder="Palabra a Buscar"/>
                    <input type="submit"/>
            </section>

            <script>
                if (sessionStorage.getItem('Statuslogueo') === 'true') {
                    alert("Sesion se mantiene inciada");
                    document.getElementById("cuerpo").style.display = "block";
                    document.getElementById("btnlogin").style.display = "none";
                    document.getElementById("deslogin").style.display = "block";
                }
                else {
                    alert("Sesion no existe");
                    document.getElementById("cuerpo").style.display = "none";
                    document.getElementById("deslogin").style.display = "none";
                }

                function logueo(){
                    //ajax para servicio de logueo
                    return true;
                }

                function Token(){
                    //ajax para servicio de 2do factor de autenticacion
                    return "937172385";
                }
                
                function Iniciar(){
                    alert("Sesion inciada");
                    var status = logueo();
                    if(status){
                        sessionStorage.setItem('Statuslogueo', status);
                        var IdLogin = Token();
                        if(IdLogin != ""){
                            //obtener el id del usuario luego de pasar por el proceso de token
                            sessionStorage.setItem('IdLogueo', IdLogin);
                            //mostrar formulario
                            document.getElementById("cuerpo").style.display = "block";
                            document.getElementById("btnlogin").style.display = "none";
                            document.getElementById("deslogin").style.display = "block";
                            //codigo para que mostrar toda la info del usuario IdUsuario
                        } else {
                            alert("Codigo Incorrecto");
                        }
                    } else { alert("Usuario o Contraseña Incorrecta"); }
                }

                function Cerrar(){
                    if(sessionStorage.getItem('IdLogueo') == '937172385'){
                        alert("Sesion cerrada");
                        sessionStorage.removeItem("Statuslogueo");
                        document.getElementById("cuerpo").style.display = "none";
                        document.getElementById("btnlogin").style.display = "block";
                        document.getElementById("deslogin").style.display = "none";
                    } else {
                        alert("Sesion Incorrecta");
                    }
                }

            </script>

    </body>
</html>