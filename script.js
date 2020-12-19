var date = new Date();
var month =date.getMonth();
var day= date.getDate();


$('#inputBtn').on('click',function() {
    
$('#weatherblocks').empty()

var Cityname =$('#cityInput').val();
var apiKey = "c65b51c4f8a8bdbc1e50518620b108c5";
var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+Cityname+"&units=imperial&cnt=5&appid="+apiKey;
   console.log(Cityname);
   
   $.ajax({
        url:weatherUrl,
        method:"GET"
    }).then(function(Response){
        console.log(Response)


        for (let i = 0; i < 5; i++) {
           var c = Response.list[i].main.temp;
         
            var daysofweek=(day+i);
            var article = $('<article>').addClass("card text-white bg-primary mb-3");
            var title = $('<div>').addClass("card-header").text(month+"/"+daysofweek);
            var body = $('<h3>').addClass("card-title").text(c+" F");
            var fullcard = title.append(body);
            
            var block = article.append(fullcard);
            $('#weatherblocks').append(block);

        }
   
   
    
    
    
    
});
});