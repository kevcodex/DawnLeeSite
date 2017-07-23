/*
 * @Author: Kevin.Chen 
 * @Date: 2017-07-15 19:59:15 
 * @Last Modified by: Kevin.Chen
 * @Last Modified time: 2017-07-23 14:22:56
 */
// $(".fade").fadeToggle(500);


var tabLinks = $(".tablinks");
var tabContent = $(".content");
var lineBar = $("#Line-Bar");

tabLinks.on("click", function () {
    //remove active and content display
    tabLinks.removeClass("active");
    tabContent.css("display", "none")

    //toggle tab active
    $(this).toggleClass("active");

    if ($(this).text() === "About") {
        lineBar.css("margin-left", "5%");
    } else if ($(this).text() === "Projects") {
        lineBar.css("margin-left", "25%");
    } else if ($(this).text() === "Press") {
        lineBar.css("margin-left", "45%");
    } else if ($(this).text() === "Bio") {
        lineBar.css("margin-left", "65%");
    }


    //toggle and animate tab content
    var id = $(this).text();
    $("#" + id).fadeIn(1000);

});



init()

function init() {
    tabContent.css("display", "none")
    tabContent.first().css("display", "block")
}

