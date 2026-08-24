// HERO NETWORK BACKGROUND

const canvas = document.getElementById("hero-network");

if (canvas) {
  const ctx = canvas.getContext("2d");
  const hero = document.querySelector(".hero");

  let particles = [];
  const particleCount = 55;
  const connectionDistance = 180;

  function resizeCanvas() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,

        radius: Math.random() * 1.8 + 1
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // DRAW CONNECTIONS FIRST
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {

        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity =
            0.22 * (1 - distance / connectionDistance);

          ctx.beginPath();

          ctx.strokeStyle =
            `rgba(37, 99, 201, ${opacity})`;

          ctx.lineWidth = 0.8;

          ctx.moveTo(
            particles[i].x,
            particles[i].y
          );

          ctx.lineTo(
            particles[j].x,
            particles[j].y
          );

          ctx.stroke();
        }
      }
    }

    // DRAW NODES
    particles.forEach((particle) => {

      ctx.beginPath();

      ctx.fillStyle = "rgba(37, 99, 201, 0.75)";

      ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (
        particle.x < 0 ||
        particle.x > canvas.width
      ) {
        particle.vx *= -1;
      }

      if (
        particle.y < 0 ||
        particle.y > canvas.height
      ) {
        particle.vy *= -1;
      }
    });

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  createParticles();
  drawParticles();

  window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
  });
}
// about section

const thinkingTabs = document.querySelectorAll(".thinking-tab");

const thinkingData = {
  cs: {
    icon: `
      <img 
        src="assets/icons/code-svgrepo-com.svg" 
        alt="Code icon"
      >
    `,
    category: "Computer Science Foundations",
    title: "Strong Analytical Discipline",
    description:
      "Grounded in algorithmic thinking, data structures, relational database design, and clean code principles that help build stable, maintainable, and scalable analytical systems.",
    points: [
      "Structured problem-solving and algorithmic thinking",
      "Normalized data models and efficient database design"
    ]
  },

  engineering: {
    icon: `
      <img 
        src="assets/icons/database-svgrepo-com.svg" 
        alt="Database icon"
      >
    `,
    category: "Data Engineering",
    title: "End-to-End Pipeline Engineering",
    description:
      "Designing reliable workflows that transform raw inputs into structured, analysis-ready datasets through ingestion, cleaning, modeling, validation, and automation.",
    points: [
      "Conformed dimension modeling across disparate sources",
      "Automated data transformation and integrity checks"
    ]
  },

  bi: {
    icon: `
      <img 
        src="assets/icons/up-trend-svgrepo-com.svg" 
        alt="Analytics icon"
      >
    `,
    category: "Decision Intelligence",
    title: "Executive Clarity & Insight",
    description:
      "Transforming structured data into dashboards and analytical views that make trends, performance, and business decisions easier to understand.",
    points: [
      "Dynamic KPIs and time intelligence with DAX",
      "Insight-focused reporting for faster decision-making"
    ]
  }
};


const thinkingIcon = document.getElementById("thinkingIcon");
const thinkingCategory = document.getElementById("thinkingCategory");
const thinkingTitle = document.getElementById("thinkingTitle");
const thinkingDescription = document.getElementById("thinkingDescription");
const thinkingPoints = document.getElementById("thinkingPoints");


thinkingTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    const selectedTab = tab.dataset.tab;
    const content = thinkingData[selectedTab];

    thinkingTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    thinkingIcon.innerHTML = content.icon;

    thinkingCategory.textContent = content.category;
    thinkingTitle.textContent = content.title;
    thinkingDescription.textContent = content.description;

    thinkingPoints.innerHTML = "";

    content.points.forEach((point) => {

      const item = document.createElement("li");

      item.textContent = point;

      thinkingPoints.appendChild(item);

    });

  });

});


/* SKILLS TECHNOLOGY INSPECTOR */

const techItems =
  document.querySelectorAll(".tech-item");


const techViewport =
  document.querySelector(".tech-viewport");


