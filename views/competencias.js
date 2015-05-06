define([
	'views/forms/competencia',
	'models/competencias'
], function(competenciaform, competencias){

	var controls = [
		{ view: 'button', type: 'iconButton', icon: 'plus', label: 'Adicionar competência', width: 190, click: function(){
			this.$scope.ui(competenciaform.$ui).show();
		}},
		{},
		{}
	];

	var grid = {
		margin:10,
		rows:[
			{
				id:"competenciaData",
				view:"datatable", select:true,
				columns:[
					{id:"competencia", header:"Competência", sort:"string", minWidth:150}
				],
				pager:"pagerA",
				//data: competencias.getAll,
				onClick:{
					webix_icon:function(e,id,node){
						webix.confirm({
							text:"A competência será excluída.<br/> Você tem certeza?", ok:"Excluir", cancel:"Cancelar",
							callback:function(res){
								if(res){
									webix.$$("competenciaData").remove(id);
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