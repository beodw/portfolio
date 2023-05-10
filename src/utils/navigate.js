export const navigateToProjects = () =>
  document.querySelectorAll("a")[1].click();

export const noScoll = (v) =>
  (document.body.style.overflow = v ? "hidden" : "scroll");
