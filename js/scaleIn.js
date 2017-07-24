$(document).ready(function () {


    $(".scaleOut").each(function () {
        var min = 300, max = 1000;
        var delay = Math.floor(Math.random() * (max - min) + min);

        var that = $(this)

        setTimeout(function () {
            that.addClass("scaleIn");
            that.removeClass("scaleOut");
        }, delay);
    });




});