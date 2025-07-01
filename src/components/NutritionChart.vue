<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

export default {
  name: 'NutritionChart',
  props: {
    chartData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      chartInstance: null,
      isInitialized: false
    }
  },
  mounted() {
    this.initializeChart()
  },
  watch: {
    chartData: {
      handler(newData, oldData) {
        if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
          this.updateChart()
        }
      },
      deep: true,
      immediate: false
    }
  },
  beforeUnmount() {
    this.destroyChart()
  },
  methods: {
    async initializeChart() {
      try {
        Chart.register(...registerables)
        await this.$nextTick()
        
        if (!this.$refs.chartCanvas) {
          console.warn('Canvas not available for chart')
          return
        }
        
        this.renderChart()
        this.isInitialized = true
      } catch (error) {
        console.error('Error initializing chart:', error)
      }
    },

    renderChart() {
      if (!this.$refs.chartCanvas) return
      
      const ctx = this.$refs.chartCanvas.getContext('2d')
      this.destroyChart()
      
      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: this.prepareChartData(),
        options: this.getChartOptions()
      })
    },

    getChartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                size: 12,
                weight: '500'
              }
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(34, 197, 94, 0.5)',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
            callbacks: {
              title: (context) => {
                const date = new Date(context[0].label)
                return date.toLocaleDateString('fr-FR', { 
                  weekday: 'long',
                  day: 'numeric', 
                  month: 'long' 
                })
              },
              label: (context) => {
                if (context.datasetIndex === 0) {
                  return `Nombre de repas: ${context.parsed.y}`
                } else if (context.datasetIndex === 1) {
                  return `Équilibre: ${Math.round(context.parsed.y)}%`
                } else {
                  return `Qualité: ${Math.round(context.parsed.y)}%`
                }
              }
            }
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            beginAtZero: true,
            max: 5,
            title: {
              display: true,
              text: 'Nombre de repas',
              color: '#6B7280',
              font: {
                size: 12,
                weight: '600'
              }
            },
            ticks: {
              stepSize: 1,
              color: '#9CA3AF',
              font: {
                size: 11
              }
            },
            grid: {
              color: 'rgba(156, 163, 175, 0.1)',
              drawBorder: false
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Pourcentage (%)',
              color: '#6B7280',
              font: {
                size: 12,
                weight: '600'
              }
            },
            ticks: {
              stepSize: 25,
              color: '#9CA3AF',
              font: {
                size: 11
              },
              callback: function(value) {
                return value + '%'
              }
            },
            grid: {
              drawOnChartArea: false,
              drawBorder: false
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date',
              color: '#6B7280',
              font: {
                size: 12,
                weight: '600'
              }
            },
            ticks: {
              color: '#9CA3AF',
              font: {
                size: 11
              },
              maxRotation: 45,
              minRotation: 0
            },
            grid: {
              color: 'rgba(156, 163, 175, 0.1)',
              drawBorder: false
            }
          }
        },
        animation: {
          duration: 750,
          easing: 'easeInOutQuart'
        }
      }
    },

    prepareChartData() {
      if (!this.chartData || this.chartData.length === 0) {
        return {
          labels: [],
          datasets: []
        }
      }

      const labels = this.chartData.map(item => {
        const date = new Date(item.date)
        return date.toLocaleDateString('fr-FR', { 
          day: 'numeric', 
          month: 'short'
        })
      })

      const mealCounts = this.chartData.map(item => item.meal_count)
      const balanceScores = this.chartData.map(item => item.balance_score)
      const qualityScores = this.chartData.map(item => item.avg_quality * 33.3)

      return {
        labels,
        datasets: [
          {
            label: 'Nombre de repas',
            data: mealCounts,
            yAxisID: 'y',
            type: 'bar',
            backgroundColor: 'rgba(34, 197, 94, 0.3)',
            borderColor: 'rgba(34, 197, 94, 1)',
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
            maxBarThickness: 40
          },
          {
            label: 'Équilibre nutritionnel',
            data: balanceScores,
            yAxisID: 'y1',
            type: 'line',
            fill: false,
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(59, 130, 246, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3
          },
          {
            label: 'Qualité moyenne',
            data: qualityScores,
            yAxisID: 'y1',
            type: 'line',
            fill: false,
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(16, 185, 129, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            borderDash: [5, 5]
          }
        ]
      }
    },

    updateChart() {
      if (!this.chartInstance || !this.isInitialized) {
        this.renderChart()
        return
      }

      try {
        const newData = this.prepareChartData()
        this.chartInstance.data = newData
        this.chartInstance.update('active')
      } catch (error) {
        console.error('Error updating chart:', error)
        this.renderChart()
      }
    },

    destroyChart() {
      if (this.chartInstance) {
        try {
          this.chartInstance.destroy()
        } catch (error) {
          console.warn('Error destroying chart:', error)
        } finally {
          this.chartInstance = null
        }
      }
    },

    refresh() {
      this.$nextTick(() => {
        this.updateChart()
      })
    },

    resize() {
      if (this.chartInstance) {
        this.chartInstance.resize()
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 300px;
  padding: 10px;
}

canvas {
  max-height: 100%;
  max-width: 100%;
}

@media (max-width: 768px) {
  .chart-container {
    min-height: 250px;
    padding: 5px;
  }
}

@media (max-width: 480px) {
  .chart-container {
    min-height: 200px;
  }
}
</style>