<template>
  <div>
    <canvas ref="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import {  getCurrentInstance, onMounted, ref } from "vue";

export default {
  setup() {
    const lineChart = ref(null);
    const instance = getCurrentInstance();

    onMounted(() => {
      if (!lineChart.value || !instance) return;

      const Chart = instance.appContext.config.globalProperties.$_Chart

      new Chart(lineChart.value, {
        type: "line",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });


    return { lineChart };
  },
};
</script>

<style scoped>

</style>