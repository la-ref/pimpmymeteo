$(document).ready(function() {
    $("#").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=calais&appid=32fc6204bf134f2a5be8140ff0e93cdf&units=metric",
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                console.log(res);
                alert(res);
            }
        });
    });
});