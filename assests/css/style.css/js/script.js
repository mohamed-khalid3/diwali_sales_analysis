// app.js
// Loads data/diwali_cleaned.csv and renders charts/table
// Requires: PapaParse (for CSV), Plotly, jQuery & DataTables

const CSV_PATH = 'data/diwali_cleaned.csv'; // create this using the python script below

let DATA = []; // array of objects
let table = null;

// helper: format INR
function fmtINR(v){ return v ? '₹' + Number(v).toLocaleString('en-IN') : '₹0' }

// load CSV then init
Papa.parse(CSV_PATH, {
  header: true,
  download: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: function(results){
    DATA = results.data.map(r => {
      // ensure fields exist and normalize
      return {
        User_ID: r.User_ID,
        Cust_name: r.Cust_name,
        Product_ID: r.Product_ID,
        Gender: r.Gender || 'Unknown',
        Age_Group: r['Age Group'] || r.Age_Group || 'Unknown',
        Age: r.Age || null,
        State: (r.State || '').replace(/\uFFFD/g,'').trim() || 'Unknown',
        Occupation: r.Occupation || 'Unknown',
        Product_Category: r.Product_Category || r['Product_Category'] || 'Unknown',
        Orders: Number(r.Orders) || 0,
        Amount: Number(r.Amount) || 0
      };
    });
    renderAll();
  }
});

function aggSum(arr, key, val='Amount') {
  const m = {};
  arr.forEach(d => {
    const k = d[key] || 'Unknown';
    m[k] = (m[k] || 0) + (Number(d[val]) || 0);
  });
  return Object.keys(m).map(k => ({key: k, value: m[k]})).sort((a,b)=>b.value-a.value);
}

function renderAll(){
  // KPIs:
  const totalTx = DATA.length;
  const totalRev = DATA.reduce((s,d)=>s+(d.Amount||0),0);
  const ageAgg = aggSum(DATA, 'Age_Group');
  const occAgg = aggSum(DATA, 'Occupation');

  document.getElementById('kpi-transactions').innerText = totalTx.toLocaleString();
  document.getElementById('kpi-revenue').innerText = fmtINR(totalRev.toFixed(0));
  document.getElementById('kpi-top-age').innerText = (ageAgg[0] && ageAgg[0].key) || '—';
  document.getElementById('kpi-top-occu').innerText = (occAgg[0] && occAgg[0].key) || '—';

  renderCategoryChart();
  renderAgePie();
  renderStateBar();
  renderScatter();
  populateTable();
  populateFilters();
}

// Category revenue bar chart
function renderCategoryChart(){
  const cat = aggSum(DATA, 'Product_Category');
  const labels = cat.map(d=>d.key);
  const values = cat.map(d=>d.value);

  const trace = { x: labels, y: values, type: 'bar', marker:{color: 'rgba(255,126,95,0.9)'} };
  const layout = { title: 'Revenue by Product Category', margin:{t:40,r:20}, xaxis:{tickangle:-30}, yaxis:{title:'Revenue (₹)'} };
  Plotly.newPlot('chart-category', [trace], layout, {responsive:true});
}

// Age group pie
function renderAgePie(){
  const age = aggSum(DATA, 'Age_Group');
  const labels = age.map(d=>d.key);
  const values = age.map(d=>d.value);
  const trace = { labels, values, type:'pie', hole:0.35 };
  const layout = { title: 'Revenue share by Age Group', margin:{t:40} };
  Plotly.newPlot('chart-age', [trace], layout, {responsive:true});
}

// State bar (top 12)
function renderStateBar(){
  const state = aggSum(DATA, 'State').slice(0,12).reverse();
  const labels = state.map(d=>d.key);
  const values = state.map(d=>d.value);
  const trace = { x: values, y: labels, orientation:'h', type:'bar', marker:{color:'rgba(54,162,235,0.85)'} };
  const layout = { title:'Top states by revenue', margin:{t:30,l:120}, xaxis:{title:'Revenue (₹)'} };
  Plotly.newPlot('chart-state', [trace], layout, {responsive:true});
}

// scatter: orders vs amount per transaction (sample)
function renderScatter(){
  const x = DATA.map(d=>d.Orders);
  const y = DATA.map(d=>d.Amount);
  const text = DATA.map(d=>`${d.Cust_name} | ${d.Product_Category} | ${d.State}`);
  const trace = { x, y, text, mode:'markers', type:'scatter', marker:{size:8, opacity:0.7, color:'rgba(153,102,255,0.8)'} };
  const layout = { title:'Orders vs Amount (txn-level)', margin:{t:40}, xaxis:{title:'Orders'}, yaxis:{title:'Amount (₹)'} };
  Plotly.newPlot('chart-scatter',[trace],layout,{responsive:true});
}

// populate table using DataTables
function populateTable(){
  if (table) table.destroy();
  const tbody = $('#data-table tbody').empty();
  DATA.forEach(d => {
    tbody.append('<tr>' +
      `<td>${d.User_ID}</td>` +
      `<td>${escapeHtml(d.Cust_name)}</td>` +
      `<td>${d.Product_ID}</td>` +
      `<td>${d.Gender}</td>` +
      `<td>${d.Age_Group}</td>` +
      `<td>${d.Age || ''}</td>` +
      `<td>${escapeHtml(d.State)}</td>` +
      `<td>${escapeHtml(d.Occupation)}</td>` +
      `<td>${escapeHtml(d.Product_Category)}</td>` +
      `<td>${d.Orders}</td>` +
      `<td>${d.Amount}</td>` +
      '</tr>');
  });
  table = $('#data-table').DataTable({
    pageLength: 8,
    lengthMenu: [8, 16, 32],
    columns: [
      null,null,null,null,null,null,null,null,null,null,null
    ]
  });
}

function populateFilters(){
  const states = [...new Set(DATA.map(d=>d.State).filter(Boolean))].sort();
  const selState = document.getElementById('filter-state');
  selState.innerHTML = '<option value="">All</option>' + states.map(s=>`<option value="${s}">${s}</option>`).join('');
  const ages = [...new Set(DATA.map(d=>d.Age_Group).filter(Boolean))].sort();
  const selAge = document.getElementById('filter-age');
  selAge.innerHTML = '<option value="">All</option>' + ages.map(s=>`<option value="${s}">${s}</option>`).join('');

  $('#filter-state').on('change', applyFilters);
  $('#filter-age').on('change', applyFilters);
  $('#reset-filters').on('click', function(){ $('#filter-state').val(''); $('#filter-age').val(''); applyFilters(); });
}

function applyFilters(){
  const st = $('#filter-state').val();
  const ag = $('#filter-age').val();
  const filtered = DATA.filter(d => (st ? d.State===st : true) && (ag ? d.Age_Group===ag : true));
  // update charts with filtered data
  // for simplicity reuse global functions with filtered data by temporarily swapping DATA
  const backup = DATA;
  DATA = filtered;
  renderCategoryChart();
  renderAgePie();
  renderStateBar();
  renderScatter();
  DATA = backup;
  // update table
  if (table) {
    table.rows().remove();
    filtered.forEach(d => table.row.add([
      d.User_ID, d.Cust_name, d.Product_ID, d.Gender, d.Age_Group, d.Age, d.State, d.Occupation, d.Product_Category, d.Orders, d.Amount
    ]));
    table.draw();
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; });
}
