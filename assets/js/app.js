function trabajadorLaboratoria(){
		var datos =
        [ { nombre : "Arabela",
            apellido : "Rojas",
            rol : "T.A",
            cumpleanios : "23 de enero" },

					{ nombre : "Michelle",
            apellido : "Seguil",
            rol : "T.A",
            cumpleanios : "25 de noviembre" },

					{ nombre : "Meche",
            apellido : "Zubieta",
            rol : "T.A",
            cumpleanios : "02 de marzo" },

					{ nombre : "Papu",
            apellido : "Rivariola",
            rol : "Psicóloga",
            cumpleanios : "10 de octubre" },

					{ nombre : "Gian",
            apellido : "Corzo",
            rol : "Profesor",
            cumpleanios : "23 de enero" } ];

		var ficha = "<ul>";
		  datos.forEach(function(elemento){
            ficha += "<div> Nombre: " + elemento.nombre + "<br>" +
					                  "Apellido: "+ elemento.apellido + "<br>"+
                					  "Rol: "+ elemento.rol + "<br>" +
                					  "Cumpleaños: "+ elemento.cumpleanios + "<br><br></div>";
		                        });
  		ficha += "</ul>";
  		document.write(ficha);
	}

  trabajadorLaboratoria();
