document.getElementById("viewProjects").addEventListener("click", function () {
  var projects = document.getElementById("projects");
  if (projects) {
    projects.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("View My Projects clicked");
  }
});
