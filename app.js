document.getElementById("content").innerHTML = "JS chargé";

ZOHO.embeddedApp.init().then(function() {

    document.getElementById("content").innerHTML = "INIT OK";

    // test simple API
    ZOHO.CRM.CONFIG.getCurrentUser().then(function(user){

        document.getElementById("content").innerHTML =
            "Utilisateur : " + user.users[0].full_name;

    });

});
