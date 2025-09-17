# 🪔 Diwali Sales Analytics | Python Data Science Project

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=for-the-badge&logo=python&logoColor=white)
![Seaborn](https://img.shields.io/badge/Seaborn-4c72b0?style=for-the-badge&logo=python&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)

**Comprehensive Python-based analysis revealing actionable insights from festive sales data using advanced data science techniques**

[📊 Main Portfolio](https://mohamed-khalid3.github.io/portfolio/) • [📈 View Analysis](https://github.com/mohamed-khalid3/diwali_sales_analysis/blob/main/Diwali_Sales_Analysis.ipynb) • [📋 Dataset](https://github.com/mohamed-khalid3/diwali_sales_analysis/blob/main/Diwali%20Sales%20Data.csv) • [🌐 Live Website](https://mohamed-khalid3.github.io/diwali_sales_analysis/)

</div>

---

## 🎯 Project Overview

This Python project analyzes Diwali sales data to uncover insights that enhance customer experience and boost sales. Leveraging Python's data science ecosystem (Pandas, NumPy, Matplotlib, Seaborn), we explore customer demographics, purchasing behavior, and product preferences during the Diwali festival. The analysis transforms raw sales data into actionable business intelligence, identifying key buyer segments, top-performing states, occupations, and product categories.

Watch the complete tutorial video: [Diwali Sales Analysis Tutorial](https://www.youtube.com/watch?v=KgCgpCIOkIs)

### 📊 Key Metrics
- **36 Records** analyzed across multiple dimensions
- **₹779,000+** total revenue processed
- **9 States** geographic coverage
- **97%** auto category market dominance
- **12 Professional** segments analyzed

---

## 🔍 Business Intelligence Insights

<div align="center">
<table>
<tr>
<td width="50%">

### 🎯 Top Findings
- **Auto products** drive 97% of revenue (₹755,567)
- **Female customers** contribute 64% of sales
- **26-35 age group** represents highest revenue segment
- **Andhra Pradesh** leads geographic performance
- **Government professionals** show highest spending

</td>
<td width="50%">

### 📈 Strategic Opportunities
- Premium auto accessories expansion
- Targeted female demographic campaigns
- Regional expansion in high-performing states
- B2B partnerships with government sector
- Southern zone market penetration

</td>
</tr>
</table>
</div>

---

## 🛠️ Technology Stack

<div align="center">
<table>
<tr>
<td align="center" width="100">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="50" height="50"/><br>
<strong>Python</strong><br>
<em>Core Language</em>
</td>
<td align="center" width="100">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" width="50" height="50"/><br>
<strong>Pandas</strong><br>
<em>Data Analysis</em>
</td>
<td align="center" width="100">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" width="50" height="50"/><br>
<strong>NumPy</strong><br>
<em>Numerical Computing</em>
</td>
<td align="center" width="100">
<img src="https://matplotlib.org/stable/_static/logo2_compressed.svg" width="50" height="50"/><br>
<strong>Matplotlib</strong><br>
<em>Visualization</em>
</td>
<td align="center" width="100">
<img src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" width="50" height="50"/><br>
<strong>Seaborn</strong><br>
<em>Statistical Plots</em>
</td>
<td align="center" width="100">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg" width="50" height="50"/><br>
<strong>Jupyter</strong><br>
<em>Development</em>
</td>
</tr>
</table>
</div>

---

## 📈 Data Analysis Workflow

### 1. 🧹 Data Engineering
```python
# Data cleaning and preprocessing
df = pd.read_csv('Diwali Sales Data.csv')
df.dropna(subset=['Amount'], inplace=True)
df['State'] = df['State'].str.strip()  # Standardize state names

# Statistical analysis and aggregation
category_analysis = df.groupby('Product_Category')['Amount'].sum().sort_values(ascending=False)
demographic_insights = df.groupby(['Gender', 'Age Group'])['Amount'].sum()
geographic_performance = df.groupby('State')['Amount'].sum()

# Professional data visualization
plt.figure(figsize=(12, 8))
sns.barplot(data=df, x='Product_Category', y='Amount')
plt.title('Revenue Distribution by Product Category')
plt.show()

Chart Type,Analysis Focus,Key Insights,Preview
🍩 Doughnut Chart,Product Categories,Auto dominance (97%),"<img src=""https://github.com/mohamed-khalid3/diwali_sales_analysis/raw/main/assets/product_category_sales.png"" alt=""Product Categories"">"
📊 Bar Chart,Geographic Performance,Andhra Pradesh leads,"<img src=""https://github.com/mohamed-khalid3/diwali_sales_analysis/raw/main/assets/state_sales.png"" alt=""Geographic Performance"">"
🥧 Pie Chart,Gender Demographics,Female majority (64%),"<img src=""https://github.com/mohamed-khalid3/diwali_sales_analysis/raw/main/assets/gender_sales.png"" alt=""Gender Demographics"">"
📈 Bar Chart,Age Group Segmentation,26-35 peak segment,"<img src=""https://github.com/mohamed-khalid3/diwali_sales_analysis/raw/main/assets/age_group_sales.png"" alt=""Age Group Segmentation"">"
📊 Horizontal Bar,Professional Segments,Government sector top,"<img src=""https://github.com/mohamed-khalid3/diwali_sales_analysis/raw/main/assets/occupation_sales.png"" alt=""Professional Segments"">"
🍩 Doughnut Chart,Regional Zones,Southern zone dominance,"<img src=""https://github.com/mohamed-khalid3/diwali_sales_analysis/raw/main/assets/zone_sales.png"" alt=""Regional Zones"">"

Python 3.8+
Jupyter Notebook

# Clone the repository
git clone https://github.com/mohamed-khalid3/diwali_sales_analysis.git

# Navigate to project directory
cd diwali_sales_analysis

# Install required packages
pip install pandas numpy matplotlib seaborn jupyter

# Launch Jupyter Notebook
jupyter notebook

# Open Diwali_Sales_Analysis.ipynb
# Run all cells to reproduce the analysis

diwali_sales_analysis/
│
├── 📊 Diwali_Sales_Analysis.ipynb    # Main analysis notebook
├── 📋 Diwali Sales Data.csv          # Dataset
├── 🌐 index.html                     # Interactive portfolio
├── 📝 README.md                      # Project documentation
└── 📁 assets/                        # Supporting files
    ├── diwali_banner.jpg             # Project banner
    ├── gender_sales.png              # Gender sales visualization
    ├── age_group_sales.png           # Age group sales visualization
    ├── state_sales.png               # State sales visualization
    ├── occupation_sales.png          # Occupation sales visualization
    ├── product_category_sales.png    # Product category sales visualization
    ├── zone_sales.png                # Zone sales visualization
    └── scripts.js                    # Interactive features

Column,Description,Data Type
User_ID,Unique customer identifier,Integer
Cust_name,Customer name,String
Product_ID,Product identifier,String
Gender,Customer gender (M/F),String
Age Group,Customer age bracket,String
Age,Customer age,Integer
Marital_Status,Marital status (0/1),Integer
State,Customer location,String
Zone,Geographic zone,String
Occupation,Professional category,String
Product_Category,Product type,String
Orders,Number of orders,Integer
Amount,Purchase amount (₹),Float


🎓 Learning Outcomes
Technical Skills Demonstrated

Data Cleaning: Handling missing values and data standardization
Exploratory Data Analysis: Statistical analysis and pattern recognition
Data Visualization: Professional charts with Matplotlib/Seaborn
Business Intelligence: Translating data into actionable insights
Python Proficiency: Advanced pandas operations and data manipulation

Business Skills Applied

Market Analysis: Customer segmentation and behavior analysis
Strategic Planning: Data-driven business recommendations
Performance Metrics: KPI identification and tracking
Presentation: Professional data storytelling and visualization


📈 Results & Impact
Quantitative Outcomes

Revenue Analysis: ₹779K total revenue processed and categorized
Market Segmentation: 7 age groups and 12 professional segments analyzed
Geographic Insights: 9 states and 5 zones performance mapped
Customer Profiling: Gender and demographic patterns identified

Business Value

Strategic Direction: Clear recommendations for market focus
Growth Opportunities: Identified high-potential customer segments
Operational Efficiency: Data-driven inventory and marketing decisions
Competitive Advantage: Deep customer behavior understanding


🔗 Connect & Explore

<img src="https://img.shields.io/badge/Portfolio-FF6B6B?style=for-the-badge&#x26;logo=github&#x26;logoColor=white" alt="Portfolio">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&#x26;logo=linkedin&#x26;logoColor=white" alt="LinkedIn">
<img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&#x26;logo=gmail&#x26;logoColor=white" alt="Email">
Ready to transform your data into competitive advantage?

Let's discuss how advanced analytics can drive your business growth


🙏 Acknowledgments

Data Source: Synthetic dataset created for educational purposes
Inspiration: Real-world e-commerce analytics challenges
Tools: Python data science ecosystem and community libraries
Tutorial: YouTube Tutorial
