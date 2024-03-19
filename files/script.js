function sendEmail(){
    // console.log('Hello testing');
    Email.send({
        SecureToken : "176fa54d-90bd-4fd5-bec9-0aa78a7fde3d",
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