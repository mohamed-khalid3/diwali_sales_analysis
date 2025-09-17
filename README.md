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
