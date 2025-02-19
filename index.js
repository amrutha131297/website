document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Oi8RCpsKl7EwkQHZB"); // Initialize EmailJS

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        const serviceID = "service_r21rs9y";
        const templateID = "template_1eiohqv";

        emailjs.send(serviceID, templateID, params)
            .then(response => {
                console.log("Email sent!", response);
                alert("Your message was sent successfully!");

                // Clear the form fields
                document.getElementById("contactForm").reset();
            })
            .catch(error => {
                console.error("Email failed to send", error);
                alert("Failed to send message. Please try again.");
            });
    });
});
