<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

export default {
  name: 'SleepChart',
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
        // Vérifier s'il y a vraiment un changement
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
        // Enregistrer les composants Chart.js
        Chart.register(...registerables)
        
        // Attendre que le canvas soit disponible
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
      
      // Détruire l'instance existante
      this.destroyChart()
      
      // Créer la nouvelle instance
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
            borderColor: 'rgba(99, 102, 241, 0.5)',
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
                  const hours = Math.floor(context.parsed.y)
                  const minutes = Math.round((context.parsed.y - hours) * 60)
                  return `Durée: ${hours}h ${minutes.toString().padStart(2, '0')}m`
                } else {
                  return `Qualité: ${context.parsed.y.toFixed(1)}/4`
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
            max: 12,
            title: {
              display: true,
              text: 'Heures de sommeil',
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
              },
              callback: function(value) {
                return value + 'h'
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
            min: 0,
            max: 4,
            title: {
              display: true,
              text: 'Qualité (1-4)',
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
              },
              callback: function(value) {
                const labels = { 1: 'Excellent', 2: 'Bon', 3: 'Moyen', 4: 'Mauvais' }
                return labels[value] || value
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
        elements: {
          point: {
            radius: 4,
            hoverRadius: 8,
            hitRadius: 10
          },
          line: {
            tension: 0.3,
            borderWidth: 2
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

      // Préparer les labels (dates)
      const labels = this.chartData.map(item => {
        const date = new Date(item.date)
        return date.toLocaleDateString('fr-FR', { 
          day: 'numeric', 
          month: 'short'
        })
      })

      // Préparer les données de durée
      const durationData = this.chartData.map(item => {
        return item.avg_duration > 0 ? (item.avg_duration / 60).toFixed(1) : null
      })

      // Préparer les données de qualité
      const qualityData = this.chartData.map(item => {
        return item.avg_quality > 0 ? item.avg_quality.toFixed(1) : null
      })

      return {
        labels,
        datasets: [
          {
            label: 'Durée de sommeil',
            data: durationData,
            yAxisID: 'y',
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            borderColor: 'rgba(99, 102, 241, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(99, 102, 241, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: 'rgba(99, 102, 241, 1)',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2,
            tension: 0.3,
            spanGaps: true
          },
          {
            label: 'Qualité du sommeil',
            data: qualityData,
            yAxisID: 'y1',
            fill: false,
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(16, 185, 129, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: 'rgba(16, 185, 129, 1)',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2,
            tension: 0.3,
            spanGaps: true
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
        // Mettre à jour les données
        const newData = this.prepareChartData()
        this.chartInstance.data = newData
        
        // Animer la mise à jour
        this.chartInstance.update('active')
      } catch (error) {
        console.error('Error updating chart:', error)
        // En cas d'erreur, recréer le graphique
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

    // Méthode publique pour forcer la mise à jour
    refresh() {
      this.$nextTick(() => {
        this.updateChart()
      })
    },

    // Méthode pour redimensionner le graphique
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

/* Responsive adjustments */
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