/* Comente todo el codigo para que lo puedas entender, Ojo! practica 
las condicionales! te dejare comentado como funciona cada uno y recuerda de pregutar
si tienes alguna duda :3 */

/* como te dije, estamos trabajando con la libreria de jQuery para resumir
y hacer mas práctico el codigo. Recuerda que cualquier elemento del html en jQuery
se llama : $()
los id se llaman $("#Nombre_ID")
las class se llaman $(".Nombre_Class")
las etiquetas html, usando <p> por ejemplo $("p")
y el documento HTML se llama $(document)

aqui el $(document).ready(function(){}) esta diciendo que
apenas el documento HTML este listo (.ready())
se ejecutaran las funciones de este

cada funcion que jQuery que implique una  accion
dentro de la aplicacion va a llevar una funcion
que su sintaxis es

function(){
    //funciones de la accion
};
*/

$(document).ready(function(){
    //aqui con la palabra reservada var, guardamos las secciones de nuestro html
    var juego = $("#juego");
    var felicitaciones = $("#felicitaciones");
    var fallaste = $("#fallaste");
    var jugar = $("#jugar");
    var inicio = $("#inicio");
    var vocalJuego = $("#vocalJuego");
    var muestraAlternativa =$("#muestraAlternativa");
    //aqui declaramos que partes se mantendra ocultas hasta que ocurra algo
    juego.hide();
    felicitaciones.hide();
    fallaste.hide();
    /* recuerdas que habiamos hecho algo con botones no?
    pues lo haremos dinamico y asi lo haras en tus proximos juegos
    asi que presta atencion.
    
    Lo primero que haremos sera hacer dos arrays que contengan las vocales que estaran de respuesta
    y las vocales que mostrara el perrito. recuerda que los arrays son listas de cosas separadas por comas.
    */

    var vocalPerro = new Array('A','E','I','O','U');
    var vocalAlternativa = new Array('A','E','I','O','U');

    /*como repaso recuerda que los objetos en Javascript y en cualquier otro lenguaje
    se comienza a contar desde 0 como posicion inicial.
    nos organizaremos de esta manera:
    1.- sacar de manera dinamica la vocal para el perro
    2.- mostrar de manera dinamica las alternativas
    3.- dar funciones de logrado e intentalo de nuevo a cada alternativa*/

    /*inicio juego: se llama a la variable de que guarda al boton.
    La funcion .click() dice que hara algo apenas se le haga click 
    y como es una funcion que implica una accion, llevara una funcion.
    Al iniciar el juego se ejecutan y resetean todas las funciones*/
    jugar.click(function(){
        /*Entonces, apenas hagamos click en el boton
        se mostrara la seccion que guarda el juego
        y se ocultara la seccion que es el inicio*/
        juego.show();
        inicio.hide();
        
        /*
        nos organizaremos de esta manera:
        1.- sacar de manera dinamica la vocal para el perro
        2.- mostrar de manera dinamica las alternativas
        3.- dar funciones de logrado e intentalo de nuevo a cada alternativa

        asi que aqui va la tarea 1: sacar de manera dinamica la vocal para el perro
        */
        var vocalAlAzar = Math.floor(Math.random()*5);
        var vocalPerroAzar = vocalPerro[vocalAlAzar];
        /*para que las muestre al azar, creamos una variable llamada "vocalAlAzar" que contiene la funcion Math. esto te lo explicare en la siguiente clase.
        ahora dentro de una nueva variable llamada "vocalPerroAzar", mostraremos cualquier vocal de manera dinamica dentro de nuestro id "vocalJuego" */
        
        vocalJuego.append("<p id='vocalDog'>"+ vocalPerroAzar+"</p>"); //recuerda este id ;)

        /*la funcion append() sirve para meter codigo html desde javascript a la pagina de manera dinamica, asi no se demora en cargar tanto.
        dentro del append colocamos con comillas la etiqueta html que usaremos (en este caso la etiqueta parrafo) y concatenamos (+) la variable
        que muestra al azar cualquier vocal("vocalPerroAzar").*/

        /*hasta aqui si recargas la pagina cualquier cantidad de veces, se te mostraran distintas vocales.
        Esa formula de la variable vocalAlAzar se puede reutilizar! solo debes cambiar el numero que esta multiplicando Math.random(), ya que ese numero son la cantidad
        de elementos que contiene el array que quieres mostrar al azar (en este caso 5)*/

        /* ahora iremos a la tarea 2: alternativas aleatorias y dinamicas*/

        /*como te dije anteriormente, la formula de la variable vocalAlAzar se puede reutilizar, pero no desde la misma variable
        por que lo que pasaria es que se repetirian las mismas vocales tanto en la que sostendra el perrito como en las alternativas
        por lo que haré otra variable que contenga la formula para asi poder tener otra vocal*/
        
        var vocalAlternivaAlAzarUno = Math.floor(Math.random()*5);
        var vocalAlternativaAzar = vocalAlternativa[vocalAlternivaAlAzarUno];

        /*Ahora lo que falta seria mostrar la alternativa no? se hace de la misma manera que lo hicimos con la vocal para el perro
        tomamos la seccion donde queremos "appendear"(muestraAlternativa) y con .append() colocamos los parrafos/botones/lo quesea html */

        muestraAlternativa.append("<p id='azarUno' class= 'btn'>"+ vocalAlternativaAzar+"</p>");
        /*pero aunque queramos que aparezcan al azar, debemos de colocar si o si una que coincida con la vocal que muestra el perro, asi que
        usaremos la misma variable quee contiene la formula del perro("vocalAlAzar") y la usaremos aqui*/
        var vocalAlternativaAzarDos = vocalAlternativa[vocalAlAzar];
        /* y lo appendeamos de la misma manera que hicimos anteriormente*/
        muestraAlternativa.append("<p id='azarDos' class= 'btn'>"+ vocalAlternativaAzarDos +"</p>");

        /*si recargas tienes ya tienes alternativas dinamicas y ademas una vocal dinamica, con esto tenemos 60% de la funcion del juego hecha.
        ahora vienen la funcion clave. la de si pasa o no pasa.
        si te fijas en el codigo(aparte de colocarle acada parrafo la class btn de materialize), a cada parrafo le di un id, que usaremos aqui*/

       /*guardaremos en variables ambos id y les daremos la funcion click a cada uno */

        var botonAlternativaUno = $("#azarUno");
        var botonAlternativaDos = $("#azarDos");

        //dando la funcion click al primer boton:
        botonAlternativaUno.click(function(){
        /*para probar si realmente esta funcionando usamos un console.log y le pedimos que nos muestre la vocal que contiene el boton*/
        console.log(vocalAlternativaAzar);
        /* usamos if para comprobar si esta bueno o si esta malo.
        como es una condicional, estamos diciendo "si 'esto'es igual a 'esto', En donde si es verdad mostrara
        la seccion de "felicitaciones" o si no (else) mostrara la seccion "fallaste" que dice "intentalo de nuevo".*/
        if(vocalAlternativaAzar==vocalPerroAzar){
            console.log("esta bueno");
            /* que pasara si es Verdad?*/
            juego.hide(); // la seccion del juego se ocultara
            felicitaciones.show() //se mostrara la seccion de felicitaciones
            felicitaciones.hide(3000); //se ocultara luego de 3 segundos (javascript trabaja con milisegundos asi que 3000 son 3 segundos)
            inicio.show(3000); // se mostrara la seccion de inicio del juego luego de 3 segundos
            //esto de aqui, evita que al re-iniciar el juego, aparezcan botones extra y vocales extra.pruebalo! si comentas esas lineas y reinicias el navegador, apareceran botones extra:
            botonAlternativaDos.remove(); //se borra el boton extra que aparece
            botonAlternativaUno.remove(); //se borra el segundo boton extra que aparece
            $("#vocalDog").remove(); //se borra la vocal extra que aparece
        } else{
            //o si no
            console.log("intentalo de nuevo") //en consola aparecera el intentalo de nuevo
            juego.hide(); //la seccion del juego se ocultara
            fallaste.show() // se mostrara la seccion de fallaste
            fallaste.hide(3000); //se ocultara la seccion de fallaste en 3 segundos
            juego.show(3000); //se volvera a mostrar el juego luego de 3 segundos
        }
        });

        //dando la funcion click al segundo boton
        botonAlternativaDos.click(function(){
        //console.log(vocalAlternativaAzarDos);
        if(vocalAlternativaAzarDos==vocalPerroAzar){
            console.log("esta bueno")
            juego.hide();
            felicitaciones.show()
            felicitaciones.hide(3000);
            inicio.show(3000);
            botonAlternativaDos.remove();
            botonAlternativaUno.remove();
            $("#vocalDog").remove();
            

        } else {
            console.log("intentalo de nuevo");
            juego.hide();
            fallaste.show();
            fallaste.hide(3000)
            juego.show(3000);
        }
        });

        /* las condicionales funcionan con "operadores logicos" que son muy importantes al momento de dar las funciones
        a los elementos de las paginas y aplicaciones. En este caso estamos usando el operador de igualdad == 
        que dice que ambos elementos deben ser iguales.
        por ejemplo tomando la funcion del botonAlternativaUno:

        en la condicional estamos diciendo: si la vocal que aparece en el momento dentro de la variable "vocalAlternativaAzar", es IGUAL a la que aparece en la variable del perro, Si eso es VERDADERO, se mostrara el console.log() que nos dira que eso esta correcto.
        En cambio si lo anteriormente dicho es FALSO, se cumple lo que dice el Else y se mostrara en la consola el console.log que dice que lo intentes de nuevo.
        
        lee bien este codigo metele mano y practica!
        pruebalo en tu aplicacion y me cuentas que tal~
        no olvides preguntar ;)
        Suerte!
        */

    });
    

});