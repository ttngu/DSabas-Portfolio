// let portf = document.getElementById("portf");

// // function scrollToTop() {
// //   elmnt.scrollIntoView(true); // Portfolio
// // }

// $(function() {
//     $('.navbar a').on('click', function() {
//         const hashtag = $(this.hash);

//         // hashtag = hashtag.length ? hashtag : $('name=' + this.has.substr(1) + ']');

//         // if (hashtag.length) {
//             $('html, body').animate({
//                 scrollTop: $(hashtag).offset().Top
//             }, 500);

//         //     return false;
//         // }
//     })
// })


const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
    console.log("click!")
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});