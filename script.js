const openButton = document.getElementById("openButton");
const envelope = document.getElementById("envelope");
const openingScreen = document.getElementById("openingScreen");
const invitationSite = document.getElementById("invitationSite");

openButton.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    openingScreen.style.display = "none";
    invitationSite.classList.remove("hidden");
    revealSections();
  }, 1300);
});

/* Scroll reveal */

function revealSections() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  sections.forEach(section => observer.observe(section));
}

/* Countdown */

const weddingDate = new Date("September 12, 2026 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);