$(document).ready(function() {

    var switchBG = function() {
        var slide2 = $("header").toggleClass("homehead2");
    }

    var timer = setInterval(switchBG,5000);
})