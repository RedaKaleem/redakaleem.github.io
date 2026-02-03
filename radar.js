function drawRadar(svgId, labels, values) {
  const svg = document.getElementById(svgId);

  // ---- basic setup ----
  const size = 220;
  const center = size / 2;
  const radius = 80;
  const levels = 5;
  const ns = "http://www.w3.org/2000/svg";

  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);

  const angleStep = (Math.PI * 2) / labels.length;

  // ---- helpers ----
  function line(x1, y1, x2, y2, opacity = 0.4) {
    const l = document.createElementNS(ns, "line");
    l.setAttribute("x1", x1);
    l.setAttribute("y1", y1);
    l.setAttribute("x2", x2);
    l.setAttribute("y2", y2);
    l.setAttribute("stroke", "var(--fg-primary)");
    l.setAttribute("stroke-opacity", opacity);
    svg.appendChild(l);
  }

  function polygon(points, fill, opacity) {
    const p = document.createElementNS(ns, "polygon");
    p.setAttribute("points", points);
    p.setAttribute("fill", fill);
    p.setAttribute("fill-opacity", opacity);
    p.setAttribute("stroke", "var(--fg-primary)");
    p.setAttribute("stroke-width", "1");
    svg.appendChild(p);
  }

  for (let level = 1; level <= levels; level++) {
  const circle = document.createElementNS(ns, "circle");
  circle.setAttribute("cx", center);
  circle.setAttribute("cy", center);
  circle.setAttribute("r", (radius / levels) * level);
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "var(--fg-primary)");
  circle.setAttribute("stroke-opacity", "0.25");
  svg.appendChild(circle);
    }

  // ---- grid ----
  for (let level = 1; level <= levels; level++) {
    const r = (radius / levels) * level;
    let pts = [];

    labels.forEach((_, i) => {
      const a = i * angleStep - Math.PI / 2;
      pts.push(
        center + r * Math.cos(a),
        center + r * Math.sin(a)
      );
    });

    polygon(pts.join(" "), "none", 1);
  }

  // ---- axes ----
  labels.forEach((_, i) => {
    const a = i * angleStep - Math.PI / 2;
    line(
      center,
      center,
      center + radius * Math.cos(a),
      center + radius * Math.sin(a)
    );
  });

  // ---- AXIS LABELS (THIS IS THE PART YOU ASKED ABOUT) ----
  labels.forEach((label, i) => {
    const a = i * angleStep - Math.PI / 2;

    const x = center + (radius + 16) * Math.cos(a);
    const y = center + (radius + 16) * Math.sin(a);

    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("fill", "var(--fg-muted)");
    text.setAttribute("font-size", "9");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.textContent = label;

    svg.appendChild(text);
  });
// change axes to terminal-green and make data polygon use a different fill color
const terminalAxesColor = "#1be01bff";
const dataFillColor = "#25ef68ff";

// update existing axis lines (only <line> elements are axes here)
svg.querySelectorAll("line").forEach((l) => {
    l.setAttribute("stroke", terminalAxesColor);
    l.setAttribute("stroke-opacity", "0.5");
});

// override the polygon helper so the data polygon (which passes var(--fg-primary))
// gets our chosen fill color while other uses (like "none") remain unchanged
const _polygon = polygon;
polygon = function (points, fill, opacity) {
    const useFill = fill === "var(--fg-primary)" ? dataFillColor : fill;
    const p = document.createElementNS(ns, "polygon");
    p.setAttribute("points", points);
    p.setAttribute("fill", useFill);
    p.setAttribute("fill-opacity", opacity);
    p.setAttribute("stroke", "var(--fg-primary)");
    p.setAttribute("stroke-width", "1");
    svg.appendChild(p);
};

  // ---- data polygon ----
  let dataPts = [];
  values.forEach((v, i) => {
    const a = i * angleStep - Math.PI / 2;
    dataPts.push(
      center + radius * v * Math.cos(a),
      center + radius * v * Math.sin(a)
    );
  });

  const dataPolygon = document.createElementNS(ns, "polygon");
  dataPolygon.setAttribute("fill", "var(--fg-primary)");
  dataPolygon.setAttribute("fill-opacity", "0.35");
  dataPolygon.setAttribute("stroke", "var(--fg-primary)");
  dataPolygon.setAttribute("stroke-width", "1");
  svg.appendChild(dataPolygon);

  // animation
  let progress = 0;
  
  function animate() {
  progress += 0.03;
  if (progress > 1) progress = 1;

  let animatedPts = [];
  values.forEach((v, i) => {
    const a = i * angleStep - Math.PI / 2;
    animatedPts.push(
      center + radius * v * progress * Math.cos(a),
      center + radius * v * progress * Math.sin(a)
    );
  });

  dataPolygon.setAttribute("points", animatedPts.join(" "));

  if (progress < 1) requestAnimationFrame(animate);
}

animate();
}

/* ---- radar instances ---- */

drawRadar(
  "radar-engineering",
  ["Programming", "Architecture", "Debugging", "APIs", "Tooling"],
  [0.85, 0.8, 0.75, 0.7, 0.8]
);

drawRadar(
  "radar-data",
  ["Data Prep", "EDA", "ML Models", "Evaluation", "Experimentation"],
  [0.75, 0.7, 0.65, 0.7, 0.75]
);

drawRadar(
  "radar-ai",
  ["Computer Vision", "NLP", "Pipelines", "Inference", "Integration"],
  [0.85, 0.7, 0.75, 0.8, 0.75]
);

drawRadar(
  "radar-llm",
  ["RAG", "Vector DBs", "Agents", "Fine-tuning", "Evaluation"],
  [0.8, 0.75, 0.7, 0.65, 0.7]
);
// set desired colors
const axisLabelColor = "#1be01b";
const axisStrokeColor = "#1be01b";
const dataFillColor = "#25ef68";
const dataStrokeColor = "#25ef68";

// SVG ids used by the radars
const radarIds = [
    "radar-engineering",
    "radar-data",
    "radar-ai",
    "radar-llm",
];

radarIds.forEach((id) => {
    const svg = document.getElementById(id);
    if (!svg) return;

    // color axes (lines)
    svg.querySelectorAll("line").forEach((l) => {
        l.setAttribute("stroke", axisStrokeColor);
        l.setAttribute("stroke-opacity", "0.5");
    });

    // color axis labels (text)
    svg.querySelectorAll("text").forEach((t) => {
        t.setAttribute("fill", axisLabelColor);
    });

    // color the data polygon(s) — detect by the original fill or fill-opacity used for data
    svg.querySelectorAll("polygon").forEach((p) => {
        const fill = p.getAttribute("fill");
        const fillOpacity = p.getAttribute("fill-opacity");
        if (fill === "var(--fg-primary)" || fillOpacity === "0.35") {
            p.setAttribute("fill", dataFillColor);
            p.setAttribute("stroke", dataStrokeColor);
            p.setAttribute("fill-opacity", "0.35");
        }
    });
});
