function DibujarProyecto(NombreP, Descr){
	//var divProyectos = document.getElementById("ProyectosD");

	//var divProyectoC = document.createElement("div");
	//divProyectoC.setAttribute("class", "row");

	var divProyecto = document.createElement("div");
	divProyecto.setAttribute("class", "col-sm");
	divProyecto.setAttribute("id", "proyecto");	

	var titulo = document.createElement("h3");

	var center = document.createElement("center");

	var buttonP = document.createElement("a");
	buttonP.setAttribute("class", "btn btn-outline-info");
	buttonP.setAttribute("href", "VerProyecto.html");

	var NombrePro = document.createTextNode(NombreP);
	var NombreDes = document.createTextNode(Descr);
	var Info = document.createTextNode("Más");

	buttonP.appendChild(Info);
	center.appendChild(buttonP);
	titulo.appendChild(NombrePro)
	divProyecto.appendChild(titulo);
	divProyecto.appendChild(NombreDes);
	divProyecto.appendChild(center);
	//divProyectoC.appendChild(divProyecto);


	//var newContent = document.createTextNode("Hola!¿Qué tal?");
  	//divTarea.appendChild(newContent);

	//insertAfter(divProyectos, divProyectoC);
	return divProyecto;
}
function NuevoProyecto() {
	let NombreP = document.getElementById("NombreP").value;
	let Descr =  document.getElementById("Descripcion").value;
	
	//Código para guardar en la BD
	//ListaProyectos debe recibir un array
	ListaProyectos(NombreP,Descr);
}

function ListaProyectos(NombreP, Descr) {
	let divs = new Array();
	for (var i = 0; i < 3; i++) {
		divs.push(DibujarProyecto(NombreP,Descr));
	}

	var divProyectos = document.getElementById("ProyectosD");

	var divProyectoC = document.createElement("div");
	divProyectoC.setAttribute("class", "row");

	for (var i = 0; i < divs.length; i++) {
		divProyectoC.appendChild(divs[i]);
	}

	divProyectos.appendChild(divProyectoC);
}

 function insertAfter(e,i){ 
        if(e.nextSibling){ 
            e.parentNode.insertBefore(i,e.nextSibling); 
        } else { 
            e.parentNode.appendChild(i); 
        }
    }
