(function(window) {
    "use strict";

    function init() {

        navigator.contacts.pickContact(
            function(contact) {
                var mainView = document.getElementById("main");
                mainView.className = "green";
            },
            function(contactError) {
                var mainView = document.getElementById("main");
                if (contactError === ContactError.OPERATION_CANCELLED_ERROR) {
                    mainView.className = "green";
                } else {
                    mainView.className = "red";
                }
            }
        );
    }

    document.addEventListener("deviceready", init, false);
})(window);