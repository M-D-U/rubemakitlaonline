document.addEventListener("DOMContentLoaded", function () {

  const mobileMenu = document.getElementById("mobileMenu");
  const mobilePanel = document.getElementById("mobilePanel");
  const openBtn = document.getElementById("openMobileMenu");
  const closeBtn = document.getElementById("closeMobileMenu");
  const overlay = document.getElementById("menuOverlay");

  // Only run if menu exists on page
  if (mobileMenu && mobilePanel && openBtn && closeBtn && overlay) {

    function openMenu() {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => {
        mobilePanel.classList.remove("translate-x-full");
      }, 10);
    }

    function closeMenu() {
      mobilePanel.classList.add("translate-x-full");
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
      }, 300);
    }

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }

});


