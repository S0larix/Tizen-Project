
var array;

$(document).ready(function() {
    array = new Array();
    //trying to load the save of movies when the application start

    for (var i = 0, len = localStorage.length; i < len; ++i) {
        var movieInfoSave = localStorage.getItem(localStorage.key(i));
        var movieInfo = JSON.parse(movieInfoSave);
        array[movieInfo.Title] = movieInfoSave;
    }
})

    function addMovie() {
        var movieTitle = prompt("What's the name of the Movie?");
        getInfoAndSave(movieTitle);
    }

    function getInfoAndSave(Title) {
        $.ajax({
            url: "http://www.omdbapi.com/?t=" + Title,
            cache: false,
            dataType: "json",
            success: function(data) {
                //alert(data.Title);
                //alert(data.Year);
                //alert(data.Plot);
                array[data.Title] = JSON.stringify(data);
                localStorage.setItem(data.Title, JSON.stringify(data))
            },
            error: function(request, status, error) {
                alert(status + ", " + error);
            }
        });
    }

    function removeMovie(Title) {
        localStorage.removeItem(Title);
        var index = array.indexOf(Title);
        array.splice(index, 1);
    }

    function showMovieInfo(Title) {
        var info = JSON.parse(array[Title]);
        $('#infor').children().remove();
        $('#infor').append('<div class="ui-grid-a"><div class="ui-block-a" style="width:40%; float:left"><img style="width:100%" src=' + info.Poster + '/></div><div class="ui-block-b" style="width:55%;float:right"><h4><label id="movie_name">' + info.Title + '</label></h4><h5><label id="movie_runtime">' + info.Runtime + '</label><label id="movie_theme"> -' + info.Genre + '</label></h5><h5><label id="movie_director">Director:' + info.Director + '</label></h5><h5><label id="movie_stars">' + info.Actors + '</label></h5></div></div>');
        $('#infor').append('<div style="width:100%"><h5><div id="star" class="star">Online rating - ' + info.imdbRating + '</div></h5><h5><label id="movie_synopsis">' + info.Plot + '</label></h5></div>');
    }