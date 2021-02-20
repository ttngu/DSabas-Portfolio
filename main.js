// To Top Button
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
    console.log("click!");
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// WHY DOESNT THIS WORK?!
$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
})