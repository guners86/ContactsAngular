var app = angular.module('contactsApp.controllers', ["ngMd5"])

app.controller("listContactController", function(factoryApp) {
	var scope = this;
	scope.contacts = factoryApp.getContacts();
});

app.controller("newContactController", function($location, md5, factoryApp) {
	
	var scope = this;
	scope.contact = {Name: "", Email: "", Phone: "", Notes: "" };

	scope.addContact = function(){	
		// Saco el identificador del correo
		var id = md5.createHash(scope.contact.Email)
		var ref = new Firebase("https://contactosmakeitreal.firebaseio.com//contacts//" + id);

		ref.set({
			Name: scope.contact.Name,
		    Email: scope.contact.Email,
		    Phone: scope.contact.Phone,
		    Notes: scope.contact.Notes
		});
		$location.path('/');
	};

	scope.cancelar = function(){
		$location.path('/');
	};	
});

app.controller("viewContactController", function($location, $routeParams, factoryApp, $modal, $scope){
	var scope = this;
	scope.contact = factoryApp.getContact($routeParams.id);

	var myModal = $modal({templateUrl: 'views/modal_dialog.html', persist: true, show: false, backdrop: 'static', scope: $scope});

	scope.showModal = function(){
		myModal.$promise.then(myModal.show);
	};
	scope.delete = function(){

		var ref = new Firebase("https://contactosmakeitreal.firebaseio.com//contacts//" + $routeParams.id);
		ref.remove();	

		myModal.$promise.then(myModal.hide);
		$location.path('/');

	};
	scope.cancelar = function(){
		$location.path('/');
	};
});

app.controller("editContactController", function($location, $routeParams, factoryApp){
	var scope = this;

	scope.contact = factoryApp.getContact($routeParams.id);

	scope.updateContact = function(){

		var ref = new Firebase("https://contactosmakeitreal.firebaseio.com//contacts//" + $routeParams.id);
		ref.update({
	        Name: scope.contact.Name,
		    Email: scope.contact.Email,
		    Phone: scope.contact.Phone,
		    Notes: scope.contact.Notes
    	});

    	$location.path('/contact/' + $routeParams.id);
	};

	scope.cancelar = function(){
		$location.path('/contact/' + $routeParams.id);
	};
});