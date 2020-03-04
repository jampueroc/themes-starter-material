// Webpack Imports
import * as mdc from 'material-components-web'; // Get all components


document.addEventListener( 'DOMContentLoaded', function () {

	// Focus Search if Searchform is empty
	if(document.querySelector( '.search-form' )){
		document.querySelector( '.search-form' ).addEventListener( 'submit', function ( e ) {
			var search = document.querySelector( '#s' );
			if ( search.value.length < 1 ) {
				e.preventDefault();
				search.focus();
			}
		} );
	}
	mdc.autoInit(document);

	// Scrollable tab bar menu: https://github.com/material-components/material-components-web/blob/master/demos/tab-scroller.html
//	window.tabBarScroller = new mdc.tabScroller.MDCTabScroller( document.querySelector( '#tab-bar-menu' ) );

} );

// https://material.io/develop/web/components/auto-init
window.mdc = mdc;
