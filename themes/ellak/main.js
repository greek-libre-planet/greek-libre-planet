$(document).ready(function(){

    // hide #back-top first
    $("#back-top").hide();

    //image floating automation
    if ($("img").width() > 400) {
        $("img").css("float", "none");
        $("img").addClass("bigimg");
    }

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
