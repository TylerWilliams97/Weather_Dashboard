

$('#inputBtn').on('click',function() {
    
var Cityname = $('#cityInput').val();
var apiKey = "c65b51c4f8a8bdbc1e50518620b108c5";
var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+Cityname+"&appid="+apiKey;
   console.log(Cityname);
   
   $.ajax({
        url:weatherUrl,
        method:"GET"
    }).then(function(Response){
        console.log(Response)
    });

});



















