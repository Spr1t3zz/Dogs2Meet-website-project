document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signup-form form");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const popup = document.getElementById("passwordPopup");
  const popupText = document.getElementById("popupText");
  const closePopup = document.getElementById("closePopup");

  form.addEventListener("submit", function (event) {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const errors = [];

    // === Password conditions ===
    if (password.length < 10 || password.length > 20) {
      errors.push("• Heslo musí mít 10–20 znaků");
    }

    const digitCount = (password.match(/[0-9]/g) || []).length;
    if (digitCount < 5) {
      errors.push("• Alespoň 5 číslic");
    }

    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);
    if (!hasSpecialChar) {
      errors.push("• Alespoň 1 speciální znak (!, %, ., …)");
    }

    if (password !== confirmPassword) {
      errors.push("• Hesla se neshodují");
    }

    // === Show popup if any errors ===
    if (errors.length > 0) {
      event.preventDefault();
      popupText.innerHTML = errors.join("<br>");
      popup.style.display = "block";
      return;
    }

    popup.style.display = "none";
    alert("Registrace proběhla úspěšně!");
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
