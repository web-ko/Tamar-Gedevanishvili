$(document).ready(function(){
	// ბურგერის დაკეტვისთვის
    $("#wrapper").click(function() {
  $(".icon").toggleClass("close");
  });
    // ბურგერის დაკეტვისთვის
    
    // ბურგერის fullscreen-ისთვის
	let fullscreen = document.querySelector(".fullscreen");
	let wrapper = document.querySelector("#wrapper");
	wrapper.onclick=function()
	{
		fullscreen.classList.toggle("show");
		wrapper.classList.toggle("active");
	}
	// ბურგერის fullscreen-ისთვის
});


// გვერდის ყოველი ახალი ჩატვირთვისას ფოტოს შეცვლა. ეს შემიძლია ასევე გამოვიყენო work-ის აყრილ-დაყრილი ფოტოებისთვის.
var images = ["akvareli (2).jpg", "fanqari (8).jpg", "akvareli (38).jpg", "pen (3).jpg", "guaSi (6).jpg", "guaSi (4).jpg", "fanqari (2).jpg", "guaSi (1).jpg", "fanqari (12).jpg"];
$('<img class="fade-in" src="./img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#randimg');
// გვერდის ყოველი ახალი ჩატვირთვისას ფოტოს შეცვლა. ეს შემიძლია ასევე გამოვიყენო work-ის აყრილ-დაყრილი ფოტოებისთვის.


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
// background color-ის შეცვლა გვერდის ყოველი ჩატვირთვისას

// baguetteBox
baguetteBox.run(".gallery", {
    // animation: 'fadeIn',
    noScrollbars: false,
    buttons: false
});
// baguetteBox-ის დახურივის ღილაკის, closeX-ის, ფერებს და ზომებს ვარედაქტირებ baguetteBox.js-ში.
// baguetteBox


// baguetteBox
baguetteBox.run(".water-gallery",{
    // animation: 'fadeIn',
    noScrollbars: false,
    buttons: true
});
// baguetteBox-ის გადასვლის ისრების, leftArrow, rightArrowის ფერებს და ზომებს ვარედაქტირებ baguetteBox.js-ში.
// baguetteBox


// baguetteBox
baguetteBox.run(".guashi-gallery",{
    // animation: 'fadeIn',
    noScrollbars: false,
    buttons: true
});
// baguetteBox-ის გადასვლის ისრების, leftArrow, rightArrowის ფერებს და ზომებს ვარედაქტირებ baguetteBox.js-ში.
// baguetteBox


// baguetteBox
baguetteBox.run(".past-gallery",{
    // animation: 'fadeIn',
    noScrollbars: false,
    buttons: true
});
// baguetteBox-ის გადასვლის ისრების, leftArrow, rightArrowის ფერებს და ზომებს ვარედაქტირებ baguetteBox.js-ში.
// baguetteBox


// baguetteBox
baguetteBox.run(".graph-gallery",{
    // animation: 'fadeIn',
    noScrollbars: false,
    buttons: true
});
// baguetteBox-ის გადასვლის ისრების, leftArrow, rightArrowის ფერებს და ზომებს ვარედაქტირებ baguetteBox.js-ში.
// baguetteBox


// baguetteBox
baguetteBox.run(".engrave-gallery",{
    // animation: 'fadeIn',
    noScrollbars: false,
    buttons: true
});
// baguetteBox-ის გადასვლის ისრების, leftArrow, rightArrowის ფერებს და ზომებს ვარედაქტირებ baguetteBox.js-ში.
// baguetteBox


// baguetteBox
baguetteBox.run(".sculptu-gallery",{
    // animation: 'fadeIn',
    noScrollbars: false,
    buttons: true
});
// baguetteBox-ის გადასვლის ისრების, leftArrow, rightArrowის ფერებს და ზომებს ვარედაქტირებ baguetteBox.js-ში.
// baguetteBox
