$(document).ready(function() {
    $("#buttonTemp").click(function(e) {
        e.preventDefault();
        var ville = $("#villeInput").val();
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q="+ville +"&appid=32fc6204bf134f2a5be8140ff0e93cdf&units=metric",
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                $("#resultat").html(Math.round(res.main.temp));
            }
        });
    });
});