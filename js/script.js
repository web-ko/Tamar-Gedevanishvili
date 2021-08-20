$(document).ready(function(){
    $("#wrapper").click(function() {
  $(".icon").toggleClass("close");
  });
	let fullscreen = document.querySelector(".fullscreen");
	let wrapper = document.querySelector("#wrapper");
	wrapper.onclick=function()
	{
		fullscreen.classList.toggle("show");
		wrapper.classList.toggle("active");
	}
});


var images = ["akvareli (2).jpg", "fanqari (8).jpg", "akvareli (38).jpg", "pen (3).jpg", "guaSi (6).jpg", "guaSi (4).jpg", "fanqari (2).jpg", "guaSi (1).jpg", "fanqari (12).jpg"];
$('<img class="fade-in" src="./img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#randimg');


(function ($){
	$.fn.boxify =function(options) {
		var colorArr = ["#ff0000", "#E6E7E8", "#fecb05", "#d6de23"];
		var randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

		var settings = $.extend({
			background: randomColor,
			smoothness: null,
			textColor: null
		}, options );

		return this.css({

			background: settings.background,
			color: settings.textColor,
			transition: settings.smoothness
		});
	}
$(".landing-color").boxify();
}(jQuery));


baguetteBox.run(".gallery", {
    noScrollbars: false,
    buttons: false
});




baguetteBox.run(".water-gallery",{
    noScrollbars: false,
    buttons: true
});




baguetteBox.run(".guashi-gallery",{
    noScrollbars: false,
    buttons: true
});




baguetteBox.run(".past-gallery",{
    noScrollbars: false,
    buttons: true
});




baguetteBox.run(".graph-gallery",{
    noScrollbars: false,
    buttons: true
});




baguetteBox.run(".engrave-gallery",{
    noScrollbars: false,
    buttons: true
});




baguetteBox.run(".sculptu-gallery",{
    noScrollbars: false,
    buttons: true
});