const techData = {


  python: {
    icon: "assets/tech-icons/python.svg",
    iconAlt: "Python",

    name: "Python",

    role:
      "Data Analysis & Automation",

    description:
      "A primary programming language I use for data analysis, automation, ETL workflows, data preparation, machine learning, and application development.",

    tags: [
      "Data Processing",
      "Automation",
      "ETL",
      "Machine Learning"
    ]
  },


  sql: {
    icon: "assets/tech-icons/sql.svg",
    iconAlt: "SQL",

    name: "SQL",

    role:
      "Querying & Data Management",

    description:
      "Used to retrieve, transform, organize, and analyze structured data while supporting relational database design, reporting, and analytical workflows.",

    tags: [
      "Queries",
      "Joins",
      "CTEs",
      "Data Transformation"
    ]
  },

  docker: {
  icon: "assets/tech-icons/docker.svg",
  iconAlt: "Docker",

  name: "Docker",

  role:
    "Application Containerization",

  description:
    "Used to containerize and package the thesis application with its dependencies, helping create a consistent and reproducible environment for development and deployment.",

  tags: [
    "Containerization",
    "Docker Images",
    "Docker Containers",
    "Environment Consistency"
  ]
},


  powerbi: {
    icon: "assets/tech-icons/power-bi.svg",
    iconAlt: "Power BI",

    name: "Power BI",

    role:
      "Interactive Data Visualization",

    description:
      "Used to transform structured data into interactive dashboards, analytical reports, KPIs, and decision-supporting visualizations.",

    tags: [
      "DAX",
      "KPIs",
      "Dashboards",
      "Data Modeling"
    ]
  },


  pandas: {
    icon: "assets/tech-icons/pandas.svg",
    iconAlt: "Pandas",

    name: "Pandas",

    role:
      "Data Manipulation",

    description:
      "Used for cleaning, transforming, exploring, and preparing structured datasets for analysis and downstream data workflows.",

    tags: [
      "Data Cleaning",
      "Transformation",
      "Aggregation",
      "Analysis"
    ]
  },


  numpy: {
    icon: "assets/tech-icons/numpy.svg",
    iconAlt: "NumPy",

    name: "NumPy",

    role:
      "Numerical Computing",

    description:
      "Used for numerical operations, array manipulation, vectorized computation, and supporting analytical and machine learning workflows.",

    tags: [
      "Arrays",
      "Vectorization",
      "Numerical Analysis"
    ]
  },


  sqlserver: {
    icon: "assets/tech-icons/sql-server.svg",
    iconAlt: "SQL Server",

    name: "SQL Server",

    role:
      "Relational Data Systems",

    description:
      "Used for relational database management, structured querying, data storage, and supporting data warehouse and analytics workflows.",

    tags: [
      "Relational Databases",
      "SQL",
      "Data Warehousing"
    ]
  },



  sklearn: {
    icon: "assets/tech-icons/scikit-learn.svg",
    iconAlt: "Scikit-learn",

    name: "Scikit-learn",

    role:
      "Machine Learning",

    description:
      "Used for building, training, evaluating, and experimenting with machine learning models for predictive analytics and classification tasks.",

    tags: [
      "Classification",
      "Regression",
      "Model Evaluation"
    ]
  },


  tensorflow: {
    icon: "assets/tech-icons/tensorflow.svg",
    iconAlt: "TensorFlow",

    name: "TensorFlow",

    role:
      "Deep Learning",

    description:
      "Used for developing and experimenting with neural network models and deep learning workflows.",

    tags: [
      "Neural Networks",
      "Deep Learning",
      "Model Training"
    ]
  },


  jupyter: {
    icon: "assets/tech-icons/jupyter.svg",
    iconAlt: "Jupyter",

    name: "Jupyter",

    role:
      "Interactive Analysis",

    description:
      "Used for exploratory data analysis, experimentation, documentation, and developing reproducible analytical workflows.",

    tags: [
      "EDA",
      "Experimentation",
      "Documentation"
    ]
  },


  react: {
    icon: "assets/tech-icons/react.svg",
    iconAlt: "React",

    name: "React",

    role:
      "Interactive Interfaces",

    description:
      "Used for building responsive and interactive user interfaces for modern web applications and data-focused experiences.",

    tags: [
      "Components",
      "UI Development",
      "Interactivity"
    ]
  },


  git: {
    icon: "assets/tech-icons/git.svg",
    iconAlt: "Git",

    name: "Git",

    role:
      "Version Control",

    description:
      "Used to track project changes, manage development history, and maintain organized software development workflows.",

    tags: [
      "Version Control",
      "Branches",
      "Project History"
    ]
  },


  github: {
    icon: "assets/tech-icons/github.svg",
    iconAlt: "GitHub",

    name: "GitHub",

    role:
      "Project Hosting",

    description:
      "Used to host repositories, document projects, manage source code, and showcase development work.",

    tags: [
      "Repositories",
      "Documentation",
      "Project Hosting"
    ]
  },


  vscode: {
    icon: "assets/tech-icons/vscode.svg",
    iconAlt: "VS Code",

    name: "VS Code",

    role:
      "Development Environment",

    description:
      "My primary development environment for building data projects, Python applications, web interfaces, and portfolio work.",

    tags: [
      "Python",
      "Web Development",
      "Extensions"
    ]
  },


  css: {
    icon: "assets/tech-icons/css3.svg",
    iconAlt: "CSS3",

    name: "CSS3",

    role:
      "Interface Styling",

    description:
      "Used to design responsive layouts, visual systems, animations, and polished user interfaces for web projects.",

    tags: [
      "Responsive Design",
      "Layouts",
      "Animations"
    ]
  },


  apache: {
    icon: "assets/tech-icons/apache.svg",
    iconAlt: "Apache",

    name: "Apache",

    role:
      "Web Server Technology",

    description:
      "Used in application development environments to support local web services and server-based applications.",

    tags: [
      "Web Server",
      "Local Development",
      "Applications"
    ]
  },


  arduino: {
    icon: "assets/tech-icons/arduino.svg",
    iconAlt: "Arduino",

    name: "Arduino",

    role:
      "Embedded Systems",

    description:
      "Used to develop a Scheduled Smart Lock System that automates classroom access control based on a defined schedule.",

    tags: [
      "Automation",
      "Sensors",
      "Embedded Systems"
    ]
  },


  keras: {
    icon: "assets/tech-icons/keras.svg",
    iconAlt: "Keras",

    name: "Keras",

    role:
      "Deep Learning Development",

    description:
      "Used for building and experimenting with neural network architectures and machine learning models.",

    tags: [
      "Neural Networks",
      "Deep Learning",
      "Model Development"
    ]
  },


  huggingface: {
    icon: "assets/tech-icons/hugging-face.svg",
    iconAlt: "Hugging Face",

    name: "Hugging Face",

    role:
      "Natural Language Processing",

    description:
      "Used for transformer-based natural language processing and experimentation with pre-trained language models.",

    tags: [
      "Transformers",
      "NLP",
      "Pre-trained Models"
    ]
  },


  colab: {
    icon: "assets/tech-icons/google-colab.svg",
    iconAlt: "Google Colab",

    name: "Google Colab",

    role:
      "Cloud-Based Development",

    description:
      "Used for running Python notebooks, experimenting with data and machine learning workflows, and developing projects in a cloud-based environment.",

    tags: [
      "Python Notebooks",
      "Cloud Computing",
      "Machine Learning"
    ]
  },


  flask: {
    icon: "assets/tech-icons/flask.svg",
    iconAlt: "Flask",

    name: "Flask",

    role:
      "Python Web Development",

    description:
      "Used for developing lightweight web applications and connecting Python-based functionality to interactive user interfaces.",

    tags: [
      "Web Applications",
      "Python",
      "Backend Development"
    ]
  },

  restapi: {
  icon: "assets/tech-icons/rest-api.svg",
  iconAlt: "REST API",

  name: "REST API",

  role:
    "API Integration & Development",

  description:
    "Used for exchanging data between applications and services through structured HTTP requests, endpoints, and JSON-based responses.",

  tags: [
    "HTTP Requests",
    "API Endpoints",
    "JSON",
    "API Integration"
  ]
},


  java: {
    icon: "assets/tech-icons/java.svg",
    iconAlt: "Java",

    name: "Java",

    role:
      "Object-Oriented Programming",

    description:
      "Used to develop academic software applications including employee management, student management, and ATM banking systems.",

    tags: [
      "OOP",
      "Desktop Applications",
      "System Development"
    ]
  },


  mariadb: {
    icon: "assets/tech-icons/mariadb.svg",
    iconAlt: "MariaDB",

    name: "MariaDB",

    role:
      "Relational Database Management",

    description:
      "Used in database-driven academic applications for storing and managing structured records and system data.",

    tags: [
      "Relational Database",
      "Data Storage",
      "SQL"
    ]
  },


  mysql: {
    icon: "assets/tech-icons/mysql.svg",
    iconAlt: "MySQL",

    name: "MySQL",

    role:
      "Database Development",

    description:
      "Used for creating and managing structured databases that support application development and data-driven systems.",

    tags: [
      "Database Design",
      "SQL",
      "Data Management"
    ]
  },


  php: {
    icon: "assets/tech-icons/php.svg",
    iconAlt: "PHP",

    name: "PHP",

    role:
      "Server-Side Development",

    description:
      "Used for developing dynamic web functionality and supporting database-driven web applications.",

    tags: [
      "Backend",
      "Web Development",
      "Database Integration"
    ]
  },


  cpp: {
    icon: "assets/tech-icons/cpp.svg",
    iconAlt: "C++",

    name: "C++",

    role:
      "Programming & Embedded Systems",

    description:
      "Used for programming logic and embedded system development, including Arduino-based academic projects.",

    tags: [
      "Programming",
      "Algorithms",
      "Embedded Systems"
    ]
  },

  html: {
  icon: "assets/tech-icons/html.svg",
  iconAlt: "HTML",

  name: "HTML",

  role:
    "Web Structure & Semantic Markup",

  description:
    "Used to build the structural foundation of responsive web interfaces, with a focus on semantic markup, organized layouts, accessibility, and maintainable front-end development.",

  tags: [
    "Semantic HTML",
    "Responsive Layouts",
    "Accessibility",
    "Web Structure"
  ]
},

javascript: {
  icon: "assets/tech-icons/js.svg",
  iconAlt: "JavaScript",

  name: "JavaScript",

  role:
    "Interactive Web Development",

  description:
    "Used to build interactive website features, dynamic interfaces, user interactions, and responsive front-end functionality.",

  tags: [
    "DOM Manipulation",
    "Interactivity",
    "Event Handling",
    "Dynamic Content"
  ]
},

  figma: {
    icon: "assets/tech-icons/figma.svg",
    iconAlt: "Figma",

    name: "Figma",

    role:
      "UI/UX Design & Prototyping",

    description:
      "Used to design and prototype the Wash N' Dash application, a laundry service concept focused on booking pickups, tracking clothes, and secure payments.",

    tags: [
      "UI Design",
      "UX Design",
      "Prototyping"
    ]
  },

  wordpress: {
  icon: "assets/tech-icons/wordpress.svg",
  iconAlt: "WordPress",

  name: "WordPress",

  role:
    "Content Management & Web Development",

  description:
    "Used to build and manage websites through a content management system, including page customization, themes, plugins, and website administration.",

  tags: [
    "CMS",
    "Themes",
    "Plugins",
    "Website Management"
  ]
}

};


