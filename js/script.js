function validateForm() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    alert(" First Name must be filled out");
    return false;
  }
 
  var x = document.forms["myForm"]["lastname"].value;
  if (x == "") {
    alert("Last name must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
   var x = document.forms["myForm"]["phone"].value;
  if (x == "") {
    alert("Phone Number must be filled out");
    return false;
  }
}

validateForm();
