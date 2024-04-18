var HomePage = function() {

	var _init = function() {
        const spanElement = document.getElementById('sp-copyright'); // Replace 'span' with the appropriate selector for your span element
        const currentYear = new Date().getFullYear();
        spanElement.textContent =`Copyright © ${currentYear} Agile Tech Ops Inc. All Rights Reserved.`;
	}
    
    var _loadMenu = function() {
        // Fetch the header partial
        fetch('/components/header.html')
            .then(response => response.text())
            .then(html => {
                // Insert the fetched HTML into the header div
                document.getElementById('header').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching header:', error);
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
    HomePage.init();
    $( window ).resize(function() {
        HomePage.init();
    });
});
