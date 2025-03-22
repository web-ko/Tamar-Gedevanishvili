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


// Swiper
// With change photos and texts when loading
// document.addEventListener("DOMContentLoaded", function () {
//     const swiperContainer = document.querySelector(".swiper-wrapper");
//     const slides = Array.from(swiperContainer.children);

//     // Locations data (linked to slides)
//     const locations = [
//         { country: "GIVEN TIME", project: "PLACE FOR FUN" },
//         { country: "GIVEN TIME", project: "OVERTAKING" },
//         { country: "GIVEN TIME", project: "HERE, NOW" },
//         { country: "GIVEN TIME", project: "IT'S WINDY NOW" }
//     ];

//     // Pair slides with their location data
//     let pairedData = slides.map((slide, index) => ({
//         slide: slide.cloneNode(true), // Clone to avoid moving DOM nodes directly
//         location: locations[index]
//     }));

//     // Shuffle function (Fisher-Yates algorithm)
//     function shuffleArray(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//     }
//     // Shuffle pairedData array
//     shuffleArray(pairedData);

//     // Clear existing slides and re-insert shuffled ones
//     swiperContainer.innerHTML = "";
//     pairedData.forEach(pair => swiperContainer.appendChild(pair.slide));

//     // Extract shuffled locations to update texts later
//     const shuffledLocations = pairedData.map(pair => pair.location);

//     // Initialize Swiper
//     var swiper = new Swiper('.swiper', {
//         speed: 1200,
//         // autoplay: {
//         //     delay: 3000,
//         // },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//         loop: true,
//         parallax: true,
//         simulateTouch: true,
//         grabCursor: true,
//     });

//     // Add custom click handler for the entire pagination container
//     const paginationContainer = document.querySelector('.swiper-pagination');
//     paginationContainer.addEventListener('click', (event) => {
//         const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
//         const rect = paginationContainer.getBoundingClientRect();
//         const offsetX = event.clientX - rect.left; // Mouse position relative to the container

//         // Calculate which bullet was clicked based on the mouse position
//         const bulletWidth = rect.width / bullets.length;
//         const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

//         // Change the slide to the corresponding bullet index
//         if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
//             // Use swiper.slideToLoop if loop is enabled, otherwise use swiper.slideTo
//             if (swiper.params.loop) {
//                 swiper.slideToLoop(clickedBulletIndex);
//             } else {
//                 swiper.slideTo(clickedBulletIndex);
//             }
//         }
//     });

//     // Update the pagination bullets to reflect the correct active slide
//     swiper.on('slideChange', () => {
//         const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
//         const realIndex = swiper.realIndex; // Get the real index of the active slide

//         bullets.forEach((bullet, index) => {
//             if (index === realIndex) {
//                 bullet.classList.add('swiper-pagination-bullet-active');
//                 bullet.setAttribute('aria-current', 'true');
//             } else {
//                 bullet.classList.remove('swiper-pagination-bullet-active');
//                 bullet.removeAttribute('aria-current');
//             }
//         });
//     });

//     // Function to update text based on active slide
//     function updateTexts(index) {
//         const activeLocation = shuffledLocations[index];

//         const countryElement = document.querySelector('.css-lg9xot .chakra-text.css-ixwp1l');
//         const projectElement = document.querySelector('.css-lg9xot .chakra-heading.css-1ypxy8a');

//         if (activeLocation && countryElement && projectElement) {
//             countryElement.classList.add('fade-out');
//             projectElement.classList.add('fade-out');

//             setTimeout(() => {
//                 countryElement.textContent = activeLocation.country;
//                 projectElement.textContent = activeLocation.project;

//                 countryElement.classList.remove('fade-out');
//                 countryElement.classList.add('fade-in');

//                 projectElement.classList.remove('fade-out');
//                 projectElement.classList.add('fade-in');
//             }, 300); // Adjust timing for smooth transitions
//         }
//     }

//     // Update text on slide change
//     swiper.on('slideChange', function () {
//         updateTexts(swiper.realIndex);
//     });

//     // Ensure the correct text is shown on first load
//     updateTexts(swiper.realIndex);
// });


// Without text changes
document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector(".swiper-wrapper");
    const slides = Array.from(swiperContainer.children);

    // Shuffle function (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle slides
    shuffleArray(slides);

    // Clear existing slides and re-insert shuffled ones
    swiperContainer.innerHTML = "";
    slides.forEach(slide => swiperContainer.appendChild(slide));

    // Initialize Swiper
    var swiper = new Swiper('.swiper', {
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        transitionTimingFunction: 'cubic-bezier(x1, y1, x2, y2)',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        parallax: true,
        simulateTouch: true,
        grabCursor: true,
    });

    // Add custom click handler for the entire pagination container
    const paginationContainer = document.querySelector('.swiper-pagination');
    paginationContainer.addEventListener('click', (event) => {
        const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
        const rect = paginationContainer.getBoundingClientRect();
        const offsetX = event.clientX - rect.left; // Mouse position relative to the container

        // Calculate which bullet was clicked based on the mouse position
        const bulletWidth = rect.width / bullets.length;
        const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

        // Change the slide to the corresponding bullet index
        if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
            if (swiper.params.loop) {
                swiper.slideToLoop(clickedBulletIndex);
            } else {
                swiper.slideTo(clickedBulletIndex);
            }
        }
    });

    // Update the pagination bullets to reflect the correct active slide
    swiper.on('slideChange', () => {
        const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
        const realIndex = swiper.realIndex;

        bullets.forEach((bullet, index) => {
            if (index === realIndex) {
                bullet.classList.add('swiper-pagination-bullet-active');
                bullet.setAttribute('aria-current', 'true');
            } else {
                bullet.classList.remove('swiper-pagination-bullet-active');
                bullet.removeAttribute('aria-current');
            }
        });
    });
});
// End of Without text changes
// End of With change photos and texts when loading
// End of Swiper







const mediaQuery = window.matchMedia('(max-width: 991px)')
if (mediaQuery.matches) {

    let scrollPosition;
    $(".read-more-click").click(function(){
        scrollPosition = $(window).scrollTop();
        $(".read-more").slideToggle("fast");
        $(".read-more-click").toggleClass("hidden");
        $(".read-less-click").toggleClass("show");
    });
    $(".read-less-click").click(function(){
        $(".read-more").slideUp("fast");
        $(".read-more-click").removeClass("hidden");
        $(".read-less-click").removeClass("show");
        $(window).scrollTop(scrollPosition); // Restore the scroll position
    });
}
