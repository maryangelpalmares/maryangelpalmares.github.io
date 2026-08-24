/* CONTACT SECTION */


/* COPY EMAIL */

const copyEmailBtn = document.getElementById("copyEmailBtn");

const portfolioEmail = "maryangel2036@gmail.com";


copyEmailBtn.addEventListener("click", async () => {

  try {

    await navigator.clipboard.writeText(portfolioEmail);

    const buttonText = copyEmailBtn.querySelector("span");

    copyEmailBtn.classList.add("copied");

    buttonText.textContent = "Copied!";


    setTimeout(() => {

      copyEmailBtn.classList.remove("copied");

      buttonText.textContent = "Copy";

    }, 2000);

  } catch (error) {

    console.error("Unable to copy email:", error);

  }

});



/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");

const contactFormFeedback =
  document.getElementById("contactFormFeedback");


contactForm.addEventListener("submit", function (event) {

  event.preventDefault();


  const name =
    document.getElementById("contactName").value.trim();

  const email =
    document.getElementById("contactEmail").value.trim();

  const message =
    document.getElementById("contactMessage").value.trim();


  const subject =
    `Portfolio Inquiry from ${name}`;


  const emailBody =
`Hello Mary Angel,

Name: ${name}
Email: ${email}

Message:
${message}

Best regards,
${name}`;


  const mailtoLink =
    `mailto:${portfolioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;


  window.location.href = mailtoLink;


  contactFormFeedback.textContent =
    "Your email client is opening. Please send the message to complete your inquiry.";

  contactFormFeedback.classList.add("show");


  setTimeout(() => {

    contactFormFeedback.classList.remove("show");

  }, 5000);

});