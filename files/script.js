function sendEmail(){
    console.log('Hello testing');
    Email.send({
        SecureToken : "863E2B102131CFC72E58F73ECC293F42DBA3",
        // Host : "smtp.gmail.com",
        // Username : "yadavdipendra766@gmail.com",
        // Password : "",
        To : 'deepydv593@gmail.com',
        From :document.getElementById('email').value,
        Subject : "New Form Enquiry",
        Body : "Name: "+document.getElementById('name').value
        +"<br> Email: "+document.getElementById('email').value
        +"<br> Message: "+document.getElementById('message').value
    }).then(
      message => alert("Message Sent Successfully.")
    );
}