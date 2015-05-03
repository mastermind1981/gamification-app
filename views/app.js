define([
	'views/menus/sidebar',
	'views/webix/menutree'
], function(menu){

	//Top toolbar
	var mainToolbar = {
		view: 'toolbar',
		elements:[{view: 'label', label: 'Gamification', width: 200}]
	};

	var body = {
		rows:[{
			height: 49,
			id: 'title',
			css: 'title',
			template: '<div class="header">#title#</div><div class="details">( #details# )</div>',
			data: {text: '',title: ''}
		},{
			view: 'scrollview',
			scroll: 'native-y',
			body:{ cols:[{ $subview:true}] }
		}]
	};

	var layout = {
		rows:[
			mainToolbar,
			{
				cols:[
					menu,
					body
				]
			}
		]
	};

	return {
		$ui: layout,
		$menu: 'app:menu'
	};
	
});