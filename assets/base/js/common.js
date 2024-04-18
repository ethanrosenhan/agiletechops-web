var AppPage = function() {

	var _setCopyright = function() {
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
                //set active menu
                var page = Cookies.get('page');
                if(page == 'about-us') {
                    $('#lnk-about-us').addClass('c-active');
                }
                if(page == 'home') {
                    $('#lnk-home').addClass('c-active');
                }
                if(page == 'services') {
                    $('#lnk-services').addClass('c-active');
                }
                if(page == 'contact-us') {
                    $('#lnk-contact-us').addClass('c-active');
                }
                if(page == 'clients') {
                    $('#lnk-clients').addClass('c-active');
                }
                if(page == 'careers') {
                    $('#lnk-careers').addClass('c-active');
                }
            })
            .catch(error => {
                console.error('Error fetching header:', error);
            });
    }
    
    var _loadFooter = function() {
        // Fetch the footer partial
        fetch('/components/footer.html')
            .then(response => response.text())
            .then(html => {
                // Insert the fetched HTML into the footer div
                document.getElementById('footer').innerHTML = html;
                _setCopyright();
            })
            .catch(error => {
                console.error('Error fetching footer:', error);
            });
    }

    var _setActiveMenu = function(page) {
        Cookies.set('page', page);
        //set selected page
        console.log('setCookie: ' + page);
    }

    return {
        //main function to initiate the module
        init: function() {            
            _loadMenu();
            _loadFooter();
        },
        setActiveMenu: function(page) {
            _setActiveMenu(page);
        }
    };
}();

$(document).ready(function() {
    AppPage.init();
    $( window ).resize(function() {
        AppPage.init();
    });
});
