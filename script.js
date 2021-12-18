$(document).ready(function () {
    $(".clickable").click(function () {
        $("#showing").toggle();
        $("#hidden").toggle();
    });
    $(".click").click(function () {
        $("#dev-showing").toggle();
        $("#dev-hidden").toggle();   
    })
    $(".Click").click(function () {
        $("#prod-showing").toggle();
        $("#prod-hidden").toggle();
    })
})