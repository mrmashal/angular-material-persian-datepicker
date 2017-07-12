angular.module('datepickerBasicUsage', ['ngMaterial', 'ngMessages', 'angular-material-persian-datepicker'])
.controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});
