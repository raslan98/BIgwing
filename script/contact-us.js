function submitForm() {
    let fullName = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    if(fullName == "") {
        alert("Name must be filled out");
    } else if (email == "") {
        alert("Mail must be filed out")
    } else if(phoneNumber == "") {
        alert("Phone Number must be filled out");
    } else {
        alert('name :'+ x +  'mail :'+ y +  'Phone Number :'+ z);
    }
 }