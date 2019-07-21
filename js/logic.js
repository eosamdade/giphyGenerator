var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=FAFrT5yn0MYLm6Ct7Es9VJtaAvgkfRnS&q=javascript&limit=25&offset=0&rating=G&lang=en'

$.ajax({
    url:queryURL,
    method:'GET',
}).then(function(response){
    console.log(response);

    var results = response.data;

    for(var i = 0; i < results.length; i++){
        var spaceDiv = $('div');
        var p = $('<p>').text('Rating'+results[i].rating);
        var spaceImage = $('<img>');
        spaceImage.attr('src',results[i].images.fixed_height.url);

        spaceDiv.append(p);
        spaceDiv.append(spaceImage);

        $('#giphShow').prepend(spaceDiv);
    }

});




