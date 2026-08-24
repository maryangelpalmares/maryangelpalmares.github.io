const schemaTabs = document.querySelectorAll(".schema-tab");

const schemaTableName =
  document.getElementById("schemaTableName");

const schemaTableType =
  document.getElementById("schemaTableType");

const schemaKeys =
  document.getElementById("schemaKeys");

const schemaAttributes =
  document.getElementById("schemaAttributes");

const schemaNote =
  document.getElementById("schemaNote");


const schemaData = {

  factsales: {

    name: "dbo.FactSales",

    type: "Fact Table (Transactional Grain)",

    keys: [
      "OrderDate (FK)",
      "CustomerKey (FK)",
      "ProductKey (FK)",
      "TerritoryKey (FK)",
      "OrderNumber",
      "OrderLineItem"
    ],

    attributes: [
      "StockDate",
      "OrderQuantity",
      "SalesAmount",
      "TotalCost",
      "Profit"
    ],

    note:
      "Stores sales transactions and connects customer, product, territory, and date dimensions for analytical reporting."

  },


  dimcustomer: {

    name: "dbo.DimCustomer",

    type: "Dimension Table",

    keys: [
      "CustomerKey (PK)"
    ],

    attributes: [
      "FirstName",
      "LastName",
      "BirthDate",
      "Gender",
      "AnnualIncome",
      "TotalChildren",
      "EducationLevel",
      "Occupation",
      "HomeOwner"
    ],

    note:
      "Provides customer demographic attributes used for segmentation, purchasing analysis, income analysis, and return analysis."

  },


  dimproduct: {

    name: "dbo.DimProduct",

    type: "Dimension Table",

    keys: [
      "ProductKey (PK)",
      "ProductSubcategoryKey"
    ],

    attributes: [
      "ProductSKU",
      "ProductName",
      "ModelName",
      "ProductColor",
      "ProductSize",
      "ProductStyle",
      "ProductCost",
      "ProductPrice"
    ],

    note:
      "Supports product-level analysis and connects products to subcategory and category hierarchies."

  },


  dimdate: {

    name: "dbo.DimDate",

    type: "Dimension Table",

    keys: [
      "Date (PK)"
    ],

    attributes: [
      "Year",
      "Quarter",
      "Month",
      "Month Number",
      "Day",
      "Day of Week"
    ],

    note:
      "Supports time intelligence, period comparisons, monthly trends, and year-over-year analytical measures."

  },


  dimterritory: {

    name: "dbo.DimTerritory",

    type: "Dimension Table",

    keys: [
      "TerritoryKey (PK)"
    ],

    attributes: [
      "Region",
      "Country",
      "Continent"
    ],

    note:
      "Provides the geographical structure used for regional, country, and continental sales and return analysis."

  }

};


schemaTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    const selectedSchema =
      tab.dataset.schema;

    const data =
      schemaData[selectedSchema];


    /* ACTIVE TAB */

    schemaTabs.forEach((item) => {

      item.classList.remove("active");

    });

    tab.classList.add("active");


    /* UPDATE TABLE */

    schemaTableName.textContent =
      data.name;

    schemaTableType.textContent =
      data.type;


    /* UPDATE KEYS */

    schemaKeys.innerHTML = "";

    data.keys.forEach((key) => {

      const item =
        document.createElement("li");

      item.textContent = key;

      schemaKeys.appendChild(item);

    });


    /* UPDATE ATTRIBUTES */

    schemaAttributes.innerHTML = "";

    data.attributes.forEach((attribute) => {

      const item =
        document.createElement("li");

      item.textContent = attribute;

      schemaAttributes.appendChild(item);

    });


    /* UPDATE NOTE */

    schemaNote.textContent =
      data.note;

  });

});


/* CASE STUDY MODAL */

const modalButtons =
  document.querySelectorAll("[data-modal-target]");

const closeButtons =
  document.querySelectorAll("[data-modal-close]");


modalButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const modalId =
      button.dataset.modalTarget;

    const modal =
      document.getElementById(modalId);


    if (!modal) return;


    modal.classList.add("active");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";

  });

});


function closeCaseStudyModal(modal) {

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

}


closeButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const modal =
      button.closest(".case-study-modal");

    if (!modal) return;

    closeCaseStudyModal(modal);

  });

});


