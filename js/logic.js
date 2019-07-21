
var science = ["space","Albert Einstein", "biology","physics","fireworks","Niel Degrass Tyson","astrophysics","planets","black hole","cyclone","placebo","absolute zero","the big bang theory","chemistry","solar","Matter","gravity","astronomy","Isaac Newton","Portal 2","rick and morty","apollo 11","aliens"];

$("#giphySearch").on("keyup",function(event){
    
    
    var newword = $(this).val();
    console.log(newword)
    
})
    
for (var i = 0; i < science.length; i++) {
    console.log(science[i]);
    var button = $("#giphyButton");
    button.append(`<button class="button" data-science="${science[i]}">${science[i]}</button>`);

    $("button").on("click",function(){
        console.log("listening")
        
        var buttonText = '';
        buttonText = $(this).attr("data-science");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FAFrT5yn0MYLm6Ct7Es9VJtaAvgkfRnS&q="+ buttonText +"&limit=25&offset=0&rating=G&lang=en";
        
           
        $.ajax({
            url:queryURL,
            method:'GET',
        }).then(function(response){
            console.log(response);
            
            var results = response.data;
            
            for(var i = 0; i < results.length; i++){
                var scienceDiv = $('div');
                var p = $('<p class: rating>').text('Rating '+results[i].rating);
                var scienceImage = $('<img>');
                scienceImage.attr('src',results[i].images.fixed_height.url);
            
                scienceDiv.append(p);
                scienceDiv.append(scienceImage);
            
                $("#giphShow").append(scienceDiv);
            }
            
        });    
      
    });

}










