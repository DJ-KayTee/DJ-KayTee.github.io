const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  });
});

const video = document.querySelector("#event-video");
const videoTabs = [...document.querySelectorAll(".video-tab")];

videoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const wasPlaying = !video.paused;
    videoTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    video.src = tab.dataset.video;
    video.load();
    if (wasPlaying) video.play().catch(() => {});
  });
});
