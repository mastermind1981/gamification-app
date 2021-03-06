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
				width: 500,
				elementsConfig:{
					labelWidth: 120,
					labelAlign: 'right'
				},
				view: 'form',
				id: 'meta-form',
				elements:[{
					view: 'text',
					label: 'Título'
				},{
					view: 'textarea',
					label: 'Descrição'
				},{
					view: 'datepicker',
					label: 'Data de Início',
					value: new Date(),
					format: '%d  %M %Y',
					width: 300
				},{
					view: 'datepicker',
					label: 'Data de Término',
					value: new Date(),
					format: '%d  %M %Y',
					width: 300
				},{
					view: 'text',
					label: 'Meta projetada',
					width: 300
				},{
					view: 'text',
					label: 'Meta realizada',
					width: 300
				},{ 
					view: 'richselect',
					width: 300,
					label: 'Status',
					name: 'statusID',
					options:{
						data:[
							{ id: 1, value:'Não Iniciada' },
							{ id: 2, value:'Em Andamento' }, 
							{ id: 3, value:'Cancelada' },
							{ id: 4, value:'Concluída' }
						]
					}
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