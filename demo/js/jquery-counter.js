/*!
 * jquery-counter v1
 * (c) 2017-2017 King Jherold
 * Released under the MIT License.
 */

// Object.prototype.hasOwnProperty.call( 'min', options )

(function ( $ ) {
 
    $.fn.counter = function( options ) {

    	var settings = $.extend({
    		min: 0,
    		max: 10,
    		label: true,
    	}, options );

    	var __ = this;

    	// Initialization
    	__.addClass( 'counter__field' );

    	if ( Object.prototype.hasOwnProperty.call( settings, 'min' ) && Object.prototype.hasOwnProperty.call( settings, 'max' ) ) {
    		
    		__.each( function( index, el ) {
    			// Variable to get tag name
    			var tagName = $( this ).prop( 'tagName' );

    			// Determine the tag
    			switch ( tagName ) {
    				case 'INPUT':
    					var typeName = $( this ).attr( 'type' );

    					if ( typeName == 'number' ) {
    						// Number input types
							$( this ).attr( 'min', settings.min );
							$( this ).attr( 'max', settings.max );
    					} else {
    						// String input types (e.g.  text, email, date, etc.)
							$( this ).attr( 'maxlength', settings.max );
    					}
    					break;

    				case 'TEXTAREA':
						$( this ).attr( 'maxlength', settings.max );
    					break;

    				default:
    					null;
    					break;
    			}

    		});

		}

    	if ( settings.label === true ) {

    		var drawLabel = function () {
    			__.each( function( index, el ) {
	    			// Variable to get tag name
	    			var tagName = $( this ).prop( 'tagName' );

	    			// Determine the tag
	    			switch ( tagName ) {
	    				case 'INPUT':
	    					var typeName = $( this ).attr( 'type' );

	    					if ( typeName == 'number' ) {
	    						// Number input types
								var numVal = $( this ).val();
			    				var numLeft = settings.max - numVal;

					    		$( this ).parent().find( '.counter__label' ).remove();
					    		$( this ).parent().prepend( '<span class="counter__label">Total left: ' + numLeft + '</span>' );

					    		if ( numLeft === 0) {
					    			$( this ).parent().find( '.counter__label' ).addClass( 'counter__label--warning' );
					    		}

					    		if ( numLeft < 0 ) {
					    			$( this ).parent().find( '.counter__label' ).addClass( 'counter__label--danger' );
					    		}
	    					} else {
	    						// String input types (e.g.  text, email, date, etc.)
								var charLength = $( this ).val().length;
			    				var charLeft = settings.max - charLength;
					    		$( this ).parent().find( '.counter__label' ).remove();
					    		$( this ).parent().prepend( '<span class="counter__label">Characters left: ' + charLeft + '</span>' );

					    		if ( charLeft === 0) {
					    			$( this ).parent().find( '.counter__label' ).addClass( 'counter__label--warning' );
					    		}

					    		if ( charLeft < 0 ) {
					    			$( this ).parent().find( '.counter__label' ).addClass( 'counter__label--danger' );
					    		}
	    					}
	    					break;

	    				case 'TEXTAREA':
							var charLength = $( this ).val().length;
		    				var charLeft = settings.max - charLength;
				    		$( this ).parent().find( '.counter__label' ).remove();
				    		$( this ).parent().prepend( '<span class="counter__label">Characters left: ' + charLeft + '</span>' );

				    		if ( charLeft === 0) {
				    			$( this ).parent().find( '.counter__label' ).addClass( 'counter__label--warning' );
				    		}

				    		if ( charLeft < 0 ) {
				    			$( this ).parent().find( '.counter__label' ).addClass( 'counter__label--danger' );
				    		}
	    					break;

	    				default:
	    					null;
	    					break;
	    			}
    			});
    		};

    		drawLabel();

    		__.on( 'change input', function () {
    			drawLabel();
    		});
    	}

        return __;
    };
 
}( jQuery ));