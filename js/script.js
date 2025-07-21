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
    $(".trigger-icon").toggleClass("scrolled", $(this).scrollTop() > 3500);
});

// end of trigger-icon

$(window).scroll(function(){
    $(".home-page-css .index-container").toggleClass("scrolled-nav", $(this).scrollTop() > 200);
});


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
    // var swiper = new Swiper('.swiper', {
    //     speed: 1200,
    //     autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false, // <- THIS KEEPS AUTOPLAY AFTER INTERACTION
    //     },
    //     transitionTimingFunction: 'cubic-bezier(x1, y1, x2, y2)',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //     loop: true,
    //     parallax: true,
    //     simulateTouch: true,
    //     grabCursor: true,
    // });

    var swiper = new Swiper('.swiper', {
        speed: 1200,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
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
        on: {
            setTransition(swiper, duration) {
                const wrapperEl = swiper.wrapperEl;
                wrapperEl.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 0.88)';
            }
        }
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




// let scrollPosition;
// $(".read-more-click").click(function(){
//     scrollPosition = $(window).scrollTop();
//     $(".read-more").toggle();
//     $(".read-more").get(0).offsetHeight; // Force layout update
//     $(".read-more-click").toggleClass("hidden");
//     $(".read-less-click").toggleClass("show");
// });
// $(".read-less-click").click(function(){
//     $(".read-more").hide();
//     $(".read-more").get(0).offsetHeight; // Force layout update
//     $(".read-more-click").removeClass("hidden");
//     $(".read-less-click").removeClass("show");
//     $(window).scrollTop(scrollPosition); // Restore the scroll position
// });







// Menu croll (without burger croll-disable)
// let lastScrollTop = 0;
// const header = document.querySelector('.fixed-top');

// window.addEventListener('scroll', () => {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop) {
//         // Scrolling down
//         header.style.transform = 'translateY(-100%)';
//         header.style.transition = 'transform 0.3s ease';
//     } else {
//         // Scrolling up
//         header.style.transform = 'translateY(0)';
//         header.style.transition = 'transform 0.3s ease';
//     }
    
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
// });




// Menu croll (without burger croll-disable)
// let lastScrollTop = 0;
// const headers = document.querySelectorAll('.container-fluid.for_border.for_background, .container.d-flex align-items-center justify-content-between.fixed-top');

// window.addEventListener('scroll', () => {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     headers.forEach(header => {
//         if (currentScroll > lastScrollTop) {
//             // Scrolling down
//             header.style.transform = 'translateY(-100%)';
//             header.style.transition = 'transform 0.3s ease';
//         } else {
//             // Scrolling up
//             header.style.transform = 'translateY(0)';
//             header.style.transition = 'transform 0.3s ease';
//         }
//     });
    
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
// });


// Menu croll (without burger croll-disable)
// let lastScrollTop = 0;
// const headers = document.querySelectorAll('.container-fluid.for_border.for_background, .fixed-top');

// window.addEventListener('scroll', () => {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     headers.forEach(header => {
//         if (currentScroll > lastScrollTop) {
//             // Scrolling down
//             header.style.transform = 'translateY(-100%)';
//             header.style.transition = 'transform 0.3s ease';
//         } else {
//             // Scrolling up
//             if (header.classList.contains('fixed-top')) {
//                 header.style.transform = 'translateY(72px)';
//             } else {
//                 header.style.transform = 'translateY(0)';
//             }
//             header.style.transition = 'transform 0.3s ease';
//         }
//     });
    
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
// });


// document.fonts.onloadingerror = (event) => console.log('Font loading error:', event);




// // without left-content pause 
// var isBreakPoint = function (bp) {
//     var bps = [991, 1280, 3840],
//         w = $(window).width(),
//         min, max
//     for (var i = 0, l = bps.length; i < l; i++) {
//       if (bps[i] === bp) {
//         min = bps[i-1] || 0
//         max = bps[i]
//         break
//       }
//     }
//     return w > min && w <= max
// }

// // ბიძგის გარეშე
// if (isBreakPoint(991)) { 
//     let scrollPosition;
//     $(".read-more-click").click(function(){
//         scrollPosition = $(window).scrollTop();
//         $(".read-more").toggle();
//         $(".read-more").get(0).offsetHeight; // Force layout update
//         $(".read-more-click").toggleClass("hidden");
//         $(".read-less-click").toggleClass("show");
//     });
//     $(".read-less-click").click(function(){
//         $(".read-more").hide();
//         $(".read-more").get(0).offsetHeight; // Force layout update
//         $(".read-more-click").removeClass("hidden");
//         $(".read-less-click").removeClass("show");
//         $(window).scrollTop(scrollPosition); // Restore the scroll position
//     });
// }; // Breakpoint between 992 and 1280

// if (isBreakPoint(1280)) { 
//     function splitScroll() {
//         const controller = new ScrollMagic.Controller();

//         // Calculate the height of the two columns
//         const height = $('.left-content').height();

//         new ScrollMagic.Scene({
//             triggerElement: '.setPin',
//             triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
//             duration: height / 1.348, // Duration will be the height of the container
//         })
//         .setPin('.lasted-news-box')
//         .addTo(controller)
//         .on('enter', function () {
//             $('.lasted-news-box').addClass('sticky');
//         })
//         .on('leave', function () {
//             $('.lasted-news-box').removeClass('sticky');
//         });
//     }

//     splitScroll();
// }; // Breakpoint between 1000 and 1280

// // ბიძგის გარეშე
// if (isBreakPoint(3840)) { 
//     function splitScroll() {
//         const controller = new ScrollMagic.Controller();

//         // Calculate the height of the two columns
//         const height = $('.left-content').height();

//         new ScrollMagic.Scene({
//             triggerElement: '.setPin',
//             triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
//             duration: height / 1.6, // Duration will be the height of the container
//         })
//         .setPin('.lasted-news-box')
//         .addTo(controller)
//         .on('enter', function () {
//             $('.lasted-news-box').addClass('sticky');
//         })
//         .on('leave', function () {
//             $('.lasted-news-box').removeClass('sticky');
//         });
//     }

//     splitScroll();
// } // Breakpoint between 1281 and 3840







var isBreakPoint = function (bp) {
    var bps = [991, 994, 997, 1000, 1002, 1009, 1019, 1021, 1025, 1030, 1031, 1034, 1041, 1047, 1049, 1051, 1061, 1066, 1070, 1079, 1088, 1093, 1105, 1108, 1113, 1123, 1130, 1135, 1140, 1143, 1144, 1145, 1147, 1148, 1157, 1177, 1185, 1188, 1190, 1192, 1199, 1210, 1399, 3840],
        w = $(window).width(),
        min, max;
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0;
        max = bps[i];
        break;
      }
    }
    return w > min && w <= max;
}

