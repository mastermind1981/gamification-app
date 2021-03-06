define(function(){

	return {
		$ui:{
			view: 'window',
			modal: true,
			id: 'recompensa-window',
			position: 'center',
			head: 'Adicionar recompensa',
			body:{
				paddingY: 20,
				paddingX: 30,
				width: 450,
				elementsConfig:{
					labelWidth: 130,
					labelAlign: 'right'
				},
				view: 'form',
				id: 'recompensa-form',
				elements:[{
					view: 'text',
					label: 'Descrição'
				},{ 
					view: 'richselect',
					label: 'Nível mínimo',
					name: 'nivelID',
					options:{
						data:[
							{ id: 1, value:'Nível 1' },
							{ id: 2, value:'Nível 2' }, 
							{ id: 3, value:'Nível 3' }
						]
					}
				},{
					view: 'counter',
					label: 'Pontos necessários'
				},{
					margin: 10,
					cols:[{},{
						view: 'button',
						label: 'Salvar',
						type: 'form',
						align: 'center',
						width: 120,
						click: function(){
							webix.$$('recompensa-window').close();
						}
					},{
						view: 'button',
						label: 'Cancelar',
						align: 'center',
						width: 120,
						click: function(){
							webix.$$('recompensa-window').close();
						}
					},{}]
				}]
			}
		}
	};

});