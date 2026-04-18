const theme = document.querySelector(".theme");
const icons = document.querySelectorAll(".theme-icon");

// Vérifier le thème sauvegardé au chargement
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  // Mode sombre : cacher le soleil, montrer la lune
  icons[0].classList.add("hidden"); // Cache ☀️
  icons[1].classList.remove("hidden"); // Montre 🌙
  document.body.classList.add("dark-theme");
  applyDarkTheme();
} else {
  // Mode clair : montrer le soleil, cacher la lune
  icons[0].classList.remove("hidden");
  icons[1].classList.add("hidden");
  document.body.classList.remove("dark-theme");
  applyLightTheme();
}

// Fonction pour appliquer le thème sombre
function applyDarkTheme() {
  document.documentElement.style.setProperty("--normal-background", "#1a1a2e");
  document.documentElement.style.setProperty("--normal-color", "#ffffff");
  document.documentElement.style.setProperty("--content-text", "#e0e0e0");
}

// Fonction pour appliquer le thème clair
function applyLightTheme() {
  document.documentElement.style.setProperty("--normal-background", "#ffffff");
  document.documentElement.style.setProperty("--normal-color", "#000000");
  document.documentElement.style.setProperty("--content-text", "#333333");
}

// Événement click sur le thème
if (theme) {
  theme.addEventListener("click", () => {
    // Basculer la classe hidden sur les deux icônes
    icons[0].classList.toggle("hidden"); // ☀️
    icons[1].classList.toggle("hidden"); // 🌙

    // Vérifier quel thème est actif
    if (!icons[0].classList.contains("hidden")) {
      // Icône soleil visible = thème clair
      document.body.classList.remove("dark-theme");
      applyLightTheme();
      localStorage.setItem("theme", "light");
    } else {
      // Icône lune visible = thème sombre
      document.body.classList.add("dark-theme");
      applyDarkTheme();
      localStorage.setItem("theme", "dark");
    }
  });
}
let activeNavLink = null;
// Smooth scroll pour la navigation
document.querySelectorAll(".nav-menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (activeNavLink) {
      activeNavLink.classList.remove("active");
    }
    const targetId = this.getAttribute("href");
    activeNavLink = anchor;
    activeNavLink.classList.add("active");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
