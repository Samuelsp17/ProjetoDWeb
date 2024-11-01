function toggleMessage() {
    const message = document.getElementById("message");
    const arrow = document.querySelector(".arrow");
    
    if (message.style.display === "none" || message.style.display === "") {
      message.style.display = "block";
      arrow.style.transform = "rotate(90deg)";
    } else {
      message.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  }
  