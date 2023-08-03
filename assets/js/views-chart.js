$(document).ready(function() {
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: 'Views on YouTube',
        data: [76888 , 85791, 63807, 73144, 131962],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 });