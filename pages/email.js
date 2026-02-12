(function () {
  emailjs.init("Zir8cPKlQnvOwSTbv");
})();

document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_uo8xgvw",
    "template_9juqbld",
    this
  ).then(
    () => {
      alert("Thank you for contacting us. We will get back to you shortly.");
      this.reset();
    },
    (error) => {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  );
});