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
    $("#Contact form").submit(function (event) {
        var nameInput = $("input#Name").val();
        var emailInput = $("input#Email").val();
        var messageInput = $("input#message").val();
        $("#Name").text(nameInput);
        $("#Email").text(emailInput);
        $("#message").text(messageInput);
        event.preventDefault();
        
    })
    alert(nameInput +"we have recieved your message.Thankyou for reaching out to us")
})