// Breakpoint up to 991px (no pinning)
if (isBreakPoint(991)) { 
    let scrollPosition;
    $(".read-more-click").click(function(){
        scrollPosition = $(window).scrollTop();
        $(".read-more").toggle();
        $(".read-more").get(0).offsetHeight; // Force layout update
        $(".read-more-click").toggleClass("hidden");
        $(".read-less-click").toggleClass("show");
    });
    $(".read-less-click").click(function(){
        $(".read-more").hide();
        $(".read-more").get(0).offsetHeight; // Force layout update
        $(".read-more-click").removeClass("hidden");
        $(".read-less-click").removeClass("show");
        $(window).scrollTop(scrollPosition); // Restore the scroll position
    });
}

// Breakpoint between 992 and 994px
if (isBreakPoint(994)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.9777, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 994px
if (isBreakPoint(997)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.978, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1000px
if (isBreakPoint(1000)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.9816, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1002px
if (isBreakPoint(1002)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.982, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1009px
if (isBreakPoint(1009)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.9725, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1019px
if (isBreakPoint(1019)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.975, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1019px
if (isBreakPoint(1021)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.977 // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1025px
if (isBreakPoint(1025)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.98, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1031px
if (isBreakPoint(1031)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.981, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1030px
if (isBreakPoint(1030)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.984, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1034px
if (isBreakPoint(1034)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.985, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1041px
if (isBreakPoint(1041)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.988, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1049px
if (isBreakPoint(1047)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.990, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1049px
if (isBreakPoint(1049)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.992, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1049px
if (isBreakPoint(1051)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.994, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1061px
if (isBreakPoint(1061)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.995, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1066px
if (isBreakPoint(1066)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.00, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1070px
if (isBreakPoint(1070)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.0045, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1070px
if (isBreakPoint(1079)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.0049, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1088px
if (isBreakPoint(1088)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.01, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1093px
if (isBreakPoint(1093)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.011, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1147
if (isBreakPoint(1105)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 0.999, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1108px
if (isBreakPoint(1108)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.005, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1123px
if (isBreakPoint(1123)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.01, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1113
if (isBreakPoint(1113)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.003, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}
// Breakpoint between 992 and 1147
if (isBreakPoint(1130)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.01, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1147
if (isBreakPoint(1135)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.015, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1147
if (isBreakPoint(1140)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.019, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1147
if (isBreakPoint(1143)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.0234, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1147
if (isBreakPoint(1144)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.027, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1147
if (isBreakPoint(1145)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.031, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}


// Breakpoint between 992 and 1147
if (isBreakPoint(1147)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.0351, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1123px
if (isBreakPoint(1148)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.039, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}


// Breakpoint between 992 and 1157px
if (isBreakPoint(1157)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.0415, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1177px
if (isBreakPoint(1177)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.046, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1185px
if (isBreakPoint(1185)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.048, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1188px
if (isBreakPoint(1188)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.052, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1190px
if (isBreakPoint(1190)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.053, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1192px
if (isBreakPoint(1192)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.053, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 992 and 1199px
if (isBreakPoint(1199)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.055, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}

// Breakpoint between 1195 and 1210px
if (isBreakPoint(1210)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.062, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}


// Breakpoint between 1199 and 1399px
if (isBreakPoint(1399)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.063, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}


// Breakpoint between 1281 and 3840px
if (isBreakPoint(3840)) { 
    function splitScroll() {
        const controller = new ScrollMagic.Controller();

        // Calculate the height of the left-content
        const height = $('.left-content').height();

        // Pin the right-content (lasted-news-box)
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 1.16, // Longer duration for right-content
        })
        .setPin('.lasted-news-box')
        .addTo(controller)
        .on('enter', function () {
            $('.lasted-news-box').addClass('sticky');

            // setTimeout(function() {
            //     $('.lasted-news-box').parents('.scrollmagic-pin-spacer').css('padding-top', '112px');
            // }, 0);
        })
        .on('leave', function () {
            $('.lasted-news-box').removeClass('sticky');
        });

        // Pin the left-content for a shorter duration
        new ScrollMagic.Scene({
            triggerElement: '.setPin',
            triggerHook: 'onLeave', // Trigger when the top of the container leaves the viewport
            duration: height / 3, // Shorter duration for left-content
        })
        .setPin('.left-content')
        .addTo(controller)
        .on('enter', function () {
            $('.left-content').addClass('sticky');
        })
        .on('leave', function () {
            $('.left-content').removeClass('sticky');
        });
    }

    splitScroll();
}







