emailjs.init("kRC0lLr3UF0VU9a61");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("Form submit event triggered!"); // Cek apakah event berjalan

    emailjs.sendForm("service_ptb4xk5", "template_07p7pms", this)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Pesan berhasil dikirim!");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Gagal mengirim pesan: " + error.text);
        });
});
