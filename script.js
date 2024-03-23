var myForm = document.getElementById("myForm");
var myHello = document.getElementById("myHello")
var myName = document.getElementById("myName")
let mySubmit = document.getElementById("myButton");

function showHelloMessage(event) {
    myForm.style.display = "none";
    myHello.innerHTML = "<p>Hello, " + myName.value + 
        "٩(◕‿◕｡)۶<br/><br/><i>Thank you for your continued patronage. We are happy to serve. Service never goes out of style.</i></p>";
}

mySubmit.onclick = showHelloMessage;
