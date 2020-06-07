function handleBlur(event){
  const {name,value} = event.target;
  if(value == ""){
    event.target.nextElementSibling.textContent ="This field is Required";
    event.target.closest(".form-field").classList.add("error");
  }
  else {
    event.target.closest('.form-field').classList.remove('error')
    event.target.nextElementSibling.textContent=""
  }
} 

function handleChange(fieldName,text) {
fieldName.nextElementSibling.textContent =text;
fieldName.closest(".form-field").classList.add("error");
}

function checkComplete(){
  let fieldNames =document.querySelectorAll('.form-field > input');
  fieldNames.forEach(fieldName => {
    const {name,value} = fieldName;
    switch(name) {
      case "fname":
        /^[a-zA-Z]{5,}$/.test(value)
            ? fieldName.closest(".form-field").classList.remove("error")
            : handleChange(fieldName,'Fill first name properly')
          break;

      case "lname":
        /^[a-zA-Z]{1,}$/.test(value)
            ? fieldName.closest(".form-field").classList.remove("error")
            : handleChange(fieldName,'Enter your full last Name')
        break;
      case "email":
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
        ? fieldName.closest(".form-field").classList.remove("error")
        : handleChange(fieldName,'Enter Proper Name')
         break;
      case "password":
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
        ? fieldName.closest(".form-field").classList.remove("error")
        : handleChange(fieldName,'Follow Standard Password Rules')
      default: 
        break;
    }
  })
}