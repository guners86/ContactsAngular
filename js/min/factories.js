var app=angular.module("contactsApp.factories",[]);app.factory("factoryApp",function(t,a){var e={getContacts:function(){var a=new Firebase("https://contactosmakeitreal.firebaseio.com//contacts");return t(a)},getContact:function(t){var e=new Firebase("https://contactosmakeitreal.firebaseio.com//contacts//"+t);return a(e)}};return e});