function sendEmail(){
    console.log('Hello testing');
    Email.send({
        // SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        Host : "smtp.gmail.com",
        Username : "yadavdipendra766@gmail.com",
        Password : "",
        To : 'yadavdipendra766@gmail.com',
        From :document.getElementById('email').value,
        Subject : "New Form Enquiry",
        Body : "Name: "+document.getElementById('name').value
        +"<br> Email: "+document.getElementById('email').value
        +"<br> Message: "+document.getElementById('message').value
    }).then(
      message => alert("Message Sent Successfully.")
    );
}