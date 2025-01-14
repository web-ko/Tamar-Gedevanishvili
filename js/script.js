// $(document).ready(function(){
//     $("#wrapper").click(function() {
//   $(".icon").toggleClass("close");
//   });
// 	// let fullscreen = document.querySelector(".fullscreen");
// 	// let wrapper = document.querySelector("#wrapper");
// 	// wrapper.onclick=function()
// 	// {
// 	// 	fullscreen.classList.toggle("show");
// 	// 	wrapper.classList.toggle("active");
// 	// }


// 	let fullscreen = document.querySelector(".fullscreen");
// 	let fullscreen1 = document.querySelector(".fullscreen-content");
// 	let wrapper = document.querySelector("#wrapper");
// 	wrapper.onclick=function()
// 	{
// 		fullscreen.classList.toggle("show");
// 		fullscreen1.classList.toggle("open");
// 		wrapper.classList.toggle("active");
// 	}
// });



// var images = ["akvareli (2).jpg", "fanqari (8).jpg", "akvareli (38).jpg", "pen (3).jpg", "guaSi (6).jpg", "guaSi (4).jpg", "fanqari (2).jpg", "guaSi (1).jpg", "fanqari (12).jpg"];
// $('<img class="fade-in" src="./img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#randimg');


// (function ($){
// 	$.fn.boxify =function(options) {
// 		var colorArr = ["#ff0000", "#E6E7E8", "#fecb05", "#d6de23"];
// 		var randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

// 		var settings = $.extend({
// 			background: randomColor,
// 			smoothness: null,
// 			textColor: null
// 		}, options );

// 		return this.css({

// 			background: settings.background,
// 			color: settings.textColor,
// 			transition: settings.smoothness
// 		});
// 	}
// $(".landing-color").boxify();
// }(jQuery));



baguetteBox.run(".gallery", {
    noScrollbars: false,
    buttons: true
});




// baguetteBox.run(".water-gallery",{
//     noScrollbars: false,
//     buttons: true
// });




// baguetteBox.run(".guashi-gallery",{
//     noScrollbars: false,
//     buttons: true
// });




// baguetteBox.run(".past-gallery",{
//     noScrollbars: false,
//     buttons: true
// });




// baguetteBox.run(".graph-gallery",{
//     noScrollbars: false,
//     buttons: true
// });




// baguetteBox.run(".engrave-gallery",{
//     noScrollbars: false,
//     buttons: true
// });




// baguetteBox.run(".sculptu-gallery",{
//     noScrollbars: false,
//     buttons: true
// });




// როცა მინდა ორჯერ გავზარდო სურათი

// const image = document.getElementById('enlargable-image');
// const sizes = ['100%', '700px', '1000px'];
// let currentSizeIndex = 0;

// image.addEventListener('click', () => {
//     currentSizeIndex = (currentSizeIndex + 1) % sizes.length;
//     image.style.width = sizes[currentSizeIndex];
// });



//  კურსორი ცვლილებით

// const image = document.getElementById('enlargable-image');
// const sizes = ['100%', '800px', '900px'];
// let currentSizeIndex = 0;
// let clickCount = 0;

// image.addEventListener('click', () => {
//     clickCount++;

//     if (clickCount === 1) {
//         // On the first click, set the cursor to 'zoom-in' and enlarge the image
//         image.style.cursor = 'zoom-in';
//         currentSizeIndex = 1;
//     } else if (clickCount === 2) {
//         // On the second click, set the cursor to 'zoom-out' and enlarge the image more
//         image.style.cursor = 'zoom-out';
//         currentSizeIndex = 2;
//     } else {
//         // On the third click, set the cursor back to 'pointer' and reset to the original size
//         image.style.cursor = 'pointer';
//         currentSizeIndex = 0;
//         clickCount = 0;
//     }

//     image.style.width = sizes[currentSizeIndex];
// });

// end of როცა მინდა ორჯერ გავზარდო სურათი


// trigger-icon
var navigation = $(".trigger-container").height();
$('a[href^="#trigger-icon').on("click", function(){
    var clickedElementAttrName = $(this).attr("href");
    var seciton = $(clickedElementAttrName);
    var scroToTop = seciton.offset().top - navigation;
    console.log(scroToTop, navigation);
    $("html,body").animate({
        scrollTop:scroToTop
    }, 500)
});


// $('a[href*="#trigger-icon"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 500);
//             return false;
//         }
//     }
// });


$(window).scroll(function(){
    $(".trigger-icon").toggleClass("scrolled", $(this).scrollTop() > 500);
});

// end of trigger-icon



Fancybox.bind("[data-fancybox]",{
});