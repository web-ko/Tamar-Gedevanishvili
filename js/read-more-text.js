// const parentContainer = document.querySelector('.read_more');

// parentContainer.addEventListener('click', event=>{

// 	const current = event.target;

// 	const isReadMoreBtn = current.className.includes('read-more-btn');

// 	if(!isReadMoreBtn) return;

// 	const currentText = event.target.parentNode.querySelector('.read-more-text');

// 	currentText.classList.toggle('read-more-text--show');

// 	current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

// })



 // $(".read-more-btn").click(function(){
 // 	$(".read-more-btn").toggleClass("hidden");
 // 	$(".read-more-text").toggleClass("read-more-text--show");
 // 	$(".thr_dots").toggleClass("hidden");
 // 	$(".more_paragr").toggleClass("show");
 // 	$(".read-less-btn").toggleClass("show");
 // });
 // $(".read-less-btn").click(function(){
 // 	$(".read-more-btn").removeClass("hidden");
 // 	$(".read-more-text").removeClass("read-more-text--show");
 // 	$(".thr_dots").removeClass("hidden");
 // 	$(".more_paragr").removeClass("show");
 // 	$(".read-less-btn").removeClass("show");
 // });


// When I click "Read less" the scroll position remains at the location of the "Read more" button
let scrollPosition2;

$(".read-more-btn").click(function() {
    scrollPosition2 = $(window).scrollTop(); // Store the current scroll position
    $(".read-more-btn").toggleClass("hidden");
    $(".read-more-text").toggleClass("read-more-text--show");
    $(".thr_dots").toggleClass("hidden");
    $(".more_paragr").toggleClass("show");
    $(".read-less-btn").toggleClass("show");
});

$(".read-less-btn").click(function() {
    $(".read-more-btn").removeClass("hidden");
    $(".read-more-text").removeClass("read-more-text--show");
    $(".thr_dots").removeClass("hidden");
    $(".more_paragr").removeClass("show");
    $(".read-less-btn").removeClass("show");
    $(window).scrollTop(scrollPosition2); // Restore the scroll position
});



let scrollPosition3;

$(".read-more-btn1").click(function() {
    scrollPosition3 = $(window).scrollTop(); // Store the current scroll position
    $(".read-more-btn1").toggleClass("hidden");
    $(".read-more-text1").toggleClass("read-more-text--show");
    $(".thr_dots1").toggleClass("hidden");
    $(".more_paragr1").toggleClass("show");
    $(".read-less-btn1").toggleClass("show");
});

$(".read-less-btn1").click(function() {
    $(".read-more-btn1").removeClass("hidden");
    $(".read-more-text1").removeClass("read-more-text--show");
    $(".thr_dots1").removeClass("hidden");
    $(".more_paragr1").removeClass("show");
    $(".read-less-btn1").removeClass("show");
    $(window).scrollTop(scrollPosition3); // Restore the scroll position
});






// let scrollPosition;
// let scrollPosition1;

// // Function to detect if the device is Android
// function isAndroid() {
//     return /android/i.test(navigator.userAgent);
// }

// $(".read-more-btn").click(function() {
//     scrollPosition = $(window).scrollTop(); // Store the current scroll position
//     $(".read-more-btn").toggleClass("hidden");
//     $(".read-more-text").toggleClass("read-more-text--show");
//     $(".thr_dots").toggleClass("hidden");
//     $(".more_paragr").toggleClass("show");
//     $(".read-less-btn").toggleClass("show");
// });

// $(".read-less-btn").click(function() {
//     $(".read-more-btn").removeClass("hidden");
//     $(".read-more-text").removeClass("read-more-text--show");
//     $(".thr_dots").removeClass("hidden");
//     $(".more_paragr").removeClass("show");
//     $(".read-less-btn").removeClass("show");

//     // Check if the device is Android
//     if (isAndroid()) {
//         // If on Android, set scrollTop without animation
//         $(window).scrollTop(scrollPosition);
//     } else {
//         // For other devices, keep the scroll animation
//         $("html, body").animate({ scrollTop: scrollPosition }, 0);
//     }
// });

// $(".read-more-btn1").click(function() {
//     scrollPosition1 = $(window).scrollTop(); // Store the current scroll position
//     $(".read-more-btn1").toggleClass("hidden");
//     $(".read-more-text1").toggleClass("read-more-text--show");
//     $(".thr_dots1").toggleClass("hidden");
//     $(".more_paragr1").toggleClass("show");
//     $(".read-less-btn1").toggleClass("show");
// });

// $(".read-less-btn1").click(function() {
//     $(".read-more-btn1").removeClass("hidden");
//     $(".read-more-text1").removeClass("read-more-text--show");
//     $(".thr_dots1").removeClass("hidden");
//     $(".more_paragr1").removeClass("show");
//     $(".read-less-btn1").removeClass("show");

//     // Check if the device is Android
//     if (isAndroid()) {
//         // If on Android, set scrollTop without animation
//         $(window).scrollTop(scrollPosition1);
//     } else {
//         // For other devices, keep the scroll animation
//         $("html, body").animate({ scrollTop: scrollPosition1 }, 0);
//     }
// });







// End of When I click "Read less" the scroll position remains at the location of the "Read more" button
