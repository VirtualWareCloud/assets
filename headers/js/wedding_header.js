// wedding_header.js
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const message = `💍✨ You're Invited! ✨💍
Join us as we celebrate love, laughter, and happily ever after.
We're thrilled to announce — Cedric & Ruth are getting married! 💛

📅 View the details, RSVP, and celebrate with us here:
👉 https://cedric-ruth-wedding.vercel.app

💫 Let the countdown to forever begin! 💫`;

      if (navigator.share) {
        navigator.share({
          title: "Cedric & Ruth Wedding",
          text: message,
          url: "https://cedric-ruth-wedding.vercel.app"
        }).catch((err) => console.error("Share failed:", err));
      } else {
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${encoded}`, '_blank');
      }
    });
  }

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