/* ESCAPE KEY */

document.addEventListener("keydown", (event) => {

  if (event.key !== "Escape") return;


  const activeModal =
    document.querySelector(
      ".case-study-modal.active"
    );


  if (activeModal) {

    closeCaseStudyModal(activeModal);

  }

});


/* PROJECT 01 CASE STUDY TABS*/

const distributionCaseStudy =
  document.getElementById("distributionCaseStudy");

const caseStudyTabs =
  distributionCaseStudy.querySelectorAll(
    ".case-study-tab"
  );

const caseStudyPanels =
  distributionCaseStudy.querySelectorAll(
    ".case-study-panel"
  );


caseStudyTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    const target =
      tab.dataset.caseTab;


    caseStudyTabs.forEach((item) => {

      item.classList.remove("active");

    });


    tab.classList.add("active");


    caseStudyPanels.forEach((panel) => {

      panel.classList.remove("active");

    });


    const activePanel =
      distributionCaseStudy.querySelector(
        `[data-case-panel="${target}"]`
      );


    if (activePanel) {

      activePanel.classList.add("active");

    }

  });

});

/* DASHBOARD IMAGE SLIDER */

const dashboardSlides =
  document.querySelectorAll(".dashboard-slide");

const dashboardDots =
  document.querySelectorAll(".dashboard-dot");

const dashboardPrev =
  document.querySelector(".dashboard-prev");

const dashboardNext =
  document.querySelector(".dashboard-next");


let currentDashboardSlide = 0;


/* SHOW SLIDE */

function showDashboardSlide(index) {

  /* LOOP BACK TO LAST */

  if (index < 0) {

    currentDashboardSlide =
      dashboardSlides.length - 1;

  }

  /* LOOP BACK TO FIRST */

  else if (index >= dashboardSlides.length) {

    currentDashboardSlide = 0;

  }

  else {

    currentDashboardSlide = index;

  }


  /* UPDATE SLIDES */

  dashboardSlides.forEach((slide) => {

    slide.classList.remove("active");

  });


  dashboardSlides[currentDashboardSlide]
    .classList.add("active");


  /* UPDATE DOTS */

  dashboardDots.forEach((dot) => {

    dot.classList.remove("active");

  });


  dashboardDots[currentDashboardSlide]
    .classList.add("active");

}


/* NEXT BUTTON */

if (dashboardNext) {

  dashboardNext.addEventListener("click", () => {

    showDashboardSlide(
      currentDashboardSlide + 1
    );

  });

}


/* PREVIOUS BUTTON */

if (dashboardPrev) {

  dashboardPrev.addEventListener("click", () => {

    showDashboardSlide(
      currentDashboardSlide - 1
    );

  });

}


/* DOT NAVIGATION */

dashboardDots.forEach((dot) => {

  dot.addEventListener("click", () => {

    const slideIndex =
      Number(dot.dataset.slide);

    showDashboardSlide(slideIndex);

  });

});

/* PROJECT 02 — FRAUD SCHEMA */

const fraudSchemaTabs =
  document.querySelectorAll(".fraud-schema-tab");


const fraudSchemaTableName =
  document.getElementById(
    "fraudSchemaTableName"
  );


const fraudSchemaTableType =
  document.getElementById(
    "fraudSchemaTableType"
  );


const fraudSchemaKeys =
  document.getElementById(
    "fraudSchemaKeys"
  );


const fraudSchemaAttributes =
  document.getElementById(
    "fraudSchemaAttributes"
  );


const fraudSchemaNote =
  document.getElementById(
    "fraudSchemaNote"
  );