/* GET INSPECTOR ELEMENTS */

const inspectorIcon =
  document.getElementById("inspectorIcon");


const inspectorName =
  document.getElementById("inspectorName");


const inspectorRole =
  document.getElementById("inspectorRole");


const inspectorDescription =
  document.getElementById("inspectorDescription");


const inspectorTags =
  document.getElementById("inspectorTags");


/* UPDATE INSPECTOR */

function updateTechInspector(tech) {

  const data =
    techData[tech];


  if (!data) {
    return;
  }


  inspectorIcon.innerHTML = `
    <img
      src="${data.icon}"
      alt="${data.iconAlt}"
    >
  `;


  inspectorName.textContent =
    data.name;


  inspectorRole.textContent =
    data.role;


  inspectorDescription.textContent =
    data.description;


  inspectorTags.innerHTML = "";


  data.tags.forEach((tag) => {

    const tagElement =
      document.createElement("span");


    tagElement.textContent =
      tag;


    inspectorTags.appendChild(
      tagElement
    );

  });

}


/* SET ACTIVE TECHNOLOGY */

function setActiveTechnology(
  tech,
  selectedItem
) {

  techItems.forEach((item) => {

    item.classList.remove(
      "active"
    );

  });


  selectedItem.classList.add(
    "active"
  );


  updateTechInspector(
    tech
  );

}


