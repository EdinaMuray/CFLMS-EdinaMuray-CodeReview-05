var myMovies = JSON.parse(movie);
console.log(myMovies)

$(document).ready(function(){

	var bigbox = $("<div></div>").addClass("bigbox")
	$("main").prepend(bigbox)

	for (i = 0; i < myMovies.length; i++) {

		smallbox = $("<div></div>").addClass("smallbox")
		bigbox.append(smallbox)

		halfbox = $("<div></div>").addClass("halfbox")
		smallbox.append(halfbox)

		var cover = $("<img>")
		var titel = $("<h1>" + myMovies[i].titel + "</h1>")
		var description = $("<p>" + myMovies[i].description + "</p>")
		var button = $("<button class ='like_button'>" + myMovies[i].button + "</button>" )

		smallbox.append(cover).append(titel).append(description).append(button)
		halfbox.append(cover)
		cover.attr("src", myMovies[i].cover)

	}
});