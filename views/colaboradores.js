define([
	'views/forms/colaborador',
	'models/colaboradores'
], function(colaboradorform, colaboradores){

	var controls = [
		{ view: 'button', type: 'iconButton', icon: 'plus', label: 'Adicionar colaborador', width: 190, click: function(){
			this.$scope.ui(colaboradorform.$ui).show();
		}},
		{},
		{}
	];

	var grid = {
		margin:10,
		rows:[
			{
				id:"colaboradorData",
				view:"datatable", select:true,
				columns:[
					{id:"nome", header:"Nome", sort:"string", minWidth:150},
					{id:"competencia", header:"Competência", sort:"string", minWidth:150}
				],
				pager:"pagerA",
				//data: colaboradores.getAll,
				onClick:{
					webix_icon:function(e,id,node){
						webix.confirm({
							text:"O colaborador será excluído.<br/> Você tem certeza?", ok:"Excluir", cancel:"Cancelar",
							callback:function(res){
								if(res){
									webix.$$("colaboradorData").remove(id);
								}
							}
						});
					}
				}
			}
		]

	};

	var layout = {
		type: 'space',
		rows:[
			{
				height:40,
				cols:controls
			},
			{
				rows:[
					grid,
					{
						view: "toolbar",
						css: "highlighted_header header6",
						paddingX:5,
						paddingY:5,
						height:40,
						cols:[{
							view:"pager", id:"pagerA",
							template:"{common.first()}{common.prev()}&nbsp; {common.pages()}&nbsp; {common.next()}{common.last()}",
							autosize:true,
							height: 35,
							group:5
						}

						]
					}
				]
			}



		]

	};

	return {
		$ui: layout
	};

});