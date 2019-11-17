<template>
  <d-card class="card-small h-100">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
      <div class="block-handle"></div>
    </d-card-header>

    <d-card-body class="pt-0">
      <d-row class="border-bottom py-2 bg-light">

        <!-- Date Range -->
        <d-col col sm="9" lg="8" md="9" class="d-flex mb-2 mb-sm-0">
          <d-input-group size="sm" class="date-range d-flex justify-content-left">
            <d-datepicker v-model="dateRange.from" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" placeholder="Start Date" typeable small />
            <d-datepicker v-model="dateRange.to" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" placeholder="End Date" typeable small />
            <d-input-group-text slot="append">
              <i class="material-icons">&#xE916;</i>
            </d-input-group-text>
          </d-input-group>
        </d-col>

        <!-- View Full Report -->
        <d-col col sm="4">
          <d-button size="sm" class="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">View Full Report &rarr;</d-button>
        </d-col>

      </d-row>

      <!-- Legend & Chart -->
      <div ref="legend"></div>
      <canvas height="120" ref="canvas" style="max-width: 100% !important;"></canvas>

    </d-card-body>
  </d-card>
</template>

<script>
import Chart from '../../utils/chart';
const d = new Date();

const defaultChartData = {
  labels: Array.from(new Array(30), (_, i) => (d.getTime() + 360*(i+1))),
  datasets: [{
    label: 'Time',
    fill: 'start',
    // data: [500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420, 1200, 960, 1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200, 3200, 3400, 2910, 3100, 4250],
    data: Array.from(new Array(30), (_, i) => (Math.floor(Math.random() * 40) + 78)),
    backgroundColor: 'rgba(0,123,255,0.1)',
    borderColor: 'rgba(0,123,255,1)',
    pointBackgroundColor: '#ffffff',
    pointHoverBackgroundColor: 'rgb(0,123,255)',
    borderWidth: 1.5,
    pointRadius: 0,
    pointHoverRadius: 3,
  }],
};

export default {
  name: 'graphs',
  props: {
    title: {
      type: String,
      default: 'Glucose',
    },
    chartData: {
      type: Object,
      default() {
        return defaultChartData;
      },
    },
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
    };
  },
  mounted() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: 'top',
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3,
          },
          point: {
            radius: 0,
          },
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
            // unit: 'hour',
            displayFormats: {
              'hour': 'HH:MM:SS',
            }},
            gridLines: false,
            ticks: {
              callback(tick, index) {
                // Jump every 7 values on the X axis labels to avoid clutter.
                // return index % 7 !== 0 ? '' : tick;
                return tick;
              },
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'mg/dL'
            },
            ticks: {
              steps: 20,
              stepValue: 5,
              max: 70,
              min: 170,
              callback(tick) {
                if (tick === 0) {
                  return tick;
                }
                // Format the amounts using Ks for thousands.
                return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
              },
            },
          }],
        },
        hover: {
          mode: 'nearest',
          intersect: false,
        },
        tooltips: {
          custom: false,
          mode: 'nearest',
          intersect: false,
        },
      },
      ...this.chartOptions,
    };

    const BlogUsersOverview = new Chart(this.$refs.canvas, {
      type: 'LineWithLine',
      data: this.chartData,
      options: chartOptions,
    });

      // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[this.chartData.datasets[0].data.length - 1]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
    setInterval(() => {
      BlogUsersOverview.data.labels.push(BlogUsersOverview.data.labels[BlogUsersOverview.data.labels.length-1]+360);
      BlogUsersOverview.data.labels.shift()
      BlogUsersOverview.data.datasets[0].data.push(Math.floor(Math.random() * 40) + 78);
      BlogUsersOverview.data.datasets[0].data.shift()
      BlogUsersOverview.update();
    },4000);
  },
};
</script>

