function send(event) {
  event.preventDefault();
  Email.send({
    name: document.getElementById("name").value,
    Host: "smtp.gmail.com",
    Username: "control.edcjss@gmail.com",
    Password: "Edcjss@123",
    To: "control.edcjss@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Contact Us Query",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br>" +
      "Email: " +
      document.getElementById("email").value +
      "<br>" +
      "Subject: " +
      document.getElementById("message").value,
  }).then((message) => alert("The email was sent successfully"));
}
