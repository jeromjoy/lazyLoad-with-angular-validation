var formvalidation = angular.module('formvalidation', []);

var NAME_REGEXP = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/; 
formvalidation.directive('fandlname', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.fandlname = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be not  valid
          ctrl.borderCol = 'solid 1px #b7bbbb';
          return true;
        }

        if (NAME_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.borderCol = 'solid 1px #b7bbbb';
          return true;
        }

        // it is invalid
        ctrl.borderCol = 'solid 2px #f00';
        
        return false;
      };
    }
  };
});

var PHONE_REGEXP = /^\d{10}$/; 

formvalidation.directive('phone', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      
      ctrl.$validators.phone = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be not  valid
          return false;
        }

        if(PHONE_REGEXP.test(viewValue)) {
          	// it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

var EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
formvalidation.directive('email', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.email = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be notvalid
          return false;
        }

        if (EMAIL_REGEX.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

var ZIPCODE_REGEX = /^\d{5}$/;
formvalidation.directive('zipcode', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.zipcode = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be notvalid
          return true;
        }

        if (ZIPCODE_REGEX.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});
