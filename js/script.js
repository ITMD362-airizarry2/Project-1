function validateForm() {
  var x = document.forms["form"]["firstname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
