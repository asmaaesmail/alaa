$(document).ready(function () {
    var o;
    jQuery(window).load(function () {
            $(".loader").fadeOut(500, function () {
                $(".loading").fadeOut(500), $("body").css("overflow-y", "auto")
            })
        }), $(".navbar a, .header a, .footer a").click(function (o) {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1e3), o.preventDefault()
        }),
        $(window).scroll(function () {
            $(window).scrollTop() > 50 ? $(".navbar").addClass("fixd-navbar") : $(".navbar").removeClass("fixd-navbar")
        }),
        $("#nav-icon1").click(function () {
            $(this).toggleClass("open"), $(".navy").toggleClass("back-nav"), $(".body-overlay").toggleClass("back"), $("body").toggleClass("body-over")
        }), $(".body-overlay").click(function () {
            $(this).toggleClass("back"), $("#nav-icon1").toggleClass("open"), $(".navy").toggleClass("back-nav"), $("body").toggleClass("body-over")
        }), o = $("#scroll-top"), $(window).scroll(function () {
            $(this).scrollTop() >= 500 ? o.show() : o.hide()
        }), $("#scroll-top").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 600)
        })
});
