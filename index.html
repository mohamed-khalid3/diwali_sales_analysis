<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diwali Sales Analytics | Python Data Science Project | Mohamed Khalid</title>
  <meta name="description" content="Professional Python-based Diwali Sales Analysis showcasing advanced data science skills, interactive visualizations, and actionable business insights">
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --secondary: #f59e0b;
      --accent: #10b981;
      --danger: #ef4444;
      --dark: #0f172a;
      --gray-900: #111827;
      --gray-800: #1f2937;
      --gray-700: #374151;
      --gray-600: #4b5563;
      --gray-500: #6b7280;
      --gray-400: #9ca3af;
      --gray-300: #d1d5db;
      --gray-200: #e5e7eb;
      --gray-100: #f3f4f6;
      --gray-50: #f9fafb;
      --white: #ffffff;
      --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      color: var(--gray-800);
      background: var(--gray-50);
      scroll-behavior: smooth;
      overflow-x: hidden;
      transition: background 0.3s ease, color 0.3s ease;
    }

    .dark-mode-toggle { background: none; border: none; font-size: 1.2rem; color: var(--gray-700); cursor: pointer; }

    body.dark-mode {
      background: var(--gray-900);
      color: var(--gray-100);
    }

    body.dark-mode .navbar {
      background: rgba(15, 23, 42, 0.95);
      border-bottom-color: var(--gray-700);
    }

    body.dark-mode .nav-links a {
      color: var(--gray-300);
    }

    body.dark-mode .nav-links a:hover {
      color: var(--primary);
    }

    body.dark-mode .hero {
      background: linear-gradient(135deg, #4a5ef0 0%, #5b3a8a 100%);
    }

    body.dark-mode .hero::before {
      filter: brightness(0.8);
    }

    body.dark-mode .section-title {
      color: var(--white);
    }

    body.dark-mode .section-subtitle {
      color: var(--gray-400);
    }

    body.dark-mode .overview-card {
      background: var(--gray-800);
      border-color: var(--gray-700);
    }

    body.dark-mode .tech-stack {
      background: var(--gray-800);
    }

    body.dark-mode .tech-item {
      background: var(--gray-900);
    }

    body.dark-mode .charts-section {
      background: var(--gray-800);
    }

    body.dark-mode .chart-container {
      background: var(--gray-900);
      border-color: var(--gray-700);
    }

    body.dark-mode .code-preview {
      background: var(--gray-700);
    }

    body.dark-mode .contact-section {
      background: var(--gray-800);
    }

    /* Navigation */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--gray-200);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .nav-brand {
      font-weight: 800;
      font-size: 1.5rem;
      color: var(--primary);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--gray-700);
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after { width: 100%; }
    .nav-links a:hover { color: var(--primary); }

    /* Mobile Navigation */
    .nav-toggle {
      display: none;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: var(--gray-700);
      cursor: pointer;
    }

    .nav-links.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background: var(--white);
      padding: 1rem;
      box-shadow: var(--shadow-md);
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-toggle { display: block; }
      .nav-links.active { display: flex; }
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    }

    .hero-content {
      max-width: 800px;
      padding: 2rem;
      position: relative;
      z-index: 2;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .hero h1 {
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: clamp(1.125rem, 3vw, 1.5rem);
      margin-bottom: 2rem;
      opacity: 0.9;
      font-weight: 400;
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 800;
      color: var(--secondary);
      display: block;
    }

    .stat-label {
      font-size: 0.875rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .btn-primary {
      background: var(--white);
      color: var(--primary);
      box-shadow: var(--shadow-lg);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }

    .btn-outline {
      background: transparent;
      color: var(--white);
      border: 2px solid rgba(255, 255, 255, 0.5);
    }

    .btn-outline:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--white);
    }

    /* Sections */
    section {
      padding: 6rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-badge {
      display: inline-block;
      background: var(--primary);
      color: var(--white);
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      color: var(--gray-900);
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.25rem;
      color: var(--gray-600);
      max-width: 600px;
      margin: 0 auto;
    }

    /* Project Overview */
    .project-overview {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .overview-card {
      background: var(--white);
      padding: 2rem;
      border-radius: 20px;
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--gray-200);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .overview-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-primary);
    }

    .overview-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-xl);
    }

    .overview-icon {
      width: 60px;
      height: 60px;
      background: var(--gradient-primary);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--white);
      margin-bottom: 1rem;
    }

    .overview-card h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--gray-900);
      margin-bottom: 0.5rem;
    }

    .overview-card p {
      color: var(--gray-600);
      line-height: 1.6;
    }

    /* Technology Stack */
    .tech-stack {
      background: var(--white);
      border-radius: 24px;
      padding: 3rem;
      box-shadow: var(--shadow-lg);
      margin: 4rem 0;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .tech-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      background: var(--gray-50);
      border-radius: 16px;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .tech-item:hover {
      background: var(--white);
      border-color: var(--primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .tech-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 12px;
    }

    .tech-icon.python { background: #3776ab; color: white; }
    .tech-icon.pandas { background: #150458; color: white; }
    .tech-icon.numpy { background: #013243; color: white; }
    .tech-icon.matplotlib { background: #11557c; color: white; }
    .tech-icon.seaborn { background: #4c72b0; color: white; }
    .tech-icon.jupyter { background: #f37626; color: white; }

    .tech-info h4 {
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 0.25rem;
    }

    .tech-info p {
      font-size: 0.875rem;
      color: var(--gray-600);
    }

    /* Data Insights */
    .insights-container {
      background: var(--gray-900);
      color: var(--white);
      border-radius: 24px;
      padding: 4rem 3rem;
      margin: 4rem 0;
      position: relative;
      overflow: hidden;
    }

    .insights-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-primary);
      opacity: 0.1;
    }

    .insights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .insight-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 2rem;
      transition: all 0.3s ease;
    }

    .insight-card:hover {
      background: rgba(255, 255, 255, 0.08);
      transform: translateY(-5px);
    }

    .insight-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .insight-icon {
      width: 40px;
      height: 40px;
      background: var(--secondary);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    .insight-card h4 {
      font-weight: 700;
      color: var(--white);
    }

    .insight-value {
      font-size: 2rem;
      font-weight: 800;
      color: var(--secondary);
      margin: 1rem 0;
    }

    .insight-description {
      color: var(--gray-300);
      font-size: 0.875rem;
    }

    /* Charts Section */
    .charts-section {
      background: var(--white);
      border-radius: 24px;
      padding: 4rem 3rem;
      box-shadow: var(--shadow-lg);
      margin: 4rem 0;
    }

    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .chart-container {
      background: var(--gray-50);
      border-radius: 20px;
      padding: 1.5rem;
      border: 2px solid var(--gray-100);
      transition: all 0.3s ease;
      height: 400px;
      display: flex;
      flex-direction: column;
    }

    .chart-container:hover {
      border-color: var(--primary);
      box-shadow: var(--shadow-md);
    }

    .chart-header {
      margin-bottom: 1rem;
      flex-shrink: 0;
    }

    .chart-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--gray-900);
    }

    .chart-wrapper {
      flex: 1;
      position: relative;
      min-height: 0;
    }

    .chart-wrapper canvas {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
    }

    .spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: var(--primary);
    }

    /* Skills Section */
    .skills-section {
      background: var(--gradient-primary);
      color: var(--white);
      border-radius: 24px;
      padding: 4rem 3rem;
      margin: 4rem 0;
    }

    .skills-grid {
      display: grid;
      gap: 2rem;
      margin-top: 3rem;
    }

    .skill-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    .skill-name {
      font-weight: 600;
      font-size: 1.1rem;
    }

    .skill-percentage {
      font-weight: 700;
      font-size: 1.1rem;
    }

    .skill-bar {
      height: 8px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      overflow: hidden;
      margin-top: 0.5rem;
    }

    .skill-fill {
      height: 100%;
      background: var(--secondary);
      border-radius: 4px;
      transition: width 1.5s ease;
      width: 0;
    }

    /* Code Preview */
    .code-preview {
      background: var(--gray-900);
      border-radius: 20px;
      padding: 2rem;
      margin: 4rem 0;
      position: relative;
      overflow: hidden;
    }

    .code-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--gray-700);
    }

    .code-dots {
      display: flex;
      gap: 0.5rem;
    }

    .code-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .code-dot.red { background: #ff5f57; }
    .code-dot.yellow { background: #ffbd2e; }
    .code-dot.green { background: #28ca42; }

    .code-title {
      color: var(--gray-400);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
    }

    .code-content {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
      color: var(--gray-300);
      white-space: pre-wrap;
      line-height: 1.5;
    }

    .code-keyword { color: #ff79c6; }
    .code-function { color: #50fa7b; }
    .code-string { color: #f1fa8c; }
    .code-comment { color: #6272a4; }

    /* Contact Section */
    .contact-section {
      text-align: center;
      background: var(--white);
      border-radius: 24px;
      padding: 4rem 3rem;
      box-shadow: var(--shadow-lg);
      margin: 4rem 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .contact-item {
      padding: 2rem 1rem;
      border-radius: 16px;
      background: var(--gray-50);
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
    }

    .contact-item:hover {
      background: var(--primary);
      color: var(--white);
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .contact-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    /* Footer */
    footer {
      background: var(--gray-900);
      color: var(--gray-400);
      text-align: center;
      padding: 2rem;
      font-size: 0.875rem;
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-in {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-toggle { display: block; }
      .nav-links.active { display: flex; }
      section { padding: 4rem 1rem; }
      .hero-stats { grid-template-columns: repeat(2, 1fr); }
      .charts-grid { 
        grid-template-columns: 1fr; 
        gap: 1.5rem;
      }
      .chart-container {
        height: 350px;
        padding: 1rem;
      }
      .cta-buttons { flex-direction: column; }
      .contact-grid { grid-template-columns: 1fr; }
      .project-overview { grid-template-columns: 1fr; }
      .insights-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 480px) {
      .tech-stack, .insights-container, .charts-section, .skills-section { padding: 2rem 1.5rem; }
      .overview-card { padding: 1.5rem; }
      .chart-container { height: 300px; }
      .hero-stats { grid-template-columns: 1fr 1fr; gap: 1rem; }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <a href="#" class="nav-brand" aria-label="MK Analytics Home">
      <i class="fab fa-python"></i> MK Analytics
    </a>
    <button class="nav-toggle" aria-label="Toggle navigation menu">
      <i class="fas fa-bars"></i>
    </button>
    <button class="dark-mode-toggle" aria-label="Toggle dark mode" onclick="toggleDarkMode()">
      <i class="fas fa-moon"></i>
    </button>
    <ul class="nav-links">
      <li><a href="#overview" aria-label="Project Overview">Project</a></li>
      <li><a href="#insights" aria-label="Key Insights">Insights</a></li>
      <li><a href="#visualizations" aria-label="Visualizations">Charts</a></li>
      <li><a href="#contact" aria-label="Contact Information">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero" role="banner">
    <div class="hero-content">
      <div class="hero-badge">
        <i class="fab fa-python"></i>
        Python Data Science Project
      </div>
      
      <h1>Diwali Sales Analytics</h1>
      <p class="hero-subtitle">
        Comprehensive Python-based analysis revealing actionable insights from festive sales data using advanced data science techniques
      </p>
      
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-number">36</span>
          <span class="stat-label">Records Analyzed</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">₹779K</span>
          <span class="stat-label">Total Revenue</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">9</span>
          <span class="stat-label">States Covered</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">97%</span>
          <span class="stat-label">Auto Category Share</span>
        </div>
      </div>
      
      <div class="cta-buttons">
        <a href="#insights" class="btn btn-primary" role="button" aria-label="View Analysis">
          <i class="fas fa-chart-line"></i>
          View Analysis
        </a>
        <a href="https://github.com/mohamed-khalid3/diwali-sales-analysis" class="btn btn-outline" target="_blank" role="button" aria-label="View Code on GitHub">
          <i class="fab fa-github"></i>
          View Code
        </a>
      </div>
    </div>
  </section>

  <!-- Project Overview -->
  <section id="overview">
    <div class="section-header">
      <div class="section-badge">Project Overview</div>
      <h2 class="section-title">Advanced Python Data Analytics</h2>
      <p class="section-subtitle">
        End-to-end data science project demonstrating proficiency in Python ecosystem, statistical analysis, and business intelligence
      </p>
    </div>

    <div class="project-overview">
      <div class="overview-card">
        <div class="overview-icon">
          <i class="fas fa-database"></i>
        </div>
        <h3>Data Engineering</h3>
        <p>Comprehensive data cleaning and preprocessing using Pandas, handling missing values, data type optimization, and feature engineering for analysis-ready datasets.</p>
      </div>

      <div class="overview-card">
        <div class="overview-icon">
          <i class="fas fa-chart-bar"></i>
        </div>
        <h3>Statistical Analysis</h3>
        <p>Advanced exploratory data analysis with statistical measures, correlation analysis, and hypothesis testing to uncover meaningful patterns and trends.</p>
      </div>

      <div class="overview-card">
        <div class="overview-icon">
          <i class="fas fa-brain"></i>
        </div>
        <h3>Business Intelligence</h3>
        <p>Translation of complex data findings into actionable business recommendations with ROI projections and strategic implementation roadmaps.</p>
      </div>
    </div>
  </section>

  <!-- Technology Stack -->
  <section class="tech-stack">
    <div class="section-header">
      <div class="section-badge">Technology Stack</div>
      <h2 class="section-title">Python Data Science Ecosystem</h2>
      <p class="section-subtitle">
        Leveraging industry-standard libraries and frameworks for professional data analysis
      </p>
    </div>

    <div class="tech-grid">
      <div class="tech-item">
        <div class="tech-icon python">
          <i class="fab fa-python"></i>
        </div>
        <div class="tech-info">
          <h4>Python 3.9+</h4>
          <p>Core programming language with advanced features</p>
        </div>
      </div>

      <div class="tech-item">
        <div class="tech-icon pandas">
          <i class="fas fa-table"></i>
        </div>
        <div class="tech-info">
          <h4>Pandas</h4>
          <p>Data manipulation and analysis library</p>
        </div>
      </div>

      <div class="tech-item">
        <div class="tech-icon numpy">
          <i class="fas fa-square-root-alt"></i>
        </div>
        <div class="tech-info">
          <h4>NumPy</h4>
          <p>Numerical computing and array operations</p>
        </div>
      </div>

      <div class="tech-item">
        <div class="tech-icon matplotlib">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="tech-info">
          <h4>Matplotlib</h4>
          <p>Comprehensive plotting and visualization</p>
        </div>
      </div>

      <div class="tech-item">
        <div class="tech-icon seaborn">
          <i class="fas fa-palette"></i>
        </div>
        <div class="tech-info">
          <h4>Seaborn</h4>
          <p>Statistical data visualization</p>
        </div>
      </div>

      <div class="tech-item">
        <div class="tech-icon jupyter">
          <i class="fas fa-code"></i>
        </div>
        <div class="tech-info">
          <h4>Jupyter Notebook</h4>
          <p>Interactive development environment</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Insights -->
  <section id="insights" class="insights-container">
    <div class="section-header">
      <div class="section-badge" style="background: var(--secondary);">Key Findings</div>
      <h2 class="section-title" style="color: var(--white);">Data-Driven Insights</h2>
      <p class="section-subtitle" style="color: var(--gray-300);">
        Strategic business intelligence extracted through advanced Python analytics
      </p>
    </div>

    <div class="insights-grid">
      <div class="insight-card">
        <div class="insight-header">
          <div class="insight-icon">
            <i class="fas fa-users"></i>
          </div>
          <h4>Age Group Analysis</h4>
        </div>
        <div class="insight-value">46%</div>
        <p class="insight-description">
          26-35 age group represents highest revenue segment (₹355,177), ideal demographic for premium product positioning
        </p>
      </div>

      <div class="insight-card">
        <div class="insight-header">
          <div class="insight-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h4>Geographic Performance</h4>
        </div>
        <div class="insight-value">48%</div>
        <p class="insight-description">
          Andhra Pradesh leads with ₹377,022 revenue, indicating strong regional market penetration and growth potential
        </p>
      </div>

      <div class="insight-card">
        <div class="insight-header">
          <div class="insight-icon">
            <i class="fas fa-briefcase"></i>
          </div>
          <h4>Professional Segments</h4>
        </div>
        <div class="insight-value">18%</div>
        <p class="insight-description">
          Government sector professionals show highest individual spending (₹141,672), valuable for B2B partnerships
        </p>
      </div>

      <div class="insight-card">
        <div class="insight-header">
          <div class="insight-icon">
            <i class="fas fa-globe-americas"></i>
          </div>
          <h4>Regional Zones</h4>
        </div>
        <div class="insight-value">60%</div>
        <p class="insight-description">
          Southern zone dominates with ₹471,346 revenue, representing strategic market concentration and expansion opportunity
        </p>
      </div>

      <div class="insight-card">
        <div class="insight-header">
          <div class="insight-icon">
            <i class="fas fa-car"></i>
          </div>
          <h4>Product Category Dominance</h4>
        </div>
        <div class="insight-value">97%</div>
        <p class="insight-description">
          Auto products drive overwhelming market share with ₹755,567 in revenue, indicating strong category focus and customer preference
        </p>
      </div>

      <div class="insight-card">
        <div class="insight-header">
          <div class="insight-icon">
            <i class="fas fa-venus"></i>
          </div>
          <h4>Gender Demographics</h4>
        </div>
        <div class="insight-value">64%</div>
        <p class="insight-description">
          Female customers contribute majority of sales (₹495,389), presenting targeted marketing opportunities for gender-specific campaigns
        </p>
      </div>
    </div>
  </section>

  <!-- Visualizations -->
  <section id="visualizations" class="charts-section">
    <div class="section-header">
      <div class="section-badge">Interactive Visualizations</div>
      <h2 class="section-title">Advanced Data Visualizations</h2>
      <p class="section-subtitle">
        Professional charts and graphs built with Chart.js and Python Matplotlib/Seaborn for comprehensive data storytelling
      </p>
    </div>

    <div class="charts-grid">
      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">Revenue by Product Category</h3>
        </div>
        <div class="chart-wrapper">
          <div class="spinner"><i class="fas fa-spinner fa-spin"></i></div>
          <canvas id="categoryChart" style="display: none;"></canvas>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">Geographic Distribution</h3>
          <select id="stateFilter" onchange="updateStateChart()" aria-label="Filter states">
            <option value="all">All States</option>
            <option value="top3">Top 3 States</option>
          </select>
        </div>
        <div class="chart-wrapper">
          <div class="spinner"><i class="fas fa-spinner fa-spin"></i></div>
          <canvas id="stateChart" style="display: none;"></canvas>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">Customer Demographics</h3>
        </div>
        <div class="chart-wrapper">
          <div class="spinner"><i class="fas fa-spinner fa-spin"></i></div>
          <canvas id="genderChart" style="display: none;"></canvas>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">Age Group Analysis</h3>
        </div>
        <div class="chart-wrapper">
          <div class="spinner"><i class="fas fa-spinner fa-spin"></i></div>
          <canvas id="ageChart" style="display: none;"></canvas>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">Professional Segments</h3>
        </div>
        <div class="chart-wrapper">
          <div class="spinner"><i class="fas fa-spinner fa-spin"></i></div>
          <canvas id="occupationChart" style="display: none;"></canvas>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3 class="chart-title">Regional Performance</h3>
        </div>
        <div class="chart-wrapper">
          <div class="spinner"><i class="fas fa-spinner fa-spin"></i></div>
          <canvas id="zoneChart" style="display: none;"></canvas>
        </div>
      </div>
    </div>
  </section>

  <!-- Code Preview -->
  <section class="code-preview">
    <div class="code-header">
      <div class="code-dots">
        <div class="code-dot red"></div>
        <div class="code-dot yellow"></div>
        <div class="code-dot green"></div>
      </div>
      <div class="code-title">diwali_sales_analysis.py</div>
    </div>
    <div class="code-content">
<span class="code-comment"># Diwali Sales Data Analysis</span>
<span class="code-keyword">import</span> <span class="code-function">pandas</span> <span class="code-keyword">as</span> pd
<span class="code-keyword">import</span> <span class="code-function">numpy</span> <span class="code-keyword">as</span> np
<span class="code-keyword">import</span> <span class="code-function">matplotlib.pyplot</span> <span class="code-keyword">as</span> plt
<span class="code-keyword">import</span> <span class="code-function">seaborn</span> <span class="code-keyword">as</span> sns

<span class="code-comment"># Load and clean data</span>
df = pd.<span class="code-function">read_csv</span>(<span class="code-string">'Diwali Sales Data.csv'</span>)
df.<span class="code-function">dropna</span>(subset=[<span class="code-string">'Amount'</span>], inplace=<span class="code-keyword">True</span>)

<span class="code-comment"># Advanced analysis - Revenue by category</span>
category_analysis = df.<span class="code-function">groupby</span>(<span class="code-string">'Product_Category'</span>)[<span class="code-string">'Amount'</span>].<span class="code-function">sum</span>().<span class="code-function">sort_values</span>(ascending=<span class="code-keyword">False</span>)

<span class="code-comment"># Statistical insights</span>
print(<span class="code-string">f"Total Revenue: ₹{df['Amount'].sum():,.2f}"</span>)
print(<span class="code-string">f"Average Order Value: ₹{df['Amount'].mean():,.2f}"</span>)
    </div>
  </section>

  <!-- Skills Section -->
  <section class="skills-section">
    <div class="section-header">
      <div class="section-badge" style="background: var(--secondary);">Technical Proficiency</div>
      <h2 class="section-title" style="color: var(--white);">Data Science Expertise</h2>
      <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">
        Demonstrated proficiency levels in cutting-edge data science technologies and methodologies
      </p>
    </div>

    <div class="skills-grid">
      <div class="skill-item">
        <span class="skill-name">Python Programming & Libraries</span>
        <span class="skill-percentage">95%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-width="95%"></div>
      </div>

      <div class="skill-item">
        <span class="skill-name">Data Analysis & Pandas</span>
        <span class="skill-percentage">92%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-width="92%"></div>
      </div>

      <div class="skill-item">
        <span class="skill-name">Data Visualization (Matplotlib, Seaborn)</span>
        <span class="skill-percentage">90%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-width="90%"></div>
      </div>

      <div class="skill-item">
        <span class="skill-name">Statistical Analysis & NumPy</span>
        <span class="skill-percentage">88%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-width="88%"></div>
      </div>

      <div class="skill-item">
        <span class="skill-name">Business Intelligence & Insights</span>
        <span class="skill-percentage">94%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-width="94%"></div>
      </div>

      <div class="skill-item">
        <span class="skill-name">Data Cleaning & Preprocessing</span>
        <span class="skill-percentage">96%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-width="96%"></div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="section-header">
      <div class="section-badge">Get In Touch</div>
      <h2 class="section-title">Let's Collaborate</h2>
      <p class="section-subtitle">
        Ready to leverage data science for your next project? Let's discuss how we can work together to unlock insights from your data
      </p>
    </div>

    <div class="contact-grid">
      <a href="mailto:khannihad1@gmail.com" class="contact-item" aria-label="Email Mohamed Khalid">
        <div class="contact-icon">
          <i class="fas fa-envelope"></i>
        </div>
        <h4>Email</h4>
        <p>khannihad1@gmail.com</p>
      </a>

      <a href="https://linkedin.com/in/mohamed-khalid-data" class="contact-item" target="_blank" aria-label="Connect on LinkedIn">
        <div class="contact-icon">
          <i class="fab fa-linkedin"></i>
        </div>
        <h4>LinkedIn</h4>
        <p>Professional Network</p>
      </a>

      <a href="https://github.com/mohamed-khalid3" class="contact-item" target="_blank" aria-label="View GitHub Profile">
        <div class="contact-icon">
          <i class="fab fa-github"></i>
        </div>
        <h4>GitHub</h4>
        <p>Code Repository</p>
      </a>

      <a href="https://mohamed-khalid3.github.io/portfolio/" class="contact-item" target="_blank" aria-label="Visit Portfolio">
        <div class="contact-icon">
          <i class="fas fa-globe"></i>
        </div>
        <h4>Portfolio</h4>
        <p>More Projects</p>
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer role="contentinfo">
    <p>&copy; 2024 Mohamed Khalid | Data Science Portfolio | Built with Python & Modern Web Technologies</p>
  </footer>

  <!-- Chart.js with Lazy Loading -->
  <script>
    // Global variable for stateChart
    let stateChart = null;

    // Color palette (used in updateStateChart)
    const colors = {
      primary: '#2563eb',
      secondary: '#f59e0b',
      success: '#10b981',
      danger: '#ef4444',
      purple: '#8b5cf6',
      pink: '#ec4899',
      gradient: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe']
    };

    // Chart configuration (used in updateStateChart)
    const chartConfig = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            usePointStyle: true,
            font: { size: 11, weight: '500' }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#f1f5f9',
          bodyColor: '#f1f5f9',
          borderColor: '#2563eb',
          borderWidth: 1,
          cornerRadius: 8,
          padding: 12,
          callbacks: {
            label: function(context) {
              const value = typeof context.parsed === 'object' ? context.parsed.y || context.parsed : context.parsed;
              return `${context.label}: ₹${value.toLocaleString('en-IN')}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#e5e7eb', drawBorder: false },
          ticks: {
            color: '#6b7280',
            font: { size: 10 },
            callback: function(value) {
              return '₹' + (value >= 100000 ? (value/100000).toFixed(0) + 'L' : (value/1000).toFixed(0) + 'K');
            }
          }
        },
        x: {
          grid: { display: false },
          ticks: { 
            color: '#6b7280',
            font: { size: 10 },
            maxRotation: 45
          }
        }
      }
    };

    // Geographic Distribution Chart with Filter
    function updateStateChart() {
      if (!window.Chart) {
        console.warn('Chart.js not loaded yet. Chart will be updated once loaded.');
        return;
      }
      const filter = document.getElementById('stateFilter').value;
      const labels = ['Andhra Pradesh', 'Uttar Pradesh', 'Karnataka', 'Maharashtra', 'Delhi', 'Gujarat'];
      const data = [377021.99, 189206, 47425, 47258, 47051, 23877];
      let filteredLabels = labels;
      let filteredData = data;
      if (filter === 'top3') {
        const sortedData = data.map((d, i) => ({ value: d, index: i })).sort((a, b) => b.value - a.value).slice(0, 3);
        filteredLabels = sortedData.map(d => labels[d.index]);
        filteredData = sortedData.map(d => d.value);
      }
      if (stateChart) stateChart.destroy();
      const ctxState = document.getElementById('stateChart').getContext('2d');
      const spinnerState = document.querySelector('.chart-container:nth-child(2) .spinner');
      const canvasState = document.getElementById('stateChart');
      stateChart = new Chart(ctxState, {
        type: 'bar',
        data: {
          labels: filteredLabels,
          datasets: [{
            label: 'Revenue',
            data: filteredData,
            backgroundColor: colors.gradient.slice(0, 6),
            borderRadius: 8,
            borderSkipped: false
          }]
        },
        options: {
          ...chartConfig,
          scales: {
            ...chartConfig.scales,
            x: {
              ...chartConfig.scales.x,
              ticks: { ...chartConfig.scales.x.ticks, maxRotation: 45 }
            }
          },
          animation: {
            onComplete: () => {
              spinnerState.style.display = 'none';
              canvasState.style.display = 'block';
            }
          }
        }
      });
    }

    // Lazy load Chart.js
    function loadChartJs() {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.async = true;
      script.onload = () => initializeCharts();
      document.body.appendChild(script);
    }

    // Initialize charts after Chart.js is loaded
    function initializeCharts() {
      // Dynamic Date
      const footer = document.querySelector('footer p');
      const currentYear = new Date().getFullYear();
      footer.textContent = `© ${currentYear} Mohamed Khalid | Data Science Portfolio | Built with Python & Modern Web Technologies`;

      // Modern chart configuration
      Chart.defaults.font.family = 'Inter';
      Chart.defaults.color = '#374151';

      // Product Category Chart
      const ctxCategory = document.getElementById('categoryChart').getContext('2d');
      const spinnerCategory = document.querySelector('.chart-container:nth-child(1) .spinner');
      const canvasCategory = document.getElementById('categoryChart');
      new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
          labels: ['Automotive Products', 'Hand & Power Tools'],
          datasets: [{
            data: [755566.99, 23434],
            backgroundColor: [colors.primary, colors.secondary],
            borderWidth: 0,
            hoverOffset: 10
          }]
        },
        options: {
          ...chartConfig,
          cutout: '60%',
          plugins: {
            ...chartConfig.plugins,
            tooltip: {
              ...chartConfig.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((context.parsed / total) * 100).toFixed(1);
                  return `${context.label}: ₹${context.parsed.toLocaleString('en-IN')} (${percentage}%)`;
                }
              }
            }
          },
          animation: {
            onComplete: () => {
              spinnerCategory.style.display = 'none';
              canvasCategory.style.display = 'block';
            }
          }
        }
      });

      // Call updateStateChart to initialize the state chart
      updateStateChart();

      // Gender Demographics Chart
      const ctxGender = document.getElementById('genderChart').getContext('2d');
      const spinnerGender = document.querySelector('.chart-container:nth-child(3) .spinner');
      const canvasGender = document.getElementById('genderChart');
      new Chart(ctxGender, {
        type: 'pie',
        data: {
          labels: ['Female', 'Male'],
          datasets: [{
            data: [495388.99, 283612],
            backgroundColor: [colors.pink, colors.primary],
            borderWidth: 0,
            hoverOffset: 8
          }]
        },
        options: {
          ...chartConfig,
          plugins: {
            ...chartConfig.plugins,
            tooltip: {
              ...chartConfig.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((context.parsed / total) * 100).toFixed(1);
                  return `${context.label}: ₹${context.parsed.toLocaleString('en-IN')} (${percentage}%)`;
                }
              }
            }
          },
          animation: {
            onComplete: () => {
              spinnerGender.style.display = 'none';
              canvasGender.style.display = 'block';
            }
          }
        }
      });

      // Age Group Analysis Chart
      const ctxAge = document.getElementById('ageChart').getContext('2d');
      const spinnerAge = document.querySelector('.chart-container:nth-child(4) .spinner');
      const canvasAge = document.getElementById('ageChart');
      new Chart(ctxAge, {
        type: 'bar',
        data: {
          labels: ['18-25', '26-35', '36-45', '46-50', '51-55', '55+'],
          datasets: [{
            label: 'Revenue',
            data: [188630, 355176.99, 70159, 23525, 94085, 23513],
            backgroundColor: colors.success,
            borderRadius: 6,
            borderSkipped: false
          }]
        },
        options: {
          ...chartConfig,
          animation: {
            onComplete: () => {
              spinnerAge.style.display = 'none';
              canvasAge.style.display = 'block';
            }
          }
        }
      });

      // Professional Segments Chart
      const ctxOccupation = document.getElementById('occupationChart').getContext('2d');
      const spinnerOccupation = document.querySelector('.chart-container:nth-child(5) .spinner');
      const canvasOccupation = document.getElementById('occupationChart');
      new Chart(ctxOccupation, {
        type: 'bar',
        data: {
          labels: ['Government', 'Automobile', 'IT Sector', 'Banking', 'Food Processing', 'Hospitality', 'Media', 'Aviation'],
          datasets: [{
            label: 'Revenue',
            data: [141672, 117984, 117904, 94202, 71080, 70733, 70387, 70373],
            backgroundColor: colors.purple,
            borderRadius: 4,
            borderSkipped: false
          }]
        },
        options: {
          ...chartConfig,
          scales: {
            ...chartConfig.scales,
            x: {
              ...chartConfig.scales.x,
              ticks: {
                ...chartConfig.scales.x.ticks,
                maxRotation: 45,
                minRotation: 25
              }
            }
          },
          animation: {
            onComplete: () => {
              spinnerOccupation.style.display = 'none';
              canvasOccupation.style.display = 'block';
            }
          }
        }
      });

      // Regional Performance Chart
      const ctxZone = document.getElementById('zoneChart').getContext('2d');
      const spinnerZone = document.querySelector('.chart-container:nth-child(6) .spinner');
      const canvasZone = document.getElementById('zoneChart');
      new Chart(ctxZone, {
        type: 'doughnut',
        data: {
          labels: ['Southern', 'Central', 'Western', 'Northern', 'Eastern'],
          datasets: [{
            data: [471346.14, 259854.15, 94732.15, 23877, 23285],
            backgroundColor: colors.gradient,
            borderWidth: 0,
            hoverOffset: 12
          }]
        },
        options: {
          ...chartConfig,
          cutout: '50%',
          plugins: {
            ...chartConfig.plugins,
            tooltip: {
              ...chartConfig.plugins.tooltip,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((context.parsed / total) * 100).toFixed(1);
                  return `${context.label}: ₹${context.parsed.toLocaleString('en-IN')} (${percentage}%)`;
                }
              }
            }
          },
          animation: {
            onComplete: () => {
              spinnerZone.style.display = 'none';
              canvasZone.style.display = 'block';
            }
          }
        }
      });
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          navLinks.classList.remove('active');
        }
      });
    });

    // Animate skill bars on scroll
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillFills = entry.target.querySelectorAll('.skill-fill');
          skillFills.forEach((fill, index) => {
            setTimeout(() => {
              fill.style.width = fill.dataset.width;
            }, index * 200);
          });
        }
      });
    }, { threshold: 0.5 });
    skillObserver.observe(document.querySelector('.skills-section'));

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
      }
    });

    // Animate elements on scroll
    const animateObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.overview-card, .insight-card, .chart-container').forEach(el => {
      animateObserver.observe(el);
    });

    // Dark Mode Toggle
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark-mode');

    // Load Chart.js when visualizations section is visible
    const chartObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadChartJs();
        chartObserver.disconnect();
      }
    }, { threshold: 0.1 });
    chartObserver.observe(document.getElementById('visualizations'));
  </script>
</body>
</html>
