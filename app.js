ZOHO.embeddedApp.on("PageLoad", function(data) {

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

    // 🔥 Récupération de la session CRM
    ZOHO.CRM.API.getRecord({
        Entity: "Sessions",
        RecordID: recordId
    }).then(function(res){

        let session = res.data[0];

        let produit = session.Product ? session.Product.name : "Non défini";
        let date_debut = session.Date_debut || "Non définie";
        let date_fin = session.Date_fin || "Non définie";

        let html = "<b>Session :</b><br><br>";

        html += "Produit : " + produit + "<br>";
        html += "Date début : " + date_debut + "<br>";
        html += "Date fin : " + date_fin + "<br>";

        document.getElementById("content").innerHTML = html;

    });

});

ZOHO.embeddedApp.init();
