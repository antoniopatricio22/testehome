function loadPage(page) {
  document.getElementById("content-frame").src = page;
}

// JS para o Gráfico
var chart = JSC.chart('chartDiv', {
  debug: true,
  type: 'line',
  legend_visible: false,
  defaultCultureName: "pt-BR",
  xAxis: { 
    crosshair_enabled: true,
    scale: { type: 'time' }
  },
  yAxis: { 
    orientation: 'opposite', formatString: 'c' 
  },
  defaultSeries: {
    
    firstPoint_label_text: '<b>%seriesName</b>',
    defaultPoint_marker: {
      type: 'circle',
      size: 8,
      fill: '#FF0000',
      outline: { width: 2, color: '#FFFFFF' }
    }
  },
  title_label_text: 'Arrecadação X Meta',
  series: [
    {
      name: 'Meta',
      points: [
        ['1/1/2020', 40.00],
        ['2/1/2020', 40.00],
        ['3/1/2020', 40.00],
        ['4/1/2020', 40.00],
        ['5/1/2020', 40.00],
        ['6/1/2020', 40.00]
      ]
    },
    {
      name: 'Valor Arrecadado',
      points: [
        ['1/1/2020', 20.00],
        ['2/1/2020', 40.00],
        ['3/1/2020', 80.00],
        ['4/1/2020', 80.00],
        ['5/1/2020', 95.00],
        ['6/1/2020', 116.00]
      ]
    },
  ]
});

// JS para o exportar os Dados - não funcional ainda.
function exportToCSV() {
  var csvContent = "data:text/csv;charset=utf-8,";

  // Adding series names as header
  csvContent += "Date,Meta,Valor Arrecadado\n";

  // Adding data points
  chart.options.series.forEach(function(series) {
    series.points.forEach(function(point) {
      csvContent += point[0] + "," + point[1] + ",";
      csvContent += "\n";
    });
  });

  // Create a Blob and initiate download
  var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  saveAs(blob, "chart_data.csv");
}

// Attach click event to export button
document.getElementById("exportButton").addEventListener("click", exportToCSV());
