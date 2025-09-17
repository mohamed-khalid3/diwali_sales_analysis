<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diwali Sales Analysis</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    /* Global Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #f5f7fa;
      color: #333;
      line-height: 1.6;
    }

    /* Container */
    .container {
      max-width: 1200px;
      margin: auto;
      padding: 2rem;
    }

    /* Header */
    header {
      text-align: center;
      margin-bottom: 2rem;
    }

    header h1 {
      font-size: 2.2rem;
      font-weight: 700;
      color: #2c3e50;
    }

    header p {
      font-size: 1rem;
      color: #555;
    }

    /* Grid Layout */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    /* Cards */
    .card {
      background: #fff;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
      transition: transform 0.2s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .card p {
      font-size: 0.95rem;
      color: #555;
    }

    /* Footer */
    footer {
      text-align: center;
      margin-top: 3rem;
      font-size: 0.9rem;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>✨ Diwali Sales Analysis Dashboard ✨</h1>
      <p>Insights from customer behavior, demographics, and regional sales during the festive season</p>
    </header>

    <section class="grid">
      <div class="card">
        <h2>📊 Gender Analysis</h2>
        <p>Most buyers were **female**, and their purchasing power was higher than male buyers during Diwali.</p>
      </div>

      <div class="card">
        <h2>👥 Age Group</h2>
        <p>The **26–35 age group** showed the highest contribution to total sales.</p>
      </div>

      <div class="card">
        <h2>🌍 Regional Sales</h2>
        <p>Top sales came from **Uttar Pradesh, Maharashtra, and Karnataka**, highlighting urban festive demand.</p>
      </div>

      <div class="card">
        <h2>🎓 Occupation Insights</h2>
        <p>Working professionals, particularly **IT and Healthcare employees**, spent the most during the festive season.</p>
      </div>

      <div class="card">
        <h2>🏠 Marital Status</h2>
        <p>Married individuals made significantly more purchases compared to unmarried buyers.</p>
      </div>

      <div class="card">
        <h2>🛒 Popular Categories</h2>
        <p>Top-selling categories were **Clothing, Footwear, and Electronics**, driven by festive discounts.</p>
      </div>
    </section>

    <footer>
      <p>© 2025 Diwali Sales Report | Designed for Analysis & Insights</p>
    </footer>
  </div>
</body>
</html>