const fraudSchemaData = {


  facttransaction: {

    name:
      "dbo.fact_transaction",

    type:
      "Fact Table — One Row per Financial Transaction",

    keys: [

      "transaction_key (PK)",

      "transaction_id",

      "date_key (FK)",

      "product_key (FK)",

      "payment_card_key (FK)",

      "device_key (FK)",

      "identity_key (FK)",

      "email_key (FK)"

    ],

    attributes: [

      "transaction_amount",

      "is_fraud",

      "high_value_transaction",

      "transaction_hour",

      "time_of_day",

      "transaction_amount_band"

    ],

    note:
      "Central transaction fact table containing individual financial transactions, fraud indicators, transaction intelligence, and foreign keys to descriptive risk dimensions."

  },


  dimproduct: {

    name:
      "dbo.dim_product",

    type:
      "Dimension Table",

    keys: [

      "product_key (PK)"

    ],

    attributes: [

      "product_code",

      "product_historical_fraud_rate",

      "product_historical_risk_tier"

    ],

    note:
      "Provides product-level analytical context and historical fraud characteristics derived during data preparation for descriptive risk analysis."

  },


  dimpaymentcard: {

    name:
      "dbo.dim_payment_card",

    type:
      "Dimension Table",

    keys: [

      "payment_card_key (PK)"

    ],

    attributes: [

      "card1",

      "card2",

      "card3",

      "card4",

      "card5",

      "card6"

    ],

    note:
      "Groups payment card attributes into reusable payment profiles for fraud analysis without interpreting them as customer or account identifiers."

  },


  dimdevice: {

    name:
      "dbo.dim_device",

    type:
      "Dimension Table",

    keys: [

      "device_key (PK)"

    ],

    attributes: [

      "device_type",

      "device_info",

      "operating_system",

      "browser"

    ],

    note:
      "Provides device-related analytical context for comparing fraud exposure across device types, device profiles, operating systems, and browsers."

  },


  dimidentity: {

    name:
      "dbo.dim_identity",

    type:
      "Dimension Table",

    keys: [

      "identity_key (PK)"

    ],

    attributes: [

      "identity_available",

      "identity_completeness_score"

    ],

    note:
      "Captures identity availability and completeness rather than loading highly sparse technical identity fields into the primary BI model."

  },


  dimemail: {

    name:
      "dbo.dim_email",

    type:
      "Dimension Table",

    keys: [

      "email_key (PK)"

    ],

    attributes: [

      "purchaser_email_domain",

      "recipient_email_domain",

      "purchaser_email_available",

      "recipient_email_available"

    ],

    note:
      "Provides purchaser and recipient email context for analyzing domain-level activity, information availability, and associated fraud exposure."

  }

};


/* FRAUD SCHEMA TAB INTERACTION */

fraudSchemaTabs.forEach((tab) => {

  tab.addEventListener(
    "click",
    () => {

      const selectedSchema =
        tab.dataset.fraudSchema;


      const data =
        fraudSchemaData[
          selectedSchema
        ];


      if (!data) return;


      /* ACTIVE TAB */

      fraudSchemaTabs.forEach(
        (item) => {

          item.classList.remove(
            "active"
          );

        }
      );


      tab.classList.add(
        "active"
      );


      /* TABLE NAME */

      fraudSchemaTableName.textContent =
        data.name;


      /* TABLE TYPE */

      fraudSchemaTableType.textContent =
        data.type;


      /* KEYS */

      fraudSchemaKeys.innerHTML =
        "";


      data.keys.forEach(
        (key) => {

          const item =
            document.createElement(
              "li"
            );


          item.textContent =
            key;


          fraudSchemaKeys.appendChild(
            item
          );

        }
      );


      /* ATTRIBUTES */

      fraudSchemaAttributes.innerHTML =
        "";


      data.attributes.forEach(
        (attribute) => {

          const item =
            document.createElement(
              "li"
            );


          item.textContent =
            attribute;


          fraudSchemaAttributes.appendChild(
            item
          );

        }
      );


      /* NOTE */

      fraudSchemaNote.textContent =
        data.note;

    }
  );

});



/* PROJECT 02 CASE STUDY TABS */

const fraudCaseStudy =
  document.getElementById("fraudCaseStudy");

const fraudCaseStudyTabs =
  fraudCaseStudy.querySelectorAll(
    ".fraud-case-study-tab"
  );

const fraudCaseStudyPanels =
  fraudCaseStudy.querySelectorAll(
    ".fraud-case-study-panel"
  );


fraudCaseStudyTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    const target =
      tab.dataset.fraudCaseTab;


    fraudCaseStudyTabs.forEach((item) => {

      item.classList.remove("active");

    });


    tab.classList.add("active");


    fraudCaseStudyPanels.forEach((panel) => {

      panel.classList.remove("active");

    });


    const activePanel =
      fraudCaseStudy.querySelector(
        `[data-fraud-case-panel="${target}"]`
      );


    if (activePanel) {

      activePanel.classList.add("active");

    }

  });

});



