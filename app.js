document.getElementById("content").innerHTML = "JS chargé";

if (typeof ZOHO === "undefined") {
    document.getElementById("content").innerHTML = "ZOHO NON CHARGÉ";
} else {
    document.getElementById("content").innerHTML = "ZOHO OK";

    ZOHO.embeddedApp.on("PageLoad", function(data) {

        document.getElementById("content").innerHTML =
            "PageLoad reçu";

        console.log("DATA :", data);

    });

    ZOHO.embeddedApp.init();
}
