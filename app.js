document.getElementById("content").innerHTML = "JS chargé";

ZOHO.embeddedApp.init().then(function() {

    ZOHO.CRM.UI.getCurrentRecord().then(function(data) {

        console.log("Record data:", data);

        let recordId = data.data[0].id;

        document.getElementById("content").innerHTML =
            "ID trouvé : " + recordId;

    });

});
