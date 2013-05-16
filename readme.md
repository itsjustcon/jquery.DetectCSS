# jquery.DetectCSS

***

##### A simple, light-weight jQuery plugin for detecting CSS features on DOM elements. Use as a lighter alternative to (or in addition to) the fantastic [Modernizr](http://github.com/Modernizr/Modernizr).

## Getting Started

Just include this script after jQuery:

``` html
<script src='jquery.js'></script>
<script src='jquery.DetectCSS.js'></script>
```

## Usage

Test for transform (+prefixes) on #myElm:

``` javascript
if ( $('#myElm').DetectCSS('transform') ) {
	// Apply transform safely here.
}
else {
	// Transform isn't supported on this element.
	alert("Your browser doesn't support CSS Transforms!");
}
```

##### Multiple CSS queries:

``` javascript
if ( $('.myClass').DetectCSS(['transform','transition','perspective']) ) {
	// All elements with .myClass support transform, transition, and perspective
}
```

##### Multiple DOM elements:

``` javascript
if ( $('.myClass').DetectCSS('transform') ) {
	// All .myClass elements support transform
}
```

## Browser Prefixes

DetectCSS provides out-of-the-box support for Chrome, Safari, Firefox, Opera, and IE prefixes. Don't worry about testing `transform` AND `-webkit-transform`, since DetectCSS automatically detects `-webkit-transform` (and other popular vendor prefixes) for you!

## jQuery Warning:

**_WARNING:_** DetectCSS breaks jQuery chainability. You should use DetectCSS for anything but conditional statements. For example, the following hide() wouldn't work since DetectCSS breaks the jQuery chain:

``` javascript
$('#myElm').DetectCSS(['transform','transition']).hide();
```

***

### License

Copyright 2013 [Connor Grady](http://connorgrady.com/)

Released under the [MIT License](http://opensource.org/licenses/MIT).