/*  PROJECT 02 DASHBOARD SLIDER */

const fraudDashboardSlides =
  document.querySelectorAll(
    ".fraud-dashboard-slide"
  );


const fraudDashboardDots =
  document.querySelectorAll(
    ".fraud-dashboard-dot"
  );


const fraudPreviousButton =
  document.querySelector(
    ".fraud-dashboard-prev"
  );


const fraudNextButton =
  document.querySelector(
    ".fraud-dashboard-next"
  );


let fraudCurrentSlide = 0;


/* SHOW SLIDE */

function showFraudSlide(index) {

  if (
    index < 0
  ) {

    fraudCurrentSlide =
      fraudDashboardSlides.length - 1;

  }

  else if (
    index >=
    fraudDashboardSlides.length
  ) {

    fraudCurrentSlide = 0;

  }

  else {

    fraudCurrentSlide =
      index;

  }


  fraudDashboardSlides.forEach(
    (slide) => {

      slide.classList.remove(
        "active"
      );

    }
  );


  fraudDashboardDots.forEach(
    (dot) => {

      dot.classList.remove(
        "active"
      );

    }
  );


  fraudDashboardSlides[
    fraudCurrentSlide
  ].classList.add(
    "active"
  );


  fraudDashboardDots[
    fraudCurrentSlide
  ].classList.add(
    "active"
  );

}


/* NEXT */

if (fraudNextButton) {

  fraudNextButton.addEventListener(
    "click",
    () => {

      showFraudSlide(
        fraudCurrentSlide + 1
      );

    }
  );

}


/* PREVIOUS */

if (fraudPreviousButton) {

  fraudPreviousButton.addEventListener(
    "click",
    () => {

      showFraudSlide(
        fraudCurrentSlide - 1
      );

    }
  );

}


/* DOT NAVIGATION */

fraudDashboardDots.forEach(
  (dot) => {

    dot.addEventListener(
      "click",
      () => {

        const slideIndex =
          Number(
            dot.dataset.fraudSlide
          );


        showFraudSlide(
          slideIndex
        );

      }
    );

  }
);


/* ACADEMIC PROJECT DATA */

const academicProjects = {

  thesis: {

    category: "Natural Language Processing",

    number: "Research #01",

    status: "Completed Research",

    title:
      "A Weighted Ensemble Approach to Semantic Similarity Using TGD",

    description:
      "An undergraduate thesis proposing a weighted ensemble model that integrates TF-IDF, GloVe, and DeBERTa representations to improve semantic textual similarity prediction.",

    methodology:
      "Combines lexical, static semantic, and contextual text representations. Cosine similarity features from TF-IDF, GloVe, and DeBERTa are combined through Ridge Regression to predict semantic similarity.",

    findings: [

      "Integrated lexical, global semantic, and contextual representations within one weighted ensemble approach.",

      "Evaluated the model using the normalized Semantic Textual Similarity Benchmark dataset.",

      "Applied Ridge Regression to learn the weighted contribution of the similarity features."

    ],

    tech: [

      "Python",
      "TF-IDF",
      "GloVe",
      "DeBERTa",
      "Ridge Regression",
      "scikit-learn"

    ],

    buttonText: "Explore Research",

    modal: "thesisCaseStudy"

  },


  autotax: {

    category: "Applied AI & Automation",

    number: "Project #02",

    status: "Working Prototype",

    title:
      "AutoTax AI — Intelligent Tax Compliance Assistant",

    description:
      "An Intelligent Systems course project exploring AI-assisted tax form processing through conversational assistance, document classification, structured data extraction, and automated BIR Form 2316 completion.",

    methodology:
      "Combines AI-assisted interaction with document processing and structured form automation to guide users through selected tax-related workflows.",

    findings: [

      "Designed an AI-assisted conversational interface for user guidance.",

      "Developed automated workflows for structured BIR Form 2316 processing.",

      "Combined document-oriented processing, guided interaction, and automated output generation."

    ],

    tech: [

      "Python",
      "Generative AI",
      "AI Chatbot",
      "API Integration",
      "JavaScript",
      "HTML/CSS",
      "Form Automation",
      "PDF Generation"

    ],

    buttonText: "Explore AutoTax AI",

    modal: "autotaxCaseStudy"

  },


  eyes: {

    category: "Computer Vision & Public Safety",

    number: "Project #03",

    status: "Conceptual Proposal",

    title:
      "Eyes on the Road — AI-Powered Road Monitoring System",

    description:
      "A conceptual Seminars course proposal exploring how AI, computer vision, intelligent monitoring, and connected infrastructure could support road safety and public awareness.",

    methodology:
      "Presents a conceptual framework integrating computer vision, AI-assisted monitoring, connected infrastructure, and proposed public safety response mechanisms.",

    findings: [

      "Designed as a conceptual proposal rather than a deployed production system.",

      "Explores blind-spot monitoring, AI surveillance, night monitoring, malfunction detection, and authority coordination.",

      "Includes a proposed operational framework and conceptual development roadmap."

    ],

    tech: [

      "Computer Vision",
      "AI",
      "IoT",
      "Smart Infrastructure",
      "Public Safety",
      "Concept Design"

    ],

    buttonText: "Explore Concept",

    modal: "eyesCaseStudy"

  }

};


