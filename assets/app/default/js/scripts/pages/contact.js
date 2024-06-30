// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: 14.5576677322387,
			lng: 121.0206527709961,
			scrollwheel: true,
		});

		mapbg.addMarker({
			at: 14.55766773223877,
			lng:121.0206527709961,
			title: 'Agile Tech Ops Inc.',
			infoWindow: {
				content: '<h3>Agile Tect Ops Inc.</h3><p>6783 Ayala Ave, Makati, 1200 Metro Manila</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();
        }

    };
}();

$(document).ready(function() {
    PageContact.init();
    $( window ).resize(function() {
		PageContact.init();
	});
});