window.onload = function () {
    var ctx = document.getElementById('mood-chart').getContext('2d');
    window.myPie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Happy',
                'Meh',
                'Unhappy'
            ],
            datasets: [{
                label: 'Mood Counts',
                data: data,
                backgroundColor: [
                    'rgb(72,199,142)',
                    'rgb(255,224,138)',
                    'rgb(241,70,104)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            },
        },
    });


};
