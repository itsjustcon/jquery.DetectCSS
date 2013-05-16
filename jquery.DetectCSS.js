/*
	| jquery.DetectCSS.js v1.0.0
	| A simple jQuery plugin for detecting CSS features.
	|
	| Copyright 2013 Connor Grady
	| Released under the MIT license: http://opensource.org/licenses/MIT
	|
	| http://connorgrady.com/
	| http://github.com/itsjustcon/jquery.DetectCSS
*/
(function( $ ) {
	$.extend($.fn, {
		DetectCSS : function (props) {
			if (typeof props === 'string') props = [props];
			var CSSprefix = 'Webkit,Moz,O,ms,Khtml'.split(','),
				elms = $(this).get();
			for (var e in elms) {
				var p, pty;
				function TestPrefixes(prop) {
					var Uprop = prop.charAt(0).toUpperCase() + prop.substr(1),
						All = (prop + ' ' + CSSprefix.join(Uprop + ' ') + Uprop).split(' ');
					for ( var n = 0; n < All.length; n++ ) {
						if ( elms[e].style[All[n]] === '' ) {
							return true;
						}
					}
					return false;
				}
				for (p in props) {
					if (!TestPrefixes(props[p])) {
						return false;
					}
				}
			}
			return true;
		} /* DetectCSS */
	}); /* $.fn.extend */
})( jQuery );