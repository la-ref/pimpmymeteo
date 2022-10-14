$(document).ready(function() {
    $("#buttonTemp").click(function(e) {
        e.preventDefault();
        var ville = $("#villeInput").val();
        if (ville.length != 0) {
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q="+ville +"&appid=32fc6204bf134f2a5be8140ff0e93cdf&units=metric",
                type: 'GET',
                dataType: 'json',
                success: function(res) {
                    $("#resultat").html("Il fait " + Math.round(res.main.temp) + "° à " + ville.charAt(0).toUpperCase() + ville.slice(1).toLowerCase());
                },
                error: function (res) {
                    $("#resultat").html("Ville non trouvé");
                }
            });
        }
        else{
            $("#resultat").html("Veuillez entrer une ville valide");
        }
    });
});