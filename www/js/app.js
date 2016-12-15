angular.module('tracker', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/home/friends")

	$stateProvider.state('home', {
		url: "/home",
		abstract: true,
		templateUrl:'partials/home.html'
	})

	.state('home.friends', {
		url: '/friends',
		templateUrl: 'partials/friends.html'
	})

	.state('home.group', {
		url: '/group',
		templateUrl: 'partials/group.html'
	})

	.state('new', {
		url: '/new',
		templateUrl: 'partials/newGroup.html',
		controller: 'groupsCtrl',
		controllerAs: 'grp'
	})

	.state('home.activity', {
		url: '/activity',
		templateUrl: 'partials/activity.html'
	})

	.state('about', {
		url: '/about',
		templateUrl: 'partials/about.html'
	})

	.state('contact', {
		url: '/contact',
		templateUrl: 'partials/contact.html'
	})
})

.controller('trackerCtrl', function(){
	this.tab = 1;
	this.active = false;
});