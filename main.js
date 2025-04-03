var typed = new Typed(".text", {
    strings: ["Web Developer", "Master of Java"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value || "No Subject";
    const message = document.getElementById("message").value;

    // WhatsApp API URL
    const phoneNumber = "9140365383"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
});


















