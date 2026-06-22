// Single source of truth for all portfolio content.
// Edit here to update the site — components read from this file.

export const profile = {
  name: "Bui Duc Phat",
  role: "Data Analyst",
  focus: "Supply Chain & Logistics",
  location: "Ho Chi Minh City, Vietnam",
  email: "buiducphat20@gmail.com",
  phone: "0362240128",
  github: "https://github.com/BuiDucPhat12",
  linkedin: "https://www.linkedin.com/in/phatbui20017",
  tagline:
    "I turn raw SAP and warehouse data into pipelines, models, and decision tools that supply-chain teams actually use.",
  intro:
    "Data Analyst with a Logistics & Supply Chain background and 2 years of hands-on experience across retail, aviation, and industrial manufacturing. I build the full path — from SAP extracts and source-to-target mappings, through tested dbt models, to interactive cockpits and forecasting — not just dashboards.",
};

export const heroMetrics = [
  { value: "73/73", label: "dbt build PASS", hint: "17 staging · 21 intermediate · 5 marts" },
  { value: "5–10×", label: "query speedup", hint: "Oracle DWH → AWS Iceberg lakehouse" },
  { value: "~8%", label: "manual time cut", hint: "automated reporting at Bosch" },
  { value: "2 yrs", label: "analytics & DE", hint: "3 companies · 3 domains" },
];

