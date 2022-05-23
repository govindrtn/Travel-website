
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "arpitjha778@gmail.com",
        Password: "Qazplm54321@",
        To: 'govindmaithilrtn@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact From Enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}
