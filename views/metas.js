define([
	'views/forms/meta',
	'models/metas'
], function(metaform, metas){

	var controls = [
		{ view: 'button', type: 'iconButton', icon: 'plus', label: 'Adicionar meta', width: 140, click: function(){
			this.$scope.ui(metaform.$ui).show();
		}},
		{},
		{},
		/*{view:"richselect", id:"order_filter", value: "all", maxWidth: 400, minWidth: 250, vertical: true, labelWidth: 100, options:[
			{id:"all", value:"All"},
			{id:"new", value:"Need Invoicing"},
			{id:"ready", value:"Ready to Ship"},
			{id:"completed", value:"Completed"},
			{id:"cancelled", value:"Cancelled"}
		],  label:"Filter orders", on:{
			onChange:function(){
				var val = this.getValue();
				if(val=="all")
					$$("orderData").filter("#status#","");
				else
					$$("orderData").filter("#status#",val);
			}
		}
		}*/
	];

	var grid = {
		margin:10,
		rows:[
			{
				id:"orderData",
				view:"datatable", select:true,
				columns:[
					{id:"meta", header:"Meta", sort:"string", minWidth:150},
					{id:"meta_projetada", header:"Meta Projetada", sort:"string", minWidth:150},
					{id:"meta_realizada", header:"Meta Realizada", sort:"string", width:150},
					{id:"total_concluido", header:"%", width:90, sort:"string", format:webix.i18n.priceFormat},
					{id:"Status", header:"Status", width:90, sort:"string", format:webix.i18n.priceFormat}
				],
				export: true,
				on: {
					onAfterLoad: function(){
						this.select(4);
					}
				},
				pager:"pagerA",
				//data: metas.getAll,
				onClick:{
					webix_icon:function(e,id,node){
						webix.confirm({
							text:"The order will be deleted.<br/> Are you sure?", ok:"Yes", cancel:"Cancel",
							callback:function(res){
								if(res){
									webix.$$("orderData").remove(id);
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