var ctx = document.getElementById('myPieChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Vlees", "Groente", "Vis",],
        datasets: [{
            label: "Aantal Voedsel",
            backgroundColor: ['rgb(252, 5, 5)','rgb(8, 173, 38)','rgb(6, 172, 232)'],
            borderColor: ['rgb(127, 179, 213)'],
            data: [63, 20, 45]
        }]
    },

    // Configuration options go here
    options: {}
});