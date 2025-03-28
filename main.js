let inputs = document.querySelectorAll("input");

inputs.forEach((element, index) => {
  element.addEventListener("input", (e) => {
    let value = e.target.value;

    // Faqat bitta harf kiritishga ruxsat berish
    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    // Agar harf kiritilgan bo‘lsa va oxirgi input bo‘lmasa, keyingisiga o‘tadi
    if (value && index + 1 < inputs.length) {
      inputs[index + 1].focus();
    }
  });

  element.addEventListener("keydown", (e) => {
    // Agar foydalanuvchi backspace bossa, oldingi inputga qaytish
    if (e.key === "Backspace" && !element.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
