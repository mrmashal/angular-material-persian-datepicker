# Persian Datepicker for AngularJS Material

The datepicker component from [AngularJS Material](https://github.com/angular/material) tweaked to take dates in the Persian (Jalaali) calendar system, using [moment-jalaali](https://github.com/jalaali/moment-jalaali).

[![License](https://img.shields.io/github/license/mrmashal/angular-material-persian-datepicker.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![Bower](https://img.shields.io/bower/v/angular-material-persian-datepicker.svg)](#)
[![NPM](https://img.shields.io/npm/v/angular-material-persian-datepicker.svg)](https://www.npmjs.com/package/angular-material-persian-datepicker)

# Demo

You can see a live demo [here](http://mrmashal.github.io/angular-material-persian-datepicker/demo/demoBasicUsage/index.html).

![Month View](https://user-images.githubusercontent.com/7566014/28975464-53c1a9bc-794f-11e7-8441-347684750e3c.png) ![Year View](https://user-images.githubusercontent.com/7566014/28975474-5fd99cfa-794f-11e7-9c60-18121a6c0e64.png)

## Installation

You may use bower or npm:

#### Bower

```
$ bower install angular-material-persian-datepicker --save
```

#### Npm

```
$ npm install angular-material-persian-datepicker --save
```

### Add references to your html

Load the js and css files in your html:

```html
    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css">
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angular-animate/angular-animate.js"></script>
    <script src="node_modules/angular-aria/angular-aria.js"></script>
    <script src="node_modules/angular-messages/angular-messages.js"></script>
    <script src="node_modules/angular-material/angular-material.js"></script>
    <script src="node_modules/moment/min/moment.min.js"></script>
    <script src="node_modules/moment-jalaali/build/moment-jalaali.js"></script>

    <link rel="stylesheet" href="src/datePicker.css">
    <script src="src/datePicker.js"></script>
    <script src="src/js/calendar.js"></script>
    <script src="src/js/calendarMonth.js"></script>
    <script src="src/js/calendarMonthBody.js"></script>
    <script src="src/js/calendarYear.js"></script>
    <script src="src/js/calendarYearBody.js"></script>
    <script src="src/js/dateLocaleProvider.js"></script>
    <script src="src/js/datepickerDirective.js"></script>
    <script src="src/js/dateUtil.js"></script>
```

### Add module dependency

Add the `angular-material-persian-datepicker` dependency to your angular module:

```js
angular.module('app', [
  'angular-material-persian-datepicker'
 ]);
```

### Directive Usage

```html
	<md-persian-datepicker ng-model="birthday"></md-persian-datepicker>
```

`birthday` should be a native javascript Date object. Refer to original component's [documentation](https://material.angularjs.org/latest/api/directive/mdDatepicker) for other available options.
