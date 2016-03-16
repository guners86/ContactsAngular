var app = angular.module('contactsApp.factories', [])

app.factory("factoryApp", function($firebaseArray, $firebaseObject){	

	var interfaz = {
		getContacts: function(){
			var ref = new Firebase("https://contactosmakeitreal.firebaseio.com//contacts");
			return  $firebaseArray(ref);
		},
		getContact: function(id){
			var ref = new Firebase("https://contactosmakeitreal.firebaseio.com//contacts//" + id);
			return  $firebaseObject(ref);
		}
	}
	
	return interfaz;
});