/* ACADEMIC PROJECT SELECTOR */

const academicProjectButtons =
  document.querySelectorAll(".academic-project-item");

const academicDetailCategory =
  document.getElementById("academicDetailCategory");

const academicDetailNumber =
  document.getElementById("academicDetailNumber");

const academicDetailStatus =
  document.getElementById("academicDetailStatus");

const academicDetailTitle =
  document.getElementById("academicDetailTitle");

const academicDetailDescription =
  document.getElementById("academicDetailDescription");

const academicMethodology =
  document.getElementById("academicMethodology");

const academicFindings =
  document.getElementById("academicFindings");

const academicTechTags =
  document.getElementById("academicTechTags");

const academicProjectButton =
  document.getElementById("academicProjectButton");


function updateAcademicProject(projectKey) {

  const project = academicProjects[projectKey];


  /* ACTIVE CARD */

  academicProjectButtons.forEach((button) => {

    button.classList.remove("active");

    button.setAttribute(
      "aria-selected",
      "false"
    );

  });


  const activeButton =
    document.querySelector(
      `[data-academic-project="${projectKey}"]`
    );


  if (activeButton) {

    activeButton.classList.add("active");

    activeButton.setAttribute(
      "aria-selected",
      "true"
    );

  }


  /* TEXT */

  academicDetailCategory.textContent =
    project.category;

  academicDetailNumber.textContent =
    project.number;

  academicDetailStatus.textContent =
    project.status;

  academicDetailTitle.textContent =
    project.title;

  academicDetailDescription.textContent =
    project.description;

  academicMethodology.textContent =
    project.methodology;


  /* FINDINGS */

  academicFindings.innerHTML = "";

  project.findings.forEach((finding) => {

    const item =
      document.createElement("li");

    item.textContent =
      finding;

    academicFindings.appendChild(item);

  });


  /* TECH */

  academicTechTags.innerHTML = "";

  project.tech.forEach((technology) => {

    const tag =
      document.createElement("span");

    tag.textContent =
      technology;

    academicTechTags.appendChild(tag);

  });


  /* BUTTON */

  academicProjectButton.innerHTML = `
    <span>${project.buttonText}</span>
    <span aria-hidden="true">↗</span>
  `;


  academicProjectButton.setAttribute(
    "data-modal-target",
    project.modal
  );

}


/* CLICK PROJECT */

academicProjectButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      const projectKey =
        button.dataset.academicProject;

      updateAcademicProject(projectKey);

    }
  );

});




/* MODAL CLOSE FUNCTION */

function closeAcademicModal(modal) {

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

}


/* CLOSE BUTTONS + BACKDROP */

document
  .querySelectorAll(
    ".academic-modal"
  )
  .forEach((modal) => {


    const closeButtons =
      modal.querySelectorAll(
        "[data-modal-close]"
      );


    closeButtons.forEach((button) => {

      button.addEventListener(
        "click",
        () => {

          closeAcademicModal(modal);

        }
      );

    });

  });


