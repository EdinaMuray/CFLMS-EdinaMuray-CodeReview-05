var myMovies = JSON.parse(movie);

for (let i = 0; i < myMovies.length; i++) {

	document.getElementById('result').innerHTML += "<ul><li>" + myMovies[i].titel + "</li>" + "<li> Description: " + myMovies[i].description + "</li>" + "<li class='pic'> <img src='" + myMovies[i].cover + "'></li></ul>";
}