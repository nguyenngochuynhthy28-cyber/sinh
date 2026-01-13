const sound = document.getElementById("clickSound");

document.querySelectorAll(".hotspot").forEach(item => {
  item.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      window.open(item.dataset.link, "_blank");
    }, 200);
  });
});