/* ESCAPE KEY */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") return;


    const activeModal =
      document.querySelector(
        ".academic-modal.active"
      );


    if (activeModal) {

      closeAcademicModal(activeModal);

    }

  }
);

/*  THESIS DASHBOARD SLIDER */

const thesisDashboardSlides =
  document.querySelectorAll(
    ".thesis-dashboard-slide"
  );


const thesisDashboardDots =
  document.querySelectorAll(
    ".thesis-dashboard-dot"
  );


const thesisDashboardPrev =
  document.querySelector(
    ".thesis-dashboard-prev"
  );


const thesisDashboardNext =
  document.querySelector(
    ".thesis-dashboard-next"
  );


const thesisCurrentSlideNumber =
  document.getElementById(
    "thesisCurrentSlide"
  );


let currentThesisDashboardSlide = 0;


/* SHOW THESIS SLIDE */

function showThesisDashboardSlide(index) {

  if (
    !thesisDashboardSlides.length
  ) return;


  /* LOOP TO LAST */

  if (index < 0) {

    currentThesisDashboardSlide =
      thesisDashboardSlides.length - 1;

  }


  /* LOOP TO FIRST */

  else if (
    index >= thesisDashboardSlides.length
  ) {

    currentThesisDashboardSlide = 0;

  }


  else {

    currentThesisDashboardSlide =
      index;

  }


  /* UPDATE SLIDES */

  thesisDashboardSlides.forEach(
    (slide) => {

      slide.classList.remove(
        "active"
      );

    }
  );


  thesisDashboardSlides[
    currentThesisDashboardSlide
  ].classList.add(
    "active"
  );


  /* UPDATE DOTS */

  thesisDashboardDots.forEach(
    (dot) => {

      dot.classList.remove(
        "active"
      );

    }
  );


  thesisDashboardDots[
    currentThesisDashboardSlide
  ].classList.add(
    "active"
  );


  /* UPDATE COUNTER */

  if (
    thesisCurrentSlideNumber
  ) {

    thesisCurrentSlideNumber.textContent =
      String(
        currentThesisDashboardSlide + 1
      ).padStart(
        2,
        "0"
      );

  }

}


/* NEXT */

if (
  thesisDashboardNext
) {

  thesisDashboardNext.addEventListener(
    "click",
    () => {

      showThesisDashboardSlide(
        currentThesisDashboardSlide + 1
      );

    }
  );

}


/* PREVIOUS */

if (
  thesisDashboardPrev
) {

  thesisDashboardPrev.addEventListener(
    "click",
    () => {

      showThesisDashboardSlide(
        currentThesisDashboardSlide - 1
      );

    }
  );

}


/* DOT NAVIGATION */

thesisDashboardDots.forEach(
  (dot) => {

    dot.addEventListener(
      "click",
      () => {

        const slideIndex =
          Number(
            dot.dataset.thesisSlide
          );


        showThesisDashboardSlide(
          slideIndex
        );

      }
    );

  }
);


/* THESIS POSTER MODAL */

const thesisPosterOpenButton =
  document.querySelector(
    "[data-thesis-poster-open]"
  );


const thesisPosterModal =
  document.getElementById(
    "thesisPosterModal"
  );


const thesisPosterCloseButtons =
  document.querySelectorAll(
    "[data-thesis-poster-close]"
  );


/* OPEN */

if (
  thesisPosterOpenButton &&
  thesisPosterModal
) {

  thesisPosterOpenButton.addEventListener(
    "click",
    () => {

      thesisPosterModal.classList.add(
        "active"
      );


      thesisPosterModal.setAttribute(
        "aria-hidden",
        "false"
      );


      document.body.style.overflow =
        "hidden";

    }
  );

}


/* CLOSE */

function closeThesisPosterModal() {

  if (!thesisPosterModal) return;


  thesisPosterModal.classList.remove(
    "active"
  );


  thesisPosterModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


thesisPosterCloseButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        closeThesisPosterModal();

      }
    );

  }
);


/* ESCAPE */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      thesisPosterModal &&
      thesisPosterModal.classList.contains(
        "active"
      )
    ) {

      closeThesisPosterModal();

    }

  }
);

