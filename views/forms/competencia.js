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
				width: 450,
				elementsConfig:{
					labelWidth: 80,
					labelAlign: 'right'
				},
				view: 'form',
				id: 'meta-form',
				elements:[{
					view: 'text',
					label: 'Descrição'
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
					},{}]
				}]
			}
		}
	};

});