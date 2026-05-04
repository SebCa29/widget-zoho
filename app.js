ZOHO.embeddedApp.on("PageLoad", function(data) {

    console.log("DATA :", data);

    let recordId = null;

    if (data && data.EntityId && data.EntityId.length > 0)
    {
        recordId = data.EntityId[0];
    }

    let html = "<b>Widget OK</b><br><br>";

    if (recordId != null)
    {
        html += "Session ID : " + recordId;
    }
    else
    {
        html += "Impossible de récupérer l'ID de la session";
    }

    document.getElementById("content").innerHTML = html;

});

ZOHO.embeddedApp.init();
