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
        alert(nameInput +"we have recieved your message.Thankyou for reaching out to us")
    })
    $(".col-md-3").hover(function () {
        $(".name").toggle();
    })
})
// form validation
function validateForm() {
    var myName = document.getElementById("Name").value;
    var myMail = document.getElementById("Email").value; 
    if (myName == " ") {
        alert("enter name")
        return false;
    }
    else if (myMail == "") {
        alert("Email must be filled")
    }
    else{
        alert( myName +" " +"We have received your message.Thankyou for reaching out to us")
    }
    input.addEventListener("keyup", function (event) {
       if (event.keyCode === 13) {
           event.preventDefault();
           
       } 
    })
}