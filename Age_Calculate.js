function calculateAge() {
    const birthDateInput = document.getElementById("birthdate").value;
    if (!birthDateInput) {
      document.getElementById("result").innerText = "Please enter your birth date.";
      return;
    }

    const birthDate = new Date(birthDateInput);
    const now = new Date();

    const diffMs = now - birthDate;

    const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor(diffMs / (1000 * 60));

    document.getElementById("result").innerHTML =
      `Now You are:<br>
      <strong>${years}</strong> years old<br>
      <strong>${days}</strong> days<br>
      <strong>${hours}</strong> hours<br>
      <strong>${minutes}</strong> minutes`;
  }