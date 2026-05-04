document.getElementById("content").innerHTML = "JS chargé";

ZOHO.embeddedApp.on("PageLoad", function(data) {

    console.log("PageLoad data:", data);

    let recordId = null;

    if (data && data.EntityId && data.EntityId.length > 0)
    {
        recordId = data.EntityId[0];
    }

    if(recordId == null)
    {
        document.getElementById("content").innerHTML = "Erreur : ID introuvable";
        return;
    }

    document.getElementById("content").innerHTML = "ID trouvé : " + recordId;

});

ZOHO.embeddedApp.init();