export const projects = [
  {
    id: "supplypulse",
    featured: true,
    name: "SupplyPulse",
    kicker: "Real-Time Supply-Chain Intelligence Platform",
    year: "2026",
    blurb:
      "An end-to-end supply-chain shortage cockpit built on a realistic SAP ECC data model. Synthetic SE16 extracts flow through a Postgres warehouse, get transformed by a 43-model dbt project encoding real material-planning logic, and surface in a Streamlit cockpit answering one question: which materials will run out before a new order could possibly arrive?",
    highlights: [
      "Medallion pipeline: 19-table synthetic SE16 generator → bronze loader → dbt build (73 resources) → Streamlit cockpit.",
      "Models encode planner logic, not textbook schemas: 120-day inventory simulation, transit-time-window shortage detection, working-day calendars, vendor OTD via SAP document flow.",
      "29 dbt tests + 74 pytest tests guard FK integrity and data-realism properties — dbt build is 73/73 PASS.",
      "Orchestrated daily by Airflow; CI on GitHub Actions runs the full generate → load → dbt build chain against Postgres on every push.",
    ],
    stack: ["Postgres", "dbt", "Airflow", "Python", "Streamlit", "Plotly", "Docker", "GitHub Actions", "uv"],
    metrics: [
      { value: "73/73", label: "dbt PASS" },
      { value: "896", label: "material/plant combos" },
      { value: "~108k", label: "simulation rows" },
      { value: "103", label: "tests (dbt + pytest)" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/BuiDucPhat12/supplypulse" },
      { label: "dbt docs", href: "https://buiducphat12.github.io/supplypulse/" },
    ],
    cover: "/projects/overview.png",
    gallery: [
      { src: "/projects/demo.gif", caption: "Cockpit walkthrough — shortage overview to simulation" },
      { src: "/projects/simulation.png", caption: "120-day daily inventory projection per material/plant" },
      { src: "/projects/vendors.png", caption: "Vendor on-time-delivery vs transit time" },
      { src: "/projects/architecture.png", caption: "Architecture — SAP source → Postgres → dbt → cockpit" },
    ],
  },
  {
    id: "notebooklm-rag",
    featured: true,
    name: "NotebookLM mini — RAG Learning System",
    kicker: "Retrieval-Augmented Generation · Vietnamese",
    year: "2026",
    blurb:
      "A build-from-scratch RAG system over personal study PDFs: grounded Q&A with source citations, plus map-reduce summaries, auto-generated quizzes and flashcards — answers stay tied to the documents to curb hallucination. Vietnamese embeddings end to end.",
    highlights: [
      "Full RAG pipeline hand-built on LangChain primitives: PDF → recursive chunk → Vietnamese embeddings (GreenNode, 1024-d) → Qdrant → cited answers with [S1]/[S2] markers.",
      "Learning features: map-reduce summarization, quiz & flashcard generation with Pydantic-validated JSON output and dedup.",
      "Chunking experiment (recursive configs) with retrieval metrics; idempotent ingestion via uuid5; grounded fallback when context is missing.",
      "Two interfaces — Typer CLI and Streamlit UI; 14 unit tests across chunking, filters, citations and learning.",
    ],
    stack: ["Python", "LangChain", "Qdrant", "Gemini", "Streamlit", "Typer", "uv", "pytest"],
    metrics: [
      { value: "4", label: "learning modes" },
      { value: "14", label: "tests pass" },
      { value: "1024-d", label: "VN embeddings" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/BuiDucPhat12/notebooklm-mini-rag" },
    ],
    cover: "/projects/nlm-qa.png",
    gallery: [
      { src: "/projects/nlm-qa.png", caption: "Hỏi-đáp có trích dẫn nguồn (S1/S2 · file · trang)" },
      { src: "/projects/nlm-home.png", caption: "Giao diện Streamlit — quản lý tài liệu + chọn phạm vi" },
      { src: "/projects/nlm-arch.svg", caption: "Kiến trúc RAG: ingest → Qdrant → answer + citations" },
    ],
  },
  {
    id: "agentic-rag-legal",
    featured: true,
    name: "Agentic RAG — Vietnamese Legal QA",
    kicker: "Agentic RAG · Graph Retrieval",
    year: "2026",
    blurb:
      "An agentic RAG over Vietnamese legal documents: an LLM (tool-calling) picks the right retrieval strategy per question — including graph traversal over real document relationships (amends / references / supersedes) — then answers with citations. Served through a Gradio UI and benchmarked against objective ground truth.",
    highlights: [
      "Agent layer: Gemini tool-calling agent reasons over four retrieval tools (dense, BM25, hybrid, graph) and auto-selects the strategy — e.g. routes relational questions to graph traversal — then generates a cited answer.",
      "Three indexes from a HuggingFace legal corpus: ChromaDB (BGE-M3), BM25 with Vietnamese word segmentation, and a NetworkX relationship graph; plus a Gradio query UI.",
      "Benchmarked on objective ground truth from the relationships table — graph traversal wins on relational queries (Recall@5 0.43, NDCG@10 0.43).",
      "Engineering: solved >2GB Arrow large_string casting via feature override + streaming; relationship-aware sampling for a fully-connected graph.",
    ],
    stack: ["Python", "LangChain", "Gemini", "ChromaDB", "BM25", "NetworkX", "BGE-M3", "Gradio"],
    metrics: [
      { value: "4", label: "retrieval tools (agent picks)" },
      { value: "Graph", label: "best on relational Qs" },
      { value: "R@5 0.43", label: "top strategy" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/BuiDucPhat12/agentic-rag-legal-vn" },
    ],
    cover: "/projects/arag-ui.png",
    gallery: [
      { src: "/projects/arag-ui.png", caption: "Agent tự chọn chiến lược (graph) + trả lời có dẫn nguồn" },
      { src: "/projects/arag-arch.svg", caption: "Kiến trúc: ingest → Chroma/BM25/Graph → 5 chiến lược" },
      { src: "/projects/arag-home.png", caption: "Gradio UI — chọn chiến lược Agent/dense/bm25/hybrid/graph" },
    ],
  },
  {
    id: "lakehouse",
    name: "Oracle DWH → AWS Iceberg Lakehouse",
    kicker: "Data Engineering · FSS JSC",
    year: "2025",
    blurb:
      "Designed source-to-target mappings migrating an Oracle data warehouse to an AWS Iceberg lakehouse, and built the ingestion + transformation pipelines for the new architecture.",
    highlights: [
      "Authored source-to-target mappings and supported schema / partition design for the lakehouse.",
      "Built 3 consolidated summary tables (Year / Month / Week) that boosted analytics query performance 5–10×.",
      "Drove data-quality validation across the migration.",
    ],
    stack: ["Oracle", "AWS", "Apache Iceberg", "SQL", "Python", "ETL"],
    metrics: [
      { value: "5–10×", label: "query speedup" },
      { value: "3", label: "summary marts" },
    ],
    links: [],
  },
  {
    id: "predictive-maintenance",
    name: "Predictive Maintenance — Semiconductors",
    kicker: "Machine Learning",
    year: "2024",
    blurb:
      "Benchmarked six classification models for equipment-failure prediction on semiconductor sensor data, running the full ML pipeline from preprocessing to evaluation.",
    highlights: [
      "Compared Decision Trees, Naive Bayes, k-NN, Logistic Regression, ANN and SVM for failure prediction.",
      "Built the complete pipeline: preprocessing, feature handling, training, and model evaluation.",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    metrics: [
      { value: "6", label: "models benchmarked" },
    ],
    links: [],
  },
];

export const skillGroups = [
  {
    title: "Languages & Databases",
    items: ["SQL — PostgreSQL", "Oracle", "SQL Server", "Python", "Pandas / NumPy", "PySpark", "VBA"],
  },
  {
    title: "Data Engineering",
    items: ["dbt", "Apache Iceberg", "AWS Lakehouse", "ETL pipelines", "Airflow", "Docker", "Git", "GitHub Actions"],
  },
  {
    title: "BI & Visualization",
    items: ["Power BI", "Sisense", "Tableau", "DAX", "Streamlit", "Plotly", "Excel / Power Query"],
  },
  {
    title: "Enterprise & ML",
    items: ["SAP SE16 (SD + MM)", "Classification (DT, kNN, SVM, ANN)", "Time-series (Prophet, LightGBM)", "Great Expectations"],
  },
];

export const experience = [
  {
    company: "Robert Bosch",
    role: "Supply Chain Analyst Intern",
    period: "Jan 2026 – Present",
    location: "HCMC",
    points: [
      "Extract and analyze operational data from SAP SE16 (SD & MM modules), turning raw SAP tables into supply-chain KPIs — lead time, On-Time Delivery, inventory health — for Planning and Procurement.",
      "Designed an inventory simulation dashboard in Power BI for what-if scenarios on stock levels, reorder points, and safety-stock policies, replacing manual Excel modeling.",
      "Automated recurring reporting and data-refresh workflows, cutting the team's manual working time by ~8%.",
    ],
  },
  {
    company: "Financial Software Solutions (FSS JSC)",
    role: "Data Engineer Intern",
    period: "Aug 2025 – Dec 2025",
    location: "HCMC",
    points: [
      "Designed source-to-target mappings from Oracle DWH to AWS Iceberg lakehouse and built ingestion + transformation pipelines.",
      "Created 3 consolidated summary tables boosting analytics query performance 5–10×; supported schema/partition design and data-quality validation.",
    ],
  },
  {
    company: "Workforce Optimizer (WFO)",
    role: "Associate Technical AI & Optimization Analyst",
    period: "Sep 2024 – Jul 2025",
    location: "HCMC",
    points: [
      "Built and maintained interactive dashboards (Power BI, Sisense, SQL Server, VBA) monitoring operational KPIs for Changi Airport, HDS, and DFI Retail Group.",
      "Developed automated Python test suites validating API responses, data flows, and business rules across SaaS deployments.",
      "Promoted from Intern to Associate after delivering key client projects.",
    ],
  },
];

export const education = {
  school: "International University — VNU HCMC",
  degree: "B.Sc. Logistics and Supply Chain Management",
  period: "Oct 2021 – 2026",
  note: "English-medium program",
};

export const certifications = [
  "SQL (Intermediate) — HackerRank",
  "SQL · Power BI · Python · Machine Learning — DataCamp",
  "AIO-2025 — AI Vietnam",
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
