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
