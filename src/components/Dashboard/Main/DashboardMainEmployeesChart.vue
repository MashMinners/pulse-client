<template>
  <div class="card flex justify-center">
    <prime-chart type="pie" :data="chartData" :options="chartOptions"  />
  </div>
</template>

<script>
export default {
  name: "DashboardMainEmployeesChart",
  data() {
    return {
      chartData: null,
      chartOptions: null
    };
  },
  mounted() {
    this.chartData = this.setChartData();
    this.chartOptions = this.setChartOptions();
  },
  methods: {
    setChartData() {
      const documentStyle = getComputedStyle(document.body);

      return {
        labels: ['Положительные', 'Отрицательные'],
        datasets: [
          {
            data: [54, 46],
            backgroundColor: [documentStyle.getPropertyValue('--p-green-500'), documentStyle.getPropertyValue('--p-red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--p-green-400'), documentStyle.getPropertyValue('--p-red-400')]
          }
        ]
      };
    },
    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      return {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor
            }
          }
        }
      };
    }
  }
};
</script>

<style scoped>

</style>