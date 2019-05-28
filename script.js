$("#searchSong").click(function(){
    $.ajax({
        url: `https://api.soundcloud.com/tracks?q=${$('#inputfield').val()}&client_id=5aa8e389ba4e24b6106af5159ab3e344`,
        method: "GET",
        success: function(response) {
            console.log(response[0].title);
            $('#imageContainer').empty();
            response.forEach(function(songData){
                $('#imageContainer').append(`<h1>${songData.title}</h1>`);
                $('#imageContainer').append(`<img src='${songData.user.avatar_url}'/>`);
                $('#imageContainer').append(`<p>${songData.genre}</p>`);
                $('#imageContainer').append(`<a href='${songData.permalink_url}'>Link to Song</a>`);
            });

        },
    });
});