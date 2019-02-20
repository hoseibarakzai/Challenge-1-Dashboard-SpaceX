var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Speed", "No speed"],
        datasets: [{
            label: "Snelheid km per seconde",
            backgroundColor: ['rgb(252, 5, 5)', 'rgb(255, 255, 255)'],
            data: [1100, 600],
        }]
    },

    // Configuration options go here
    options: {}
});