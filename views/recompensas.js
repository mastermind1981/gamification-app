define([
	'views/forms/recompensa',
	'models/recompensas'
], function(recompensaform, recompensas){

	var controls = [
		{ view: 'button', type: 'iconButton', icon: 'plus', label: 'Adicionar recompensa', width: 150, click: function(){
			this.$scope.ui(recompensaform.$ui).show();
		}},
		{},
		{}
	];

	var grid = {
		margin:10,
		rows:[
			{
				id:"recompensaData",
				view:"datatable", select:true,
				columns:[
					{id:"meta", header:"Meta", sort:"string", minWidth:150},
					{id:"meta_projetada", header:"Meta Projetada", sort:"string", minWidth:150},
					{id:"meta_realizada", header:"Meta Realizada", sort:"string", minWidth:150},
					{id:"total_concluido", header:"%", width:90, sort:"string"},
					{id:"Status", header:"Status", width:90, sort:"string"}
				],
				pager:"pagerA",
				//data: recompensas.getAll,
				onClick:{
					webix_icon:function(e,id,node){
						webix.confirm({
							text:"A meta será excluída.<br/> Você tem certeza?", ok:"Excluir", cancel:"Cancelar",
							callback:function(res){
								if(res){
									webix.$$("recompensaData").remove(id);
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