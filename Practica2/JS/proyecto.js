console.log('Proyecto JS');
//Validación de Datos
var today = new Date();
var tomorrow = new Date();

var dtomorrow = today.getDate() + 1;
var dtoday = today.getDate();
var mmtd = today.getMonth()+1; 
var yyyytd = today.getFullYear();

function obtenerFecha(dd, mm, yyyy) {
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

	return fecha = yyyy+'-'+mm+'-'+dd;
}

today = obtenerFecha(dtoday, mmtd,yyyytd);
tomorrow = obtenerFecha(dtomorrow, mmtd,yyyytd);
 
document.getElementById("FechaI").setAttribute("min", today);
document.getElementById("FechaF").setAttribute("min", tomorrow);

//Creación y despliegue de Tareas 

/*function Tarea(nombre,FechaI,FechaF,Antecesor, Avance){
	Nombre = nombre;
	FechaI = FechaI;
 	FechaF = FechaF
	Antecesor = Antecesor;
	Avance = Avance;
}*/

function dibujarTarea(NombreT,Avance){
	var divTareas = document.getElementById("Tareas");

	var divTarea = document.createElement("div");
	divTarea.setAttribute("class", "row");

	var divBotones = document.createElement("div");
	divBotones.setAttribute("class", "botones");	

	var buttonB = document.createElement("button");
	buttonB.setAttribute("class", "btn");
	buttonB.setAttribute("id", "Prueba");

	var buttonM = document.createElement("button");
	buttonM.setAttribute("class", "btn");
	buttonM.setAttribute("id", "Prueba");

	var iboton = document.createElement("i");
	iboton.setAttribute("class", "fa fa-trash");

	var ibotonM = document.createElement("i");
	ibotonM.setAttribute("class", "fa fa-folder");

	buttonM.appendChild(ibotonM);
	buttonB.appendChild(iboton);
	divBotones.appendChild(buttonB);
	divBotones.appendChild(buttonM);
	divTarea.appendChild(divBotones);

	var divTareaNom = document.createElement("div");
	divTareaNom.setAttribute("class", "col-sm-1");
	divTareaNom.setAttribute("id", "Tarea");

	var titulo = document.createTextNode(NombreT);

	divTareaNom.appendChild(titulo);
	divTarea.appendChild(divTareaNom);

	var divBarras = document.createElement("div");
	divBarras.setAttribute("class", "col-sm-8");
	divBarras.setAttribute("id", "Tarea");

	var divBarraT = document.createElement("div");
	divBarraT.setAttribute("class", "barraTotal");

	var divBarraA = document.createElement("div");
	var ava = "width: " +Avance+"%;";
	divBarraA.setAttribute("style", ava);
	divBarraA.setAttribute("class", "barraParcial");

	divBarras.appendChild(divBarraT);	
	divBarras.appendChild(divBarraA);
	divTarea.appendChild(divBarras);

	var hr = document.createElement("hr");

	var id= document.getElementById("Prueba");
	//var newContent = document.createTextNode("Hola!¿Qué tal?");
  	//divTarea.appendChild(newContent);

	insertAfter(divTareas, divTarea);
	insertAfter(divTarea, hr);

	console.log("Funciona" + id);
	console.log(NombreT);

}



function NuevaTarea() {
	nombre = document.getElementById("NombreT").value;
	FechaI =  document.getElementById("FechaI").value;
	FechaF = document.getElementById("FechaF").value;
	Predecesor= document.getElementById("Antecesor").value;
	Avance =document.getElementById("Avance").value;
	
	dibujarTarea(nombre, Avance);
}


 function insertAfter(e,i){ 
        if(e.nextSibling){ 
            e.parentNode.insertBefore(i,e.nextSibling); 
        } else { 
            e.parentNode.appendChild(i); 
        }
    }
