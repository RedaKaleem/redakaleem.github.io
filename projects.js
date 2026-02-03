const projects = [
  {
    title: "ClearPath AI",
    desc: "Emergency vehicle traffic management using YOLOv8 & OpenCV.",
    image: "assets/clearpath.jpg",
    repo: "https://github.com/RedaKaleem/ClearPath-AI"
  },
  {
    title: "Sael",
    desc: "AI-powered voice assistant headset focused on accessibility.",
    image: "assets/sael.jpg",
    repo: "https://github.com/RedaKaleem/KAR"
  },
  {
    title: "Gesture-Controlled Car",
    desc: "Hand-gesture driven virtual car simulator using MediaPipe.",
    image: "assets/gesture-car.jpg",
    repo: "https://github.com/RedaKaleem/virtual-assitance"
  },
  {
    title: "GeoFence Smart Alarm",
    desc: "Location-based automation & smart alert system.",
    image: "assets/geofence.jpg",
    repo: "#"
  },
  {
    title: "DONATINATOR",
    desc: "Android blood donation app built with Jetpack Compose.",
    image: "assets/donatinator.jpg",
    repo: "https://github.com/RedaKaleem/MAD-DONATINATOR"
  },
  {
    title: "ML Text Classification",
    desc: "Toxicity detection using classical ML algorithms.",
    image: "assets/text-ml.jpg",
    repo: "#"
  }
];

const grid = document.getElementById("projectsGrid");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.onclick = () => window.open(p.repo, "_blank");

  card.innerHTML = `
    <div class="project-header">
      <span></span><span></span><span></span>
      project://${p.title.toLowerCase().replace(/\s/g, "-")}
    </div>
    <div class="project-image" style="background-image:url('${p.image}')"></div>
    <div class="project-content">
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-link">&gt; open github ↗</div>
    </div>
  `;

  grid.appendChild(card);
});