/* HOVER AND CLICK EVENTS */

techItems.forEach((item) => {

  item.addEventListener(
    "mouseenter",
    () => {

      const tech =
        item.dataset.tech;


      setActiveTechnology(
        tech,
        item
      );

    }
  );


  item.addEventListener(
    "click",
    () => {

      const tech =
        item.dataset.tech;


      setActiveTechnology(
        tech,
        item
      );

    }
  );

});


/* HORIZONTAL SCROLL WITH MOUSE WHEEL */

techViewport.addEventListener(
  "wheel",
  (event) => {

    if (
      Math.abs(event.deltaY) >
      Math.abs(event.deltaX)
    ) {

      event.preventDefault();

      techViewport.scrollLeft +=
        event.deltaY;

    }

  },
  {
    passive: false
  }
);


/* DRAG TO SCROLL */

let isDragging = false;

let startX = 0;

let scrollStart = 0;


techViewport.addEventListener(
  "mousedown",
  (event) => {

    isDragging = true;

    techViewport.classList.add(
      "is-dragging"
    );


    startX =
      event.pageX -
      techViewport.offsetLeft;


    scrollStart =
      techViewport.scrollLeft;

  }
);


techViewport.addEventListener(
  "mouseleave",
  () => {

    isDragging = false;

    techViewport.classList.remove(
      "is-dragging"
    );

  }
);


techViewport.addEventListener(
  "mouseup",
  () => {

    isDragging = false;

    techViewport.classList.remove(
      "is-dragging"
    );

  }
);


techViewport.addEventListener(
  "mousemove",
  (event) => {

    if (!isDragging) {
      return;
    }


    event.preventDefault();


    const currentX =
      event.pageX -
      techViewport.offsetLeft;


    const movement =
      (currentX - startX) * 1.5;


    techViewport.scrollLeft =
      scrollStart - movement;

  }
);

