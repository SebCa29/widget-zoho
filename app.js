ZOHO.embeddedApp.on("PageLoad", function(data) {

    console.log("PageLoad data:", data);

    let recordId = null;

    if (data && data.EntityId && data.EntityId.length > 0)
    {
        recordId = data.EntityId[0];
    }

    if(recordId == null)
    {
        document.getElementById("content").innerHTML = "Erreur : ID session introuvable";
        return;
    }

    console.log("Record ID:", recordId);

    ZOHO.CRM.API.getRecord({
        Entity: "Prestations",
        RecordID: recordId
    }).then(function(res){

        console.log("API response:", res);

        if(!res || !res.data || res.data.length === 0)
        {
            document.getElementById("content").innerHTML = "Erreur : aucune donnée retournée";
            return;
        }

        let session = res.data[0];

        let produit = session.Programe ? session.Programme.name : "Non défini";
        let date_debut = session.Date_de_d_but || "Non définie";
        let date_fin = session.Date_de_fin || "Non définie";

        let html = "<b>Session :</b><br><br>";

        html += "Produit : " + produit + "<br>";
        html += "Date début : " + date_debut + "<br>";
        html += "Date fin : " + date_fin + "<br>";

        document.getElementById("content").innerHTML = html;

    }).catch(function(error){
        console.error("API error:", error);
        document.getElementById("content").innerHTML = "Erreur API (voir console)";
    });

});

ZOHO.embeddedApp.init();
