# Persian Datepicker for AngularJS Material

The datepicker component from [AngularJS Material](https://github.com/angular/material) tweaked to take dates in the Persian (Jalaali) calendar system, using [moment-jalaali](https://github.com/jalaali/moment-jalaali).

[![License](https://img.shields.io/github/license/mrmashal/angular-material-persian-datepicker.svg)](https://en.wikipedia.org/wiki/MIT_License)
[![NPM](https://img.shields.io/npm/v/angular-material-persian-datepicker.svg)](https://www.npmjs.com/package/angular-material-persian-datepicker)
[![Bower](https://img.shields.io/bower/v/angular-material-persian-datepicker.svg)](#)

# Demo

You can see a live demo [here](http://mrmashal.github.io/angular-material-persian-datepicker/demo/demoBasicUsage/index.html).

![Month View](https://user-images.githubusercontent.com/7566014/28975464-53c1a9bc-794f-11e7-8441-347684750e3c.png) ![Year View](https://user-images.githubusercontent.com/7566014/28975474-5fd99cfa-794f-11e7-9c60-18121a6c0e64.png)

## Installation

You may use npm or bower:

#### Npm

```
$ npm install angular-material-persian-datepicker --save
```

#### Bower

```
$ bower install angular-material-persian-datepicker --save
```

### Add references to your html

Load the component's javascript file in your html:

```html
    <script src="dist/datePicker.min.js"></script>
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
