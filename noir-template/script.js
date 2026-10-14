const projects = [
  {
    title: "Mono Studio",
    category: "design",
    label: "MONO",
    color: "#d9d9d9"
  },
  {
    title: "Form Architecture",
    category: "development",
    label: "FORM.",
    color: "var(--accent)"
  },
  {
    title: "Harbor Coffee Roasters",
    category: "design",
    label: "HARBOR",
    color: "#f5f5f5"
  },
  {
    title: "Ledger Finance Dashboard",
    category: "development",
    label: "LEDGER",
    color: "#9ca3af"
  }
];


const projectGrid = document.querySelector("#projectGrid");

projects.forEach((project) => {
  const card = document.createElement("article");

  card.classList.add("project-card");
card.dataset.category = project.category;
  card.innerHTML = `
  <div class="project-image" style="background:${project.color}">
    <h2>${project.label}</h2>
  </div>
  <div class="project-info">
    <h3>${project.title}</h3>
    <p>${project.category}</p>
  </div>
`;

  projectGrid.appendChild(card);
});


const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (selectedFilter === "all" || selectedFilter === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

projectCards.forEach((card) => {
  observer.observe(card);
});
