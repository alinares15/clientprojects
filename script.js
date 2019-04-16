$("search-song").click(function(){
    $.ajax({
        url: `https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344`,
        method: "GET",
        success: function(response) {
            console.log(response);
            var link = response.file;
            $('.imageContainer').html("<img src='" + link + "'/>");

        },
    });
});