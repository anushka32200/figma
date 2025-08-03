<script>
  // ===== Mobile Navbar Toggle =====
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle"); // Fixed spacing & semicolon
    const navLinks = document.querySelector(".navbar ul");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }

    // ===== Smooth Scrolling =====
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
          });
        }
      });
    });

    // ===== Scroll to Top Button (optional) =====
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "↑";
    scrollBtn.id = "scrollToTop";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "10px 15px";
    scrollBtn.style.display = "none";
    scrollBtn.style.border = "none";
    scrollBtn.style.backgroundColor = "#333";
    scrollBtn.style.color = "#fff";
    scrollBtn.style.borderRadius = "5px";
    scrollBtn.style.cursor = "pointer";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ===== Newsletter Form Validation (optional) =====
    const newsletterForm = document.querySelector("#newsletter form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        const emailInput = this.querySelector("input[type='email']");
        const email = emailInput.value.trim();
        if (!email || !email.includes("@")) {
          alert("Please enter a valid email address.");
          e.preventDefault();
        }
      });
    }
  });
</script>