// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('sendform').submit();
alert("Form Submitted Successfully...");
}
}

function check_emptyform1() {
if (document.getElementById('msg').value == "") {
	document.getElementById('next').disabled = true;
alert("Enter your Msg First !");

} 
else {
	document.getElementById("next").disabled = false;
	show_form2();
}
}
//Function To Display Popup
function div_show() {
document.getElementById('contact_us').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('contact_us').style.display = "none";
document.getElementById('nextform').reset();
document.getElementById('sendform').reset();
}
function show_form2() {
document.getElementById('form2').style.display = "block";
document.getElementById('form1').style.display = "none";
}
//Function to Hide Popup
function show_form1(){
document.getElementById('form2').style.display = "none";
document.getElementById('form1').style.display = "block";
}

function checkform1()
    {
        var f = document.forms["form1"].elements;
        var cansubmit = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length == 0) cansubmit = false;
        }

        if (cansubmit) {
            document.getElementById('next').disabled = false;
        }
        message_value();
    }

function checkform2()
    {
        var f = document.forms["form2"].elements;
        var cansubmit = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length == 0) cansubmit = false;
        }

        if (cansubmit) {
            document.getElementById('submit').disabled = false;
        }
    }	

function message_value() {
             var message = document.getElementById('msg').value;
             document.getElementById('message').value = message;
         }	     

