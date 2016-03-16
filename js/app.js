var app = angular.module("contactsApp", 
	["ngRoute",
	"firebase",
	"mgcrea.ngStrap",
	"ngAnimate",
	"contactsApp.controllers",
	"contactsApp.factories"]);

app.config(function($routeProvider){

	$routeProvider
		.when("/",{
			templateUrl: "views/list_contacts.html",
			controller: "listContactController",
			controllerAs: "modelContats"
		})
		.when("/new",{
			templateUrl: "views/new_contact.html",
			controller: "newContactController",
			controllerAs: "modelContat"
		})
		.when("/contact/:id", {
			templateUrl: "views/contact.html",
			controller: "viewContactController",
			controllerAs: "modelContat"
		})
		.when("/edit/:id", {
			templateUrl: "views/edit_contact.html",
			controller: "editContactController",
			controllerAs: "modelContat"
		})
		.otherwise({
			redirectTo: '/'
		});
});
