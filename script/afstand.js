var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["01/01", "02/01", "03/01", "04/01", "05/01", "04/01"],
        datasets: [{
            label: "In kilometers x 100",
            borderColor: 'rgb(41, 128, 185)',
            backgroundColor: 'rgb(174, 214, 241)',
            data: [12, 15, 16, 20, 25, 27, 28],
        }]
    },

    // Configuration options go here
    options: {}
});