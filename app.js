document.getElementById("content").innerHTML = "Chargement JS OK";

ZOHO.embeddedApp.on("PageLoad", function(data) {

    console.log("PageLoad data:", data);

    let recordId = null;

    if (data && data.EntityId && data.EntityId.length > 0)
    {
        recordId = data.EntityId[0];
    }

    document.getElementById("content").innerHTML = "ID trouvé : " + recordId;

});

ZOHO.embeddedApp.init();
