function tiles(number, name) {
	
	"use strict";
	var tile = document.getElementById("tiles").getElementsByTagName("a");
	var tileNumber = parseInt(number) - 1;
		for (var i = 0; i < tile.length; i++) {
			if (i !== tileNumber) {
				tile[i].style.display = "none";
			}

			else {
				tile[i].style.marginTop = "1vh";
			}
		}

	document.getElementById("backBtn").style.display = "block";
	category(name);
}



function category(category) {

	
	"use strict";
	
	var categories = document.getElementsByClassName(category);


		for (var i = 0; i < categories.length; i++) {
			categories[i].style.display = "inline-block";
//			categories[i].style.marginTop = "5vh";
		}

}


function youTube(video, start, end) {
	var lightbox = document.getElementById("lightbox");
	var URL = "https://www.youtube.com/embed/" + video + "?autohide=1&modestbranding=1&color=white&showinfo=0&rel=0&start=" + start + "&end=" + end + ";&autoplay=1";

	document.getElementById("youtube").src = URL;

	lightbox.style.height = "80%";
//	lightbox.style.top = "10vh";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

	document.getElementsByClassName("closebtn")[0].scrollIntoView();

}

function closeNav() {
	document.getElementById("lightbox").style.height = "0";
	document.body.style.backgroundColor = "#fff";
	document.getElementById("youtube").src = "";
}
