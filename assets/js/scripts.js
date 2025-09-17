// app.js
// Loads data/diwali_cleaned.csv and renders charts/table
// Requires: PapaParse (for CSV), Plotly, jQuery & DataTables

const CSV_PATH = 'data/diwali_cleaned.csv'; // create this using the python script below

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
