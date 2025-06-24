<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js'

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend)

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: true },
    tooltip: { enabled: true }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script> 