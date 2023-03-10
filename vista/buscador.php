<html>
    <head>
    </head>
    <body>
        <button id="elboton" onclick="Iniciar();">Login</button>

            <section id="cuerpo">
                    <input placeholder="Palabra a Buscar"/>
                    <input type="submit"/>
            </section>

            <script>
                if (sessionStorage.getItem('Idlogueo') === 'true') {
                    alert("Sesion se mantiene inciada");
                    document.getElementById("cuerpo").style.display = "block";
                    document.getElementById("elboton").style.display = "none";
                }
                else {
                    alert("Sesion no existe");
                    document.getElementById("cuerpo").style.display = "none";
                }
                
                function Iniciar(){
                    alert("Sesion inciada");
                    sessionStorage.setItem('Idlogueo', true);
                    document.getElementById("cuerpo").style.display = "block";
                    document.getElementById("elboton").style.display = "none";
                }
            </script>

    </body>
</html>