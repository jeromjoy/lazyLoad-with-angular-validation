angular.module('lazymodule1', ['formvalidation','stylingModule'])
	.controller('lazyController1', ['$scope', function($scope){
		$scope.test1 = "Hey again1";
		$scope.myData1 = [{name: "Moroni", age: 50},
		                     {name: "Tiancum", age: 43},
		                     {name: "Jacob", age: 27},
		                     {name: "Nephi", age: 29},
		                     {name: "Enos", age: 34}];
    	$scope.gridOptions1 = { data: 'myData1' };
}]);
// var NAME_REGEXP = /^[\\p{L} .'-]+$/; 
// angular.module('lazymodule1').directive('fandlname', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$validators.fandlname = function(modelValue, viewValue) {
//         if (ctrl.$isEmpty(modelValue)) {
//           // consider empty models to be valid
//           return false;
//         }

//         if (NAME_REGEXP.test(viewValue.toString())) {
//           // it is valid
//           return true;
//         }

//         // it is invalid
//         return false;
//       };
//     }
//   };
// });

// var PHONE_REGEXP = /^\d{10}$/; 
// angular.module('lazymodule1').directive('phone', function($q, $timeout) {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
      
//       ctrl.$asyncValidators.username = function(modelValue, viewValue) {

//         if (ctrl.$isEmpty(modelValue)) {
//           // consider empty model valid
//           return $q.reject();  //$q.when() is valid
//         }
//         if(!PHONE_REGEXP.test(viewValue)) {
//           	return $q.reject();
//         }

//         var def = $q.defer();

//         $timeout(function() {
// 	          // Mock a delayed response
// 			var areacodes = ['217', '218', '219'];
//           if (areacodes.indexOf(modelValue.toString().substring(0,2)) === -1) {
//             // The area code in phone doesnot match
//             def.reject();
//           } else {

//           	//area code matches to the list
//             def.resolve();
//           }

//         }, 2000);

//         return def.promise;
//       };
//     }
//   };
// });

// var EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
// angular.module('lazymodule1').directive('email', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$validators.email = function(modelValue, viewValue) {
//         if (ctrl.$isEmpty(modelValue)) {
//           // consider empty models to be valid
//           return false;
//         }

//         if (EMAIL_REGEX.test(viewValue)) {
//           // it is valid
//           return true;
//         }

//         // it is invalid
//         return false;
//       };
//     }
//   };
// });

// var ZIPCODE_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
// angular.module('lazymodule1').directive('zipcode', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {
//       ctrl.$validators.zipcode = function(modelValue, viewValue) {
//         if (ctrl.$isEmpty(modelValue)) {
//           // consider empty models to be valid
//           return false;
//         }

//         if (ZIPCODE_REGEX.test(viewValue)) {
//           // it is valid
//           return true;
//         }

//         // it is invalid
//         return false;
//       };
//     }
//   };
// });