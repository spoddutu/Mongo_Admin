angular.module('tracker')
.factory('groupFactory', function(){
	
	var obj = {};
	obj.groups = [];

	obj.get = function(){
		return obj.groups;
	};

	obj.add = function(group){
		obj.groups.push(group);
	};

	return obj;

});