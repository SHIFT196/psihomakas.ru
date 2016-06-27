$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        // multiplying by 40 is the sensitivity, 
        // increase to scroll faster.
        this.scrollLeft -= (delta * 80);
        e.preventDefault();
    });
});


$(document).ready(function(){

        var $menu = $("#nav");

        $(window).scroll(function(){
            if ( $(this).scrollLeft() > 100 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });