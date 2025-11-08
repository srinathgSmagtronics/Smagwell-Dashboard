async function fetchData() {
  const res = await fetch('/get_data');
  const data = await res.json();

  document.getElementById('patientName').textContent = data.name;
  document.getElementById('admissionDate').textContent = data.admissionDate;
  document.getElementById('typeOfCure').textContent = data.typeOfCure;
  document.getElementById('criticality').textContent = data.criticality;

  const meds = document.getElementById('medicationsList');
  meds.innerHTML = "";
  data.medications.forEach(m => {
    const li = document.createElement('li');
    li.textContent = m;
    meds.appendChild(li);
  });

  document.getElementById('insurance').textContent = data.insurance;
  document.getElementById('approval').textContent = data.approval;
  document.getElementById('diet').textContent = data.diet;
  document.getElementById('testStatus').textContent = data.testStatus;

  document.getElementById('spo2').textContent = data.spo2;
  document.getElementById('temp').textContent = data.temp;
  document.getElementById('hr').textContent = data.hr;
  document.getElementById('rr').textContent = data.rr;
  document.getElementById('notes').textContent = data.notes;
}

setInterval(fetchData, 5000);
fetchData();
