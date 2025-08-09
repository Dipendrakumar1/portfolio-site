// Contact form function
function sendEmail() {
    Email.send({
        SecureToken: "176fa54d-90bd-4fd5-bec9-0aa78a7fde3d", // from smtpjs.com
        To: 'deepydv593@gmail.com',
        From: document.getElementById('email').value,
        Subject: "New Form Enquiry",
        Body:
            "Name: " + document.getElementById('name').value +
            "<br> Email: " + document.getElementById('email').value +
            "<br> Message: " + document.getElementById('message').value
    }).then(
        message => {
            if (message === "OK") {
                alert("Message Sent Successfully.");
                document.querySelector("form").reset();
            } else {
                alert("Error: " + message);
            }
        } 
    );
}

