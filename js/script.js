// Initialize SweetAlert2 for the welcome prompt
function initialAlert() {
  Swal.fire({
    title: "Welcome!",
    text: "Welcome to my portfolio website. Before we begin, please enter your name.",
    input: "text",
    inputPlaceholder: "Your name here",
    showCancelButton: false,
    allowOutsideClick: false,
    confirmButtonText: "Submit",
    preConfirm: (name) => {
      if (!name || name.trim() === "") {
        Swal.showValidationMessage("Please enter your name.");
      }
      return name;
    },
  }).then((result) => {
    if (result.isConfirmed && result.value.trim() !== "") {
      document.getElementById("display-name").textContent = result.value.trim();
      document.getElementById("name").value = result.value.trim();
    }
  });
}

window.onload = initialAlert;

// Scroll-based active link highlighting
const sections = document.querySelectorAll("main section[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(
      `header nav a[href="#${sectionId}"]`
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

// Contact form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const to = document.getElementById("email").value;
    const body = document.getElementById("message").value;
    const message = encodeURIComponent(body);
    const subject = encodeURIComponent(
      `Portfolio Contact from ${document.getElementById("name").value} - ${to}`
    );
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=naufaladityayahya@gmail.com&su=${subject}&body=${message}`;
    window.open(url, "_blank");
  });
