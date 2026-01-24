const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobileNav");

function setMenu(open) {
  if (!menuBtn || !mobileNav) return;
  menuBtn.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
  menuBtn.textContent = open ? "Close" : "Menu";
}

if (menuBtn && mobileNav) {
  setMenu(false);

  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    setMenu(!expanded);
  });

  mobileNav.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement) setMenu(false);
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ============================================================================
// Contact Form - EmailJS Integration
// ============================================================================
(function initContactForm() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");
  
  if (!form) return;

  // Initialize EmailJS
  // Replace these with your EmailJS credentials after setup
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

  // Initialize EmailJS (only if credentials are set)
  if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" && typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessageText").value.trim();

    // Validate
    if (!name || !email || !message) {
      showMessage("Please fill in all fields.", "error");
      return;
    }

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";

    try {
      // Check if EmailJS is configured
      if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" || typeof emailjs === "undefined") {
        // Fallback: Use mailto if EmailJS not configured
        window.location.href = `mailto:tarunksks@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        showMessage("Opening your email client...", "info");
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        return;
      }

      // Send email via EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "tarunksks@gmail.com",
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      // Success
      showMessage("Message sent successfully! I'll get back to you soon.", "success");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      showMessage("Failed to send message. Please try emailing directly at tarunksks@gmail.com", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });

  function showMessage(text, type) {
    if (!formMessage) return;
    
    formMessage.textContent = text;
    formMessage.className = `form__message form__message--${type}`;
    formMessage.style.display = "block";

    // Auto-hide after 5 seconds
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }
})();

