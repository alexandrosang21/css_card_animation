document.addEventListener("DOMContentLoaded", () => {
  const cardgroup = document.querySelector(".card-group");
  cardgroup.addEventListener("click", (e) => {
    removeActive();
    const selectedElement = e.target.className;
    const cardIsSelected = selectedElement.includes("card");
    if (cardIsSelected) {
      e.target.classList.add("active");
    }
  });

  function removeActive() {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
  }
});
