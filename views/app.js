define(function(){

	//Top toolbar
	var mainToolbar = {
		view: "toolbar",
		elements:[{view: "label", label: "Gamification", width: 200}]
	};

	return {
		$ui:{
			rows:[mainToolbar]
		}
	};
	
});