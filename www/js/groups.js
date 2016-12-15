angular.module('tracker')
.controller('groupsCtrl', function($state, groupFactory){
	var self = this;
	self.groups = [{name:'Awesome'}];

	self.get = function(){
		return groupFactory.get();
	};

	self.new = function(){
		$state.go("new")
	};

	self.cancel = function(){
		$state.go("home.group")
	};

	self.add = function(group){
		groupFactory.add(group);
		$state.go("home.group")
	};

	self.update = function(group){

	};

	self.delete = function(groupId){

	};
});