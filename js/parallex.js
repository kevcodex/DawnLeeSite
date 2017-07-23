
var lastScrollTop = 0;
$(".content").scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.scroll').animate({top: '-=10'}, 10);
    } else {
        $('.scroll').animate({top: '+=10'}, 10);
    }
    lastScrollTop = st;
});