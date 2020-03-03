// Webpack Imports
import * as mdc from 'material-components-web'; // Get all components


document.addEventListener( 'DOMContentLoaded', function () {

	// Focus Search if Searchform is empty
	document.querySelector( '.search-form' ).addEventListener( 'submit', function ( e ) {
		var search = document.querySelector( '#s' );
		if ( search.value.length < 1 ) {
			e.preventDefault();
			search.focus();
		}
	} );

	// Scrollable tab bar menu: https://github.com/material-components/material-components-web/blob/master/demos/tab-scroller.html
	window.tabBarScroller = new mdc.tabScroller.MDCTabScroller( document.querySelector( '#tab-bar-menu' ) );
	const checkbox = new mdc.checkbox.MDCCheckbox(document.querySelector('.mdc-checkbox'));
	const formField = new mdc.formField.MDCFormField(document.querySelector('.mdc-form-field'));
	formField.input = checkbox;
	formField.initialize();
	const floatingLabel = new mdc.floatingLabel.MDCFloatingLabel(document.querySelector('.mdc-floating-label'));
	floatingLabel.initialize();

} );

// https://material.io/develop/web/components/auto-init
mdc.autoInit();
