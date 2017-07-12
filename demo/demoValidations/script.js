angular.module('datepickerValidations', ['ngMaterial', 'ngMessages', 'angular-material-persian-datepicker'])
.controller('AppCtrl', function() {
  this.myDate = new Date();

  this.minDate = new Date(
    this.myDate.getFullYear(),
    this.myDate.getMonth() - 2,
    this.myDate.getDate()
  );

  this.maxDate = new Date(
    this.myDate.getFullYear(),
    this.myDate.getMonth() + 2,
    this.myDate.getDate()
  );

  this.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 4 || day === 5;
  };
});
