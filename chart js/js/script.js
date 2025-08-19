const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهرشنبه', 'پنج شنبه'],
        datasets: [{
            label: 'روز هفته',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#cc65fe',
                '#36a2eb',
                '#cc65fe',
                '#ffce56',
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    plugins: {
        colors: {
            forceOverride: true
        }
    }
});