function validateForm() {
  var first = document.forms["myForm"]["firstname"].value;
  if (first == "") {
    alert(" First Name must be filled out");
    return false;
  }
 
  var last = document.forms["myForm"]["lastname"].value;
  if (last == "") {
    alert("Last name must be filled out");
    return false;
  }
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
   var phone = document.forms["myForm"]["phone"].value;
  if (phone == "") {
    alert("Phone Number must be filled out");
    return false;
  }
}

validateForm();
