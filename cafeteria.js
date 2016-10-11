var cafeteria={
		// Propiedades
		
		estado:"Sin solicitud",
	
		//Metodos
		// tipoCafe recibe: Capuccino y cantAzucar: recibe sin azucar.
		tomarPedido:function(tipoCafe,cantAzucar){
			this.estado="Tomando Pedido";
			return {
	            cafe: tipoCafe, 
	            azucar: cantAzucar,
	            
	        };
		},
		// Recibe la variable objeto y la convierte en un string
		preparandoCafe:function(ingredientes){
			this.estado="Preparando el cafe...";
			// transformo el objeto en un string
			return ingredientes.cafe+ " , "+ ingredientes.azucar;
		},
		    // pone el string diciendo nuevoCabe: Capuchino sin azucar
		servirCafe:function(nuevoCafe){
			this.estado="Listo, retire el vaso. Por favor!!";
			return 'Cafe: '+ nuevoCafe;
		},
		
		
		    // tipoCafe recibe: Capuccino y cantAzucar: recibe sin azucar.
		hacerCafe:function(tipoCafe,cantAzucar){
			//devuelve un objeto, atributo: cafe y azucar y se los paso por parametro
			var ingredientes=this.tomarPedido(tipoCafe,cantAzucar);
			//string
			var nuevoCafe=this.preparandoCafe(ingredientes);
			// devuelve servir cafe
			return this.servirCafe(nuevoCafe);
		}
	
};