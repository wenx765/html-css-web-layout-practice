document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".partners-tabs li");
  const contents = document.querySelectorAll(".partners-logos");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.getAttribute("data-category");

      contents.forEach((content) => {
        content.classList.remove("active");

        if (content.id === targetId) {
          content.classList.add("active");
        }
      });
    });
  });
});
