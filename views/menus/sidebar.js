define(function(){
	
	return {
		$ui:{
			width: 200,

			rows:[{
				view: 'tree',
				id: 'app:menu',
				type: 'menuTree2',
				css: 'menu',
				activeTitle: true,
				select: true,
				tooltip: {
					template: function(obj){
						return obj.$count?'':obj.details;
					}
				},
				on:{
					onBeforeSelect:function(id){
						if(this.getItem(id).$count){
							return false;
						}
					},
					onAfterSelect:function(id){
						this.$scope.show('./'+id);
						var item = this.getItem(id);
						webix.$$('title').parse({title: item.value, details: item.details});
					}
				},
				data:[
					{id: 'geral', value: 'Visão Geral', icon: 'home', details: 'Relatórios e estatísticas'},
					{id: 'metas', value: 'Metas', icon: 'check-square-o', details: 'Detalhes e manuteção de metas'},
					{id: 'tarefas', value: 'Tarefas', icon: 'pencil-square-o', details: 'Detalhes e manutenção de tarefas'},
					{id: 'ranking', value: 'Ranking', icon: 'trophy', details: 'Ranking dos colaboradores'},
					{id: 'mais', value: 'Mais', open: false, data:[
						{id: 'recompensas', value: 'Recompensas', icon: '', details: 'Configuração de recompensas'},
						{id: 'competencias', value: 'Competências', icon: '', details: 'Configuração de competências'},
						{id: 'colaboradores', value: 'Colaboradores', icon: '', details: 'Detalhes e manutenção de colaboradores'}
					]}
				]
			}]
		}
	};

});
