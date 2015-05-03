define(function(){

	return {
		$ui:{
			height: 136,
			css: "tiles",
			template: function(data){
				var t = null;
				var items = data.items;
				var html = "<div class='flex_tmp'>";
				for(var i=0; i < items.length; i++){
					t = items[i];
					html += "<div class='item "+t.css+"'>";
					html += "<div class='webix_icon icon fa-"+ t.icon+"'></div>";
					html += "<div class='details'><div class='value'>"+t.title+"</div><div class='text'>"+t.text+"</div></div>";
					html +=  "<div class='footer'>Ver mais <span class='webix_icon fa-angle-double-right'></span></div>";
					html += "</div>";
				}
				html += "</div>";
				return html;
			},
			data: {
				items:[
					{id:1, title: "Tarefa 1", text: 'Descrição da tarefa', icon: "check-square-o", css: "orders"},
					{id:2, title: "Tarefa 2", text: 'Descrição da tarefa', icon: "check-square-o", css: "users"},
					{id:4, title: "Tarefa 3", text: 'Descrição da tarefa', icon: "check-square-o", css: "feedbacks"},
					{id:3, title: "Tarefa 4", text: 'Descrição da tarefa', icon: "check-square-o", css:"profit" }
				]
			}
		}
	};

});