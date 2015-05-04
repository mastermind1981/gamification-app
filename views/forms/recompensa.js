define(function(){

	return {
		$ui:{
			view: 'window',
			modal: true,
			id: 'meta-window',
			position: 'center',
			head: 'Adicionar meta',
			body:{
				paddingY: 20,
				paddingX: 30,
				elementsConfig:{labelWidth: 140},
				view: 'form',
				id: 'meta-form',
				elements:[{
					view: 'datepicker',
					label: 'Data de Início',
					value: new Date(),
					format: '%d  %M %Y'
				},{
					view: 'datepicker',
					label: 'Data de Término',
					value: new Date(),
					format: '%d  %M %Y'
				},{
					margin: 10,
					cols:[{},{
						view: 'button',
						label: 'Salvar',
						type: 'form',
						align: 'center',
						width: 120,
						click: function(){
							webix.$$('meta-window').close();
						}
					},{
						view: 'button',
						label: 'Cancelar',
						align: 'center',
						width: 120,
						click: function(){
							webix.$$('meta-window').close();
						}
					}]
				}]
			}
		}
	};

});