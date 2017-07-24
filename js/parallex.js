startFastScroll();
startSlowScroll();


function startFastScroll() {

    var img = $(".scroll_Up_Fast");
    var originalPosition = img.offset().top;

    $(window).scroll(function () {

        var bodyHeight = parseInt(getComputedStyle(document.body).height, 10);
        var scrollLimit = bodyHeight - window.innerHeight;
        var scrollTop = document.body.scrollTop;
        var scrollPCT = (scrollTop / (scrollLimit / 100)) / 100;


        if (scrollPCT <= 1.0) {
            var change = originalPosition - bodyHeight * scrollPCT - img.outerHeight() + "px";
            img.css("transform", "translateY(" + change)
        }
    });
}


function startSlowScroll() {

    var img = $(".scroll_Up_Slow");
    var originalPosition = img.offset().top;

    $(window).scroll(function () {

        var bodyHeight = parseInt(getComputedStyle(document.body).height, 10);
        var scrollLimit = bodyHeight - window.innerHeight;
        var scrollTop = document.body.scrollTop;
        var scrollPCT = (scrollTop / (scrollLimit / 50)) / 100;


        if (scrollPCT <= 1.0) {
            var change = originalPosition - bodyHeight * scrollPCT - img.outerHeight() + "px";
            img.css("transform", "translateY(" + change)
        }
    });

}

