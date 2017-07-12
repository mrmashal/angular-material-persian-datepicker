# Persian Datepicker for [AngularJS Material](https://github.com/angular/material)

The datepicker component from [AngularJS Material](https://github.com/angular/material) made to use the Persian (Jalaali) calendar system, using [moment-jalaali](https://github.com/jalaali/moment-jalaali).

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

Then load the js files in your html.

### Add module dependency

Add the `angular-material-persian-datepicker` module dependency:

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
