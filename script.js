
const contactForm = document.getElementById("contact-form");

const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");

const formOutput = document.getElementById("form-output");


contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

    if (name === "" || email === "" || message === "") {
        formOutput.textContent = "Please fill in all fields.";
        formOutput.classList.remove("success");
        formOutput.classList.add("error");
        return;  // stop here, don't try to send anything
    }

    // Send the data to Formspree
    fetch("https://formspree.io/f/moejjlyl", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(contactForm)
    })
    .then((response) => {
    if (response.ok) {
        formOutput.textContent = `Thanks, ${name}! Your message has been sent.`;
        formOutput.classList.remove("error");
        formOutput.classList.add("success");
        contactForm.reset();
    } else {
        formOutput.textContent = "Something went wrong. Please try again.";
        formOutput.classList.remove("success");
        formOutput.classList.add("error");
    }
    })
    .catch(() => {
        formOutput.textContent = "Something went wrong. Please try again.";
        formOutput.classList.remove("success");
        formOutput.classList.add("error");
    });
});

/* Scroll Animation */
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

faders.forEach((fader) => {
    observer.observe(fader);
});

// Hamburger menu functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".nav-links");

hamburgerBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});


