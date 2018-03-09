function checkForm(form)
  {
    // validation fails if the input is blank
    if(form.inputfield.value == "") {
      alert("Error: Input is empty!");
      form.inputfield.focus();
      return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(form.inputfield.value)) {
      alert("Error: Input contains invalid characters!");
      form.inputfield.focus();
      return false;
    }

    // validation was successful
    return true;
  }
  
    function checkForm(form)
  {
    if(!condition1) {
       alert("Error: error message");
       form.fieldname.focus();
       return false;
    }
    if(!condition2) {
       alert("Error: error message");
       form.fieldname.focus();
       return false;
    }
    ...
    return true;
  }